<template><div><h1 id="pdf数字签名检查工具" tabindex="-1"><a class="header-anchor" href="#pdf数字签名检查工具"><span>PDF数字签名检查工具</span></a></h1>
<p>在工作中，我们经常会收到带有电子签名的PDF文件，比如合同、报告等重要文档。数字签名可以确保：</p>
<ul>
<li>文件内容在签名后未被篡改</li>
<li>签名者的身份真实可信</li>
<li>文件来源合法可靠</li>
</ul>
<h2 id="功能特点" tabindex="-1"><a class="header-anchor" href="#功能特点"><span>功能特点</span></a></h2>
<ul>
<li>简单易用：拖放文件或点击上传，一键完成检测</li>
<li>快速验证：即时显示签名状态（有效/无效）</li>
<li>详细信息：展示签署者、签名时间、签名原因等</li>
<li>安全放心：所有操作在浏览器本地完成，文件不上传服务器</li>
</ul>
<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2>
<h5 id="检查只需3步" tabindex="-1"><a class="header-anchor" href="#检查只需3步"><span>检查只需3步：</span></a></h5>
<ul>
<li>上传文件：拖放PDF文件到指定区域，或点击&quot;浏览文件&quot;按钮选择</li>
<li>自动检测：工具将自动解析PDF文件中的数字签名</li>
<li>查看结果：有效签名显示绿色标识，包含签署者信息，无效签名显示红色警告，提示可能被篡改</li>
</ul>
<h2 id="使用工具" tabindex="-1"><a class="header-anchor" href="#使用工具"><span>使用工具</span></a></h2>
<iframe src="/tools/pdf_check.html" width="100%" height="800px" frameborder="0" style="border: 1px solid #ddd; border-radius: 8px;"></iframe>
<h2 id="备用访问方式" tabindex="-1"><a class="header-anchor" href="#备用访问方式"><span>备用访问方式</span></a></h2>
<p>如果上方的嵌入工具无法正常显示，您可以：</p>
<ol>
<li><RouteLink to="/tools/pdf_check.html" target="_blank">在新窗口中打开工具</RouteLink></li>
<li>直接访问：<code v-pre>http://localhost:8080/pdf_check.html</code>（开发环境）</li>
</ol>
</div></template>


