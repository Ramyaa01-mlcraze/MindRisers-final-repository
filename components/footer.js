class Footer extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        footer{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: black;
            color: white;
            text-align: center; 
        }
        
        </style>
        <footer>
            <h3>Contact Us</h3>
            <p>Email: mindrisers@gmail.com</p>
        </footer>
    `;
    }
}

customElements.define('footer-component',Footer);