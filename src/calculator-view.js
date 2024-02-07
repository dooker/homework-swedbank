import "./bubble-component.js"
import "./button-component.js"

class CalculatorView extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        calculator
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

customElements.define("calculator-view", CalculatorView);
