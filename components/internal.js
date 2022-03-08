class Internal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
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
         background: #000;
         z-index: 2;
        }
        .open .layer:nth-child(2)
        {
         background: #03a9f4;
         animation-delay: 1s;
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
         }`;
    }
}
customElements.define('internal-component', Internal);