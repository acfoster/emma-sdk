# Responses

Get overview numbers for all of your mailings and also drill down into finding out the actual members who opened a particular mailing.

View the official documentation [here](http://api.myemma.com/api/external/response.html).

## Table of Contents

  * [response.list([params], callback)](#emmaresponselistparams-callback)
  * [response.fromMailingID(id).list(callback)](#emmaresponsefrommailingididlistcallback)
  * [response.fromMailingID(id).sends(callback)](#emmaresponsefrommailingididsendscallback)
  * [response.fromMailingID(id).inProgress(callback)](#emmaresponsefrommailingididinprogresscallback)
  * [response.fromMailingID(id).deliveries(callback)](#emmaresponsefrommailingididdeliveriescallback)
  * [response.fromMailingID(id).opens(callback)](#emmaresponsefrommailingididopenscallback)
  * [response.fromMailingID(id).links(callback)](#emmaresponsefrommailingididlinkscallback)
  * [response.fromMailingID(id).clicks(callback)](#emmaresponsefrommailingididclickscallback)
  * [response.fromMailingID(id).forwards(callback)](#emmaresponsefrommailingididforwardscallback)
  * [response.fromMailingID(id).optouts(callback)](#emmaresponsefrommailingididoptoutscallback)
  * [response.fromMailindID(id).signups(callback)](#emmaresponsefrommailingididsignupscallback)
  * [response.fromMailingID(id).shares(callback)](#emmaresponsefrommailingididsharescallback)
  * [response.fromMailingID(id).customerShares(callback)](#emmaresponsefrommailingididcustomersharescallback)
  * [response.fromMailingID(id).customerShareClicks(callback)](#emmaresponsefrommailingididcustomershareclickscallback)
  * [response.fromMailingID(id).shareOverview(callback)](#emmaresponsefrommailingididshareoverviewcallback)
  * [response.share(shareID).details(callback)](#emmaresponseshareshareiddetailscallback)

## Methods

### emma.response.list([params], callback)

Get the response summary for an account. This method will return a month-based time series of data including sends, opens, clicks, mailings, forwards, and opt-outs. Test mailings and forwards are not included in the data returned.

* `params` <[Object]> Can have the following fields:
  * `include_archived` <[Boolean]> *Optional.* Flag to include archived mailings in the list.
  * `range` <[String]> *Optional.* Accepts 2 dates (YYYY-MM-DD) delimited by a tilde (~). If one of the dates is omitted, the default will be either min date or now. If a single date is provided with no tilde, then only mailings sent on that date will be included. 
    * Example: 2011-04-01~2011-09-01
* returns: A list of objects with each object representing one month.

### emma.response.fromMailingID(id).list(callback)

Get the response summary for a particular mailing. This method will return the counts of each type of response activity for a particular mailing.

* returns: A single object with the response summary.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).sends(callback)

Get the list of messages that have been sent to an MTA for delivery.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).inProgress(callback)

Get the list of messages that are in the queue, possibly sent, but not yet delivered.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).deliveries(callback)

Get the list of messages that have finished delivery. This will include those that were successfully delivered, as well as those that failed due to hard or soft bounces.

* `params` <[Object]> Can have the following fields:
  * `result` <[String]> *Optional.* Accepts options: `all`, `delivered`, `bounced`, `hard`, `soft`. Defaults to `all`.
* returns: An array of objects with the following fields:
  * `timestamp` - Time the message was delivered.
  * `delivery_type` - Delivery outcome: delivered, hard (bounce), or soft (bounce).
  * `member_id` - Id of the message addressee.
  * `email` - Email of the message addressee.
* raises: Http404 if the mailing does not exist or is not a valid mailing type - `m` for standard mailings, `t` for test mailings, or `r` for trigger mailings.

### emma.response.fromMailingID(id).opens(callback)

Get the list of opened messages for this campaign.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).links(callback)

Get a list of links for this mailing.

* returns: an array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).clicks(callback)

Get a list of clicks for this mailing.

* `params` <[Object]> Can have the following fields:
  * `member_id` <[Number]> Limits results to a single member.
  * `link_id` <[Number]> Limits results to a single link.
* returns: An array of objects with the following fields:
  * `link_id` - Id of the clicked link.
  * `timestamp` - Time the message was delivered.
  * `member_id` - Id of the message addressee.
  * `email` - Email of the message addressee.
* raises: Http404 if the mailing does not exist or is not a valid mailing type - `m` for standard mailings, `t` for test mailings, or `r` for trigger mailings.

### emma.response.fromMailingID(id).forwards(callback)

Get a list of forwards for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).optouts(callback)

Get the list of opt-outs for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).signups(callback)

Get the list of signups for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).shares(callback)

Get the list of shares for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).customerShares(callback)

Get the list of customer shares for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).customerShareClicks(callback)

Get the list of customer share clicks for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.fromMailingID(id).shareOverview(callback)

Get an overview of shares pertaining to this mailing_id.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### emma.response.share(shareID).details(callback)

Get the customer share associated with the share id.

* returns: An object.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"