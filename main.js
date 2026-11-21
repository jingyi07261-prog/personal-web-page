const navItems = [
  ["首页","index.html"],["关于创元","about.html"],["产品与方案","solutions.html"],
  ["服务支持","service.html"],["新闻动态","news.html"],["投资者关系","investor.html"]
];
const currentPage = location.pathname.split("/").pop() || "index.html";
const header = `
<div class="topline"></div>
<header class="site-header"><div class="container header-inner">
  <a class="brand" href="index.html" aria-label="创元首页"><img src="assets/logo/chuangyuan-logo.svg" alt="创元 浙江创元信息系统服务有限公司"></a>
  <button class="menu-toggle" aria-label="打开导航" aria-expanded="false">☰</button>
  <nav class="nav" aria-label="主导航">
    ${navItems.map(([label,url])=>`<a href="${url}" class="${currentPage===url?'active':''}">${label}</a>`).join("")}
    <a class="nav-cta" href="contact.html">联系我们</a>
  </nav>
</div></header>`;
const footer = `
<footer class="site-footer"><div class="container">
  <div class="footer-grid">
    <div class="footer-brand"><img src="assets/logo/chuangyuan-logo.svg" alt="创元"><p>专注信息系统服务与综合工程建设，围绕客户需求提供系统集成、通信工程、工程施工、设备采购及技术服务。</p></div>
    <div class="footer-col"><h4>快速导航</h4><a href="about.html">关于创元</a><a href="solutions.html">产品与解决方案</a><a href="service.html">服务支持</a><a href="news.html">新闻动态</a></div>
    <div class="footer-col"><h4>业务领域</h4><a href="solutions.html#integration">系统集成</a><a href="solutions.html#communication">通信工程</a><a href="solutions.html#construction">工程施工</a><a href="solutions.html#procurement">设备采购</a></div>
    <div class="footer-col"><h4>联系创元</h4><p>浙江省杭州市上城区红普路788号<br>创智绿谷发展中心6幢124室</p><a href="tel:18905717118">18905717118</a><a href="mailto:1298560109@qq.com">1298560109@qq.com</a></div>
  </div>
  <div class="copyright"><span>© 浙江创元信息系统服务有限公司 版权所有</span><span>以专业服务连接信息与价值</span></div>
</div></footer>`;
document.getElementById("site-header").innerHTML = header;
document.getElementById("site-footer").innerHTML = footer;
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const opened=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(opened));toggle.textContent=opened?"✕":"☰";});
