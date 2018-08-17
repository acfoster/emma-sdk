# Mailings

With these endpoints, you can get information about your mailings including their HTML contents.

View the official documentation [here](http://api.myemma.com/api/external/mailings.html).

## Table of Contents

* [mailing.list([params], callback)](#emmamailinglistparams-callback)
* [mailing.validate([params], callback)](#emmamailingvalidateparams-callback)
* [mailing.withID(id).details(callback)](#emmamailingwithididdetailscallback)
* [mailing.withID(id).resend([params], callback)](#emmamailingwithididresendparams-callback)
* [mailing.withID(id).update([params], callback)](#emmamailingwithididupdateparams-callback)
* [mailing.withID(id).members(callback)](#emmamailingwithididmemberscallback)
* [mailing.withID(id).delete(callback)](#emmamailingwithididdeletecallback)
* [mailing.withID(id).cancel(callback)](#emmamailingwithididcancelcallback)
* [mailing.withID(id).getMessageToMember(id).all(callback)](#emmamailingwithididgetmessagetomemberidallcallback)
* [mailing.withID(id).getMessageToMember(id).html(callback)](#emmamailingwithididgetmessagetomemberidhtmlcallback)
* [mailing.withID(id).getMessageToMember(id).plaintext(callback)](#emmamailingwithididgetmessagetomemberidplaintextcallback)
* [mailing.withID(id).getMessageToMember(id).subject(callback)](#emmamailingwithididgetmessagetomemberidsubjectcallback)
* [mailing.withID(id).forwardToMembers(memberID, details, callback)](#emmamailingwithididforwardtomembersmemberid-details-callback)
* [mailing.withID(id).groups(callback)](#emmamailingwithididgroupscallback)
* [mailing.withID(id).searches(callback)](#emmamailingwithididsearchescallback)
* [mailing.withID(id).headsup(callback)](#emmamailingwithididheadsupcallback)

## Methods

### emma.mailing.list([params], callback)

Get information about current mailings.

* `params` <[Object]> Can have the following fields:
  * `include_archived` <[Boolean]> *Optional.* Flag to include archived mailings in the list.
  * `mailing_types` <[String]> Accepts a comma-separated string with one or more of the following mailing types: ‘m’ (standard), ‘t’ (test), ‘r’ (trigger), ‘s’ (split). Defaults to ‘m,t’, standard and test mailings, when none are specified.
  * `mailing_statuses` <[String]> Accepts a comma-separated string with one or more of the following mailing statuses: ‘p’ (pending), ‘a’ (paused), ‘s’ (sending), ‘x’ (canceled), ‘c’ (complete), ‘u’ (unapproved), ‘f’ (failed). Defaults to ‘p,a,s,x,c,u,f’, all statuses, when none are specified.
  * `is_scheduled` <[Boolean]> Mailings that have a scheduled timestamp.
  * `with_html_body` <[Boolean]> Include the html_body content.
  * `with_plaintext` <[Boolean]> Include the plaintext content.
* returns: An array of mailings.
* raises: Http400 if invalid mailing types or statuses are specified.

### emma.mailing.validate([params], callback)

Validate that a mailing has valid personalization-tag syntax. Checks tag syntax in three params:

* `params` <[Object]> Can have the following fields:
  * `html_body` <[String]> The HTML contents of the mailing.
  * `plaintext` <[String]> *Optional.* The plaintext contents of the mailing.
  * `subject` <[String]> The subject of the mailing.
* returns: `True` if the update was successful.
* raises: Http400 if any tags are invalid. The response body will have information about the invalid tags.

### emma.mailing.withID(id).details(callback)

Get detailed information for one mailing.

* returns: A mailing.
* Raises: Http404 if no mailing is found.

### emma.mailing.withID(id).resend([params], callback)

Send a prior mailing to additional recipients. A new mailing will be created that inherits its content from the original.

* `params` <[Object]> Can have the following fields:
  * `sender` <[String]> The message sender. If this is not supplied, the sender of the original mailing will be used.
  * `heads_up_emails` <[Array]> A list of email addresses that heads-up notification emails will be sent to.
  * `recipient_emails` <[Array]> An array of email addresses to which the new mailing should be sent.
  * `recipient_groups` <[Array]> An array of member groups to which the new mailing should be sent.
  * `recipient_searches` <[Array]> A list of searches that this mailing should be sent to.
* returns: A reference to the new mailing.
* raises: Http404 if no mailing is found.

### emma.mailing.withID(id).update([params], callback)

Update status of a current mailing. This method can be used to control the progress of a mailing by pausing, canceling or resuming it. Once a mailing is canceled it can’t be resumed, and will not show in the normal mailing_list output.

* `params` <[Object]> Can have the following fields:
  * `status` <[String]> Can be 'canceled', 'paused', or 'ready'.
* returns: The mailing's new status.

### emma.mailing.withID(id).members(callback)

Get the list of members to whom the given mailing was sent. This does not include groups or searches.

* returns: An array of members including status and member fields.
* raises: Http404 if no mailing is found.

### emma.mailing.withID(id).delete(callback)

Sets archived timestamp for a mailing so it is no longer included in mailing_list.

* returns: `True` if the mailing is successfully archived.

### emma.mailing.withID(id).cancel(callback)

Cancels a mailing that has a current status of pending or paused.

* returns: `True` if mailing marked as canceled.
* raises: Http404 if it has any other status.

### emma.mailing.withID(id).getMessageToMember(id).all(callback)

Gets the personalized message content as sent to a specific member as part of the specified mailing.

* returns: 	Message content from a mailing, personalized for a member. The response will contain all parts of the mailing.
* raises: Http404 if no message is found.

### emma.mailing.withID(id).getMessageToMember(id).html(callback)

Gets the personalized message content as sent to a specific member as part of the specified mailing.

* returns: 	Message content from a mailing, personalized for a member. The response will contain HTML of the mailing.
* raises: Http404 if no message is found.

### emma.mailing.withID(id).getMessageToMember(id).plaintext(callback)

Gets the personalized message content as sent to a specific member as part of the specified mailing.

* returns: 	Message content from a mailing, personalized for a member. The response will contain plaintext of the mailing.
* raises: Http404 if no message is found.

### emma.mailing.withID(id).getMessageToMember(id).subject(callback)

Gets the personalized message content as sent to a specific member as part of the specified mailing.

* returns: 	Message content from a mailing, personalized for a member. The response will contain the subject of the mailing.
* raises: Http404 if no message is found.

### emma.mailing.withID(id).forwardToMembers(memberID, details, callback)

Forward a previous message to additional recipients. If these recipients are not already in the audience, they will be added with a status of FORWARDED.

* `params` <[Object]> Can have the following fields:
  * `recipient_emails` <[Array]> An array of email addresses to which to forward the specified message.
  * `note` <[String]> A note to include in the forward. This note will be HTML encoded and is limited to 500 characters.
* returns: A reference to the new mailing.
* raises: Http404 if no message is found.

### emma.mailing.withID(id).groups(callback)

Get the groups to which a particular mailing was sent.

* returns: An array of groups.
* raises: Http404 if no mailing is found.

### emma.mailing.withID(id).searches(callback)

Get all searches associated with a sent mailing.

* returns: An array of searches.
* raises: Http404 if no mailing is found.

### emma.mailing.withID(id).headsup(callback)

Get heads-up email address(es) related to a mailing.

* returns: An array of heads-up email addresses.
* raises: Http404 if no mailing is found.

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"