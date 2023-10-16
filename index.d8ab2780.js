function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequire7796;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequire7796=r),r.register("27Lyk",function(t,n){e(t.exports,"register",()=>a,e=>a=e),e(t.exports,"resolve",()=>r,e=>r=e);var a,r,o={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("27Lyk").register(JSON.parse('{"1LzKV":"index.d8ab2780.js","cpPij":"papel.17db4e40.png","ecEbG":"piedra.395881fd.png","GDy1l":"tijera.22188008.png"}'));const o={data:{currentGame:{myPlay:"",computerPlay:"",result:""},history:{myHistoryPlay:0,computerHistoryPlay:0}},listeners:[],setMoves(e,t){let n=this.getState();o.setState({...n,currentGame:{...n.currentGame,myPlay:e,computerPlay:t}})},setResult(e){let t=this.getState();o.setState({...t,currentGame:{...t.currentGame,result:e}})},whoWins(e,t){"piedra"==e&&"tijera"==t||"papel"==e&&"piedra"==t||"tijera"==e&&"papel"==t?// this.pushToHistory(1, 0);
this.setResult("Ganaste"):"piedra"==t&&"tijera"==e||"papel"==t&&"piedra"==e||"tijera"==t&&"papel"==e?(this.pushToHistory(0,1),this.setResult("Perdiste")):e==t&&// this.pushToHistory(0, 0);
this.setResult("Empate")},getState(){return this.data},setState(e){for(let t of(this.data=e||this.data,this.listeners))t();console.log("soy el state, he cambiado",e),localStorage.setItem("saved-state",JSON.stringify(e))},subscribe(e){this.listeners.push(e)}},s="/dwf-m5-desafio-final";function i(){return location.host.includes("bautistajuan.github.io")}const l=[{path:/\/welcome/,component:function(e){let t=document.createElement("div");t.className="home-page-container",t.innerHTML=`
    <div class="container-title">
      <h1 class="title">Piedra <br>
      Papel <span>\xf3</span><br>
      Tijera</h1>
    </div>
    <div class="container-btn">
      <my-button class="change-page">Empezar</my-button>
    </div>
    <div class="container-hands">
      <my-hands></my-hands>
    </div>

  `;let n=t.querySelector(".change-page");return n?.addEventListener("click",t=>(t.preventDefault(),e.goTo("/introductions"))),t}},{path:/\/introductions/,component:function(e){let t=document.createElement("div");t.className="intro",t.innerHTML=`
    <div class="container">
      <h2 class="sub-instruction">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
      <div class="play-btn">
      <my-button class="change-page">Play!</my-button>
      </div>
      <div class="hands">
        <my-hands></my-hands>
      </div>
    </div>
  `;let n=t.querySelector(".change-page");return n?.addEventListener("click",t=>{t.preventDefault(),e.goTo("/game")}),t}},{path:/\/game/,component:function(){o.getState();// <my-timer></my-timer>
let e=document.createElement("div");return e.innerHTML=`
   <my-hands class="hands"></my-hands>
  `,e}}];customElements.define("my-timer",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.className="container-timer";let n=document.createElement("style");t.innerHTML=`
        <div class="countdown-number"></div>
        <svg class="svg">
         <circle class="svg-circle" r="90" cx="140" cy="140"></circle>
        </svg>
      `;let a=3;var r=t.querySelector(".countdown-number");r.textContent=a;let o=setInterval(()=>{0==--a&&clearInterval(o),r.textContent=a},1e3);n.innerHTML=`
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
      }`,e.appendChild(t),e.appendChild(n)}});var c={};c=new URL(r("27Lyk").resolve("cpPij"),import.meta.url).toString();var d={};d=new URL(r("27Lyk").resolve("ecEbG"),import.meta.url).toString();var p={};p=new URL(r("27Lyk").resolve("GDy1l"),import.meta.url).toString(),customElements.define("my-hands",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
      .piedra,
      .papel,
      .tijera {
        height: 150px; 
        margin-right: 5px;
      `,this.shadow.appendChild(e)}render(){let e=document.createElement("div");e.className="hands-container",e.innerHTML=`
        <img class="piedra" id="Piedra"  alt="Piedra">
        <img class="papel" id="Papel" alt="Pepel">
        <img class="tijera" id="Tijera" alt="Tijera">

      `;let t=e.querySelectorAll("img"),n=t[Math.floor(3*Math.random()+0)].id;t.forEach(e=>{"papel"==e.className?e.src=new URL(c).toString():"piedra"==e.className?e.src=new URL(d).toString():"tijera"==e.className&&(e.src=new URL(p).toString()),e.addEventListener("click",e=>{let t=new CustomEvent("handSelected",{detail:{selectionPlayer:e.target.id,selectionComputer:n}});this.dispatchEvent(t)})}),this.shadow.appendChild(e)}}),customElements.define("my-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
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
         <button class="button" type="button">${this.textContent}</button>
        `}});const u=document.querySelector(".root");!function(e){function t(e){let t=i()?s+e:e;history.pushState({},"",t),n(t)}function n(n){console.log("el handle Route recibio una nueva ruta y es",n);let a=i()?n.replace(s,""):n;for(let n of l)if(n.path.test(a)){let a=n.component({goTo:t});e.firstChild?.remove(),e.appendChild(a)}}"/"==location.pathname||"/dwf-m5-desafio-final/"==location.pathname?t("/welcome"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}}(u);//# sourceMappingURL=index.d8ab2780.js.map

//# sourceMappingURL=index.d8ab2780.js.map
