class HomeIcon extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <svg width="20px" height="18px" viewBox="0 0 20 18">
                <path d="M10,4.737 L17.368,12.106 L17.368,17.895 L12.105,17.895 L12.105,11.58 L7.895,11.58 L7.895,17.895 L2.632,17.895 L2.632,12.106 L10,4.737 L10,4.737 Z M16.315,6.316 L16.315,2.106 L14.211,2.106 L14.211,4.21 L10,0 L0,10.001 L1.579,11.58 L10,3.159 L18.421,11.58 L20,10.001 L16.315,6.316 L16.315,6.316 Z"></path>
            </svg>
        `;
    }
}

customElements.define("home-icon", HomeIcon);
