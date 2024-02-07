class TeaserComponent extends HTMLElement {
    connectedCallback() {
        const data = JSON.parse(this.getAttribute("data"))

        this.innerHTML = `
            <section class="teaser">
                <header class="${data.type}">
                    <h1>${data.header}</h1>
                </header>
                
                <div>
                    ${data.content}
                </div>
            </section>
        `;
    }
}

customElements.define("teaser-component", TeaserComponent);
