# API Github

Obtain user data

## Usage Instructions
Follow next instructions

### Instalation
```
npm install ncr-github-api
```

### Usage
```
    const api = require('ncr-github-api');

    api.getUserData('username')
        .then(resp => {
            console.log(resp)
        })
        .catch(err=> {
            console.log(err)
        });
```
