export class myMenu extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
connectedCallback(){
    this.shadowRoot.innerHTML= /*html*/ `
    <style ref="stylesheet">
        @import"./componets/myMenu.css";
    </style>
    <div class="h7">${this.text()}</div>`;
    this.attachShadow({mode:"closed"})
}
    text(){
        return `Hola 7`;
    }
}
customElements.define("my-h7",myMenu);