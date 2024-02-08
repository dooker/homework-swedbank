import "./bubble-component.js"
import "./button-component.js"

class BannerComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="banner">
                <bubble-component></bubble-component>
                
                <div class="content">
                    <h1 class="as-h2">Welcome to Swedbank!</h1>
                    
                    <p>
                        With 7.2 million private customers and more than 574 000 corporate and organisational customers. This makes us Sweden's largest bank in terms of number of customers and gives us a leading position in our other home
                        markets of Estonia, Latvia and Lithuania. As a major bank, we are a significant part of the financial system and play an important role in the local communities we serve. We are dedicated to helping our customers, our
                        shareholders and society as a whole stay financially sound and sustainable.
                    </p>
                    
                    <div class="actions">
                        <a href="#">Read more</a>
                        
                        <button-component text="Go"></button-component>
                    </div>
                </div>
            </section>
        `;

        this.querySelector("button-component button.button").addEventListener("click", (event) => this.handleClick(event));
    }

    handleClick() {
        console.log("Go pressed")
    }

    disconnectedCallback() {
        this.removeEventListener("click", () => this.handleClick());
    }
}

customElements.define("banner-component", BannerComponent);
