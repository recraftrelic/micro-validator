micro-validator
======
A minimalistic & extensible validation library for javascript 

## How to install
```
$ yarn add micro-validator
```

## Usage
```javascript
import microValidator from 'micro-validator' 

const validate (data) {
    const errors = microValidator.validate({
        name: {
            required: {
                errorMsg: `Company Name is required`
            }
        },
        email: {
            required: {
                errorMsg: `Email is required`
            },
            email: {
                errorMsg: `Enter a valid email`
            }
        },
        website: {
            required: {
                errorMsg: `Apply link is required`
            },
            validUrl: {
                errorMsg: `Please enter a valid url`
            }
        }
    }, data)
    
    return errors
}

validate({
    name: 'micro-validator',
    email: 'micro@validator.com',
    website: 'github.com'
})

```

Methods
===========
microValidator.addRule(rule:string, validator:function)
-----------------------
#### Add a new validation rule
Developer can add new rules to microValidator by calling `addRule` method with `rule` (rule name) and `validator` function which will validate the given input.

The provided `validator` function will receive two arguments `value` and `options` passed when defining the validation schema

If `validator` function returns `true` it means value is valid and if it returns `false` it means value is invalid.


```javascript
import microValidator from 'micro-validator' 

function checkBetween (value, options) {
    return value > options.from && options.to > value
}

microValidator.addRule('between', checkBetween)

let validationSchema = {
    count: {
        between: {
            from: 10,
            to: 20,
            errorMsg: 'Count should be between 10 to 20'
        } 
    }
}

let errors = microValidator.validate(validationSchema, { count: 21 })
console.log(errors) // { count: [ 'Count should be between 10 to 20' ] }
microValidator.validate(validationSchema, { count: 11 })
console.log(errors) // {}
```

microValidator.validate(validationSchema:object, data:object)
-----------------------
#### validate data according to validation schema provided
`validate` method takes two arguments

1. *validationSchema*: An object containing information about how to validate data
2. *data*: data to validate

`validationSchema` needs to be structured something like this
```javascript
{
    keyName1: {
        rule: { ...options },
        rule: { ...options }
    },
    keyName:2 {
        rule: { ...options }
    }
}
```
and `data` should be
```javascript
{
    keyName1: 'Hello',
    keyName2: 'World'
}
```

Where `keyName` is the property of `data` we want to apply our validation rules to, `rule` is the name of the `rule` we want to apply and `options` are the options that we want to send to `validator` function.

If all of the data validate successfully `validate` method will return an empty object. If there are some errors an object will be returned which will contains all of the errors corresponding to their property.

```javascript
{
    keyName1: [
        'first rule failed',
        'second rule faild'
    ],
    keyName2: [
        'first rule failed'
    ]
}
```
### options
microValidor doesn't control what options you pass in `validationSchema` because developers can easily role their own custom rules. Only option `errorMsg` is valid. You can `errorMsg` to rules which will be returned if the validation fails for a specific rule.

### Inbuilt validators

1. required => checkes if a value is empty or not
2. length => checked the length of given string is falls betwen min and max ( You can pass min and max in the options )
3. email => check if a give string is a valid email or not
4. validUrl => check if a give string is a valid url or not

microValidator focus is to become an extensible validation library for Javascript that is why there is not many inbuilt validator. You can always create your own custom rules and contribute to this project.

### About Me

 * [My website](http://manojsinghnegi.com) (manojsinghnegi.com)
 * [Github](http://github.com/manojsinghnegiwd) (@manojsinghnegiwd)
 * [Twitter](http://twitter.com/manojnegiwd) (@manojnegiwd)