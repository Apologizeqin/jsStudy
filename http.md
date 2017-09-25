目录

http的诞生

网络基础 TCP/IP  协议

Http中的请求报文和响应报文（ajax有关系）

Http之cookie的诞生

告知服务器意图的http方法

通信的持久链接

cookies的请求报文以及响应报文



### 1.http的诞生    什么是http（HyperText Transfer Protocol）

* 最初有一个共享知识的设想，基本理念是 : 借助多文档之间相互关联形成的超文本，连成可以相互关联的www
* www : SGML  标准通用标记语言   HTML   URL 统一资源定位符

### 2.网络基础 TCP/IP   (互联网相关联的协议集合我们称之为TCP/IP)

* 应用层 : 决定了用户提供应用服务时通信的活动  FTP:文件传输协议    DNS: 域名系统 （提供域名到ip地址之间的解析服务）

* 传输层 : 提供计算机之间的数据传输   俩个协议  TCP传输控制协议 为了方便传输，将大数据分割成为报文段对数据进行管理（三次握手:是为了保障数据传输的可靠性）   UDP  用户数据报协议

* 网络层  用来处理在网络上流动的数据包   这一层规定了传输路线 ，通过怎样的路径将数据包传输给对方。  ip协议 ip地址指明了节点被分配到的地址，MAC是固定地址

  利用中转设备MAC搜索下一站的中转目标，这时会采用ARP协议， ARP是一种用于解析地址的协议，根据通信方的ip地址，就能反查出对应的MAC地址

* 链路层  处理网络的硬件部分  

* 绝对的url格式    http://       user:pass    @www.example.jp    80/    dir/index/.html?          uid=1           # ch1 

  ​			协议方案名    登录信息    服务器地址      端口号   带层次的文件路径    查询字符串     片段表示符

### 3.HTTP 用于客户端和服务器端之间的通信

1、GET   / index.htm   HTTP/1.1            get 表示请求服务器的类型           请求的资源对象

​	Host :  hackr.jp                

​	上面俩句话的意思是，请求访问某台http服务器上的 /index.htm  网页资源

2、**说一下什么是请求报文  和 响应报文**  **注意:**这里和javascript里面的ajax有联系哦 

* **请求报文**是由    请求方法   请求URL    协议版本     可选的请求首部字段      内容实体

比如说:

POST    （方法）    /form/entry     （URl）         Http/1.1   （协议版本）

请求的首部字段:

Host:hackr.jp

Connection: keep-alive

Content-Type: application/x-form-urlencoded

Content-Length:16

内容实体:

name=ueno&age37

* 内容处理结果的返回    **响应报文**:  协议版本   200:状态码(表示请求成功与否的数字代码)   OK(状态码的原因短语)      响应首部字段      实体主体

  HTTP/1.1       200 OK                      表示的版本          处理就 结果的状态码和原因短语

  响应首部字段:

  Date:  Tue,  10   Jul    2017    06:50:15   GMT            创建响应的日期 ，是首部字段的一个属性

  content-Length:362

  ContentType:text/html

  <html>

  ###### 接下来关乎cookies的诞生哦，嘿嘿，HTTP是一种不保存状态，该协议对于发送过的请求或者响应都不做持久化处理，方便处理大量的事物，以及协议的可伸缩性。还有这样还可以减少服务器的cpu及其内存资源的消耗。

  ​

  ### 4、告知服务器意图的Http方法

  **GET:获取资源**(访问)

  用来请求访问已经已经被URl识别的资源，指定的资源经过服务器端解析后返回**响应内容**，文本就是文本,如果是CGI程序  返回执行结果

  **POST:传输实体主体**(告诉服务器信息)

  获取资源的话用GET，但是传输用POST，大家不要局限于安全性去理解post和get

  **PUT:传输文件**   

  没有验证机制，任何人都可以上传文件，因此一般网站不使用该方法

  **HEAD:获得报文首部**(告诉服务器把那个的相关信息告诉我)

  用于确认url的有效性及资源更新的日期。

  **DELETE:删除文件**

  与put相反的方法，也是一般不开放

  **OPTIONS:询问支持的方法**

  查询针对请求url指定的资源支持的方法。

  ### 5、持久连接

  在早期的http协议中，没建立一次通信都会中断一次，产生大量的通信开销，为了减轻服务器的负担，有了持久链接，只要一方没有提出明确的通信断开，那么就会一直持续连接。

  好处是:1、降低了服务器的负担，由于没有断开的事件，页面的响应速度也加快了。

  ​		2、使得多数请求得以管线化，能够做到并行大宋多个请求。

  **来，我们继续聊聊cookies**

  cookies会根据从服务器发送的响应报文内的一个叫做Set-Cookies的首部字段信息，通知客户端保存cookies。

  如果客户端同意保存(比如 说谷歌会问你是否同意保存你的密码)那么下次，请求报文的时候，会自动把cookie值加入进去，进行请求。        然后服务器进行对比之后，会检查出来是哪个家伙给我提交的信息，然后得到之前的状态信息。


#### 6、编码提升传输效率

##### 6.1报文主体和实体主体的差异

报文:http 通信中的基本单位，由8位组字节流组成，通过HTTP通信传输

实体: 作为请求或响应的有效载荷数据（补充项）被传输，其内容由实体首部和实体主体组成

http报文的主体用于传输请求和响应的实体主体。



###### 6.2压缩传输的内容编码

常见的编码格式有 gzip  compress(unix 系统的标准编码)

deflate  (zlib)

identity  (不进行编码) 

##### 6.3分割发送的分块传输编码

概念:把实体主体分块的功能            在http请求资源的过程中，如果编码实体资源未完成传输之前，浏览器无法显示请求页面，在传输大量数据的时候，通过把数据分割成很多块，能够让浏览器逐步显示在页面，实体主体的最后一块使用的是  0(CR+LF);

##### 7.发送多种数据的多部分对象集合

发送邮件的时候，可以在邮件中写入文字并添加多份附件。这是因为采用了MIME(多用途因特网邮件扩展)。

http也采用了多部分对象集合

mutipart/form-data     web表单文件上传时使用



##### 8.http协议中的一些状态码

###### 2xx  指的是表明请求被正常处理。

###### 200 OK 表示从客户端发来的请求被正常处理

204 No content    服务器已经成功处理，但是返回的结果不包括实体的主题部分(请求处理成功，但是没有资源返回)

206 partial content    我只想要其中一部分  明白是对其中一部分资源的请求。

###### 3xx 重定向    需要执行某些特殊的请求，以正确处理请求

301  moved permanently      永久性重定向

302 found    临时性重定向     302表准 禁止post转换成为get  

303  see  other

304     not modified           服务器允许请求访问资源，但因为发生请求后未满足条件的情况后，直接返回304

307  temporary redirect   临时性重定向   遵守浏览器的标准，不会从post 变成 get

###### 4xx 客户端错误

400 bad  request     请求错误（表示的是请求的语法有错误）

401 unnauthorized    该状态码表示的是需要通过http的认证（basic认证，digest认证）的认证信息，另外若之前进行过一次请求则表示的是用户认证失败。

403  forbidden    未获得文件系统的授权，访问权限出现某些问题都是发生403的原因。

404  not found    服务器上没有找到请求的资源

###### 5xx 服务器错误。

500   internet server error  表示的 服务器发生错误

503    表示的是处于超负载或者是正在停机维护

### 9.与http协作的web服务器
