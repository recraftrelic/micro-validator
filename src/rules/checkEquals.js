/**
 * Check if given string is equals to another specified string
 * @param {any} value - value to check
 * @param {object} validatorArgs - arguments passed upon calling the equals rule
 * @returns {boolean} - check if value is equals to specified to value
 */
const checkEquals = (value, validatorArgs) => {
    const { to } = validatorArgs
    return to === value
}

export default checkEquals