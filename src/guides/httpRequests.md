# HTTP Requests
A HTTP request is an action to be performed on a resource identified by a URL.

> Before reading this guide, please note that this feature is not intended for new BDFD users, as it is pretty advanced.

## HTTP Request Types
- This is a list of all HTTP request types available.

**GET**

Description: Retrieves data from a resource.

Function: `$httpGet[URL]`

**POST**

Description: The data sent to the server with POST is stored in the request body of the HTTP request.

Function: `$httpPost[url;(optional) request's body]`

**PUT**

Description: The PUT method replaces all current representations of the target resource with the request payload.

Function: `$httpPut[url;(optional) request's body]`

**DELETE**

Description: The DELETE method deletes the specified resource.

Function: `$httpDelete[url;(optional) request's body]`

**PATCH**

Description: The PATCH method applies partial modifications to a resource.

Function: `$httpPatch[url;(optional) request's body]`

## HTTP Headers

HTTP Headers is used to add more information. Most of the time, this is used to send an API Key to the API.

To add headers, use `$httpAddHeader[header name;header value]`

## HTTP Results
To return the result of a HTTP method function, you can use `$httpResult`/`$httpResult[]`.

Usage #1: `$httpResult` - Retrieves text value from HTTP request.

Usage #2: `$httpResult[jsonKey1;jsonKey2;etc...]` - Retrieves JSON from HTTP request. All arguments after jsonKey1 are optional.

## Example
```
$image[$httpResult[url]]
$httpGet[https://nekos.best/nekos]
```
