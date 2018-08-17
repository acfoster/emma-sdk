# Emma-SDK

Node.js wrapper for the [Emma](http://myemma.com/) API.

## Usage

```js
var Emma = require('emma-sdk');

var emma = new Emma({
  publicKey: "your public key",
  privateKey: "private key",
  accountID: 1234567
});
```

You will need to generate your own API access tokens using the settings panel within Emma.

## Supported Methods

* [Fields](docs/fields.md)
* [Groups](docs/groups).md
* [Imports](docs/imports.md)
* [Mailings](docs/mailings.md)
* [Members](docs/members.md)
* [Responses](docs/responses.md)
* [Searches](docs/searches.md)
* [Webhooks](docs/webhooks.md)
* [Automation](docs/automation.md)

## To Do

* Add more tests.

# Documentation

For more information, check out the [official Emma documentation](http://api.myemma.com/).