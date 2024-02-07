import "../assets/document.js"
import "./teaser-component.js"

class HomeView extends HTMLElement {
    generateRow({type, account, balance, credit, reserved, available}) {
        return `
                <div class="${type}">
                    <div>${account}</div>
                    <div class="show-on-desktop">${balance}</div>
                    <div class="show-on-desktop">${credit}</div>
                    <div class="show-on-desktop">${reserved}</div>
                    <div>${available}</div>
                </div>
        `
    }

    teaser1 = {
        type: "blue",
        header: "Open",
        content: `<h2>One of the core values of Swedbank</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`
    }

    teaser2 = {
        type: "yellow",
        header: "Caring",
        content: `Cum enim libero quisquam rerum. Dolorum fuga magnam nemo quae voluptas voluptates voluptatum. <p><a href="#">Read more</a></p>`
    }

    teaser3 = {
        type: "purple",
        header: "Simple",
        content: `<p><ul><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li></ul></p>`
    }

    rows = [
        {
            type: "header",
            account: "Account",
            balance: "Balance",
            credit: "Credit",
            reserved: "Reserved",
            available: "Available"
        },
        {
            type: "",
            account: `<a href="#">Siim Tamm</a> EE752200221057734534`,
            balance: "3 342 000.00",
            credit: "20.00",
            reserved: "725.00",
            available: "900.56 EUR"
        },
        {
            type: "",
            account: `<a href="#">Marju Lepik</a> EE752200221057734534`,
            balance: "50.90",
            credit: "2 000.00",
            reserved: "",
            available: "3 000.00 EUR"
        },
        {
            type: "",
            account: `<a href="#">Liina Roosipõld</a> EE752200221057734534`,
            balance: "12 041.00",
            credit: "20.00",
            reserved: "",
            available: "1300.12 EUR"
        },
        {
            type: "total",
            account: `Total:`,
            balance: "5456.56",
            credit: "456.56",
            reserved: "",
            available: "456.56 EUR"
        }
    ]

    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/home-view.css";
                @import "../stylesheet/table.css";
                @import "../stylesheet/teaser.css";
            </style>

            <h1>Home</h1>
            
            <section class="general overview">
                <h2>Your Swedbank overview</h2>
                <div class="actions">
                    <button id="pdf">
                        <document-icon></document-icon>
                        PDF
                    </button>
                    <button id="xsl">
                        <document-icon></document-icon>
                        XSL
                    </button>
                </div>
                
                <div class="table">
                    ${this.rows.map(row => this.generateRow(row)).join("")}
                </div>

            </section>
            
            <section class="general list-of-3">
                <teaser-component data='${JSON.stringify(this.teaser1)}'></teaser-component>            
                <teaser-component data='${JSON.stringify(this.teaser2)}'></teaser-component>            
                <teaser-component data='${JSON.stringify(this.teaser3)}'></teaser-component>            
            </section>
        `;

        document.querySelectorAll("#pdf, #xsl").forEach(item => {
            item.addEventListener("click", this.handleExport);
        })
    }

    disconnectedCallback() {
        document.querySelectorAll("#pdf, #xsl").forEach(item => {
            item.removeEventListener("click", this.handleExport);
        })
    }

    handleExport() {
        console.log(`Export ${this.id}`)
    }
}

customElements.define("home-view", HomeView);
