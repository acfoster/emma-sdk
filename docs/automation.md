# Automation

These endpoints allow you access to information about workflows in Emma.

View the official documentation [here](http://api.myemma.com/api/external/automation.html).

## Table of Contents

* [emma.automation.list(callback)](#emmaautomationlistcallback)
* [emma.automation.withID(id).details(callback)](#emmaautomationwithididdetailscallback)
* [emma.automation.getCounts(callback)](#emmaautomationgetcountscallback)

## Methods

### emma.automation.list(callback)

Gets a list of this account’s automation workflows.

* returns: A list of automation workflows in the given account.

### emma.automation.withID(id).details(callback)

Gets detailed information about a single workflow.

* returns: A single workflow if one exists
* raises: Http404 if no workflow is found.

### emma.automation.getCounts(callback)

Gets the counts of workflows for this account by workflow state.

* returns: Counts for the workflow by state (`active`, `inactive` and `draft`).

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"