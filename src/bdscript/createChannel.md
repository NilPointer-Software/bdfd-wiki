# $createChannel
Creates a channel.

## Usage
```
$createChannel[name;type;(optional) categoryID]
```

### Parameters
- `name` `(Type: String || Flag: Required)`: The name of the new channel.

    > 📝 Channel names can have a maximum of upto 100 characters.
- `type` `(Type: Enum || Flag: Required)`: The channel type. Channel types:
  - `category`
  - `text`
  - `voice`
  - `stage`
  - `forum`
- `categoryID` - The category to put the channel in (if applicable).

## Example
```
$nomention
$createChannel[cool-channel;text]
```

![example1](https://user-images.githubusercontent.com/69215413/125972519-26d1a5a1-f362-4101-abdd-6c3943e6811c.png)

![example1.5](https://user-images.githubusercontent.com/69215413/125972524-95307b17-bfcc-4525-a4fa-1d58a30a1fa9.png)
