# Webhooks

You can manage your webhooks with these endpoints.

View the official documentation [here](http://api.myemma.com/api/external/webhooks.html).

## Table of Contents

* [webhook.list(callback)](#emmawebhooklistcallback)
* [webhook.events(callback)](#emmawebhookeventscallback)
* [webhook.create([params], callback)](#emmawebhookcreateparams-callback)
* [webhook.withID(id).details(callback)](#emmawebhookwithididdetailscallback)
* [webhook.withID(id).update([params], callback)](#emmawebhookwithididupdateparams-callback)
* [webhook.withID(id).delete(callback)](#emmawebhookwithididdeletecallback)
* [webhook.deleteAll(callback)](#emmawebhookdeleteallcallback)

## Methods

### emma.webhook.list(callback)

Get a basic listing of all webhooks associated with an account.

* returns: A list of webhooks that belong to the given account.

### emma.webhook.events(callback)

Get a listing of all event types that are available for webhooks.

* returns: 	A list of event types and descriptions.

### emma.webhook.create([params], callback)

Create a new webhook.

* `params` <[Object]> Can have the following fields:
  * `event` <[String]> The name of an event to register this webhook for.
  * `url` <[String]> The URL to call when the event happens.
* returns: The id of the created webhook.

### emma.webhook.withID(id).details(callback)

Get information for a specific webhook belonging to a specific account.

* returns: Details for a single webhook.
* raises: Http404 if no webhook found.

### emma.webhook.withID(id).update([params], callback)

Update an existing webhook.

* `params` <[Object]> Can have the following fields:
  * `event` <[String]> The name of an event to register this webhook for.
  *  `url` <[String]> The URL to call when the event happens.
* returns: The id of the updated webhook, or `False` if the update failed.
* raises: Http404 if the webhook cannot be found.

### emma.webhook.withID(id).delete(callback)

Deletes an existing webhook.

* returns: `True` if the webhook deleted successfully.
* raises: Http404 if no webhook found.

### emma.webhook.deleteAll(callback)

Delete all webhooks registered for an account.

* returns: `True` if the webhooks deleted successfully.

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"