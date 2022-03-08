class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        .header-img {
            width: 100px;
            height : 100px;
            float:left;
            margin-top: 30px;
        }
        .open
        {
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         pointer-events: none;
         z-index: 10000;
        }
        .open .layer
        {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         transform-origin: top;
         animation: open 1s ease-in-out forwards;
        }
        .open .layer:nth-child(1)
        {
         
         z-index: 1;
        }
        .open .layer:nth-child(2)
        {
         
         animation-delay: 0.1s;
         z-index: 1;
        }
        @keyframes open
        {
         0%
         {
          transform: scaleY(1);
         }
         100%
         {
          transform: scaleY(0);
         }
        }
        section
        {
         position: absolute;
         width: 100%;
         height: 100%;
         background: #fff;
         display: grid;
         justify-content: center;
         align-items: center;
         overflow: hidden;
        }
        .sci
{
 position: absolute;
 bottom: 15px;
 right: 30px;
 display: flex;
 flex-direction: column;
}
.sci li
{
 opacity: 0;
 list-style: none;
 float:right;
 right:30px;
 padding: 10px 0;
 padding-left: 300px;
 text-align: center;
 animation: fadeInBottom 0s linear forwards;
}
header ul li:nth-child(1),
.sci li:nth-child(1)
{
 animation-delay: 1.00s;
}
header ul li:nth-child(2),
.sci li:nth-child(2)
{
 animation-delay: 1.05s;
}
header ul li:nth-child(3),
.sci li:nth-child(3)
{
 animation-delay: 1.10s;
}
header ul li:nth-child(4),
.sci li:nth-child(4)
{
 animation-delay: 1.15s;
}

.sci li a
{
 font-size: 1.2em;
 color: #000;
}
header
{
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 80px;
 padding: 0 10%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 box-sizing: border-box;
}
header .logo
{
 opacity: 0;
 margin: 0;
 padding: 0;
 font-size: 2em;
 text-transform: uppercase;
 animation: fadeIn 0.5s linear forwards;
 animation-delay: 5s;
}
header ul
{
 margin: 0;
 padding: 0;
 float: right;
 z-index: 100;
 display: flex;
}
header ul li
{
 opacity: 0;
 list-style: none;
 float:left;
 margin: 0 10px;
 animation: fadeInRight 0.5s linear forwards;
}
header ul li:last-child
{
 margin-right: 0;
}
header ul li a
{
 text-decoration: none;
 font-size: 1.2em;
 color: #000;
 padding: 5px 10px;
 letter-spacing: 2px;
}
header ul li a.active,
header ul li a:hover
{
 background: #000;
 color: #fff;
}
</style>
<header>
  <div class="open">
   <div class="layer"></div>
   <div class="layer"></div>
  </div>
   
    <img class = "header-img" src = "logo.png" alt="logo">
    <ul>
     <li>
      <a href="home.html">Home</a>
     </li>
     <li>
      <a href="about.html">About Us</a>
     </li>
     <li>
      <a href="redirect-reg.html">Register</a>
     </li>
     <li>
      <a href="login.html">Login</a>
     </li>
    </ul>
  </header>
  `;
    }
}

customElements.define('header-component', Header);