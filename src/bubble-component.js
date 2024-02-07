class BubbleComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/bubble.css";
            </style>

            <section class="bubble">
                Hello World!
            </section>
        `;
    }
}

customElements.define("bubble-component", BubbleComponent);
