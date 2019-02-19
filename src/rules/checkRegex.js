/**
 * @param {string} value - value to test
 * @param {object} validatorArgs - all of the properties passed to validator object but we need only regex
 * @returns {boolean} - returns if value match the provided regular expression
 */
const checkRegex = (value, { pattern }) => pattern.test(value)

export default checkRegex