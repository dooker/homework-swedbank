import "./footer-navigation.js"
import "./footer-disclaimer.js"

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/footer-component.css";
            </style>

            <footer>
                <footer-navigation></footer-navigation>
            </footer>

            <footer-disclaimer></footer-disclaimer>
        `;
    }
}

customElements.define("footer-component", FooterComponent);
