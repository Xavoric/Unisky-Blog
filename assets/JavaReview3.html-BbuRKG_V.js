import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,e as s}from"./app-DrMrOvds.js";const t={},l=s(`<h1 id="java基础复习-线程与并发" tabindex="-1"><a class="header-anchor" href="#java基础复习-线程与并发"><span>Java基础复习-线程与并发</span></a></h1><p>这方面接触的不多，希望不会出错误</p><h2 id="_1-线程、进程和协程的区别" tabindex="-1"><a class="header-anchor" href="#_1-线程、进程和协程的区别"><span>1.线程、进程和协程的区别</span></a></h2><p>进程是操作系统在内存中分配的一个应用程序，进程之间互相独立，有独立的内存空间。</p><p>一条进程可以包括多条线程，线程是执行任务的主要单位，同进程内的所有线程共享该进程的数据，可以并发执行，需要同步机制避免线程对数据操作的冲突。</p><p>线程不共享的资源包括：栈、寄存器、线程局部存储、线程信息等</p><p>一条线程可以拥有多条协程，协程调度由程序（用户）来执行，而进程线程都由内核调度。Java没有实现协程（Kilim框架模拟实现了协程），Python中通过yield/send或async/await实现协程。</p><h2 id="_2-线程的6个状态" tabindex="-1"><a class="header-anchor" href="#_2-线程的6个状态"><span>2.线程的6个状态</span></a></h2><p>在java中，一个线程共有六种状态，状态之间可以切换</p><ul><li>1.new 线程刚被创建，没有开始运行的状态</li><li>2.runnable （与running状态合并）调用start()方法后进入就绪/运行状态，注意start()方法会用一个新的线程去调用run()方法</li><li>3.blocked 线程阻塞状态，释放CPU（如试图获取锁时被其他线程占用）</li><li>4.waiting 等待状态，无限等待，通过wait(),join()等方法实现，需要被其他线程唤醒或者中断</li><li>5.time_waiting 超时等待，为等待状态增加限时，sleep()或者带参数的wait()方法均可以实现</li><li>6.terminated 线程执行完毕</li></ul><h2 id="_3-创建线程的4个方法" tabindex="-1"><a class="header-anchor" href="#_3-创建线程的4个方法"><span>3.创建线程的4个方法</span></a></h2><ul><li>1.继承Thread类并重写run()方法创建线程</li><li>2.实现Runnable接口并实现run()方法创建线程</li><li>3.实现Callable接口并实现call()方法创建线程</li><li>4.通过框架如Executor创建</li></ul><h2 id="_4-线程间的通信" tabindex="-1"><a class="header-anchor" href="#_4-线程间的通信"><span>4.线程间的通信</span></a></h2><p>通过Object类提供的wait()、notify()、notifyAll()可以实现进程间的通信，wait()方法会释放锁，notify()不会，这两个方法需要配合synchronized关键词的修饰。</p><h2 id="_5-runnable和callable的区别是什么" tabindex="-1"><a class="header-anchor" href="#_5-runnable和callable的区别是什么"><span>5.Runnable和Callable的区别是什么</span></a></h2><ul><li>1.接口方法不同，一个是run()方法，另一个是call()方法</li><li>2.call()方法存在返回值,run()不存在返回值</li><li>3.Callable允许抛出异常，Runnable无法继续向上抛异常</li></ul><h2 id="_6-volatile关键词是什么" tabindex="-1"><a class="header-anchor" href="#_6-volatile关键词是什么"><span>6.volatile关键词是什么</span></a></h2><p>可以用于修饰变量，用于保证该变量对于所有线程可见（线程对变量的修改可以立刻被其他线程发现），同时禁止了jvm内部的指令重排（防止指令执行顺序发生混乱）</p><p><strong>volatile</strong>不具备原子性，仍然可能会导致多个线程对数据操作的冲突（例如线程刚读取完数据，在写入之前发生阻塞）</p><h2 id="_7-synchronized" tabindex="-1"><a class="header-anchor" href="#_7-synchronized"><span>7.synchronized</span></a></h2><p>synchronized是一个同步关键词，可以修饰类、变量、普通方法、静态方法和代码块。具有原子性、可见性和有序性，实质上是一种悲观锁和非公平锁，会导致阻塞。</p><p>1.修饰普通方法： 对于当前对象的实例，一个线程需要获得锁才能够进入这部分同步代码，完成这部分代码后线程会自动释放锁</p><p>2.修饰代码块：与修饰方法类似，主要是作用范围不同，当一个线程访问这部分代码块时会拥有锁，其他进程试图访问该对象的这部分代码时会被阻塞，不影响访问其他非同步代码块</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code> <span class="token keyword">public</span>  <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.修饰类：一个线程访问这个类时，这个类的所有对象都会被锁定，即这个类的所有方法会共享同一把锁</p><p>4.修饰静态方法：与修饰类的情况相似，对于这个静态方法，这个类的所有实例化对象占用同一把锁</p><p>5.注意同一个对象的所有synchronized方法是共享锁的</p><h2 id="_8-乐观锁与悲观锁" tabindex="-1"><a class="header-anchor" href="#_8-乐观锁与悲观锁"><span>8.乐观锁与悲观锁</span></a></h2><p>都是并发情况下锁的设计思想</p><h3 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁"><span>乐观锁</span></a></h3><ul><li>默认其余人不会同时修改数据，不对数据加锁。</li><li>在执行更新时判断数据是否被修改，若已经被修改则拒绝操作。</li><li><strong>自旋CAS算法实现</strong>，包括三个操作数，待读写内存位置V，比较预期值A，准备写入的新值B，若V=A，则将A更新为B，否则<em>自旋</em>保持重试直到成功</li><li><strong>版本号机制实现</strong>，在数据中增加一个version版本数据，数据被修改时版本+1，更新数据时需要判断当前版本号与读取版本号是否一致</li><li>乐观锁本身不加锁，仅仅只是进行判断。适用场景限制较高，适用于竞争不激烈的情况</li></ul><h3 id="悲观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁"><span>悲观锁</span></a></h3><p>默认别人会同时修改数据，操作数据时对数据加锁，直到完成后才释放锁。 适用于竞争激烈的场合，加锁和释放锁需要消耗额外资源，并且锁的存在影响并发性能</p><h2 id="_9-进程间的通信方式有哪些" tabindex="-1"><a class="header-anchor" href="#_9-进程间的通信方式有哪些"><span>9.进程间的通信方式有哪些</span></a></h2><ul><li>1.管道：数据单向流动，亲缘进程之间的通信</li><li>2.命名管道：与管道类似，管道具有名称，可在文件系统中访问，对亲缘关系无要求</li><li>3.信号：异步通信方式，处理异步事件</li><li>4.共享内存：允许进程共享同一块物理内存，速度快，需要考虑并发和同步</li><li>5.信号量：控制进程对资源的访问，常用于同步和互斥，保护共享内存数据</li><li>6.消息队列MQ：进程之间传递结构化的数据</li><li>7.套接字Socket：允许不同主机间访问，实现分布式系统和网络通信</li></ul><h2 id="_10-创建多线程的方式" tabindex="-1"><a class="header-anchor" href="#_10-创建多线程的方式"><span>10.创建多线程的方式</span></a></h2><ul><li>直接创建多个单线程，见前面创建线程方式</li><li>通过<strong>线程池</strong>创建，可以提高响应速度，降低资源损耗，便于线程管理</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">ExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ThreadPoolExecutor</span> threadPoolExecutor <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">)</span>executorService<span class="token punctuation">;</span>
        <span class="token comment">//设置线程池的属性</span>
        threadPoolExecutor<span class="token punctuation">.</span><span class="token function">setCorePoolSize</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        threadPoolExecutor<span class="token punctuation">.</span><span class="token function">setMaximumPoolSize</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * executorService.execute(Runnable commd);
         * executorService.submit(Callable commd)：可用FutureTask获取结果;
         */</span>
        executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ThreadTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ThreadTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>线程池包括如下参数：</p><table><thead><tr><th style="text-align:center;">线程池参数</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">corePoolSize</td><td style="text-align:center;">核心线程数，维护最小线程数量</td></tr><tr><td style="text-align:center;">maximumPoolSize</td><td style="text-align:center;">最大线程数，池内允许最大线程数量</td></tr><tr><td style="text-align:center;">keepAliveTime</td><td style="text-align:center;">空闲线程的存活时长</td></tr><tr><td style="text-align:center;">unit</td><td style="text-align:center;">指定keepAliveTime时间的单位</td></tr><tr><td style="text-align:center;">workQueue</td><td style="text-align:center;">指定线程工作队列类型</td></tr><tr><td style="text-align:center;">threadFactory</td><td style="text-align:center;">指定线程工厂</td></tr><tr><td style="text-align:center;">handler</td><td style="text-align:center;">指定超出线程和工作队列时的处理策略</td></tr></tbody></table>`,40),i=[l];function p(c,o){return a(),e("div",null,i)}const d=n(t,[["render",p],["__file","JavaReview3.html.vue"]]),h=JSON.parse('{"path":"/posts/study/JavaReview3.html","title":"Java基础复习-线程与并发","lang":"zh-CN","frontmatter":{"date":"2024-05-16T00:00:00.000Z","category":["学习"],"tag":["面试","Java"],"star":false,"sticky":false,"sidebar":false,"breadcrumb":false,"footer":"I will reach the star.","description":"Java基础复习-线程与并发 这方面接触的不多，希望不会出错误 1.线程、进程和协程的区别 进程是操作系统在内存中分配的一个应用程序，进程之间互相独立，有独立的内存空间。 一条进程可以包括多条线程，线程是执行任务的主要单位，同进程内的所有线程共享该进程的数据，可以并发执行，需要同步机制避免线程对数据操作的冲突。 线程不共享的资源包括：栈、寄存器、线程局...","head":[["meta",{"property":"og:url","content":"https://xavoric.github.io/Unisky-Blog/Unisky-Blog/posts/study/JavaReview3.html"}],["meta",{"property":"og:site_name","content":"宙宇空"}],["meta",{"property":"og:title","content":"Java基础复习-线程与并发"}],["meta",{"property":"og:description","content":"Java基础复习-线程与并发 这方面接触的不多，希望不会出错误 1.线程、进程和协程的区别 进程是操作系统在内存中分配的一个应用程序，进程之间互相独立，有独立的内存空间。 一条进程可以包括多条线程，线程是执行任务的主要单位，同进程内的所有线程共享该进程的数据，可以并发执行，需要同步机制避免线程对数据操作的冲突。 线程不共享的资源包括：栈、寄存器、线程局..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-06T08:08:36.000Z"}],["meta",{"property":"article:author","content":"Unisky"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-05-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-06T08:08:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础复习-线程与并发\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-06T08:08:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Unisky\\"}]}"]]},"headers":[{"level":2,"title":"1.线程、进程和协程的区别","slug":"_1-线程、进程和协程的区别","link":"#_1-线程、进程和协程的区别","children":[]},{"level":2,"title":"2.线程的6个状态","slug":"_2-线程的6个状态","link":"#_2-线程的6个状态","children":[]},{"level":2,"title":"3.创建线程的4个方法","slug":"_3-创建线程的4个方法","link":"#_3-创建线程的4个方法","children":[]},{"level":2,"title":"4.线程间的通信","slug":"_4-线程间的通信","link":"#_4-线程间的通信","children":[]},{"level":2,"title":"5.Runnable和Callable的区别是什么","slug":"_5-runnable和callable的区别是什么","link":"#_5-runnable和callable的区别是什么","children":[]},{"level":2,"title":"6.volatile关键词是什么","slug":"_6-volatile关键词是什么","link":"#_6-volatile关键词是什么","children":[]},{"level":2,"title":"7.synchronized","slug":"_7-synchronized","link":"#_7-synchronized","children":[]},{"level":2,"title":"8.乐观锁与悲观锁","slug":"_8-乐观锁与悲观锁","link":"#_8-乐观锁与悲观锁","children":[{"level":3,"title":"乐观锁","slug":"乐观锁","link":"#乐观锁","children":[]},{"level":3,"title":"悲观锁","slug":"悲观锁","link":"#悲观锁","children":[]}]},{"level":2,"title":"9.进程间的通信方式有哪些","slug":"_9-进程间的通信方式有哪些","link":"#_9-进程间的通信方式有哪些","children":[]},{"level":2,"title":"10.创建多线程的方式","slug":"_10-创建多线程的方式","link":"#_10-创建多线程的方式","children":[]}],"git":{"createdTime":1725610116000,"updatedTime":1725610116000,"contributors":[{"name":"Xavoric","email":"3024008334@qq.com","commits":1}]},"readingTime":{"minutes":5.68,"words":1703},"filePathRelative":"posts/study/JavaReview3.md","localizedDate":"2024年5月16日","excerpt":"\\n<p>这方面接触的不多，希望不会出错误</p>\\n<h2>1.线程、进程和协程的区别</h2>\\n<p>进程是操作系统在内存中分配的一个应用程序，进程之间互相独立，有独立的内存空间。</p>\\n<p>一条进程可以包括多条线程，线程是执行任务的主要单位，同进程内的所有线程共享该进程的数据，可以并发执行，需要同步机制避免线程对数据操作的冲突。</p>\\n<p>线程不共享的资源包括：栈、寄存器、线程局部存储、线程信息等</p>\\n<p>一条线程可以拥有多条协程，协程调度由程序（用户）来执行，而进程线程都由内核调度。Java没有实现协程（Kilim框架模拟实现了协程），Python中通过yield/send或async/await实现协程。</p>","autoDesc":true}');export{d as comp,h as data};