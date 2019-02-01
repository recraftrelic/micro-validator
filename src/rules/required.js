import is from 'is_js'

/**
 * @param {value} value - value to check
 * @returns {boolean} - if value is empty or not
 */
const required = value => {
    return !is.empty(value)
}

export default required