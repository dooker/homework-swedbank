class FooterDisclaimer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/footer-disclaimer.css";
            </style>

            <div class="disclaimer">
This is a website of companies offering financial services - Swedbank AS, Swedbank Liising AS, Swedbank P&C Insurance AS, Swedbank Life Insurance SE, and Swedbank Investeerimisfondid AS.
Before entering into any agreement read the terms and conditions of the respective service. Consult a specialist, where necessary. Swedbank AS does not provide a credit advisory service for the
purposes of the Creditors and Credit Intermediaries Act. The borrower makes the decision taking out a loan, who assesses the suitability of the loan product and contractual terms to his/her personal
loan interest, need and financial situation on the basis of the information and warnings presented by the bank and is responsible for the consequences related to concluding the agreement.
            </div>
        `;
    }
}

customElements.define("footer-disclaimer", FooterDisclaimer);
