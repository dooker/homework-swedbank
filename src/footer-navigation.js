import "./footer-social-icons.js"

class FooterNavigation extends HTMLElement {
    toggleList(event) {
        event.target.parentElement.parentElement.classList.toggle("open")
    }

    linksList = [
        {
            title: "Quicklinks",
            links: [
                {
                    url: "calculators.html",
                    text: "Calculators"
                },
                {
                    url: "prices.html",
                    text: "Prices"
                },
                {
                    url: "terms-of-service.html",
                    text: "Terms of service"
                },
                {
                    url: "privacy-and-security.html",
                    text: "Privacy and security"
                }
            ]
        },
        {
            title: "Join Swedbank",
            links: [
                {
                    url: "client-programs.html",
                    text: "Client programs"
                },
                {
                    url: "business-customers.html",
                    text: "Business customers"
                },
                {
                    url: "jobs.html",
                    text: "Jobs"
                },
                {
                    url: "internships.html",
                    text: "Internships"
                }
            ]
        },
        {
            title: "Tooted",
            links: [
                {
                    url: "everyday-banking.html",
                    text: "Everyday banking"
                },
                {
                    url: "loans.html",
                    text: "Loans"
                },
                {
                    url: "insurance.html",
                    text: "Insurance"
                },
                {
                    url: "cards.html",
                    text: "Cards"
                },
                {
                    url: "stocks.html",
                    text: "Stocks"
                }
            ]
        }
    ]

    generateLinksList({title, links}) {
        const id = title.toLowerCase().replaceAll(" ", "-")

        return `
                <ul aria-labelledby="${id}" data-expandable>
                    <li>
                        <h3 id="${id}">${title}</h3>
                        <div class="arrow" data-arrow></div>
                    </li>
                    ${links.map(link => `<li><a href="${link.url}">${link.text}</a></li>`).join("")}
                </ul>
        `
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/footer-navigation.css";
            </style>

            <div class="gradient"></div>
            
            <div class="footer limited-width">
                <ul aria-labelledby="contact">
                    <li>
                        <h3 id="contact">Contact</h3>
                    </li>
                    <li>
                        <a href="tel:+3726310310" class="as-h1">6 310 310</a>
                    </li>            
                    <li>
                        <a href="mailto:info@swedbank.ee">info@swedbank.ee</a>
                    </li>
                    <li>
                        SWEDBANK AS
                        <br/>
                        Liivalaia 8, 15040 Tallinn
                        <br/>
                        SWIFT kood/BIC: HABAEE2X
                        <br/>
                        Reg. number: 10060701
                    </li>
                    <li>
                        <footer-social-icons></footer-social-icons>
                    </li>
                </ul>
    
                ${this.generateLinksList(this.linksList[0])}
                ${this.generateLinksList(this.linksList[1])}
                ${this.generateLinksList(this.linksList[2])}
   
            </div>
        `;

        const arrows = this.querySelectorAll("[data-arrow]")

        arrows.forEach((item) => item.addEventListener("click", this.toggleList))
    }

    disconnectedCallback() {
        const arrows = this.querySelectorAll("[data-arrow]")

        arrows.forEach((item) => item.removeEventListener("click", this.toggleList))
    }
}

customElements.define("footer-navigation", FooterNavigation);
