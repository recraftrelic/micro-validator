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
microValidor doesn't control what options you pass in `validationSchema` because developers can easily role their own custom rules. Only option `errorMsg` is valid. You can pass `errorMsg` to rules which will be returned if the validation fails for a specific rule.

Inbuilt rules
-----------------------

### 1. required
Checks if a value is empty or not

```javascript
{
    // your field name for demo I am using *key*
    key: {
        required: {
            errorMsg: 'key is required'
        }
    }
}
```

### 2. length
Check if the length of a given string falls between min and max ( You can pass min and max in the options )

```javascript
{
    // your field name for demo I am using *key*
    key: {
        length: {
            min: 8,
            max: 16,
            errorMsg: 'key length should be between 8 and 16'
        }
    }
}
```

### 3. email
Check if a given string is a valid email or not

```javascript
{
    // your field name for demo I am using *key*
    key: {
        email: {
            errorMsg: 'Please enter a valid email'
        }
    }
}
```

### 4. validUrl
Check if a given string is a valid url or not

```javascript
{
    // your field name for demo I am using *key*
    key: {
        validUrl: {
            errorMsg: 'key should be a valid URL'
        }
    }
}
```

### 5. equals
Check if a given value is equals `to` value provided

```javascript
{
    // your field name for demo I am using *key*
    key: {
        equals: {
            to: 'password', // you can pass anything here for e.g. variables
            errorMsg: 'key and other value are not same'
        }
    }
}
```

### 6. regex
Check if a given value matches provided `regex`

```javascript
{
    // your field name for demo I am using *key*
    key: {
        regex: {
            pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
            errorMsg: 'Please enter a valid Phone Number'
        }
    }
}
```

microValidator focus is to become an extensible validation library for Javascript that is why there is not many inbuilt rules. You can always create your own custom rules or contribute to this project.

### About Me

 * [My website](http://manojsinghnegi.com) (manojsinghnegi.com)
 * [Github](http://github.com/manojsinghnegiwd) (@manojsinghnegiwd)
 * [Twitter](http://twitter.com/manojnegiwd) (@manojnegiwd)