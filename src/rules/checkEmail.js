import is from 'is_js'
/**
 * @param {string} value - value to check if email
 * @returns {boolean} - returns if valid email
 */
const checkEmail = value => is.email(value)

export default checkEmail