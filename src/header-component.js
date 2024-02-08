import "./header-navigation.js"

class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/header-component.css";
            </style>

            <header>
                <div class="gradient"></div>
                <div class="logo">
                    <img src="../assets/swedbank_logo.png" alt="Swedbank"/>
                    
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                
                <header-navigation></header-navigation>
            </header>
        `;

        const toggle = this.querySelector("button")

        toggle.addEventListener("click", this.handleClick);
    }

    handleClick = ({target}) => {
        target.classList.toggle("open")
        target.parentElement.parentElement.querySelector("header-navigation").classList.toggle("open")
    }

    disconnectedCallback() {
        const toggle = this.querySelector("header-component .logo > button")

        toggle.removeEventListener("click", this.handleClick);
    }
}

customElements.define("header-component", HeaderComponent);
