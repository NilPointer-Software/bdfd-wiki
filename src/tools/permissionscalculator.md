# Permission Calculator
Example text!

<style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 900px;
            margin: 20px auto;
            padding: 20px;
            background-color: #36393f;
            color: #dcddde;
        }
        .container {
            background-color: #2f3136;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
        }
        h1 {
            color: #ffffff;
            text-align: center;
            margin-bottom: 25px;
            font-size: 28px;
        }
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
        .permissions-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 12px;
            margin-bottom: 25px;
            max-height: 500px;
            overflow-y: auto;
            padding: 10px;
        }
        .permission-item {
            display: flex;
            align-items: center;
            padding: 12px;
            background-color: #40444b;
            border-radius: 6px;
            transition: all 0.2s;
            border-left: 4px solid transparent;
        }
        .permission-item:hover {
            background-color: #484c54;
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
            color: #7289da;
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
            color: #99aab5;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding-bottom: 5px;
            border-bottom: 1px solid #40444b;
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

<script defer>
        // Permission function to get permission value
        function permission(permissionName) {
            const permissions = {
                'manage_server': 32n,
                'view_audit_log': 128n,
                'view_server_insights': 524288n,
                'administrator': 8n,
                'kick_members': 2n,
                'ban_members': 4n,
                'manage_nicknames': 134217728n,
                'change_nickname': 67108864n,
                'manage_channels': 16n,
                'manage_roles': 268435456n,
                'manage_webhooks': 536870912n,
                'view_channels': 1024n,
                'send_messages': 2048n,
                'send_messages_in_threads': 274877906944n,
                'create_public_threads': 34359738368n,
                'create_private_threads': 68719476736n,
                'embed_links': 16384n,
                'attach_files': 32768n,
                'add_reactions': 64n,
                'use_external_emoji': 262144n,
                'use_external_stickers': 137438953472n,
                'mention_everyone': 131072n,
                'manage_messages': 8192n,
                'manage_threads': 17179869184n,
                'read_message_history': 65536n,
                'send_tts_messages': 4096n,
                'use_application_commands': 2147483648n,
                'connect': 1048576n,
                'speak': 2097152n,
                'video': 512n,
                'start_activities': 549755813888n,
                'use_voice_activity': 33554432n,
                'priority_speaker': 256n,
                'mute_members': 4194304n,
                'deafen_members': 8388608n,
                'move_members': 16777216n,
                'request_to_speak': 4294967296n,
                'manage_emojis_stickers': 1073741824n,
                'manage_events': 8589934592n,
                'create_invite': 1n
            };
            
            return permissions[permissionName] || 0n;
        }
        
        // Category mapping for toggle functionality
        const categoryMapping = {
            'general': ['manage_server', 'view_audit_log', 'view_server_insights', 'administrator'],
            'member': ['kick_members', 'ban_members', 'manage_nicknames', 'change_nickname'],
            'channel': ['manage_channels', 'manage_roles', 'manage_webhooks', 'view_channels'],
            'text': [
                'send_messages', 'send_messages_in_threads', 'create_public_threads', 
                'create_private_threads', 'embed_links', 'attach_files', 'add_reactions',
                'use_external_emoji', 'use_external_stickers', 'mention_everyone',
                'manage_messages', 'manage_threads', 'read_message_history',
                'send_tts_messages', 'use_application_commands'
            ],
            'voice': [
                'connect', 'speak', 'video', 'start_activities', 'use_voice_activity',
                'priority_speaker', 'mute_members', 'deafen_members', 'move_members',
                'request_to_speak'
            ],
            'other': ['manage_emojis_stickers', 'manage_events', 'create_invite']
        };
        
        // Permission values map for quick lookup
        const permissionValues = new Map();
        
        // Initialize permission values from HTML
        function initializePermissionValues() {
            // Get all permission checkboxes
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            
            checkboxes.forEach(checkbox => {
                const permissionName = checkbox.id;
                const permissionValue = BigInt(checkbox.value);
                
                permissionValues.set(permissionName, {
                    name: document.querySelector(`label[for="${permissionName}"]`).textContent.trim().split('\n')[0],
                    value: permissionValue
                });
            });
        }
        
        let total = 0n;
        const categoryStates = new Map();
        
        // Initialize interface
        function initializeInterface() {
            initializePermissionValues();
            
            // Initialize category states
            Object.keys(categoryMapping).forEach(category => {
                categoryStates.set(category, false);
            });
            
            // Add event handlers for checkboxes
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', updateTotal);
            });
            
            // Add event handler for target value input
            document.getElementById('targetValue').addEventListener('input', findCombinations);
            
            // Add event handlers for control buttons
            document.getElementById('enableAll').addEventListener('click', () => toggleAllPermissions(true));
            document.getElementById('disableAll').addEventListener('click', () => toggleAllPermissions(false));
            
            // Add event handlers for category toggle buttons
            document.querySelectorAll('.category-toggle').forEach(button => {
                button.addEventListener('click', (e) => {
                    const categoryId = e.target.dataset.category;
                    toggleCategoryPermissions(categoryId);
                });
            });
            
            updateTotal();
        }
        
        function toggleAllPermissions(enable) {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = enable;
            });
            
            // Update all category states
            Object.keys(categoryMapping).forEach(category => {
                categoryStates.set(category, enable);
            });
            
            updateTotal();
        }
        
        function toggleCategoryPermissions(categoryId) {
            const permissionIds = categoryMapping[categoryId];
            if (!permissionIds) return;
            
            // Get current state of the category (check if all are selected)
            const allChecked = permissionIds.every(id => {
                const checkbox = document.getElementById(id);
                return checkbox && checkbox.checked;
            });
            
            const newState = !allChecked;
            
            // Toggle all permissions in this category
            permissionIds.forEach(permissionId => {
                const checkbox = document.getElementById(permissionId);
                if (checkbox) {
                    checkbox.checked = newState;
                }
            });
            
            // Update category state
            categoryStates.set(categoryId, newState);
            
            updateTotal();
        }
        
        function updateTotal() {
            total = 0n;
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            
            checkboxes.forEach(checkbox => {
                total += BigInt(checkbox.value);
                
                // Add class for highlighting selected element
                document.getElementById(`item-${checkbox.id}`).classList.add('checked');
            });
            
            // Remove class from unselected elements
            document.querySelectorAll('input[type="checkbox"]:not(:checked)').forEach(checkbox => {
                document.getElementById(`item-${checkbox.id}`).classList.remove('checked');
            });
            
            // Update category states and toggle button texts
            Object.keys(categoryMapping).forEach(category => {
                const permissionIds = categoryMapping[category];
                const allChecked = permissionIds.every(id => {
                    const checkbox = document.getElementById(id);
                    return checkbox && checkbox.checked;
                });
                const anyChecked = permissionIds.some(id => {
                    const checkbox = document.getElementById(id);
                    return checkbox && checkbox.checked;
                });
                
                // Update category state
                categoryStates.set(category, allChecked);
                
                // Update category toggle button text
                const toggleButton = document.querySelector(`.category-toggle[data-category="${category}"]`);
                if (toggleButton) {
                    if (allChecked) {
                        toggleButton.textContent = 'Disable All';
                        toggleButton.style.backgroundColor = '#ed4245';
                    } else if (anyChecked) {
                        toggleButton.textContent = 'Enable All';
                        toggleButton.style.backgroundColor = '#43b581';
                    } else {
                        toggleButton.textContent = 'Enable All';
                        toggleButton.style.backgroundColor = '#43b581';
                    }
                }
            });
            
            // Update display
            document.getElementById('totalValue').textContent = total.toString();
            document.getElementById('hexValue').textContent = `0x${total.toString(16).toUpperCase()}`;
            
            findCombinations();
        }
        
        function findCombinations() {
            const targetInput = document.getElementById('targetValue');
            const targetValue = targetInput.value.trim();
            const resultDiv = document.getElementById('resultContent');
            
            // Get currently selected permissions
            const checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
            const checkedPerms = checkedBoxes.map(cb => cb.id);
            const checkedSum = checkedBoxes.reduce((sum, cb) => sum + BigInt(cb.value), 0n);
            
            // If input field is empty
            if (!targetValue) {
                if (checkedPerms.length > 0) {
                    const permNames = checkedPerms.map(id => permissionValues.get(id).name);
                    resultDiv.innerHTML = `
                        <div class="current-selection">
                            <div class="combination-title">Selected Permissions:</div>
                            <ul class="permission-list">
                                ${permNames.map(name => `<li>${name}</li>`).join('')}
                            </ul>
                            <div class="combination-total">Total: ${checkedSum.toString()} (0x${checkedSum.toString(16).toUpperCase()})</div>
                        </div>
                    `;
                } else {
                    resultDiv.innerHTML = '<div class="no-results">Select permissions from the list above</div>';
                }
                return;
            }
            
            // Validate input
            let targetBigInt;
            try {
                targetBigInt = BigInt(targetValue);
                if (targetBigInt < 0n) {
                    resultDiv.innerHTML = '<div class="no-results">Value must be positive</div>';
                    return;
                }
            } catch (e) {
                resultDiv.innerHTML = '<div class="no-results">Please enter a valid number</div>';
                return;
            }
            
            // If current sum matches target
            if (checkedSum === targetBigInt && checkedPerms.length > 0) {
                const permNames = checkedPerms.map(id => permissionValues.get(id).name);
                resultDiv.innerHTML = `
                    <div class="combination">
                        <div class="combination-title">Selected permissions match target value:</div>
                        <ul class="permission-list">
                            ${permNames.map(name => `<li>${name}</li>`).join('')}
                        </ul>
                        <div class="combination-total">Total: ${targetBigInt.toString()} (0x${targetBigInt.toString(16).toUpperCase()})</div>
                    </div>
                `;
                return;
            }
            
            // Search for all combinations
            const allPerms = Array.from(permissionValues.entries());
            const foundCombinations = [];
            
            // Function for recursive combination search (up to 5 permissions for performance)
            function findCombinationsRecursive(startIndex, currentSum, currentPerms) {
                if (currentSum === targetBigInt) {
                    foundCombinations.push([...currentPerms]);
                    return;
                }
                
                if (currentSum > targetBigInt || currentPerms.length >= 5 || startIndex >= allPerms.length) {
                    return;
                }
                
                // Skip already selected permissions
                for (let i = startIndex; i < allPerms.length; i++) {
                    const [id, perm] = allPerms[i];
                    findCombinationsRecursive(
                        i + 1,
                        currentSum + perm.value,
                        [...currentPerms, { id, ...perm }]
                    );
                }
            }
            
            // Start search
            findCombinationsRecursive(0, 0n, []);
            
            // Display results
            if (foundCombinations.length > 0) {
                let resultHTML = `<div class="search-info">Found ${foundCombinations.length} combinations for value ${targetBigInt.toString()}:</div>`;
                
                foundCombinations.slice(0, 10).forEach((combination, index) => {
                    const sum = combination.reduce((s, perm) => s + perm.value, 0n);
                    resultHTML += `
                        <div class="combination">
                            <div class="combination-title">Combination ${index + 1}:</div>
                            <ul class="permission-list">
                                ${combination.map(perm => `<li>${perm.name} (${perm.value.toString()})</li>`).join('')}
                            </ul>
                            <div class="combination-total">Total: ${sum.toString()} = ${formatBinarySum(combination)}</div>
                        </div>
                    `;
                });
                
                if (foundCombinations.length > 10) {
                    resultHTML += `<div class="warning">Showing first 10 of ${foundCombinations.length} found combinations</div>`;
                }
                
                // Add current selection info
                if (checkedPerms.length > 0) {
                    resultHTML += `
                        <div class="current-selection">
                            <div class="combination-title">Current Selection:</div>
                            <ul class="permission-list">
                                ${checkedPerms.map(id => `<li>${permissionValues.get(id).name}</li>`).join('')}
                            </ul>
                            <div class="combination-total">Total: ${checkedSum.toString()} (0x${checkedSum.toString(16).toUpperCase()})</div>
                        </div>
                    `;
                }
                
                resultDiv.innerHTML = resultHTML;
            } else {
                let noResultHTML = `<div class="no-results">No permission combinations found for value ${targetBigInt.toString()}</div>`;
                
                if (checkedPerms.length > 0) {
                    noResultHTML += `
                        <div class="current-selection">
                            <div class="combination-title">Current Selection:</div>
                            <ul class="permission-list">
                                ${checkedPerms.map(id => `<li>${permissionValues.get(id).name}</li>`).join('')}
                            </ul>
                            <div class="combination-total">Total: ${checkedSum.toString()} (0x${checkedSum.toString(16).toUpperCase()})</div>
                        </div>
                    `;
                }
                
                resultDiv.innerHTML = noResultHTML;
            }
        }
        
        function formatBinarySum(combination) {
            let sum = 0n;
            combination.forEach(perm => {
                sum |= perm.value;
            });
            return `0x${sum.toString(16).toUpperCase()}`;
        }
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', initializeInterface);
        
        // Export permission function to global scope for easy testing
        window.permission = permission;
        
</script>