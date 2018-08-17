# Groups

With these endpoints, you can manage all aspects of the groups in your account.

View the official documentation [here](http://api.myemma.com/api/external/groups.html).

## Table of Contents

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

## Methods

### emma.group.list([params], callback)

Get a basic listing of all active member groups for a single account.

* `params` <[Object]> Can have the following fields:
  * `group_types` <[String]> Accepts a comma-separated string with one or more of the following group types: 'g' (group), 't' (test), 'h' (hidden), 'all' (all). Defaults to 'g'.
* returns: An array of groups.

### emma.group.create([params], callback)

Create one or more new member groups.

* `params` <[Object]> Can have the following fields:
  * `groups` <[Array]> An array of group objects. Each object must contain a group_name parameter.
* returns: An array of the new group ids and group names.

### emma.group.withID(id).details(callback)

Get the detailed information for a single member group.

* returns: A group.
* raises: Http404 if the group does not exist.

### emma.group.withID(id).delete(callback)

Delete a single member group.

* returns: `True` if the group is deleted.
* raises: Http404 if the group does not exist.

### emma.group.withID(id).members([params], callback)

Get the members in a single active member group.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Include deleted members. Defaults to `False`.
* returns: An array of members.
* raises: Http404 if the group does not exist.

### emma.group.withID(id).addMembers([params], callback)

* `params` <[Object]> Can have the following fields:
  * `member_ids` <[Array]> An array of member ids.
* returns: An array of references to the members added to the group. If a member already exists in the group or is not a valid member, that reference will not be returned.
* raises: Http404 if the group does not exist.

### emma.group.withID(id).removeMembers([params], callback)

Remove members from a single active member group.

* `params` <[Object]> Can have the following fields:
  * `member_ids` <[Array]> An array of member ids.
* returns: An array of references to the removed members.
* raises: Http404 if the group does not exist.

### emma.group.withID(id).emptySync([params], callback)

Remove members from a single active member group.

* `params` <[Object]> Can have the following fields:
  * `member_status_id` <[String]> *Optional.* This is ‘a’ (active), ‘o’ (optout), or ‘e’ (error).
* returns: An array of references to the removed members.
* raises: Http404 if the group does not exist.

### emma.group.withID(id).empty(details, callback)

Delete all members in this group with the specified status. Remove those members from all groups as a background job. The member_status_id parameter must be set.

* `params` <[Object]> Can have the following fields:
  * `member_status_id` <[String]> This is ‘a’ (active), ‘o’ (optout), or ‘e’ (error).
* returns: An array of references to the removed members.
* raises: Http404 if the group does not exist.

### emma.group.withID(id).copyAllMembersTo(groupID, callback)

Copy all the users of one group into another group.

* `params` <[Object]> Can have the following fields:
  * `member_status_id` <[Array]> This is ‘a’ (active), ‘o’ (optout), or ‘e’ (error).
* returns: `True`
* raises: Http404 if the group does not exist.

### emma.group.withID(id).addMembersByStatus(details, callback)

Copy all account members of one or more statuses into a group.

* `params` <[Object]> Can have the following fields:
  * `group_id` <[Array]<[String]>> This is ‘a’ (active), ‘o’ (optout), and/or ‘e’ (error).
* returns: `True` if the update was successful.
* raises: Http404 if the group does not exist.

### emma.group.withID(id).update([params], callback)

Update information for a single member group.

* `params` <[Object]> Can have the following fields:
  * `group_id` <[String]> Updated group name.
* returns: `True` if the update was successful.
* raises: Http404 if the group does not exist.

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"