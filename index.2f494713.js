function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7796;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7796=r),r.register("27Lyk",function(t,n){e(t.exports,"register",()=>o,e=>o=e),e(t.exports,"resolve",()=>r,e=>r=e);var o,r,i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("27Lyk").register(JSON.parse('{"1LzKV":"index.2f494713.js","cpPij":"papel.17db4e40.png","ecEbG":"piedra.395881fd.png","GDy1l":"tijera.22188008.png"}'));var i={};i=new URL(r("27Lyk").resolve("cpPij"),import.meta.url).toString();var a={};a=new URL(r("27Lyk").resolve("ecEbG"),import.meta.url).toString();var s={};s=new URL(r("27Lyk").resolve("GDy1l"),import.meta.url).toString();const l=[{path:/\/instructions/,component:function(e){let t=document.createElement("div");t.className="instructions-container",t.innerHTML=`
  <div class="container-title">
    <h1 class="title">Introduccion</h1>
  </div>
      <div class="container-btn">
        <my-button class="button"></my-button>
      </div>
    `;let n=t.querySelector(".button");return n?.addEventListener("click",e=>{e.preventDefault(),console.log("Hello")}),t}},{path:/\/welcome/,component:function(e){let t=document.createElement("div");t.className="home-page-container",t.innerHTML=`
  <div class="container-title">
    <h1 class="title">Piedra <br>
    Papel <span>\xf3</span><br>
    Tijera</h1>
  </div>
      <div class="container-btn">
        <my-button class="button"></my-button>
      </div>
      <div class="container-hands">
      <img class="piedra"  alt="Piedra">
      <img class="papel" alt="Pepel">
      <img class="tijera" alt="Tijera">
      </div>
      `;let n=t.querySelectorAll("img");n.forEach(e=>{"papel"==e.className?e.src=new URL(i).toString():"piedra"==e.className?e.src=new URL(a).toString():"tijera"==e.className&&(e.src=new URL(s).toString())});let o=t.querySelector(".button");return o?.addEventListener("click",t=>(t.preventDefault(),e.goTo("/instructions"))),t}}],c="/dwf-m5-desafio-final";function d(){return location.host.includes("github.io")}const u={data:{currentGame:{myPlay:"",computerPlay:"",currentResult:""},historyScore:{player:0,computer:0}},listeners:[],subscribe(e){this.listeners.push(e)},getState(){return this.data},setState(e){for(let t of(this.data=e,this.listeners))t();console.log("cambio el state",e)},setMove(e){this.getState();// this.setState({
//   ...this.getState(),
//   currentGame: {
//     myPlay: myMove,
//     computerPlay: computerMove,
//   },
// });
},theWinnerIs(e){}};customElements.define("my-selection",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),u.subscribe(()=>{this.render()}),this.render()}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
        .piedra, .papel, .tijera{
            width: 80px;
            height: 60px;
            font-size: 20px;
            padding: 5px;
            background: blue;
            font-weight: bold;
            color : #fff;
          }
          `,this.shadow.appendChild(e);//   this.render();
}render(){this.shadow.innerHTML=`
        <h1>Selecciona una mano</h1>
        <button type="button" class="piedra" target="piedra">Piedra</button>
        <button type="button" class="tijera" target="tijera">Tijera</button>
        <button type="button" class="papel" target="papel">Papel</button>
        `;let e=this.shadow.querySelectorAll("button");for(let t of e)t.addEventListener("click",e=>{let t=e.target;u.setMove(t.textContent)})}}),customElements.define("my-timer",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.className="container-timer";let n=document.createElement("style");t.innerHTML=`
            <div class="countdown-number"></div>
            <svg class="svg">
            <circle class="svg-circle" r="90" cx="140" cy="140"></circle>
            </svg>
            `;let o=3;var r=t.querySelector(".countdown-number");r.textContent=o;let i=setInterval(()=>{console.log(o),0==--o&&clearInterval(i),r.textContent=o},1e3);n.innerHTML=`
            .container-timer{
                text-align: center;
            }      
            .countdown-number {
                position: relative;
                top: 169px;
                font-weight: 400;
                font-size: 70px;
                text-align: center;
                color: black;
            }
            .svg {
                width: 260px;
                height: 280px;
                transform: rotateY(-180deg) rotateZ(-90deg);
            }
            .svg-circle {
                stroke-dasharray: 570px;
                stroke-dashoffset: 0px;
                stroke-linecap: round;
                stroke-width: 10px;
                stroke: black ;
                fill: none;
                animation: countdown 3s linear infinite forwards;
            }
            @keyframes countdown {
                from {
                  stroke-dashoffset: 0px;
                }
                to {
                  stroke-dashoffset: 580px;
                }
                
            }`,e.appendChild(t),e.appendChild(n)}}),customElements.define("my-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
        .button {
            color: #D8FCFC;
            text-align: center;
            font-family: 'Odibee Sans';
            font-size: 45px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 2.25px;
            width: 322px;
            height: 87px;
            flex-shrink: 0;
            border-radius: 10px;
            border: 10px solid #001997;
            background: #006CFC;
        }
        `,this.shadow.appendChild(e)}render(){this.shadow.innerHTML=`
         <button class="button" type="button">Empezar</button>
        `;// const btn = this.shadow.querySelector("button");
// btn?.addEventListener("click", e => {
//   e.preventDefault();
//   console.log("Hello BTN");
// });
}});const p=document.querySelector(".root");!function(e){function t(e){let t=d()?c+e:e;history.pushState({},"",e),n(t)}function n(n){let o=d()?n.replace(c,""):n;for(let n of l)if(n.path.test(o)){let o=n.component({goTo:t});return e.firstChild&&e.firstChild.remove(),e.appendChild(o)}}"/"==location.pathname||location.host.includes("github.io")?t("/welcome"):n(location.pathname),console.log(window),window.onpopstate=()=>{n(location.pathname)}}(p);//# sourceMappingURL=index.2f494713.js.map

//# sourceMappingURL=index.2f494713.js.map
