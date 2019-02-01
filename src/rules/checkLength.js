/**
 * @param {string} value - value to check length of
 * @param {object} validatorArgs - arguments passed upon calling the length rule
 * @returns {boolean} - check if length is correct
 */
const checkLength = (value, validatorArgs) => {

    let isValid = true

    if (validatorArgs.min) {
        if (value.length < validatorArgs.min) {
            isValid = false
            return isValid
        }
    }

    if (validatorArgs.max) {
        if (value.length > validatorArgs.max) {
            isValid = false
            return isValid
        }
    }

    return isValid
}

export default checkLength