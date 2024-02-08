import "./button-component.js"
import {validate} from "./helper.js";

class PaymentView extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/form.css";
                @import "../stylesheet/payment-view.css";
            </style>

            <div class="fields" data-form="payment" data-form-validate>
                <div class="field">
                    <label for="account">Account</label>
                    <div class="select">
                        <select id="account" name="account">
                            <option value="account1">Account name 1</option>
                            <option value="account2">Account name 2</option>
                            <option value="account3">Account name 3</option>
                        </select>
                    </div>
                </div>
    
                <div class="field select">
                    <label for="saved-payments">Saved payments</label>
                    <div class="select">
                        <select id="saved-payments" name="saved-payment">
                            <option value="">Select a saved payment</option>
                            <option value="savedPayment1">Saved payment 1</option>
                            <option value="savedPayment2">Saved payment 2</option>
                            <option value="savedPayment3">Saved payment 3</option>
                        </select>
                    </div>
                </div>
    
                <div class="field select dual">
                    <label for="amount">Amount</label>
                    <div class="input">
                        <input id="amount" name="amount" data-validate="number"/>
                    </div>
                    <div class="select">
                        <select name="valuta">
                            <option>EUR</option>
                            <option>SEK</option>
                            <option>NOK</option>
                        </select>
                    </div>
                </div>
    
                <div class="field description">
                    <label for="description">Description</label>
                    <div class="input">
                        <input id="description" name="description"/>
                    </div>
                </div>
            </div>

            <div class="actions">
                <button-component text="Save" color="turquoise"></button-component>
                <button-component text="Pay"></button-component>
            </div>
        `;

        this.querySelectorAll("payment-view button-component button.button").forEach(button => {
            button.addEventListener("click", (event) => this.handleClick(event));
        })
    }

    handleClick({target}) {
        const form = document.querySelector("[data-form][data-form-validate]")
        const fields = form.querySelectorAll("input, select")
        const values = []

        if (!form || !validate(fields)) {
            return
        }

        fields.forEach(field => {
            values.push({name: field.name, value: field.value})
        })

        console.log(`${target.innerHTML.trim()} pressed with data:`)
        console.log(values)
    }

    disconnectedCallback() {
        this.querySelectorAll("button-component button.button").forEach(button => {
            button.removeEventListener("click", (event) => this.handleClick(event));
        })
    }
}

customElements.define("payment-view", PaymentView);
