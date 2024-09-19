import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DrMrOvds.js";const i="/Unisky-Blog/assets/TCP1-CwBFmmSA.png",t="/Unisky-Blog/assets/TCP2-BenyjtjN.png",l={},r=e(`<h1 id="技术岗面试题小结-一" tabindex="-1"><a class="header-anchor" href="#技术岗面试题小结-一"><span>技术岗面试题小结（一）</span></a></h1><p>研发岗的面试问题可能不会局限于某个编程语言或者某个技术栈，有时候也会去问一些比较杂项的东西，所以这里单开一个系列来汇总这些杂项题目。可能会包括一些智力题和应用题</p><h2 id="_1-大量数据-寻找重复次数最高的k条数据" tabindex="-1"><a class="header-anchor" href="#_1-大量数据-寻找重复次数最高的k条数据"><span>1.大量数据，寻找重复次数最高的k条数据</span></a></h2><p>大量数据可能是10G以上的级别，而内存大小有限，这意味着不可能通过内存一次性完成提取，必须要有分治法的思想。</p><ul><li><p>法1：将数据分成若干份，每份单独排序，然后利用堆（或优先队列）的数据结构对这些若干小数据进行多路的外部排序，将最终的排序结果保存到大文件中。遍历排序后的文件，逐条读取数据并进行计数，读取到不同数据时确定上一组数据的频数，并用大小为k的大顶堆进行储存，遍历完成后，堆内留下的k个数据就是我们需要的数据。</p></li><li><p>法2：数据类型不多、重复率高的话，可以分成多个小文件，分别逐条读取数据通过Hash统计</p></li></ul><p>大数据类型的题有很多（例如排序、统计、查询等），但是无一例外都需要借助分治法的思想</p><h2 id="_2-25匹马-5个跑道-如何在最少的比赛次数内找出最快的三匹" tabindex="-1"><a class="header-anchor" href="#_2-25匹马-5个跑道-如何在最少的比赛次数内找出最快的三匹"><span>2. 25匹马，5个跑道，如何在最少的比赛次数内找出最快的三匹</span></a></h2><p>排除法：</p><p>首先将25匹马分为ABCDE五组，每组5匹马，分别进行一次比赛。假设A1速度大于A2速度，A1速度大于B1速度，以此类推。</p><p>五组完成后可以淘汰掉每组的最后两匹马（必定不属于前三快），剩下的马是A-E 1-3共15匹</p><p>然后将每组最快的马放在一起比赛一次，淘汰掉末两位，同时这两匹马所对应的组全部被淘汰。同时也可以确定全部马里最快的那一匹马是A1，因此可以认为B1最快也只能排第二，C1最快只能排第3，所以可以排除B3,C2,C3，最后只留下六匹马为A1,A2,A3,B1,B2,C1,因为A1已经确定是最快的了，所以只需要让剩下五匹马再比赛一次选前二快的即可。</p><p>所以最小次数为7次</p><h2 id="_3-linux如何找10天内修改过的文件" tabindex="-1"><a class="header-anchor" href="#_3-linux如何找10天内修改过的文件"><span>3. Linux如何找10天内修改过的文件</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-mtime</span> <span class="token parameter variable">-10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中find指令用于在后面指定的目录下搜索文件，-mtime表示x天内被修改的文件，同样的，-mmin表示x分钟内修改过的文件</p><p>相似的，如果需要找5分钟内修改过的文件，有下列命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-mmin</span> <span class="token parameter variable">-5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-一个圆桌-ab两个人放硬币-a先放-先放不下的人输-a如何放才能保证赢" tabindex="-1"><a class="header-anchor" href="#_4-一个圆桌-ab两个人放硬币-a先放-先放不下的人输-a如何放才能保证赢"><span>4. 一个圆桌，AB两个人放硬币，A先放，先放不下的人输，A如何放才能保证赢</span></a></h2><p>A第一下放在中心，之后每一下都放在与B放的位置中心对称的地方。</p><h2 id="_5-8个球-1个球比其他7个重-如何用一个天平秤2次找出重的球" tabindex="-1"><a class="header-anchor" href="#_5-8个球-1个球比其他7个重-如何用一个天平秤2次找出重的球"><span>5. 8个球，1个球比其他7个重，如何用一个天平秤2次找出重的球</span></a></h2><p>选其中六个平均放在天平两边，若平衡，则说明重的球在剩余两个里面，称出即可。若不平衡，将偏重一侧的三个球取出，选择任意两个称第二次，若第二次平衡，则剩余的那个球是重球，若第二次不平衡，则直接称出。</p><h2 id="_6-熟悉linux版本和命令" tabindex="-1"><a class="header-anchor" href="#_6-熟悉linux版本和命令"><span>6. 熟悉Linux版本和命令</span></a></h2><p>Linux有许多常见开发版本，如Ubuntu，Solaris，Oracle，CentOS等等</p><p>常用的文件操作命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ls</span> 显示目录内文件信息
<span class="token builtin class-name">cd</span> 改变当前终端所在目录
<span class="token builtin class-name">pwd</span> 显示所在目录
<span class="token function">touch</span> 创建文件
<span class="token function">mkdir</span> 创建文件夹  
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> 递归创建文件目录
<span class="token function">rm</span> 删除单个文件 
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> 无提示地强制递归删除目录（r为递归，f强制删除，慎用）
<span class="token function">rmdir</span> 删除空文件夹
<span class="token function">mv</span> 移动、剪切粘贴、重命名
<span class="token function">cp</span> 复制
<span class="token function">cat</span> 在终端上显示文件信息
<span class="token function">head</span> 显示前几行 
<span class="token function">tail</span> 显示后几行
<span class="token function">find</span> 查找文件
<span class="token function">grep</span> 根据字符串搜索文件
<span class="token function">mount</span> 挂载文件系统
<span class="token function">umount</span> 取消挂载
<span class="token function">man</span> 帮助文档
<span class="token function">chmod</span> 修改权限
<span class="token function">chown</span> 修改文件所有者
<span class="token function">unzip</span> 解压zip文件
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> 解压tar文件
<span class="token function">tar</span> <span class="token parameter variable">-czvf</span> 压缩tar文件
<span class="token function">nano</span> / <span class="token function">vim</span> / <span class="token function">vi</span> 文件编辑器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用系统管理命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl 管理系统服务
systemctl + start/stop/restart/enable/disable/status 具体操作
<span class="token function">top</span> 实时显示系统进程
<span class="token function">ps</span> 显示当前进程快照
<span class="token function">ps</span> aux 列出所有进程
<span class="token function">kill</span> PID 终止进程
<span class="token function">killall</span> process_name 终止所有指定名称进程
<span class="token function">uname</span> 显示系统信息
<span class="token function">shutdown</span> now 关机 <span class="token parameter variable">-r</span> 重启
<span class="token function">reboot</span> 重启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用网络管理命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ifconfig/ip 显示配置网络接口
<span class="token function">ping</span> 测试连接
<span class="token function">netstat</span> 显示网络连接、路由表、接口统计信息等信息
<span class="token function">curl</span> 使用协议传输数据
<span class="token function">wget</span> 从网络下载文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-熟悉git-使用终端-不使用ide" tabindex="-1"><a class="header-anchor" href="#_7-熟悉git-使用终端-不使用ide"><span>7.熟悉git（使用终端，不使用IDE）</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> init 初始化git仓库
<span class="token function">git</span> clone 克隆远程仓库
<span class="token function">git</span> <span class="token function">add</span> 增加文件到暂存区
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;&quot;</span> 提交修改
<span class="token function">git</span> status 查看工作目录和暂存区状态
<span class="token function">git</span> log 查看提交记录
<span class="token function">git</span> branch 查看分支列表 <span class="token parameter variable">-d</span> 删除分支
<span class="token function">git</span> checkout 切换分支
<span class="token function">git</span> merge 合并分支
<span class="token function">git</span> pull 拉取远程仓库更新
<span class="token function">git</span> push 本地提交推送到远程仓库
<span class="token function">git</span> remote 管理远程仓库 <span class="token function">add</span> 添加 <span class="token parameter variable">-v</span> 查看 remove 删除
<span class="token function">git</span> fetch 从远程仓库更新，不合并
<span class="token function">git</span> rebase 将当前分支修改应用到另一个分支基础
<span class="token function">git</span> <span class="token function">diff</span> 查看未缓存或未提交文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-死锁的四个必要条件" tabindex="-1"><a class="header-anchor" href="#_8-死锁的四个必要条件"><span>8.死锁的四个必要条件</span></a></h2><p>发生死锁必须同时满足四个必要条件：</p><ul><li><strong>互斥(Mutual Exclusion)：</strong> 资源在任意时刻只能被一个进程使用，不能同时被多个进程使用</li><li><strong>持有并等待(Hold and Wati)：</strong> 一个进程已经持有至少一个资源，并且正在等待被其他进程占用的资源</li><li><strong>不剥夺(No Preemption)：</strong> 资源只能由进程自主释放，不能强行剥夺</li><li><strong>环路等待(Circular Wait)：</strong> 进程之间的资源等待情况形成环路</li></ul><h2 id="_9-银行家算法" tabindex="-1"><a class="header-anchor" href="#_9-银行家算法"><span>9.银行家算法</span></a></h2><p>常见的操作系统避免资源占用死锁的算法 简单来说，就是分配资源前试探判断分配后的资源安全性，若不安全则取消分配，若存在一个安全序列则处于安全状态</p><p>用Process(P)表示进程，P[i]表示第i个进程 用Max表示进程最大需求资源数量 用<strong>Available</strong>表示（初始）空闲资源数量（可用于分配） 用Work表示（实时）空闲资源数量 用<strong>Allocation</strong>表示已为该进程分配资源数量，Allocation[i]对应P[i] 用<strong>Need</strong>表示该进程还需要的资源数量（即Need = Max-Allocation），Need[i]对应P[i]</p><p>注意，上述都是向量，为简单描述，比较大小为比较每一对应位上数值的大小。 例如[1,2,3,4]&lt;[2,3,4,5]</p><p>银行家算法判断安全性的方法如下： 开始令Work=Avaiable 在进程P[i]中找到未完成的进程且Need[i]&lt;=Work，完成该进程，将该进程占用的资源释放， 令Work+=Allocation[i] 反复寻找，直到所有进程都能完成，视为找到了安全序列 若无法找到满足条件的进程，则视为不安全，不能分配资源</p><h2 id="_10-tcp报文格式、三次握手与四次挥手" tabindex="-1"><a class="header-anchor" href="#_10-tcp报文格式、三次握手与四次挥手"><span>10.TCP报文格式、三次握手与四次挥手</span></a></h2><h3 id="tcp报文" tabindex="-1"><a class="header-anchor" href="#tcp报文"><span>TCP报文</span></a></h3><p>TCP报文有如下关键数据信息</p><figure><img src="`+i+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><ul><li><strong>Source Port / Destination Port (src/dst)</strong>: 各16bit, 源端口号与目的端口号</li><li><strong>Sequence Number (seq)</strong>: 标识该段报文数据在整体数据流中的次序，保证顺序传输</li><li><strong>Acknowledge Number (ack)</strong>: 确认序列号,接收端下次应当收到数据的序号，ACK=1时有效</li><li>Offset: 偏移</li><li>TCP标识:各1bit设置为0或1</li><li><ul><li>URG: 紧急指针域是否有效(保证TCP连接不中断)</li></ul></li><li><ul><li><strong>ACK</strong>: 应答域是否有效(即ack有效)</li></ul></li><li><ul><li>PSH: Push操作是否有效(跳过缓冲区)</li></ul></li><li><ul><li>RST: 是否连接复位请求</li></ul></li><li><ul><li><strong>SYN</strong>: 同步序号，用于握手建立连接</li></ul></li><li>Maximum Segment Life(MSL): TCP参数，一个分段在网络中的最长生存时间</li></ul><hr><figure><img src="'+t+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手"><span>三次握手</span></a></h3><p>Client为客户端，Server为服务端，握手从<strong>Client</strong>开始发起</p><p><strong>第一次握手：</strong> 客户端发送请求报文，服务端保持监听，设置<strong>SYN=1, seq=x</strong>，客户端进入SYN_SENT状态，等待下一次握手。</p><p><strong>第二次握手：</strong> 服务端接收到报文，进行确认。发送另一条确认报文，设置<strong>SYN=1, seq=y, ack=x+1</strong>。服务端进入SYN_RCVD状态，等待下一次握手。</p><p><strong>第三次握手：</strong> 客户端接收到确认报文，向服务端进行回复。设置<strong>ack=y+1</strong>，至此三次握手完成。双方进入ESTABLISHED状态。</p><h3 id="数据传输" tabindex="-1"><a class="header-anchor" href="#数据传输"><span>数据传输</span></a></h3><p>数据传输阶段Client和Server轮流向对方发送报文</p><p>Client-&gt;Server：<strong>seq=x+1, ack=y+1</strong> Server-&gt;Client: <strong>ack=x+2</strong></p><h3 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手"><span>四次挥手</span></a></h3><p>完成数据传输后，客户端和服务端其中一端发出断开连接的请求,假设客户端要求中断连接。</p><p><strong>第一次挥手：</strong> 客户端发送断连请求FIN(关闭请求)报文，设置<strong>FIN=1, seq=x+2, ack=y+1</strong>(除FIN外保持数据传输格式)。客户端进入FIN_WAIT_1状态。</p><p><strong>第二次挥手：</strong> 服务端接收到断连请求报文，发送默认的ACK回复报文，设置<strong>ack=x+3</strong>,客户端接收到后进入FIN_WAIT_2状态。</p><p><strong>第三次挥手：</strong> 像第一次挥手一样，服务端同样发送断连请求FIN报文，设置<strong>FIN=1, seq=y+1</strong>,服务端进入LAST_ACK状态，等待关闭。</p><p><strong>第四次挥手：</strong> 客户端接收到FIN报文后，发送默认的ACK回复报文，设置<strong>ack=y+2</strong>。服务端接收到报文后关闭连接，客户端<strong>等待2MSL</strong>(两倍的最大分段生存期)，若未收到回复则同样关闭连接。</p>',60),c=[r];function o(p,d){return s(),a("div",null,c)}const m=n(l,[["render",o],["__file","Interview1.html.vue"]]),g=JSON.parse('{"path":"/posts/study/Interview1.html","title":"技术岗面试题小结（一）","lang":"zh-CN","frontmatter":{"date":"2024-08-21T00:00:00.000Z","category":["学习"],"tag":["面试"],"star":false,"sticky":false,"sidebar":false,"breadcrumb":false,"footer":39,"description":"技术岗面试题小结（一） 研发岗的面试问题可能不会局限于某个编程语言或者某个技术栈，有时候也会去问一些比较杂项的东西，所以这里单开一个系列来汇总这些杂项题目。可能会包括一些智力题和应用题 1.大量数据，寻找重复次数最高的k条数据 大量数据可能是10G以上的级别，而内存大小有限，这意味着不可能通过内存一次性完成提取，必须要有分治法的思想。 法1：将数据分成...","head":[["meta",{"property":"og:url","content":"https://xavoric.github.io/Unisky-Blog/Unisky-Blog/posts/study/Interview1.html"}],["meta",{"property":"og:site_name","content":"宙宇空"}],["meta",{"property":"og:title","content":"技术岗面试题小结（一）"}],["meta",{"property":"og:description","content":"技术岗面试题小结（一） 研发岗的面试问题可能不会局限于某个编程语言或者某个技术栈，有时候也会去问一些比较杂项的东西，所以这里单开一个系列来汇总这些杂项题目。可能会包括一些智力题和应用题 1.大量数据，寻找重复次数最高的k条数据 大量数据可能是10G以上的级别，而内存大小有限，这意味着不可能通过内存一次性完成提取，必须要有分治法的思想。 法1：将数据分成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-06T08:08:36.000Z"}],["meta",{"property":"article:author","content":"Unisky"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2024-08-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-06T08:08:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"技术岗面试题小结（一）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-06T08:08:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Unisky\\"}]}"]]},"headers":[{"level":2,"title":"1.大量数据，寻找重复次数最高的k条数据","slug":"_1-大量数据-寻找重复次数最高的k条数据","link":"#_1-大量数据-寻找重复次数最高的k条数据","children":[]},{"level":2,"title":"2. 25匹马，5个跑道，如何在最少的比赛次数内找出最快的三匹","slug":"_2-25匹马-5个跑道-如何在最少的比赛次数内找出最快的三匹","link":"#_2-25匹马-5个跑道-如何在最少的比赛次数内找出最快的三匹","children":[]},{"level":2,"title":"3. Linux如何找10天内修改过的文件","slug":"_3-linux如何找10天内修改过的文件","link":"#_3-linux如何找10天内修改过的文件","children":[]},{"level":2,"title":"4. 一个圆桌，AB两个人放硬币，A先放，先放不下的人输，A如何放才能保证赢","slug":"_4-一个圆桌-ab两个人放硬币-a先放-先放不下的人输-a如何放才能保证赢","link":"#_4-一个圆桌-ab两个人放硬币-a先放-先放不下的人输-a如何放才能保证赢","children":[]},{"level":2,"title":"5. 8个球，1个球比其他7个重，如何用一个天平秤2次找出重的球","slug":"_5-8个球-1个球比其他7个重-如何用一个天平秤2次找出重的球","link":"#_5-8个球-1个球比其他7个重-如何用一个天平秤2次找出重的球","children":[]},{"level":2,"title":"6. 熟悉Linux版本和命令","slug":"_6-熟悉linux版本和命令","link":"#_6-熟悉linux版本和命令","children":[]},{"level":2,"title":"7.熟悉git（使用终端，不使用IDE）","slug":"_7-熟悉git-使用终端-不使用ide","link":"#_7-熟悉git-使用终端-不使用ide","children":[]},{"level":2,"title":"8.死锁的四个必要条件","slug":"_8-死锁的四个必要条件","link":"#_8-死锁的四个必要条件","children":[]},{"level":2,"title":"9.银行家算法","slug":"_9-银行家算法","link":"#_9-银行家算法","children":[]},{"level":2,"title":"10.TCP报文格式、三次握手与四次挥手","slug":"_10-tcp报文格式、三次握手与四次挥手","link":"#_10-tcp报文格式、三次握手与四次挥手","children":[{"level":3,"title":"TCP报文","slug":"tcp报文","link":"#tcp报文","children":[]},{"level":3,"title":"三次握手","slug":"三次握手","link":"#三次握手","children":[]},{"level":3,"title":"数据传输","slug":"数据传输","link":"#数据传输","children":[]},{"level":3,"title":"四次挥手","slug":"四次挥手","link":"#四次挥手","children":[]}]}],"git":{"createdTime":1725610116000,"updatedTime":1725610116000,"contributors":[{"name":"Xavoric","email":"3024008334@qq.com","commits":1}]},"readingTime":{"minutes":8.62,"words":2585},"filePathRelative":"posts/study/Interview1.md","localizedDate":"2024年8月21日","excerpt":"\\n<p>研发岗的面试问题可能不会局限于某个编程语言或者某个技术栈，有时候也会去问一些比较杂项的东西，所以这里单开一个系列来汇总这些杂项题目。可能会包括一些智力题和应用题</p>\\n<h2>1.大量数据，寻找重复次数最高的k条数据</h2>\\n<p>大量数据可能是10G以上的级别，而内存大小有限，这意味着不可能通过内存一次性完成提取，必须要有分治法的思想。</p>\\n<ul>\\n<li>\\n<p>法1：将数据分成若干份，每份单独排序，然后利用堆（或优先队列）的数据结构对这些若干小数据进行多路的外部排序，将最终的排序结果保存到大文件中。遍历排序后的文件，逐条读取数据并进行计数，读取到不同数据时确定上一组数据的频数，并用大小为k的大顶堆进行储存，遍历完成后，堆内留下的k个数据就是我们需要的数据。</p>\\n</li>\\n<li>\\n<p>法2：数据类型不多、重复率高的话，可以分成多个小文件，分别逐条读取数据通过Hash统计</p>\\n</li>\\n</ul>","autoDesc":true}');export{m as comp,g as data};