import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e as t}from"./app-DrMrOvds.js";const e={},p=t(`<h1 id="java基础复习-spring" tabindex="-1"><a class="header-anchor" href="#java基础复习-spring"><span>Java基础复习-Spring</span></a></h1><p>这一部分主要是Spring和Bean相关概念的复习</p><h2 id="_1-spring的两大特性" tabindex="-1"><a class="header-anchor" href="#_1-spring的两大特性"><span>1.Spring的两大特性</span></a></h2><p>分别是AOP（面向切面编程）和IOC（依赖反转）</p><p>其中AOP是基于面向对象开发思想的一种补充，将业务代码中重复的部分封装为切面，实现这部分内容与业务代码的分离，降低代码的重复性和耦合度。</p><p>IOC是原本由我们去创建、管理的对象交由Spring容器进行管理，由Spring借助反射机制对Bean进行管理，使得对象的生命周期（从创建到销毁）不需要我们手动去管理。</p><h2 id="_2-spring中aop的实现方式" tabindex="-1"><a class="header-anchor" href="#_2-spring中aop的实现方式"><span>2.Spring中AOP的实现方式</span></a></h2><p>动态代理实现，包括JDK动态代理和CGLib动态代理</p><p>JDK动态代理要求相应的方法实现了某个接口，会自动生成相应的代理类，并借助反射机制去调用方法，类似于方法的拦截器，我们可以在执行方法之前或者之后作出相应功能的补充，所以我们就可以对其进行进一步的功能增强。</p><p>CGLib是继承方法对应的类，要求类不被final关键词修饰，通过继承的方式在子类去增加我们需要的功能。</p><p>Spring切面的工作称为Advise通知，包括五种类型，Spring中有相应的注解：</p><ul><li>@Before，在目标方法调用之前调用通知功能</li><li>@After，在目标方法调用完毕以后调用通知</li><li>@AfterReturning, 目标方法执行成功后执行通知</li><li>@AfterThrowing，目标方法抛出异常后调用通知</li><li>@Around，即Before+After</li></ul><h2 id="_3-bean的生命周期" tabindex="-1"><a class="header-anchor" href="#_3-bean的生命周期"><span>3.Bean的生命周期</span></a></h2><p>Bean的生命周期大致可以分为五个阶段：</p><ul><li>实例化：通过new方法或者反射机制创建Bean对象，并分配内存空间</li><li>设置属性：Bean的依赖注入和装配</li><li>初始化：Bean被创建后执行初始化操作，比如设置属性值等。</li><li>使用：Bean对象可以在程序中被使用</li><li>销毁：Bean对象不再使用以后，将其销毁并释放内存，可以通过配置文件指定</li></ul><h2 id="_4-spring的自动装配" tabindex="-1"><a class="header-anchor" href="#_4-spring的自动装配"><span>4.Spring的自动装配</span></a></h2><p>Spring自动装配有三种模式，byType的根据类型装配，byName根据名称装配，以及constructor根据构造函数装配</p><p>byType，寻找依赖类型相同的Bean注入，需要借助setter方法注入，需要在XML文件中指定要注入的Bean类型</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userDao<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.zejian.spring.springIoc.dao.impl.UserDaoImpl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- autowire-candidate=&quot;false&quot; 过滤该类型 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userDao2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autowire-candidate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.zejian.spring.springIoc.dao.impl.UserDaoImpl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- byType 根据类型自动装配userDao--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autowire</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>byType<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.zejian.spring.springIoc.service.impl.UserServiceImpl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>byName，将属性名与bean名称匹配，若找到则注入依赖</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userDao<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.zejian.spring.springIoc.dao.impl.UserDaoImpl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userDao2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.zejian.spring.springIoc.dao.impl.UserDaoImpl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- byName 根据名称自动装配，找到UserServiceImpl名为 userDao属性并注入--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autowire</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>byName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.zejian.spring.springIoc.service.impl.UserServiceImpl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>constructor，优先进行参数匹配，再进行名称优先匹配</p><h2 id="_5-spring注入方式" tabindex="-1"><a class="header-anchor" href="#_5-spring注入方式"><span>5.Spring注入方式</span></a></h2><p>Spring常见的注入方式包括构造器注入、setter方法，注解注入等</p><p>构造器注入通过@Autowired注解指定使用的构造方法，是最适用的注入方法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AService</span> <span class="token punctuation">{</span>
    <span class="token class-name">BService</span> bService<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">AService</span><span class="token punctuation">(</span><span class="token class-name">BService</span> bService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bService <span class="token operator">=</span> bService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setter方法注入，需要严格为成员对象提供set方法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BService</span> <span class="token punctuation">{</span>
    <span class="token class-name">AService</span> aService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setaService</span><span class="token punctuation">(</span><span class="token class-name">AService</span> aService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>aService <span class="token operator">=</span> aService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注解方式注入</p><p>适用于我们自己写的对象实例，使用@Autowired或者@Resource注解，前者默认优先按照类型装配，后者默认优先按照名称装配</p><h2 id="_6-spring事务" tabindex="-1"><a class="header-anchor" href="#_6-spring事务"><span>6.Spring事务</span></a></h2><p>编程式事务：通过编程的方式管理事务，这种方式带来了很大的灵活性，但很难维护。</p><p>声明式事务：将事务管理代码从业务方法中分离出来，通过aop进行封装。Spring声明式事务使得我们无需要去处理获得连接、关闭连接、事务提交和回滚等这些操作。使用 @Transactional 注解开启声明式事务</p>`,33),i=[p];function o(l,c){return n(),s("div",null,i)}const d=a(e,[["render",o],["__file","JavaReview5.html.vue"]]),k=JSON.parse('{"path":"/posts/study/JavaReview5.html","title":"Java基础复习-Spring","lang":"zh-CN","frontmatter":{"date":"2024-05-17T00:00:00.000Z","category":["学习"],"tag":["面试","Java"],"star":false,"sticky":false,"sidebar":false,"breadcrumb":false,"footer":"I will reach the star.","description":"Java基础复习-Spring 这一部分主要是Spring和Bean相关概念的复习 1.Spring的两大特性 分别是AOP（面向切面编程）和IOC（依赖反转） 其中AOP是基于面向对象开发思想的一种补充，将业务代码中重复的部分封装为切面，实现这部分内容与业务代码的分离，降低代码的重复性和耦合度。 IOC是原本由我们去创建、管理的对象交由Spring容...","head":[["meta",{"property":"og:url","content":"https://xavoric.github.io/Unisky-Blog/Unisky-Blog/posts/study/JavaReview5.html"}],["meta",{"property":"og:site_name","content":"宙宇空"}],["meta",{"property":"og:title","content":"Java基础复习-Spring"}],["meta",{"property":"og:description","content":"Java基础复习-Spring 这一部分主要是Spring和Bean相关概念的复习 1.Spring的两大特性 分别是AOP（面向切面编程）和IOC（依赖反转） 其中AOP是基于面向对象开发思想的一种补充，将业务代码中重复的部分封装为切面，实现这部分内容与业务代码的分离，降低代码的重复性和耦合度。 IOC是原本由我们去创建、管理的对象交由Spring容..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-06T08:08:36.000Z"}],["meta",{"property":"article:author","content":"Unisky"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-05-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-06T08:08:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础复习-Spring\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-06T08:08:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Unisky\\"}]}"]]},"headers":[{"level":2,"title":"1.Spring的两大特性","slug":"_1-spring的两大特性","link":"#_1-spring的两大特性","children":[]},{"level":2,"title":"2.Spring中AOP的实现方式","slug":"_2-spring中aop的实现方式","link":"#_2-spring中aop的实现方式","children":[]},{"level":2,"title":"3.Bean的生命周期","slug":"_3-bean的生命周期","link":"#_3-bean的生命周期","children":[]},{"level":2,"title":"4.Spring的自动装配","slug":"_4-spring的自动装配","link":"#_4-spring的自动装配","children":[]},{"level":2,"title":"5.Spring注入方式","slug":"_5-spring注入方式","link":"#_5-spring注入方式","children":[]},{"level":2,"title":"6.Spring事务","slug":"_6-spring事务","link":"#_6-spring事务","children":[]}],"git":{"createdTime":1725610116000,"updatedTime":1725610116000,"contributors":[{"name":"Xavoric","email":"3024008334@qq.com","commits":1}]},"readingTime":{"minutes":3.48,"words":1045},"filePathRelative":"posts/study/JavaReview5.md","localizedDate":"2024年5月17日","excerpt":"\\n<p>这一部分主要是Spring和Bean相关概念的复习</p>\\n<h2>1.Spring的两大特性</h2>\\n<p>分别是AOP（面向切面编程）和IOC（依赖反转）</p>\\n<p>其中AOP是基于面向对象开发思想的一种补充，将业务代码中重复的部分封装为切面，实现这部分内容与业务代码的分离，降低代码的重复性和耦合度。</p>\\n<p>IOC是原本由我们去创建、管理的对象交由Spring容器进行管理，由Spring借助反射机制对Bean进行管理，使得对象的生命周期（从创建到销毁）不需要我们手动去管理。</p>\\n<h2>2.Spring中AOP的实现方式</h2>\\n<p>动态代理实现，包括JDK动态代理和CGLib动态代理</p>","autoDesc":true}');export{d as comp,k as data};
