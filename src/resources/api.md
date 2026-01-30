# BDFD API
Public Bot Designer for Discord API.

<style>
summary {
    background: hsl(0deg 0% 100% / 5%) !important;
}

.code-container {
    background: transparent !important;
}

.line-numbers {
	display: none !important;
	visibility: hidden !important;
	border: none !important;
}

.line-number {
    display: none !important;
}

.mainAPI, .endpoint {
    background: var(--card-bg);
	border-radius: var(--border-radius);
	border: 1px solid rgba(255, 255, 255, 0.05);
	margin-top: 1.5rem;
	padding-bottom: 0rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.mainAPI h2 {
	padding-top: 1rem !important;
	margin-top: 0rem !important;
}

.mainAPI code {
    color: var(--link-color) !important;
}

.wrap-button,
.syntax-button {
    visibility: hidden;
}

.endpoint h3 {
	margin-top: 1.5rem !important;
	padding-top: 0rem !important;
}

.endpoint #GET {
    background: var(--link-color);
    padding: .25rem;
    border-radius: 10px;
}
</style>

<div class="mainAPI">
  <h2>API</h2>
  <p>Our API domain:</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api</code></pre>
</div>

## Endpoints

<div class="endpoint">
  <h3><span id="GET">GET</span> /function_list</h3>
  <p>Returns an array of function.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/function_list</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">[
      ...,
      {
        "tag": "$aiQuota",
        "shortDescription": "Get remaining AI quota for this bot",
        "longDescription": "",
        "arguments": null,
        "intents": 0,
        "premium": true,
        "color": 0
    }, ... 
]</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /callback_list</h3>
  <p>Returns an array of callback.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/callback_list</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">[
      ...,
      {
        "name": "$onMessageDelete[channel ID]",
        "description": "Triggers command when user deletes message",
        "arguments": [
            {
                "name": "Channel ID",
                "description": "Channel ID of the log channel",
                "type": "Snowflake",
                "required": true
            }
        ],
        "intents": 0,
        "is_premium": false
    }, ... 
]</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /function_tag_list</h3>
  <p>Returns an array of function tags.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/function_tag_list</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">[
    "$addButton[]",
    "$addCmdReactions[]",
    "$addEmoji[]",
    "$addField[]",
    "$addMessageReactions[]",
    "$addReactions[]",
    "$addSelectMenuOption[]",
    "$addTextInput[]",
    "$addTimestamp",
    "$addTimestamp[]",
    "$aiQuota", 
    ... 
]</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /callback_tag_list</h3>
  <p>Returns an array of callback tags.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/callback_tag_list</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">[
    "$onJoined[]",
    "$onLeave[]",
    "$onMessageDelete[]",
    "$onBanAdd[]",
    "$onBanRemove[]",
    "$alwaysReply",
    "$messageContains[]",
    "$awaitedCommand[]",
    "$reaction[]",
    "$onInteraction[]",
    "$onInteraction"
]</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /function/:function</h3>
  <p>Returns a function.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/function/$c[]</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">{
    "tag": "$c[Comment]",
    "shortDescription": "Can be used to comment your code.",
    "longDescription": "",
    "arguments": [
        {
            "name": "Comment",
            "type": "String",
            "required": true,
            "empty": true
        }
    ],
    "intents": 0,
    "premium": false,
    "color": 0
}</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /callback/:callback</h3>
  <p>Returns an array of callback tags.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/callback/$onJoined[]</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">{
    "name": "$onJoined[channel ID]",
    "description": "Triggers command when user joins server",
    "arguments": [
        {
            "name": "Channel ID",
            "description": "Channel ID of the welcome channel",
            "type": "Snowflake",
            "required": true
        }
    ],
    "intents": 2,
    "is_premium": false
}</code></pre>
  </details>
</div>

<div class="endpoint">
  <h3><span id="GET">GET</span> /emoji_alias_list</h3>
  <p>Returns a map, mapping emoji to a list of its aliases.</p>
  <pre><code class="hljs">https://botdesignerdiscord.com/public/api/emoji_alias_list</code></pre>
  <details><summary>Response Example - 200</summary>
  <pre><code class="hljs">{
    "#️⃣": [
        ":hash:",
        ":keycap_hash:"
    ],
    "*️⃣": [
        ":keycap_asterisk:",
        ":asterisk:"
    ],
    "0️⃣": [
        ":keycap_0:",
        ":zero:"
    ],
    "1️⃣": [
        ":keycap_1:",
        ":one:"
    ], 
    ... 
}</code></pre>
  </details>
</div>


## Intents
- `0`: None
- `2`: Member Intent
- `256`: Presence Intent

```admonish faq title="What is this?"
Read more about intents in the our "[Gateway Intents](../guides/introduction/gatewayIntents.md)" guide.
```

## Data Structures
- `Can be empty?` means the field can be set to a default value.
- `Can be omitted?` means the field might not be included in the response.

### Function
| Field name       | Type                            | Description                                            | Can be empty? | Can be omitted? |
|------------------|---------------------------------|--------------------------------------------------------|---------------|----------------|
| tag              | String                          | Function name                                          | False         | False          |
| shortDescription | String                          | Description for a function without parameters          | True          | False          |
| longDescription  | String                          | Description for a function with parameters             | True          | False          |
| arguments        | Array of [Parameters](#parameters) | Parameters needed by a function                     | True          | False          |
| intents          | Integer                         | Discord intents needed by bot to execute this function | False         | False          |
| premium          | Bool                            | Function needs premium                                 | False         | False          |
| deprecated       | Bool                            | Function is deprecated                                 | False         | True           |
| deprecatedFor    | String                          | Name of the function that should be used instead       | False         | True           |

### Parameter
| Field name  | Type                                     | Description                                                                                 | Can be omitted? |
|-------------|------------------------------------------|---------------------------------------------------------------------------------------------|----------------|
| name        | String                                   | Parameter name                                                                               | False          |
| description | String                                   | Description for a function's parameter                                                       | True           |
| type        | String [Parameter Types](#parameter-types) | Parameter type. `\|` is used for a compound type                                             | False          |
| required    | bool                                     | Parameter is required                                                                        | False          |
| tupleTypes  | Array of [Parameters](#parameters)     | Array of parameters which can be repeated, i.e `Channel ID;Message ID;Channel ID;Message ID;...` | True           |
| empty       | Bool                                     | Parameter can be empty                                                                       | True           |
| ellipsis    | Bool                                     | Parameter accepts more data, i.e `Username 1;Username 2;Username 3;...`                         | True           |
| enumData    | Array of Strings                         | Possible options accepted as parameter, i.e `primary/secondary/or/etc`                       | True           |

### Parameter Types
Multiple types can be merged together with `|` *(OR)*. \
Possible parameter types:
- `String`
- `Integer`
- `Float`
- `Snowflake`
- `Bool`
- `Color`
- `Permission`
- `Duration`
- `HowMany` *(`>`, `2`, `<`, etc)*
- `URL`
- `Enum`
- `Tuple`





