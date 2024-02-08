const insertAfter = (newNode, existingNode) => {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

export const validate = fields => {
    const values = []

    // test for ALL field for value & extra fields for type
    fields.forEach(field => {
        let valid = true
        let errorText

        // reset errors
        field.classList.remove("error")
        // field.parentNode.replaceChild(`div[data-error="error"]`)

        if (field.nextSibling.dataset?.error === "error") {
            field.parentNode.removeChild(field.nextSibling)
        }

        const value = field.value
        const validateType = field.dataset.validate

        if (validateType) {
            if (validateType === "number" && !parseInt(value)) {
                valid = false
                errorText = "Amount accepts only numbers"
            }
        }

        if (!value) {
            valid = false
            errorText = "Value required"
        }

        if (!valid) {
            const error = document.createElement("div");

            error.innerHTML = errorText
            error.classList.add("error")
            error.dataset.error = "error"

            field.classList.add("error")

            insertAfter(error, field)
        }

        values.push(valid)
    })

    return values.every(v => v === true)
}
