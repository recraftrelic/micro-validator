import required from './rules/required'
import checkLength from './rules/checkLength'
import checkEmail from './rules/checkEmail'
import checkUrl from './rules/checkUrl'
import checkEquals from './rules/checkEquals'
import checkRegex from './rules/checkRegex'

class microValidator {
    rules = {}

    /**
     * @param {string} rule - name of the rule
     * @param {function} validater - validater function for the rule
     * @returns {undefined}
     */
    addRule = (rule, validater) => {
        if (!this.rules[rule]) {
            this.rules[rule] = validater
        } else {
            throw new Error(`${rule} already exist`)
        }
    }

    /**
     * @param {object} config - the configuration schema of validations
     * @param {object} data - the data we have to validate
     * @returns {object} - hashmap of errors
     */
    validate = (config, data) => {

        let result = {}

        Object.keys(config).forEach(
            key => {
                let errors = []
                const validationRulesToCheck = config[key]

                Object.keys(validationRulesToCheck).forEach(
                    rule => {
                        const validatorArgs = config[key][rule]
                        const validatorFunction = this.rules[rule]
                        const isValid = validatorFunction(data[key], validatorArgs)

                        if (!isValid) {
                            errors.push(validatorArgs.errorMsg)
                        }
                    }
                )

                if (errors.length) {
                    result[key] = errors
                }
            }
        )

        return result
    }
}

const validator = new microValidator()

validator.addRule('required', required)
validator.addRule('length', checkLength)
validator.addRule('email', checkEmail)
validator.addRule('validUrl', checkUrl)
validator.addRule('equals', checkEquals)
validator.addRule('regex', checkRegex)

export default validator