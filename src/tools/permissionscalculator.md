# Permission Calculator
Example text!

<script src="./permcalc.js" defer></script>

<style>
        .control-buttons {
            display: flex;
            gap: 15px;
            margin-bottom: 25px;
        }
        .control-button {
            flex: 1;
            padding: 12px 20px;
            background-color: #7289da;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
        }
        .control-button:hover {
            background-color: #5b6eae;
            transform: translateY(-2px);
        }
        .control-button.disable {
            background-color: #ed4245;
        }
        .control-button.disable:hover {
            background-color: #c03537;
        }
        .control-button.category {
            background-color: #43b581;
        }
        .control-button.category:hover {
            background-color: #3ca374;
        }
        .permission-item {
            display: flex;
            align-items: center;
            padding: 12px;
            background-color: var(--color3);
            border-radius: 6px;
            transition: all 0.2s;
            margin-bottom: 5px;
            border-left: 4px solid transparent;
        }
        .permission-item:hover {
            transform: translateY(-2px);
        }
        .permission-item.checked {
            border-left-color: #7289da;
            background-color: #40444b;
        }
        .permission-item label {
            margin-left: 12px;
            font-size: 15px;
            cursor: pointer;
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .permission-value {
            color: #fff;
            font-family: 'Consolas', monospace;
            font-size: 14px;
            margin-left: 15px;
            background-color: rgba(114, 137, 218, 0.1);
            padding: 3px 8px;
            border-radius: 4px;
        }
        input[type="checkbox"] {
            transform: scale(1.2);
            cursor: pointer;
            accent-color: #7289da;
        }
        .total-section {
            background-color: #202225;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
            text-align: center;
        }
        .total-section h2 {
            margin-top: 0;
            color: #ffffff;
            font-size: 20px;
        }
        .total-value {
            font-family: 'Consolas', monospace;
            font-size: 28px;
            color: #43b581;
            font-weight: bold;
            margin: 10px 0;
            word-break: break-all;
        }
        .hex-value {
            font-family: 'Consolas', monospace;
            font-size: 18px;
            color: #faa61a;
            margin-top: 5px;
        }
        .input-section {
            margin: 25px 0;
        }
        .input-section input {
            width: 100%;
            padding: 15px;
            font-size: 16px;
            background-color: #40444b;
            border: 2px solid #202225;
            border-radius: 8px;
            color: #ffffff;
            box-sizing: border-box;
            font-family: 'Consolas', monospace;
        }
        .input-section input:focus {
            outline: none;
            border-color: #7289da;
        }
        .input-section input::placeholder {
            color: #72767d;
        }
        .results {
            background-color: #202225;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        .results h3 {
            margin-top: 0;
            color: #ffffff;
            font-size: 18px;
            border-bottom: 2px solid #7289da;
            padding-bottom: 10px;
        }
        .result-content {
            min-height: 80px;
            padding: 15px 0;
        }
        .combination {
            background-color: #2f3136;
            padding: 12px;
            margin: 10px 0;
            border-radius: 6px;
            border-left: 4px solid #43b581;
        }
        .combination-title {
            color: #43b581;
            font-weight: bold;
            margin-bottom: 8px;
        }
        .permission-list {
            list-style-type: none;
            padding-left: 0;
            margin: 5px 0;
        }
        .permission-list li {
            padding: 5px 10px;
            margin: 3px 0;
            background-color: #40444b;
            border-radius: 4px;
            font-size: 14px;
        }
        .combination-total {
            font-family: 'Consolas', monospace;
            color: #faa61a;
            font-weight: bold;
            margin-top: 8px;
            font-size: 15px;
        }
        .no-results {
            color: #f04747;
            font-style: italic;
            text-align: center;
            padding: 20px;
        }
        .search-info {
            color: #72767d;
            font-size: 14px;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #40444b;
        }
        .current-selection {
            background-color: #2f3136;
            padding: 12px;
            border-radius: 6px;
            margin: 15px 0;
            border-left: 4px solid #7289da;
        }
        .warning {
            color: #faa61a;
            font-size: 14px;
            margin-top: 10px;
            padding: 10px;
            background-color: rgba(250, 166, 26, 0.1);
            border-radius: 6px;
        }
        .category-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0 10px 0;
        }
        .category-header .category-title {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding-bottom: 5px;
            border-bottom: 1px solid var(--color2);
            flex-grow: 1;
        }
        .category-toggle {
            background-color: #43b581;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 4px 10px;
            font-size: 12px;
            cursor: pointer;
            margin-left: 10px;
            transition: all 0.2s;
        }
        .category-toggle:hover {
            background-color: #3ca374;
        }
    </style>

<div class="control-buttons">
    <button class="control-button" id="enableAll">Enable All</button>
    <button class="control-button disable" id="disableAll">Disable All</button>
</div>

<div class="permissions-grid" id="permissionsGrid">
    <div class="category-header">
        <div class="category-title">General Server Permissions</div>
        <button class="category-toggle" data-category="general">Toggle All</button>
    </div>
    <div class="permission-item" id="item-manage_server">
        <input type="checkbox" id="manage_server" value="32">
        <label for="manage_server">
            Manage Server
            <span class="permission-value" id="value-manage_server">32</span>
        </label>
    </div>
    <div class="permission-item" id="item-view_audit_log">
        <input type="checkbox" id="view_audit_log" value="128">
        <label for="view_audit_log">
            View Audit Log
            <span class="permission-value" id="value-view_audit_log">128</span>
        </label>
    </div>
    <div class="permission-item" id="item-view_server_insights">
        <input type="checkbox" id="view_server_insights" value="524288">
        <label for="view_server_insights">
            View Server Insights
            <span class="permission-value" id="value-view_server_insights">524288</span>
        </label>
    </div>
    <div class="permission-item" id="item-administrator">
        <input type="checkbox" id="administrator" value="8">
        <label for="administrator">
            Administrator
            <span class="permission-value" id="value-administrator">8</span>
        </label>
    </div>
    <div class="category-header">
        <div class="category-title">Member Management</div>
        <button class="category-toggle" data-category="member">Toggle All</button>
    </div>
    <div class="permission-item" id="item-kick_members">
        <input type="checkbox" id="kick_members" value="2">
        <label for="kick_members">
            Kick Members
            <span class="permission-value" id="value-kick_members">2</span>
        </label>
    </div>
    <div class="permission-item" id="item-ban_members">
        <input type="checkbox" id="ban_members" value="4">
        <label for="ban_members">
            Ban Members
            <span class="permission-value" id="value-ban_members">4</span>
        </label>
    </div>
    <div class="permission-item" id="item-manage_nicknames">
        <input type="checkbox" id="manage_nicknames" value="134217728">
        <label for="manage_nicknames">
            Manage Nicknames
            <span class="permission-value" id="value-manage_nicknames">134217728</span>
        </label>
    </div>
    <div class="permission-item" id="item-change_nickname">
        <input type="checkbox" id="change_nickname" value="67108864">
        <label for="change_nickname">
            Change Nickname
            <span class="permission-value" id="value-change_nickname">67108864</span>
        </label>
    </div>
    <div class="category-header">
        <div class="category-title">Channel Management</div>
        <button class="category-toggle" data-category="channel">Toggle All</button>
    </div>
    <div class="permission-item" id="item-manage_channels">
        <input type="checkbox" id="manage_channels" value="16">
        <label for="manage_channels">
            Manage Channels
            <span class="permission-value" id="value-manage_channels">16</span>
        </label>
    </div>
    <div class="permission-item" id="item-manage_roles">
        <input type="checkbox" id="manage_roles" value="268435456">
        <label for="manage_roles">
            Manage Roles
            <span class="permission-value" id="value-manage_roles">268435456</span>
        </label>
    </div>
    <div class="permission-item" id="item-manage_webhooks">
        <input type="checkbox" id="manage_webhooks" value="536870912">
        <label for="manage_webhooks">
            Manage Webhooks
            <span class="permission-value" id="value-manage_webhooks">536870912</span>
        </label>
    </div>
    <div class="permission-item" id="item-view_channels">
        <input type="checkbox" id="view_channels" value="1024">
        <label for="view_channels">
            View Channels
            <span class="permission-value" id="value-view_channels">1024</span>
        </label>
    </div>
    <div class="category-header">
        <div class="category-title">Text Permissions</div>
        <button class="category-toggle" data-category="text">Toggle All</button>
    </div>
    <div class="permission-item" id="item-send_messages">
        <input type="checkbox" id="send_messages" value="2048">
        <label for="send_messages">
            Send Messages
            <span class="permission-value" id="value-send_messages">2048</span>
        </label>
    </div>
    <div class="permission-item" id="item-send_messages_in_threads">
        <input type="checkbox" id="send_messages_in_threads" value="274877906944">
        <label for="send_messages_in_threads">
            Send Messages in Threads
            <span class="permission-value" id="value-send_messages_in_threads">274877906944</span>
        </label>
    </div>
    <div class="permission-item" id="item-create_public_threads">
        <input type="checkbox" id="create_public_threads" value="34359738368">
        <label for="create_public_threads">
            Create Public Threads
            <span class="permission-value" id="value-create_public_threads">34359738368</span>
        </label>
    </div>
    <div class="permission-item" id="item-create_private_threads">
        <input type="checkbox" id="create_private_threads" value="68719476736">
        <label for="create_private_threads">
            Create Private Threads
            <span class="permission-value" id="value-create_private_threads">68719476736</span>
        </label>
    </div>
    <div class="permission-item" id="item-embed_links">
        <input type="checkbox" id="embed_links" value="16384">
        <label for="embed_links">
            Embed Links
            <span class="permission-value" id="value-embed_links">16384</span>
        </label>
    </div>
    <div class="permission-item" id="item-attach_files">
        <input type="checkbox" id="attach_files" value="32768">
        <label for="attach_files">
            Attach Files
            <span class="permission-value" id="value-attach_files">32768</span>
        </label>
    </div>
    <div class="permission-item" id="item-add_reactions">
        <input type="checkbox" id="add_reactions" value="64">
        <label for="add_reactions">
            Add Reactions
            <span class="permission-value" id="value-add_reactions">64</span>
        </label>
    </div>
    <div class="permission-item" id="item-use_external_emoji">
        <input type="checkbox" id="use_external_emoji" value="262144">
        <label for="use_external_emoji">
            Use External Emoji
            <span class="permission-value" id="value-use_external_emoji">262144</span>
        </label>
    </div>
    <div class="permission-item" id="item-use_external_stickers">
        <input type="checkbox" id="use_external_stickers" value="137438953472">
        <label for="use_external_stickers">
            Use External Stickers
            <span class="permission-value" id="value-use_external_stickers">137438953472</span>
        </label>
    </div>
    <div class="permission-item" id="item-mention_everyone">
        <input type="checkbox" id="mention_everyone" value="131072">
        <label for="mention_everyone">
            Mention @everyone, @here, All Roles
            <span class="permission-value" id="value-mention_everyone">131072</span>
        </label>
    </div>
    <div class="permission-item" id="item-manage_messages">
        <input type="checkbox" id="manage_messages" value="8192">
        <label for="manage_messages">
            Manage Messages
            <span class="permission-value" id="value-manage_messages">8192</span>
        </label>
    </div>
    <div class="permission-item" id="item-manage_threads">
        <input type="checkbox" id="manage_threads" value="17179869184">
        <label for="manage_threads">
            Manage Threads
            <span class="permission-value" id="value-manage_threads">17179869184</span>
        </label>
    </div>
    <div class="permission-item" id="item-read_message_history">
        <input type="checkbox" id="read_message_history" value="65536">
        <label for="read_message_history">
            Read Message History
            <span class="permission-value" id="value-read_message_history">65536</span>
        </label>
    </div>
    <div class="permission-item" id="item-send_tts_messages">
        <input type="checkbox" id="send_tts_messages" value="4096">
        <label for="send_tts_messages">
            Send Text-to-Speech Messages
            <span class="permission-value" id="value-send_tts_messages">4096</span>
        </label>
    </div>
    <div class="permission-item" id="item-use_application_commands">
        <input type="checkbox" id="use_application_commands" value="2147483648">
        <label for="use_application_commands">
            Use Application Commands
            <span class="permission-value" id="value-use_application_commands">2147483648</span>
        </label>
    </div>
    <div class="category-header">
        <div class="category-title">Voice Permissions</div>
        <button class="category-toggle" data-category="voice">Toggle All</button>
    </div>
    <div class="permission-item" id="item-connect">
        <input type="checkbox" id="connect" value="1048576">
        <label for="connect">
            Connect
            <span class="permission-value" id="value-connect">1048576</span>
        </label>
    </div>
    <div class="permission-item" id="item-speak">
        <input type="checkbox" id="speak" value="2097152">
        <label for="speak">
            Speak
            <span class="permission-value" id="value-speak">2097152</span>
        </label>
    </div>
    <div class="permission-item" id="item-video">
        <input type="checkbox" id="video" value="512">
        <label for="video">
            Video
            <span class="permission-value" id="value-video">512</span>
        </label>
    </div>
    <div class="permission-item" id="item-start_activities">
        <input type="checkbox" id="start_activities" value="549755813888">
        <label for="start_activities">
            Start Activities
            <span class="permission-value" id="value-start_activities">549755813888</span>
        </label>
    </div>
    <div class="permission-item" id="item-use_voice_activity">
        <input type="checkbox" id="use_voice_activity" value="33554432">
        <label for="use_voice_activity">
            Use Voice Activity
            <span class="permission-value" id="value-use_voice_activity">33554432</span>
        </label>
    </div>
    <div class="permission-item" id="item-priority_speaker">
        <input type="checkbox" id="priority_speaker" value="256">
        <label for="priority_speaker">
            Priority Speaker
            <span class="permission-value" id="value-priority_speaker">256</span>
        </label>
    </div>
    <div class="permission-item" id="item-mute_members">
        <input type="checkbox" id="mute_members" value="4194304">
        <label for="mute_members">
            Mute Members
            <span class="permission-value" id="value-mute_members">4194304</span>
        </label>
    </div>
    <div class="permission-item" id="item-deafen_members">
        <input type="checkbox" id="deafen_members" value="8388608">
        <label for="deafen_members">
            Deafen Members
            <span class="permission-value" id="value-deafen_members">8388608</span>
        </label>
    </div>
    <div class="permission-item" id="item-move_members">
        <input type="checkbox" id="move_members" value="16777216">
        <label for="move_members">
            Move Members
            <span class="permission-value" id="value-move_members">16777216</span>
        </label>
    </div>
    <div class="permission-item" id="item-request_to_speak">
        <input type="checkbox" id="request_to_speak" value="4294967296">
        <label for="request_to_speak">
            Request to Speak
            <span class="permission-value" id="value-request_to_speak">4294967296</span>
        </label>
    </div>
    <div class="category-header">
        <div class="category-title">Other Permissions</div>
        <button class="category-toggle" data-category="other">Toggle All</button>
    </div>
    <div class="permission-item" id="item-manage_emojis_stickers">
        <input type="checkbox" id="manage_emojis_stickers" value="1073741824">
        <label for="manage_emojis_stickers">
            Manage Emojis and Stickers
            <span class="permission-value" id="value-manage_emojis_stickers">1073741824</span>
        </label>
    </div>
    <div class="permission-item" id="item-manage_events">
        <input type="checkbox" id="manage_events" value="8589934592">
        <label for="manage_events">
            Manage Events
            <span class="permission-value" id="value-manage_events">8589934592</span>
        </label>
    </div>
    <div class="permission-item" id="item-create_invite">
        <input type="checkbox" id="create_invite" value="1">
        <label for="create_invite">
            Create Invite
            <span class="permission-value" id="value-create_invite">1</span>
        </label>
    </div>
    <div class="total-section">
        <h2>Current Permission Value:</h2>
        <div class="total-value" id="totalValue">0</div>
        <div class="hex-value" id="hexValue">0x0</div>
    </div>
    <div class="input-section">
        <input type="number" id="targetValue" 
               placeholder="Enter permission value to find combinations (e.g., 10)"
               min="0">
    </div>
    <div class="results">
        <h3>Search Results:</h3>
        <div class="result-content" id="resultContent">
            Select permissions and/or enter a value to find combinations
        </div>
    </div>
</div>