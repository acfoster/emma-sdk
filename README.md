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

## To Do

* Add more tests.

## Supported Methods

**Table of Contents**

* [Fields](#fields)
  * [field.list([params], callback)](#emmafieldlistparams-callback)
  * [field.create([params], callback)](#emmafieldcreateparams-callback)
  * [field.withID(id).details([params], callback)](#emmafieldwithididdetailsparams-callback)
  * [field.withID(id).delete([params], callback)](#emmafieldwithididdetailsparams-callback)
  * [field.withID(id).clear(callback)](#emmafieldwithididclearcallback)
  * [field.withID(id).update([params], callback)](#emmafieldwithididupdateparams-callback)
* [Groups](#groups)
  * [group.list([params], callback)](#emmagrouplistparams-callback)
  * [group.create([params], callback)](#emmagroupcreateparams-callback)
  * [group.withID(id).details(callback)](#emmagroupwithididdetailscallback)
  * [group.withID(id).delete(callback)](#emmagroupwithididdeletecallback)
  * [group.withID(id).members([params], callback)](#emmagroupwithididmembersparams-callback)
  * [group.withID(id).addMembers([params], callback)](#emmagroupwithididaddmembersparams-callback)
  * [group.withID(id).removeMembers([params], callback)](#emmagroupwithididremovemembersparams-callback)
  * [group.withID(id).emptySync([params], callback)](#emmagroupwithididemptysyncparams-callback)
  * [group.withID(id).empty(details, callback)](#emmagroupwithididemptydetails-callback)
  * [group.withID(id).copyAllMembersTo(groupID, callback)](#emmagroupwithididcopyallmemberstogroupid-callback)
  * [group.withID(id).addMembersByStatus(details, callback)](#emmagroupwithididaddmembersbystatusdetails-callback)
  * [group.withID(id).update([params], callback)](#emmagroupwithididupdateparams-callback)
* [Imports](#imports)
  * [import.list(callback)](#emmaimportlistcallback)
  * [import.withID(id).details(callback)](#emmaimportwithididdetailscallback)
  * [import.withID(id).listMembers(callback)](#emmaimportwithididlistmemberscallback)
* [Mailings](#mailings)
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
* [Members](#members)
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
* [Responses](#responses)
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
* [Searches](#searches)
  * [search.list(callback)](#emmasearchlistcallback)
  * [search.create([params], callback)](#emmasearchcreateparams-callback)
  * [search.withID(id).details([params], callback)](#emmasearchwithididdetailsparams-callback)
  * [search.withID(id).update([params], callback)](#emmasearchwithididupdateparams-callback)
  * [search.withID(id).members(callback)](#emmasearchwithididmemberscallback)
  * [search.withID(id).delete(callback)](#emmasearchwithididdeletecallback)
* [Webhooks](#webhooks)
  * [webhook.list(callback)](#emmawebhooklistcallback)
  * [webhook.events(callback)](#emmawebhookeventscallback)
  * [webhook.create([params], callback)](#emmawebhookcreateparams-callback)
  * [webhook.withID(id).details(callback)](#emmawebhookwithididdetailscallback)
  * [webhook.withID(id).update([params], callback)](#emmawebhookwithididupdateparams-callback)
  * [webhook.withID(id).delete(callback)](#emmawebhookwithididdeletecallback)
  * [webhook.deleteAll(callback)](#emmawebhookdeleteallcallback)
* [Automation](#automation)
  * [emma.automation.list(callback)](#emmaautomationlistcallback)
  * [emma.automation.withID(id).details(callback)](#emmaautomationwithididdetailscallback)
  * [emma.automation.getCounts(callback)](#emmaautomationgetcountscallback)

### Fields

#### emma.field.list([params], callback)

Gets a list of this account's defined fields.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted fields.
* returns: An array of fields.

#### emma.field.create([params], callback)

Create a new field. There must not already be a field with this name.

* `params` <[Object]> Can have he following fields:
  * `shortcut_name` <[String]> The internal name for this field.
  * `display_name` <[String]> Display name, used for forms and reports.
  * `field_type` <[String]> The type of value this field will contain. Accepts one of text, text[], numeric, boolean, date, or timestamp.
  * `widget_type` <[String]> The type of widget this field will display as. Accepts one of text, long, checkbox, select_multiple, check_multiple, radio, date, select_one, or number.
  * `column_order` <[Number]> Order of this column in lists.
* returns: A reference to the new field.

#### emma.field.withID(id).details([params], callback)

Gets the detailed information about a particular field.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Show a field even if it has been deleted.
* returns: A field.

####  emma.field.withID(id).delete(callback)

Deleted a field.

* returns: `True` if the field is deleted, `False` otherwise.

#### emma.field.withID(id).clear(callback)

Clear the member data for the specified field.

* returns: `True` if all of the member field data is deleted.

#### emma.field.withID(id).update([params], callback)

Updates an existing field.

* `fields` <[Object]> Key value pairs of field name and new value.
* returns: A reference to the updated field.

### Groups

#### emma.group.list([params], callback)

Get a basic listing of all active member groups for a single account.

* `params` <[Object]> Can have the following fields:
  * `group_types` <[String]> Accepts a comma-separated string with one or more of the following group types: 'g' (group), 't' (test), 'h' (hidden), 'all' (all). Defaults to 'g'.
* returns: An array of groups.

#### emma.group.create([params], callback)

Create one or more new member groups.

* `params` <[Object]> Can have the following fields:
  * `groups` <[Array]> An array of group objects. Each object must contain a group_name parameter.
* returns: An array of the new group ids and group names.

#### emma.group.withID(id).details(callback)

Get the detailed information for a single member group.

* returns: A group.
* raises: Http404 if the group does not exist.

#### emma.group.withID(id).delete(callback)

Delete a single member group.

* returns: `True` if the group is deleted.
* raises: Http404 if the group does not exist.

#### emma.group.withID(id).members([params], callback)

Get the members in a single active member group.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Include deleted members. Defaults to `False`.
* returns: An array of members.
* raises: Http404 if the group does not exist.

#### emma.group.withID(id).addMembers([params], callback)

* `params` <[Object]> Can have the following fields:
  * `member_ids` <[Array]> An array of member ids.
* returns: An array of references to the members added to the group. If a member already exists in the group or is not a valid member, that reference will not be returned.
* raises: Http404 if the group does not exist.

#### emma.group.withID(id).removeMembers([params], callback)

Remove members from a single active member group.

* `params` <[Object]> Can have the following fields:
  * `member_ids` <[Array]> An array of member ids.
* returns: An array of references to the removed members.
* raises: Http404 if the group does not exist.

#### emma.group.withID(id).emptySync([params], callback)

Remove members from a single active member group.

* `params` <[Object]> Can have the following fields:
  * `member_status_id` <[String]> *Optional.* This is ‘a’ (active), ‘o’ (optout), or ‘e’ (error).
* returns: An array of references to the removed members.
* raises: Http404 if the group does not exist.

#### emma.group.withID(id).empty(details, callback)

Delete all members in this group with the specified status. Remove those members from all groups as a background job. The member_status_id parameter must be set.

* `params` <[Object]> Can have the following fields:
  * `member_status_id` <[String]> This is ‘a’ (active), ‘o’ (optout), or ‘e’ (error).
* returns: An array of references to the removed members.
* raises: Http404 if the group does not exist.

#### emma.group.withID(id).copyAllMembersTo(groupID, callback)

Copy all the users of one group into another group.

* `params` <[Object]> Can have the following fields:
  * `member_status_id` <[Array]> This is ‘a’ (active), ‘o’ (optout), or ‘e’ (error).
* returns: `True`
* raises: Http404 if the group does not exist.

#### emma.group.withID(id).addMembersByStatus(details, callback)

Copy all account members of one or more statuses into a group.

* `params` <[Object]> Can have the following fields:
  * `group_id` <[Array]<[String]>> This is ‘a’ (active), ‘o’ (optout), and/or ‘e’ (error).
* returns: `True` if the update was successful.
* raises: Http404 if the group does not exist.

#### emma.group.withID(id).update([params], callback)

Update information for a single member group.

* `params` <[Object]> Can have the following fields:
  * `group_id` <[String]> Updated group name.
* returns: `True` if the update was successful.
* raises: Http404 if the group does not exist.

### Imports

#### emma.import.list(callback)

Get information about all imports for this account.

* returns: An array of import details.

#### emma.import.withID(id).details(callback)

Get information and statistics about this import.

* returns: Import details for the given import id.

#### emma.import.withID(id).listMembers(callback)

Get a list of members affected by this import.

* returns: A list of members in the given account and import.

### Mailings

#### emma.mailing.list([params], callback)

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

#### emma.mailing.validate([params], callback)

Validate that a mailing has valid personalization-tag syntax. Checks tag syntax in three params:

* `params` <[Object]> Can have the following fields:
  * `html_body` <[String]> The HTML contents of the mailing.
  * `plaintext` <[String]> *Optional.* The plaintext contents of the mailing.
  * `subject` <[String]> The subject of the mailing.
* returns: `True` if the update was successful.
* raises: Http400 if any tags are invalid. The response body will have information about the invalid tags.

#### emma.mailing.withID(id).details(callback)

Get detailed information for one mailing.

* returns: A mailing.
* Raises: Http404 if no mailing is found.

#### emma.mailing.withID(id).resend([params], callback)

Send a prior mailing to additional recipients. A new mailing will be created that inherits its content from the original.

* `params` <[Object]> Can have the following fields:
  * `sender` <[String]> The message sender. If this is not supplied, the sender of the original mailing will be used.
  * `heads_up_emails` <[Array]> A list of email addresses that heads-up notification emails will be sent to.
  * `recipient_emails` <[Array]> An array of email addresses to which the new mailing should be sent.
  * `recipient_groups` <[Array]> An array of member groups to which the new mailing should be sent.
  * `recipient_searches` <[Array]> A list of searches that this mailing should be sent to.
* returns: A reference to the new mailing.
* raises: Http404 if no mailing is found.

#### emma.mailing.withID(id).update([params], callback)

Update status of a current mailing. This method can be used to control the progress of a mailing by pausing, canceling or resuming it. Once a mailing is canceled it can’t be resumed, and will not show in the normal mailing_list output.

* `params` <[Object]> Can have the following fields:
  * `status` <[String]> Can be 'canceled', 'paused', or 'ready'.
* returns: The mailing's new status.

#### emma.mailing.withID(id).members(callback)

Get the list of members to whom the given mailing was sent. This does not include groups or searches.

* returns: An array of members including status and member fields.
* raises: Http404 if no mailing is found.

#### emma.mailing.withID(id).delete(callback)

Sets archived timestamp for a mailing so it is no longer included in mailing_list.

* returns: `True` if the mailing is successfully archived.

#### emma.mailing.withID(id).cancel(callback)

Cancels a mailing that has a current status of pending or paused.

* returns: `True` if mailing marked as canceled.
* raises: Http404 if it has any other status.

#### emma.mailing.withID(id).getMessageToMember(id).all(callback)

Gets the personalized message content as sent to a specific member as part of the specified mailing.

* returns: 	Message content from a mailing, personalized for a member. The response will contain all parts of the mailing.
* raises: Http404 if no message is found.

#### emma.mailing.withID(id).getMessageToMember(id).html(callback)

Gets the personalized message content as sent to a specific member as part of the specified mailing.

* returns: 	Message content from a mailing, personalized for a member. The response will contain HTML of the mailing.
* raises: Http404 if no message is found.

#### emma.mailing.withID(id).getMessageToMember(id).plaintext(callback)

Gets the personalized message content as sent to a specific member as part of the specified mailing.

* returns: 	Message content from a mailing, personalized for a member. The response will contain plaintext of the mailing.
* raises: Http404 if no message is found.

#### emma.mailing.withID(id).getMessageToMember(id).subject(callback)

Gets the personalized message content as sent to a specific member as part of the specified mailing.

* returns: 	Message content from a mailing, personalized for a member. The response will contain the subject of the mailing.
* raises: Http404 if no message is found.

#### emma.mailing.withID(id).forwardToMembers(memberID, details, callback)

Forward a previous message to additional recipients. If these recipients are not already in the audience, they will be added with a status of FORWARDED.

* `params` <[Object]> Can have the following fields:
  * `recipient_emails` <[Array]> An array of email addresses to which to forward the specified message.
  * `note` <[String]> A note to include in the forward. This note will be HTML encoded and is limited to 500 characters.
* returns: A reference to the new mailing.
* raises: Http404 if no message is found.

#### emma.mailing.withID(id).groups(callback)

Get the groups to which a particular mailing was sent.

* returns: An array of groups.
* raises: Http404 if no mailing is found.

#### emma.mailing.withID(id).searches(callback)

Get all searches associated with a sent mailing.

* returns: An array of searches.
* raises: Http404 if no mailing is found.

#### emma.mailing.withID(id).headsup(callback)

Get heads-up email address(es) related to a mailing.

* returns: An array of heads-up email addresses.
* raises: Http404 if no mailing is found.

### Members

#### emma.member.list([params], callback)

Get a basic listing of all members in an account.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted members.
* returns: A list of members in a given account.

#### emma.member.bulkAdd([params], callback)

Add new members or update existing members in bulk.

* `params` <[Object]> Can have the following fields:
  * `members` <[Array]<[Object]>> An array of members to update. A member is an object of member emails and field values to import. The only required field is “email”. All other fields are treated as the name of a member field.
  * `automate_field_changes` <[Boolean]> *Optional.* When set to `True`, updates made by this call will trigger field change workflows when appropriate.
  * `source_filename` <[String]> An arbitrary string to associate with this import. This should generally be set to the filename that the user uploaded.
  * `add_only` <[Boolean]> *Optional.* Only add new members, ignore existing members.
  * `group_ids` <[Array]<[Number]>> *Optional.* Add imported members to this list of groups.
* returns: An import id.

#### emma.member.addOne([params], callback)

Adds or updates a single audience member.

* `params` <[Object]> Can have the following fields:
  * `email` <[String]> Email address of member to add or update.
  * `fields` <[Object]> Names and values of user-defined fields to update.
  * `group_ids` <[Array]<[Number]>> *Optional.* Add imported members to this list of groups.
  * `field_triggers` <[Boolean]> *Optional.* Fires related field change autoresponders when set to `True`.
* returns: The member_id of the new or updated member, whether the member was added or an existing member was updated, and the status of the member. The status will be reported as ‘a’ (active), ‘e’ (error), or ‘o’ (optout).

> **NOTE:** Members who are added to your audience using this API call will not appear in “recent activity” searches within your account.
> If you are using Signup trigger events in Automation, please see this guide for more information on how this API call affects those trigger events.

#### emma.member.signup([params], callback)

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

#### emma.member.bulkDelete([params], callback)

Delete an array of members. The members will be marked as deleted and cannot be retrieved.

* `params` <[Object]> Can have the following fields:
  * `member_ids` <[Array]> An array of member ids to delete.
* returns: `True` if all members are successfully deleted, otherwise `False`.

#### emma.member.bulkUpdateStatus([params], callback)

Change the status of an array of members. The members will have their member_status_id updated.

* `params` <[Object]> Can have the following fields:
  * `member_ids` <[Array]> The array of member ids to change.
  * `status_to` <[String]> The new status for the given members. Accepts one of `a` (active), `e` (error), `o` (optout).
* returns: `True` if the members are successfully updated, otherwise `False`.

#### emma.member.multiRemoveFromGroups([params], callback)

Remove multiple members from groups.

* `params` <[Object]> Can have the following fields:
  * `member_ids` <[Array]> Member ids to remove from the given groups.
  * `group_ids` <[Array]> Group ids from which to remove the given members.
* returns: `True` if the members are deleted, otherwise `False`.
* raises: Http404 if any of the members or groups do not exist.

#### emma.member.deleteAll([params], callback)

Delete all members.

* `params` <[Object]> Can have the following fields:
  * `member_status_id` <[String]> Accepts one of `a` (active), `e` (error), `o` (optout).
* returns: `True` if the members are deleted.

#### emma.member.withID(id).details([params], callback)

Get detailed information on a particular member, including all custom fields.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted members.
* returns: A single member if one exists.
* raises: Http404 if no member is found.

#### emma.member.withID(id).update([params], callback)

Update the information for an existing member (even if they are marked as deleted).

* `params` <[Object]> Can have the following fields:
  * `email` <[String]> A new email address for the member.
  * `status_to` <[String]> A new status for the member. Accepts one of `a` (active), `e` (error), `o` (optout).
  * `fields` <[Array]<[Object]>> An array of fields with associated values for this member.
  * `field_triggers` <[Boolean]> *Optional.* Fires related field change autoresponders when set to `True`.
* returns: `True` if the member was updated successfully.
* raises: Http404 if no member is found.

> **NOTE** This method allows the email address to be updated (which cannot be done with a POST, since in that case the email address is used to identify the member).

#### emma.member.withID(id).getOptOut(callback)

If a member has been opted out, returns the details of their opt-out, specifically date and mailing_id.

* returns: Member opt-out date and mailing if the member is opted out.
* raises: Http404 if no member is found.

#### emma.member.withID(id).getMailings(callback)

Get the entire mailing history for a member.

* returns: Message history details for the specified member.

#### emma.member.withID(id).delete(callback)

Delete the specified member. The member, along with any associated response and history information, will be completely removed from the database.

* returns: `True` if the member is deleted.
* raises: Http404 if no member is found.

#### emma.member.withID(id).groups.list(callback)

Get the groups to which a member belongs.

* returns: An array of groups.
* raises: Http404 if no member is found

#### emma.member.withID(id).groups.add([params], callback)

Add a single member to one or more groups.

* `params` <[Object]> Can have the following fields:
  * `group_ids` <[Array]> Group ids to which to add this member.
* returns: An array of ids of the affected groups.
* raises: Http404 if no member is found

#### emma.member.withID(id).groups.remove([params], callback)

Remove a single member from one or more groups.

* `params` <[Object]> Can have the following fields:
  * `group_ids` <[Array]> Group ids to which to remove this member.
* returns: An array of references to the affected groups.
* raises: Http404 if no member is found.

#### emma.member.withID(id).groups.removeAll(callback)

Remove the specified member from all groups.

* returns: `True` if the member is removed from all groups.
* raises: Http404 if no member is found.

#### emma.member.withEmail(email).details([params], callback)

Get detailed information on a particular member, including all custom fields, by email address instead of ID.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted members.
* returns: A single member if one exists.
* raises: Http404 if no member is found.

#### emma.member.withEmail(email).optOut(callback)

Update a member’s status to opt-out keyed on email address instead of an ID.

* returns: `True` if member status change was successful or member was already opted out.
* raises: Http404 if no member is found.

#### emma.member.changeStatusFrom(fromStatus).to(toStatus, callback)

Update the status for a group of members, based on their current status.

* `fromStatus` <[String]> Valid statuses are `a` (active), `e` (error), `f` (forwarded), `o` (optout).
* `toStatus` <[String]> Valid statuses are `a` (active), `e` (error), `f` (forwarded), `o` (optout).
* returns: `True'.
* raises: Http400 if the specified status is is invalid.

#### emma.member.changeStatusFrom(fromStatus).to(toStatus).withConditions([params], callback)

Update the status for a group of members, based on their current status.

* `fromStatus` <[String]> Valid statuses are `a` (active), `e` (error), `f` (forwarded), `o` (optout).
* `toStatus` <[String]> Valid statuses are `a` (active), `e` (error), `f` (forwarded), `o` (optout).
* `params` <[Object]> Can have the following fields:
  * `group_id` <[String]> *Optional.* Limit the update to members of the specified group.
* returns: `True'.
* raises: Http400 if the specified status is is invalid.

### Responses

#### emma.response.list([params], callback)

Get the response summary for an account. This method will return a month-based time series of data including sends, opens, clicks, mailings, forwards, and opt-outs. Test mailings and forwards are not included in the data returned.

* `params` <[Object]> Can have the following fields:
  * `include_archived` <[Boolean]> *Optional.* Flag to include archived mailings in the list.
  * `range` <[String]> *Optional.* Accepts 2 dates (YYYY-MM-DD) delimited by a tilde (~). If one of the dates is omitted, the default will be either min date or now. If a single date is provided with no tilde, then only mailings sent on that date will be included. 
    * Example: 2011-04-01~2011-09-01
* returns: A list of objects with each object representing one month.

#### emma.response.fromMailingID(id).list(callback)

Get the response summary for a particular mailing. This method will return the counts of each type of response activity for a particular mailing.

* returns: A single object with the response summary.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).sends(callback)

Get the list of messages that have been sent to an MTA for delivery.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).inProgress(callback)

Get the list of messages that are in the queue, possibly sent, but not yet delivered.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).deliveries(callback)

Get the list of messages that have finished delivery. This will include those that were successfully delivered, as well as those that failed due to hard or soft bounces.

* `params` <[Object]> Can have the following fields:
  * `result` <[String]> *Optional.* Accepts options: `all`, `delivered`, `bounced`, `hard`, `soft`. Defaults to `all`.
* returns: An array of objects with the following fields:
  * `timestamp` - Time the message was delivered.
  * `delivery_type` - Delivery outcome: delivered, hard (bounce), or soft (bounce).
  * `member_id` - Id of the message addressee.
  * `email` - Email of the message addressee.
* raises: Http404 if the mailing does not exist or is not a valid mailing type - `m` for standard mailings, `t` for test mailings, or `r` for trigger mailings.

#### emma.response.fromMailingID(id).opens(callback)

Get the list of opened messages for this campaign.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).links(callback)

Get a list of links for this mailing.

* returns: an array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).clicks(callback)

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

#### emma.response.fromMailingID(id).forwards(callback)

Get a list of forwards for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).optouts(callback)

Get the list of opt-outs for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).signups(callback)

Get the list of signups for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).shares(callback)

Get the list of shares for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).customerShares(callback)

Get the list of customer shares for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).customerShareClicks(callback)

Get the list of customer share clicks for this mailing.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.fromMailingID(id).shareOverview(callback)

Get an overview of shares pertaining to this mailing_id.

* returns: An array of objects.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

#### emma.response.share(shareID).details(callback)

Get the customer share associated with the share id.

* returns: An object.
* raises: Http404 if the mailing does not exist or if the mailing is not valid mailing type - `m` for standard mailings, `t` for test mailings and `r` for trigger mailings.

### Searches

#### emma.search.list(callback)

Retrieve a list of saved searches.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted searches.
* returns: An array of searches

#### emma.search.create([params], callback)

Create a saved search. The detail of a search is specified in a JSON structure that describes the clauses to be applied using groups of filter type, operator and value. Where the filter type is member_field, the referenced field should be specified by joining with a colon. For example:

```json
["and",
    ["or",
        ["group", "eq", "my list"],
        ["group", "contains", "old"]
    ],
    ["not", ["member_field", "soup", "eq", "lentil"]],
    ["opened", 123249, "between", "2011-01-22, 2011-01-31"],
    ["clicked", 83927]
]
```

* `params` <[Object]> Can have the following fields:
  * `criteria` <[Array]>  A combination of search conditions, as described above.
  * `name` <[String]> A name used to describe this search.
* returns: The id of the new search.
* raises: Http404 if search is invalid.

#### emma.search.withID(id).details([params], callback)

Get the details for a saved search.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]>  *Optional.* Flag to include deleted searches.
* returns: A search.
* raises: Http404 if the search does not exist.

#### emma.search.withID(id).update([params], callback)

Update a saved search. No parameters are required, but either the name or criteria parameter must be present for an update to occur.

* `params` <[Object]> Can have the following fields:
  * `criteria` <[Array]> A combination of search conditions, as described above.
  * `name` <[String]> A name used to describe this search.
* returns: `True` if update was successful.
* raises: Http404 if the search does not exist or if search criteria is invalid.

#### emma.search.withID(id).members(callback)

Get the members matching the search.

* returns: An array of members.
* raises: Http404 if the search does not exist.

#### emma.search.withID(id).delete(callback)

Get the details for a saved search.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted searches.
* returns: A search.
* raises: Http404 if the search does not exist.

### Webhooks

#### emma.webhook.list(callback)

Get a basic listing of all webhooks associated with an account.

* returns: A list of webhooks that belong to the given account.

#### emma.webhook.events(callback)

Get a listing of all event types that are available for webhooks.

* returns: 	A list of event types and descriptions.

#### emma.webhook.create([params], callback)

Create a new webhook.

* `params` <[Object]> Can have the following fields:
  * `event` <[String]> The name of an event to register this webhook for.
  * `url` <[String]> The URL to call when the event happens.
* returns: The id of the created webhook.

#### emma.webhook.withID(id).details(callback)

Get information for a specific webhook belonging to a specific account.

* returns: Details for a single webhook.
* raises: Http404 if no webhook found.

#### emma.webhook.withID(id).update([params], callback)

Update an existing webhook.

* `params` <[Object]> Can have the following fields:
  * `event` <[String]> The name of an event to register this webhook for.
  *  `url` <[String]> The URL to call when the event happens.
* returns: The id of the updated webhook, or `False` if the update failed.
* raises: Http404 if the webhook cannot be found.

#### emma.webhook.withID(id).delete(callback)

Deletes an existing webhook.

* returns: `True` if the webhook deleted successfully.
* raises: Http404 if no webhook found.

#### emma.webhook.deleteAll(callback)

Delete all webhooks registered for an account.

* returns: `True` if the webhooks deleted successfully.

### Automation

#### emma.automation.list(callback)

Gets a list of this account’s automation workflows.

* returns: A list of automation workflows in the given account.

#### emma.automation.withID(id).details(callback)

Gets detailed information about a single workflow.

* returns: A single workflow if one exists
* raises: Http404 if no workflow is found.

#### emma.automation.getCounts(callback)

Gets the counts of workflows for this account by workflow state.

* returns: Counts for the workflow by state (`active`, `inactive` and `draft`).

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"