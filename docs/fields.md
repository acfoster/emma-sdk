# Fields

These endpoints let you create, edit, update and delete all of the custom fields in your account.

View the official documentation [here](http://api.myemma.com/api/external/fields.html).

## Table of Contents

* [field.list([params], callback)](#emmafieldlistparams-callback)
* [field.create([params], callback)](#emmafieldcreateparams-callback)
* [field.withID(id).details([params], callback)](#emmafieldwithididdetailsparams-callback)
* [field.withID(id).delete(callback)](#emmafieldwithididdeletecallback)
* [field.withID(id).clear(callback)](#emmafieldwithididclearcallback)
* [field.withID(id).update([params], callback)](#emmafieldwithididupdateparams-callback)

## Methods

### emma.field.list([params], callback)

Gets a list of this account's defined fields.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Flag to include deleted fields.
* returns: An array of fields.

### emma.field.create([params], callback)

Create a new field. There must not already be a field with this name.

* `params` <[Object]> Can have he following fields:
  * `shortcut_name` <[String]> The internal name for this field.
  * `display_name` <[String]> Display name, used for forms and reports.
  * `field_type` <[String]> The type of value this field will contain. Accepts one of text, text[], numeric, boolean, date, or timestamp.
  * `widget_type` <[String]> The type of widget this field will display as. Accepts one of text, long, checkbox, select_multiple, check_multiple, radio, date, select_one, or number.
  * `column_order` <[Number]> Order of this column in lists.
* returns: A reference to the new field.

### emma.field.withID(id).details([params], callback)

Gets the detailed information about a particular field.

* `params` <[Object]> Can have the following fields:
  * `deleted` <[Boolean]> *Optional.* Show a field even if it has been deleted.
* returns: A field.

### emma.field.withID(id).delete(callback)

Deleted a field.

* returns: `True` if the field is deleted, `False` otherwise.

### emma.field.withID(id).clear(callback)

Clear the member data for the specified field.

* returns: `True` if all of the member field data is deleted.

### emma.field.withID(id).update([params], callback)

Updates an existing field.

* `fields` <[Object]> Key value pairs of field name and new value.
* returns: A reference to the updated field.

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"