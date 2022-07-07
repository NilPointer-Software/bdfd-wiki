# HTTP Requests
- A HTTP request is an action to be performed on a resource identified by a URL.
> Before reading this guide, please note that this feature is not intended for new BDFD users, as it is pretty advanced.

## HTTP Request Types
> This is a list of all HTTP request types available.

**GET**
- Retrieves data from a resource.
```
$httpGet[url]
```

**POST**
- The data sent to the server with POST is stored in the request body of the HTTP request.
```
$httpPost[url;(body)]
```

**PUT**
- The PUT method replaces all current representations of the target resource with the request payload.
```
$httpPut[url;(body)]
```

**DELETE**
- The DELETE method deletes the specified resource.
```
$httpDelete[url;(body)]
```

**PATCH**
- The PATCH method applies partial modifications to a resource.
```
$httpPatch[url;(body)]
```

## HTTP Headers
- HTTP Headers is used to add more information. Most of the time, this is used to send an API Key to the API.
```
$httpAddHeader[header name;header value]
```

## HTTP Results
- To return the result of a HTTP method function, you can use `$httpResult`/`$httpResult[]`.

### Usage #1
```
$httpResult
``` 
> Retrieves text value from HTTP request.

### Usage #2
```
$httpResult[jSON Key;...]
```
> Retrieves JSON from HTTP request. All arguments after *jSON Key* are optional.

## Examples

### Basic level
> An example using a `$httpGet` function
```
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Here is a Neko for you!]
$description[**Source:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```
![Neko](https://i.imgur.com/grfUOlX.png)
> API: [nekos.best](https://docs.nekos.best)
### Advanced level
> An example using a function that has a request body (e.g. `$httpPost`) and using `$httpAddHeader`
```
$httpAddHeader[content-type;application/x-www-form-urlencoded]
$httpPost[https://pastebin.com/api/api_post.php;api_dev_key=7CP52G-BTQP_1AhyBBlTa94qyjE6vHzU&api_paste_code=$url[encode;$message]&api_option=paste]
$httpResult
```
![Pastebin](https://i.imgur.com/UvjmdsK.png)
![Pastebin](https://i.imgur.com/EalIOA7.png)
> API: [pastebin.com](https://pastebin.com/doc_api)
