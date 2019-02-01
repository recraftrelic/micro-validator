import is from 'is_js'
/**
 * @param {object} value - location object to validate
 * @returns {boolean} - returns if valid location
 */
const checkLocation = location =>
    !(is.empty(location.value) || is.undefined(location.value))

export default checkLocation