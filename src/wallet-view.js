import "./banner-component.js"
import "./tabs-component.js"
import "./wallet-component.js"

class WalletView extends HTMLElement {
    banner = {
        content: `<h2>One of the core values of Swedbank</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/banner.css";
                @import "../stylesheet/button.css";
                @import "../stylesheet/tabs.css";
            </style>

            <h1>Igapäevapangandus</h1>
            
            <div>
                <tabs-component></tabs-component>
                <section class="general">
                    <wallet-component></wallet-component>
                </section>
            </div>
            
            <section class="general">
                <banner-component></banner-component>            
            </section>
         `;
    }
}

customElements.define("wallet-view", WalletView);
