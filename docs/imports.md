# Imports

With these endpoints, you can manage all aspects of the groups in your account.

View the official documentation [here](http://api.myemma.com/api/external/members.html#get--#account_id-members-imports-#import_id-members).

## Table of Contents

* [import.list(callback)](#emmaimportlistcallback)
* [import.withID(id).details(callback)](#emmaimportwithididdetailscallback)
* [import.withID(id).listMembers(callback)](#emmaimportwithididlistmemberscallback)

## Methods

### emma.import.list(callback)

Get information about all imports for this account.

* returns: An array of import details.

### emma.import.withID(id).details(callback)

Get information and statistics about this import.

* returns: Import details for the given import id.

### emma.import.withID(id).listMembers(callback)

Get a list of members affected by this import.

* returns: A list of members in the given account and import.

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"