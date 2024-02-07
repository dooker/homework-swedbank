import "../assets/home.js"
import "../assets/wallet.js"

class HeaderNavigation extends HTMLElement {
    selector = "data-link"

    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/header-navigation.css";
            </style>

            <nav>
                <ul>
                    <li ${this.selector}="home" class="active">
                        <home-icon></home-icon>
                        <span>Home</span>
                    </li>
                    <li ${this.selector}="wallet">
                        <wallet-icon></wallet-icon>
                        <span>Everyday banking</span>
                    </li>
                </ul>
            </nav>
        `;

        document.addEventListener("click", (event) => this.handleClick(event.target));
        document.addEventListener("mouseover", (event) => this.handleHover(event));
        document.addEventListener("mouseout", (event) => this.handleHover(event));
    }

    isLink(target) {
        return !!target.dataset.link || !!target.parentNode.dataset?.link
    }

    handleClick(target) {
        const link = target.dataset.link || target.parentNode.dataset?.link

        if (!this.isLink(target) || !link) {
            return
        }

        const event = new CustomEvent("navigate", {
            detail: {link}
        });

        window.dispatchEvent(event);

        document.querySelectorAll(`[${this.selector}]`).forEach(item => {
            item.classList.remove("active")
        })

        document.querySelector(`[${this.selector}=${link}]`).classList.add("active")
    }

    handleHover(event) {
        const {target, type} = event

        if (!this.isLink(target)) {
            return
        }

        const body = document.querySelector("body").classList

        if (type === "mouseover") {
            body.add("hover")
        } else {
            body.remove("hover")
        }
    }

    disconnectedCallback() {
        document.removeEventListener("click", () => this.handleClick());
        document.removeEventListener("mouseover", () => this.handleHover());
        document.removeEventListener("mouseout", () => this.handleHover());
    }
}

customElements.define("header-navigation", HeaderNavigation);
