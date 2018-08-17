# Members

In addition to the various CRUD endpoints here related to members, you can also change the status of members, including opting them out.

View the official documentation [here](http://api.myemma.com/api/external/members.html).

## Table of Contents

* [member.list([params], callback)](#emmamemberlistparams-callback)
* [member.bulkAdd([params], callback)](#emmamemberbulkaddparams-callback)
* [member.addOne([params], callback)](#emmamemberaddoneparams-callback)
* [member.signup([params], callback)](#emmamembersignupparams-callback)
* [member.bulkDelete([params], callback)](#emmamembersbulkdeleteparams-callback)
* [member.bulkUpdateStatus([params], callback)](#emmamemberbulkupdatestatusparams-callback)
* [member.multiRemoveFromGroups([params], callback)](#emmamembermultiremovefromgroupsparams-callback)
* [member.deleteAll([params], callback)](#emmamemberdeleteallparams-callback)
* [member.withID(id).details([params], callback)](#emmamemberwithididdetailsparams-callback)
* [member.withID(id).update([params], callback)](#emmamemberwithididupdateparams-callback)
* [member.withID(id).getOptOut(callback)](#emmamemberwithididgetoptoutcallback)
* [member.withID(id).getMailings(callback)](#emmamemberwithididgetmailingscallback)
* [member.withID(id).delete(callback)](#emmamemberwithididdeletecallback)
* [member.withID(id).groups.list(callback)](#emmamemberwithididgroupslistcallback)
* [member.withID(id).groups.add([params], callback)](#emmamemberwithididgroupsaddparams-callback)
* [member.withID(id).groups.remove([params], callback)](#emmamemberwithididgroupsremoveparams-callback)
* [member.withID(id).groups.removeAll(callback)](#emmamemberwithididgroupsremoveallcallback)
* [member.withEmail(email).details([params], callback)](#emmamemberwithemailemaildetailsparams-callback)
* [member.withEmail(email).optOut(callback)](#emmamemberwithemailemailoptoutcallback)
* [member.changeStatusFrom(fromStatus).to(toStatus)](#emmamemberchangestatusfromfromstatustotostatus-callback)
* [member.changeStatusFrom(fromStatus).to(toStatus).withConditions([params], callback)](#emmamemberchangestatusfromfromstatustotostatuswithconditionsparams-callback)

## Methods

### emma.member.list([params], callback)

Get a basic listing of all members in an account.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted members.
* returns: A list of members in a given account.

### emma.member.bulkAdd([params], callback)

Add new members or update existing members in bulk.

* `params` <[Object]> Can have the following fields:
  * `members` <[Array]<[Object]>> An array of members to update. A member is an object of member emails and field values to import. The only required field is “email”. All other fields are treated as the name of a member field.
  * `automate_field_changes` <[Boolean]> *Optional.* When set to `True`, updates made by this call will trigger field change workflows when appropriate.
  * `source_filename` <[String]> An arbitrary string to associate with this import. This should generally be set to the filename that the user uploaded.
  * `add_only` <[Boolean]> *Optional.* Only add new members, ignore existing members.
  * `group_ids` <[Array]<[Number]>> *Optional.* Add imported members to this list of groups.
* returns: An import id.

### emma.member.addOne([params], callback)

Adds or updates a single audience member.

* `params` <[Object]> Can have the following fields:
  * `email` <[String]> Email address of member to add or update.
  * `fields` <[Object]> Names and values of user-defined fields to update.
  * `group_ids` <[Array]<[Number]>> *Optional.* Add imported members to this list of groups.
  * `field_triggers` <[Boolean]> *Optional.* Fires related field change autoresponders when set to `True`.
* returns: The member_id of the new or updated member, whether the member was added or an existing member was updated, and the status of the member. The status will be reported as ‘a’ (active), ‘e’ (error), or ‘o’ (optout).

> **NOTE:** Members who are added to your audience using this API call will not appear in “recent activity” searches within your account.
> If you are using Signup trigger events in Automation, please see this guide for more information on how this API call affects those trigger events.

### emma.member.signup([params], callback)

Takes the necessary actions to signup a member and enlist them in the provided group ids. You can send the same member multiple times and pass in new group ids to signup. This process triggers the opt-out workflow, and will send a mailing to the member on new group enlistments. If no new group ids are provided for an existing member, the endpoint will respond back with their status and member_id, performing no additional actions.

* `params` <[Object]> Can have the following fields:
  * `email` <[String]> Email address of the member to sign-up.
  * `group_ids` <[Array]<[String]>> An array of group ids to associate sign-up with.
  * `fields` <[Object]> *Optional.* Names and values of user-defined fields to update.
  * `signup_form_id` <[Number]> *Optional.* Indicate that this member used a particular signup form. This is important if you have custom mailings for a particular signup form and so that signup-based triggers will be fired.
  * `opt_in_subject` <[String]> *Optional.* Override the confirmation message subject with your own copy.
  * `opt_in_message` <[String]> *Optional.* Override the confirmation message body with your own copy. Must include the following tags: [rsvp_name], [rsvp_email], [opt_in_url], [opt_out_url].
  * `field_triggers` <[Boolean]> *Optional.* Fires related field change autoresponders when set to `True`.
  * `opt_in_confirmation` <[Boolean]> *Optional.* Sends the default plaintext confirmation email when set to `True`. Confirmation email will be sent by default if this parameter is left out.
* returns: The `member_id` of the new or updated member, whether the member was added or an existing member was updated, and the status of the member. The status will be reported as `a` (active), `e` (error), or `o` (optout).

> **NOTE** Members who are added to your audience using this API call will not appear in “recent activity” searches within your account.
> If you are using Signup trigger events in Automation, please see this guide for more information on how this API call affects those trigger events.

### emma.member.bulkDelete([params], callback)

Delete an array of members. The members will be marked as deleted and cannot be retrieved.

* `params` <[Object]> Can have the following fields:
  * `member_ids` <[Array]> An array of member ids to delete.
* returns: `True` if all members are successfully deleted, otherwise `False`.

### emma.member.bulkUpdateStatus([params], callback)

Change the status of an array of members. The members will have their member_status_id updated.

* `params` <[Object]> Can have the following fields:
  * `member_ids` <[Array]> The array of member ids to change.
  * `status_to` <[String]> The new status for the given members. Accepts one of `a` (active), `e` (error), `o` (optout).
* returns: `True` if the members are successfully updated, otherwise `False`.

### emma.member.multiRemoveFromGroups([params], callback)

Remove multiple members from groups.

* `params` <[Object]> Can have the following fields:
  * `member_ids` <[Array]> Member ids to remove from the given groups.
  * `group_ids` <[Array]> Group ids from which to remove the given members.
* returns: `True` if the members are deleted, otherwise `False`.
* raises: Http404 if any of the members or groups do not exist.

### emma.member.deleteAll([params], callback)

Delete all members.

* `params` <[Object]> Can have the following fields:
  * `member_status_id` <[String]> Accepts one of `a` (active), `e` (error), `o` (optout).
* returns: `True` if the members are deleted.

### emma.member.withID(id).details([params], callback)

Get detailed information on a particular member, including all custom fields.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted members.
* returns: A single member if one exists.
* raises: Http404 if no member is found.

### emma.member.withID(id).update([params], callback)

Update the information for an existing member (even if they are marked as deleted).

* `params` <[Object]> Can have the following fields:
  * `email` <[String]> A new email address for the member.
  * `status_to` <[String]> A new status for the member. Accepts one of `a` (active), `e` (error), `o` (optout).
  * `fields` <[Array]<[Object]>> An array of fields with associated values for this member.
  * `field_triggers` <[Boolean]> *Optional.* Fires related field change autoresponders when set to `True`.
* returns: `True` if the member was updated successfully.
* raises: Http404 if no member is found.

> **NOTE** This method allows the email address to be updated (which cannot be done with a POST, since in that case the email address is used to identify the member).

### emma.member.withID(id).getOptOut(callback)

If a member has been opted out, returns the details of their opt-out, specifically date and mailing_id.

* returns: Member opt-out date and mailing if the member is opted out.
* raises: Http404 if no member is found.

### emma.member.withID(id).getMailings(callback)

Get the entire mailing history for a member.

* returns: Message history details for the specified member.

### emma.member.withID(id).delete(callback)

Delete the specified member. The member, along with any associated response and history information, will be completely removed from the database.

* returns: `True` if the member is deleted.
* raises: Http404 if no member is found.

### emma.member.withID(id).groups.list(callback)

Get the groups to which a member belongs.

* returns: An array of groups.
* raises: Http404 if no member is found

### emma.member.withID(id).groups.add([params], callback)

Add a single member to one or more groups.

* `params` <[Object]> Can have the following fields:
  * `group_ids` <[Array]> Group ids to which to add this member.
* returns: An array of ids of the affected groups.
* raises: Http404 if no member is found

### emma.member.withID(id).groups.remove([params], callback)

Remove a single member from one or more groups.

* `params` <[Object]> Can have the following fields:
  * `group_ids` <[Array]> Group ids to which to remove this member.
* returns: An array of references to the affected groups.
* raises: Http404 if no member is found.

### emma.member.withID(id).groups.removeAll(callback)

Remove the specified member from all groups.

* returns: `True` if the member is removed from all groups.
* raises: Http404 if no member is found.

### emma.member.withEmail(email).details([params], callback)

Get detailed information on a particular member, including all custom fields, by email address instead of ID.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted members.
* returns: A single member if one exists.
* raises: Http404 if no member is found.

### emma.member.withEmail(email).optOut(callback)

Update a member’s status to opt-out keyed on email address instead of an ID.

* returns: `True` if member status change was successful or member was already opted out.
* raises: Http404 if no member is found.

### emma.member.changeStatusFrom(fromStatus).to(toStatus, callback)

Update the status for a group of members, based on their current status.

* `fromStatus` <[String]> Valid statuses are `a` (active), `e` (error), `f` (forwarded), `o` (optout).
* `toStatus` <[String]> Valid statuses are `a` (active), `e` (error), `f` (forwarded), `o` (optout).
* returns: `True'.
* raises: Http400 if the specified status is is invalid.

### emma.member.changeStatusFrom(fromStatus).to(toStatus).withConditions([params], callback)

Update the status for a group of members, based on their current status.

* `fromStatus` <[String]> Valid statuses are `a` (active), `e` (error), `f` (forwarded), `o` (optout).
* `toStatus` <[String]> Valid statuses are `a` (active), `e` (error), `f` (forwarded), `o` (optout).
* `params` <[Object]> Can have the following fields:
  * `group_id` <[String]> *Optional.* Limit the update to members of the specified group.
* returns: `True'.
* raises: Http400 if the specified status is is invalid.

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"