import "./bubble-component.js"
import "./button-component.js"

class CalculatorView extends HTMLElement {
    sliderMin = 32000
    sliderMax = 320000
    sum = this.calculate(this.sliderMin, 1, 3.5)
    buttonSelector = "calculator-view button-component button.button"
    sliderValue = this.sliderMin
    sliderSelector = "#loan-size"
    sliderValueSelector = "data-slider-value"
    periodSelector = "#period"
    interestSelector = "#interest"
    paymentSelector = "data-payment"

    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/form.css";
                @import "../stylesheet/calculator-view.css";
            </style>

            <div class="fields">
                <div class="field slider">
                    <div class="sliderValue">
                        <span ${this.sliderValueSelector} class="title">${this.sliderValue}</span>
                        <span class="title">€</span>
                    </div>
                    <div>
                        <label for="loan-size">Loan size</label>
                        <div class="input">
                            <input id="loan-size" type="range" name="loan-size" min="${this.sliderMin}" max="${this.sliderMax}" value="${this.sliderValue}"/>
                        </div>
                    </div>
                    <div class="min-max">
                        <div class="mini">${this.sliderMin} €</div>
                        <div class="mini">${this.sliderMax} €</div>
                    </div>
                </div>
    
                <div class="field select">
                    <label for="period">Period</label>
                    <div class="select">
                        <select id="period" name="period">
                            <option value="1">1 year</option>
                            <option value="5">5 years</option>
                            <option value="10">10 years</option>
                            <option value="30">30 years</option>
                        </select>
                    </div>
                </div>
    
                <div class="field select">
                    <label for="interest">Interest</label>
                    <div class="select">
                        <select id="interest" name="interest">
                            <option value="3.5">3.5 %</option>
                            <option value="4.5">4.5 %</option>
                            <option value="5.5">5.5 %</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="overview">
                <div class="total">
                    <div>Monthly payment</div>
                    <div class="payment">
                        <span ${this.paymentSelector} class="title">${this.sum}</span>
                        <span class="valuta">€</span>
                    </div>
                </div>
                <button-component text="Apply"></button-component>
            </div>
        `;

        this.querySelector(this.buttonSelector).addEventListener("click", () => this.handleClick());
        this.querySelector(this.sliderSelector).addEventListener("change", () => this.handleSliderChange());
        this.querySelector(this.periodSelector).addEventListener("change", () => this.handleChange());
        this.querySelector(this.interestSelector).addEventListener("change", () => this.handleChange());
    }

    handleClick() {
        const loanSize = document.querySelector(this.sliderSelector).value
        const period = document.querySelector(this.periodSelector).value
        const interest = document.querySelector(this.interestSelector).value
        const monthlyPayment = document.querySelector(`[${this.paymentSelector}]`).innerHTML

        console.log(`Apply pressed with data:`)
        console.log({loanSize, period, interest, monthlyPayment})
    }

    calculate(loanSize, period, interest) {
        const monthlyInterestRate = (interest / 100) / 12;
        const totalPayments = period * 12;
        const monthlyPayment = loanSize * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

        return monthlyPayment.toFixed(2)
    }

    handleChange() {
        const loanSize = document.querySelector(this.sliderSelector).value
        const period = document.querySelector(this.periodSelector).value
        const interest = document.querySelector(this.interestSelector).value

        document.querySelector(`[${this.paymentSelector}]`).innerHTML = this.calculate(loanSize, period, interest)
    }

    handleSliderChange() {
        document.querySelector(`[${this.sliderValueSelector}]`).innerHTML = document.querySelector(this.sliderSelector).value

        this.handleChange()
    }

    disconnectedCallback() {
        this.querySelector(this.sliderSelector).addEventListener("change", () => this.handleSliderChange());
        this.querySelector(this.periodSelector).addEventListener("change", () => this.handleChange());
        this.querySelector(this.interestSelector).addEventListener("change", () => this.handleChange());
        this.querySelector(this.buttonSelector).addEventListener("click", () => this.handleClick());
    }
}

customElements.define("calculator-view", CalculatorView);
