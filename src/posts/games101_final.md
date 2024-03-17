---
date: 2024-03-18
category:
  - 图形学
tag:
  - Unity
  - N-S方程
star: false
sticky: false
sidebar: false
breadcrumb: false

footer: I will reach the star.
---

# 计算机图形学大作业

## 选题：基于二维网格的流体动力学仿真

### 1、题目内容

编写一个二维的流体动力学模拟程序，以估算Navier-Stokes 方程下不可压缩的均匀流体的行为。

### 2、题目分析

&emsp;&emsp;题目的描述很简单，我们需要关注的有两个部分，第一个是使用二维网格的方法进行模拟，第二个是需要对二维下的N-S方程进行相应的求解实现。
&emsp;&emsp;在N-S方程之前我们先看无粘性不可压缩流体下的欧拉方程：

$$
\frac{\partial{V}}{\partial{t}}+V(\triangledown ·V)=-\frac{1}{\rho}\triangledown p +f
$$

$$\triangledown ·V=0$$

&emsp;&emsp;该公式描述了对于不可压缩流体来说，其速度的散度为零，然后我们通过预测校正步方法来对欧拉公式进行求解。
&emsp;&emsp;首先我们用上一时刻速度$v_0$和已知的压迫力$F_0$,按照下列的公式求出中间速度$v^*$

$$\frac{v^*-v_0}{\Delta t} = F_0$$

&emsp;&emsp;此时的散度并不为0，所以我们还需要进一步计算消除其散度，然后我们再通过如下方程求解得到下一时刻的速度$v_1$

$$\frac{v_1-v^*}{\Delta t}=-\frac{1}{\rho}\triangledown p$$

&emsp;&emsp;此时得到的速度则是变化后满足欧拉方程的速度

&emsp;&emsp;$Navier-Stokes$公式实质是在无粘性不可压缩流体的欧拉方程上增加了粘度项如下

$$\frac{\mu}{\rho}\triangledown ^2 V$$

&emsp;&emsp;其中记$\nu=\frac{\mu}{\rho}$,则$\nu$被记为粘性系数（粘度），粘度越大说明产生阻碍运动的粘性力也越大

&emsp;&emsp;在实际的计算上，这一粘度项的增加使得我们需要再增加一次粘度力的计算，从欧拉方程下求出的$v^*$开始，再通过对下列方程继续求解的计算操作来计算第二个中间速度$v^{**}$

$$\frac{v^{**}-v^*}{\Delta t} = \nu(\Delta v^*)$$

&emsp;&emsp;然后按照和欧拉公式相同的方法，求解下列方程求解得到在粘性力作用下的无散度最终速度$v_1$

$$\frac{v_1-v^{**} }{\Delta t}=-\frac{1}{\rho}\triangledown p$$

### 3、具体实现

&emsp;&emsp;我们为二维网格设置两个场，分别是密度场和速度场，每一格中储存了该格的密度信息和速度（uv分量形式）信息。为了直观表示，我们选择使用rgb的通道分量大小来间接储存密度信息（和速度信息）。此处二维网格可以直接理解为由像素点组成的网格，我们直接根据像素点的相应数据进行计算模拟，这里使用Unity的shader来进行实现

&emsp;&emsp;在本项目中，共使用了6个shader来实现整体的计算过程，其中Splat用于实现流体的产生，不属于计算的主要部分。Advection用于实现基本的流体扩散，读取速度场信息来对相应像素进行着色(同时对速度进行耗散处理，避免速度一直存在无法模拟流动)。Divergence用于根据速度场信息来计算散度信息，此处使用高斯散度公式以及平均数据来计算散度。Viscosity是粘度相关的信息处理。Pressure用于处理压迫力的相关信息，主要是压力场信息的迭代。Substract是用来通过压力场信息来消除中间散度的部分。
&emsp;&emsp;在整体的运作下，一轮计算主要包括以下几个步骤(仅包括流体模拟相关)：

1、通过Advection Shader实现速度场的迭代计算。

2、使用Viscosity计算粘度影响得到的中间速度（场），此处设置$\nu=0.05$

3、使用Divergence和中间速度来计算散度值

4、然后根据散度和中间速度在Pressure中计算压力

5、消除散度，在Substract利用散度场和压力场计算得无散度的速度场

6、最后再用最终速度来对密度(对于该项目的可视化来说是展现的颜色RGB通道值)进行相应的计算处理

### 4、实现结果

单色模拟：
<VidStack src="/assets/videos/fluidSimulation1.mp4" />

双色模拟：
<VidStack src="/assets/videos/fluidSimulation2.mp4" />

