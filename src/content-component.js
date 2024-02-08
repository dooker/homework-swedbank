import "./home-view.js"
import "./wallet-view.js"

class ContentComponent extends HTMLElement {
    default = "home"

    mapper = {
        "home": `<home-view></home-view>`,
        "wallet": `<wallet-view></wallet-view>`
    }

    connectedCallback() {
        window.addEventListener("navigate", event => {
            const {link} = event.detail

            if (!link || !this.mapper[link]) {
                this.innerHTML = this.mapper[this.default];
            }

            this.innerHTML = this.mapper[link];
        });

        this.innerHTML = this.mapper[this.default];
    }
}

customElements.define("content-component", ContentComponent);
