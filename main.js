import "./src/header-component.js"
import "./src/content-component.js"
import "./src/footer-component.js"

class MainComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "./stylesheet/content-component.css";
            </style>

            <section class="main limited-width">
                <content-component></content-component>
            </section>
        `;
    }
}

customElements.define("main-component", MainComponent);
