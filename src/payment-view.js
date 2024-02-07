import "./bubble-component.js"
import "./button-component.js"

class PaymentView extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        payment
        `;

        // this.querySelector("button-component button.button").addEventListener("click", (event) => this.handleClick(event));
    }
    //
    // handleClick() {
    //     console.log("Go pressed")
    // }
    //
    // disconnectedCallback() {
    //     this.removeEventListener("click", () => this.handleClick());
    // }
}

customElements.define("payment-view", PaymentView);
