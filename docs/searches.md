# Searches

These endpoints allow you to create, edit, and delete searches.

View the official documentation [here](http://api.myemma.com/api/external/searches.html).

## Table of Contents

* [search.list(callback)](#emmasearchlistcallback)
* [search.create([params], callback)](#emmasearchcreateparams-callback)
* [search.withID(id).details([params], callback)](#emmasearchwithididdetailsparams-callback)
* [search.withID(id).update([params], callback)](#emmasearchwithididupdateparams-callback)
* [search.withID(id).members(callback)](#emmasearchwithididmemberscallback)
* [search.withID(id).delete(callback)](#emmasearchwithididdeletecallback)

## Methods

### emma.search.list(callback)

Retrieve a list of saved searches.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted searches.
* returns: An array of searches

### emma.search.create([params], callback)

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

### emma.search.withID(id).details([params], callback)

Get the details for a saved search.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]>  *Optional.* Flag to include deleted searches.
* returns: A search.
* raises: Http404 if the search does not exist.

### emma.search.withID(id).update([params], callback)

Update a saved search. No parameters are required, but either the name or criteria parameter must be present for an update to occur.

* `params` <[Object]> Can have the following fields:
  * `criteria` <[Array]> A combination of search conditions, as described above.
  * `name` <[String]> A name used to describe this search.
* returns: `True` if update was successful.
* raises: Http404 if the search does not exist or if search criteria is invalid.

### emma.search.withID(id).members(callback)

Get the members matching the search.

* returns: An array of members.
* raises: Http404 if the search does not exist.

### emma.search.withID(id).delete(callback)

Get the details for a saved search.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted searches.
* returns: A search.
* raises: Http404 if the search does not exist.

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"