customElements.define(
  "my-hands",
  class Hands extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    connectedCallback() {
      const styleHands = document.createElement("style");
      styleHands.innerHTML = `
      .piedra,
      .papel,
      .tijera {
        height: 200px; 
        margin-right: 10px;
      }
      .click{
        position: absolute;
        top: -238px;
        right: 0px;
        left: 120px;
        bottom: 0;
        height: 300px;
        box-shadow: 0px 8px 103px red;
        border-radius: 11px;
        background-color: #F44336;
        padding: 10px;
      }
      `;
      this.shadow.appendChild(styleHands);
    }
    render() {
      const handsContainer = document.createElement("div");
      handsContainer.className = "hands-container";
      handsContainer.innerHTML = `
        <img class="piedra" id="Piedra"  alt="Piedra">
        <img class="papel" id="Papel" alt="Pepel">
        <img class="tijera" id="Tijera" alt="Tijera">

      `;
      const imgUrl = handsContainer.querySelectorAll("img");

      imgUrl.forEach(img => {
        if (img.className == "papel") {
          img.src = new URL("../../img/papel.png", import.meta.url).toString();
        } else if (img.className == "piedra") {
          img.src = new URL("../../img/piedra.png", import.meta.url).toString();
        } else if (img.className == "tijera") {
          img.src = new URL("../../img/tijera.png", import.meta.url).toString();
        }
        img.addEventListener("click", (i: any) => {
          const event = new CustomEvent("handSelected", {
            detail: {
              selectionPlayer: i.target.id,
              addClass: i.target.classList,
            },
          });
          this.dispatchEvent(event);
        });
      });
      this.shadow.appendChild(handsContainer);
    }
  }
);
