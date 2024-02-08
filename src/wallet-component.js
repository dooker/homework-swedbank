import "./payment-view.js"
import "./calculator-view.js"

class WalletComponent extends HTMLElement {
    default = "payment"

    mapper = {
        "payment": `<payment-view></payment-view>`,
        "calculator": `<calculator-view></calculator-view>`
    }

    connectedCallback() {
        window.addEventListener("tabChange", event => {
            const {tab} = event.detail

            if (!tab || !this.mapper[tab]) {
                this.innerHTML = this.mapper[this.default];
            }

            this.innerHTML = this.mapper[tab];
        });

        this.innerHTML = this.mapper[this.default];
    }
}

customElements.define("wallet-component", WalletComponent);
