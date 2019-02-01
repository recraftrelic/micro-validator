import is from 'is_js'
/**
 * @param {string} value - value to check if url
 * @returns {boolean} - returns if valid url
 */
const checkUrl = value => is.url(value)

export default checkUrl