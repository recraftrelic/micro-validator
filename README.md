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

### About Me

 * [My website](http://manojsinghnegi.com) (manojsinghnegi.com)
 * [Github](http://github.com/manojsinghnegiwd) (@manojsinghnegiwd)
 * [Twitter](http://twitter.com/manojnegiwd) (@manojnegiwd)