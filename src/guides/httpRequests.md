# HTTP Requests
A HTTP request is an action to be performed on a resource identified by a URL.

> Before reading this guide, please note that this feature is not intended for new BDFD users, as it is pretty advanced.

## Basics
### HTTP Request Types
- This is a list of all HTTP request types available.

**GET**
```php
$httpGet[URL]
```
Retrieves data from a resource.

**POST**
```php
$httpPost[URL;(requestBody)]
```
The data sent to the server with POST is stored in the request body of the HTTP request.


**PUT**
```php
$httpPut[URL;(requestBody()]
```
The PUT method replaces all current representations of the target resource with the request payload.


**DELETE**
```php
$httpDelete[URL;(requestBody)]
```
The DELETE method deletes the specified resource.

**PATCH**
```php
$httpPatch[URL;(requestBody)]
```
Description: The PATCH method applies partial modifications to a resource.


## HTTP Headers
HTTP Headers is used to add more information to the request. Most of the time, this is used to send an API key to the API.

To add headers, use `$httpAddHeader[header name;header value]`. For example, `$httpAddHeader[Authorization;supersecretpassword123]`.

## HTTP Results
To return the result of a HTTP method function, you can use `$httpResult`/`$httpResult[]`.

Usage #1: `$httpResult` - Retrieves text value from HTTP request.

Usage #2: `$httpResult[jsonKey1;jsonKey2;etc...]` - Retrieves JSON from HTTP request. All arguments after jsonKey1 are optional.

## Example
```
$image[$httpResult[URL]]
$httpGet[https://nekos.best/nekos]
```


## Requests to Discord

Requests made directly to Discord’s API from the bot are blocked to prevent abuse and rate-limiting. It may be possible to use external APIs that communicate to Discord’s API, but again, you can’t do so directly.

## Restricted Values

Only strings and numbers can be fetched using `$httpResult[]`, so other datatypes such as arrays can’t be returned (you can still access arrays that contain objects with strings/numbers as their entries values).

## Using $httpResult for Complicated Results

Let’s say you receive a JSON result like:

```jsx
// $httpGet[somenonexistentcarapi.com/engines/d16z6]
// Response:
{
	company: "Honda",
	displacements_liters: "1.6",
	redline_rpm: "7200",
	cutoff_rpm: "7400",
	dates: [{
		first_produced: "1992",
		available: "1996"
	}]
}
```

1. `$httpResult[company]` would return `Honda`.
2. `$httpResult[displacements_liters]` would return `1.6`.
3. `$httpResult[redline_rpm]` would return `7200`.
4. `$httpResult[cutoff_rpm]` would return `7400`.
5. `$httpResult[dates;0;first_produced]` would return `1992`.
6. `$httpResult[dates;0;avaiable]` would return `1996`.

You probably could have guessed what 1-4 would be, but 5 and 6 may look a bit odd.

**Let’s break this down:**

When you have a array of of object(s), you must use `$httpResult[]` a certain way in order to get the information you are looking for. That usage is: `$httpResut[arrayName;objectIndex;objectProperty]`.

- `arrayName` is the name of the array which contains the object(s). This was `dates` for the example above, as the array of objects was named `dates`.
- `objectIndex` the object’s index. This will be `0` for the array’s first object, `1` for the second, `2` for the third. This was `0` for the example above. We will discuss this more later.
- `objectProperty` - The property to get from the array’s object(s). This was `first_produced`/`available` for the example above, as those were the object’s properties.

Now, let’s say you have a object like this:

```jsx
// $httpGet[somenonexistentcarapi.com/developers]
// Response:
{
	developers: [{
		name: "noituri",
		status: "Developer"
	},
	{
		name: "MineBartekSA",
		status: "Developer"
	},
	{
		name: "Kubastick",
		status: "Developer, Owner"
	}]
}
```

- `$httpResult[developers;0;name]` would return `noituri`. `$httpResult[developers;0;status]` would return `Developer`.
- `$httpResult[developers;1;name]` would return `MineBartekSA`. `$httpResult[developers;1;status]` would return `Developer`.
- `$httpResult[developers;2;name]` would return `Kubastick`. `$httpResult[developers;2;status]` would return `Developer, Owner`.