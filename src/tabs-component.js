import "./bubble-component.js"
import "./button-component.js"

class TabsComponent extends HTMLElement {
    selector = "data-tab"

    connectedCallback() {
        this.innerHTML = `
            <ul class="tabs">
                <li ${this.selector}="payment" class="active">Payment</li>
                <li ${this.selector}="calculator">Calculator</li>
            </ul>
        `;

        document.addEventListener("click", (event) => this.handleClick(event.target));
    }

    handleClick(target) {
        const {tab} = target.dataset

        if (!tab) {
            return
        }

        const event = new CustomEvent("tabChange", {
            detail: {tab}
        });

        window.dispatchEvent(event);

        document.querySelectorAll(`[${this.selector}]`).forEach(item => {
            item.classList.remove("active")
        })

        document.querySelector(`[${this.selector}=${tab}]`).classList.add("active")
    }

    disconnectedCallback() {
        document.removeEventListener("click", () => this.handleClick());
    }
}

customElements.define("tabs-component", TabsComponent);
