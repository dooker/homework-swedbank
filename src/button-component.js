class ButtonComponent extends HTMLElement {
    color = this.getAttribute("color") || "orange"
    text =  this.getAttribute("text")

    connectedCallback() {
        if (!this.text) {
            this.innerHTML = ``
        }

        this.innerHTML = `
            <button class="button ${this.color}" onclick="${() => console.log(`asd`)}">
                ${this.text}
            </button>
        `;
    }
}

customElements.define("button-component", ButtonComponent);
