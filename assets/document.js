class DocumentIcon extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"/>
            </svg>
        `;
    }
}

customElements.define("document-icon", DocumentIcon);
