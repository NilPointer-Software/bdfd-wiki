# Permission Calculator
Example

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
        .category {
            color: #99aab5;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 20px 0 10px 0;
            padding-bottom: 5px;
            border-bottom: 1px solid #40444b;
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
    <!-- Permissions will be added via JavaScript -->
</div>
        
<div class="total-section">
    <h2>Current Permission Value:</h2>
    <div class="total-value" id="totalValue">0</div>
    <div class="hex-value" id="hexValue">0x0</div>
</div>
        
<div class="input-section">
    <input type="number" id="targetValue" placeholder="Enter permission value to find combinations (e.g., 10)" min="0">
</div>
        
<div class="results">
    <h3>Search Results:</h3>
    <div class="result-content" id="resultContent">
        Select permissions and/or enter a value to find combinations
    </div>
</div>

<script>
        // All Discord permissions with categories
        const discordPermissions = [
            {
                id: 'general',
                category: "General Server Permissions",
                permissions: [
                    { id: 'manage_server', name: 'Manage Server', value: 32n },
                    { id: 'view_audit_log', name: 'View Audit Log', value: 128n },
                    { id: 'view_server_insights', name: 'View Server Insights', value: 524288n },
                    { id: 'administrator', name: 'Administrator', value: 8n }
                ]
            },
            {
                id: 'member',
                category: "Member Management",
                permissions: [
                    { id: 'kick_members', name: 'Kick Members', value: 2n },
                    { id: 'ban_members', name: 'Ban Members', value: 4n },
                    { id: 'manage_nicknames', name: 'Manage Nicknames', value: 134217728n },
                    { id: 'change_nickname', name: 'Change Nickname', value: 67108864n }
                ]
            },
            {
                id: 'channel',
                category: "Channel Management",
                permissions: [
                    { id: 'manage_channels', name: 'Manage Channels', value: 16n },
                    { id: 'manage_roles', name: 'Manage Roles', value: 268435456n },
                    { id: 'manage_webhooks', name: 'Manage Webhooks', value: 536870912n },
                    { id: 'view_channels', name: 'View Channels', value: 1024n }
                ]
            },
            {
                id: 'text',
                category: "Text Permissions",
                permissions: [
                    { id: 'send_messages', name: 'Send Messages', value: 2048n },
                    { id: 'send_messages_in_threads', name: 'Send Messages in Threads', value: 274877906944n },
                    { id: 'create_public_threads', name: 'Create Public Threads', value: 34359738368n },
                    { id: 'create_private_threads', name: 'Create Private Threads', value: 68719476736n },
                    { id: 'embed_links', name: 'Embed Links', value: 16384n },
                    { id: 'attach_files', name: 'Attach Files', value: 32768n },
                    { id: 'add_reactions', name: 'Add Reactions', value: 64n },
                    { id: 'use_external_emoji', name: 'Use External Emoji', value: 262144n },
                    { id: 'use_external_stickers', name: 'Use External Stickers', value: 137438953472n },
                    { id: 'mention_everyone', name: 'Mention @everyone, @here, All Roles', value: 131072n },
                    { id: 'manage_messages', name: 'Manage Messages', value: 8192n },
                    { id: 'manage_threads', name: 'Manage Threads', value: 17179869184n },
                    { id: 'read_message_history', name: 'Read Message History', value: 65536n },
                    { id: 'send_tts_messages', name: 'Send Text-to-Speech Messages', value: 4096n },
                    { id: 'use_application_commands', name: 'Use Application Commands', value: 2147483648n }
                ]
            },
            {
                id: 'voice',
                category: "Voice Permissions",
                permissions: [
                    { id: 'connect', name: 'Connect', value: 1048576n },
                    { id: 'speak', name: 'Speak', value: 2097152n },
                    { id: 'video', name: 'Video', value: 512n },
                    { id: 'start_activities', name: 'Start Activities', value: 549755813888n },
                    { id: 'use_voice_activity', name: 'Use Voice Activity', value: 33554432n },
                    { id: 'priority_speaker', name: 'Priority Speaker', value: 256n },
                    { id: 'mute_members', name: 'Mute Members', value: 4194304n },
                    { id: 'deafen_members', name: 'Deafen Members', value: 8388608n },
                    { id: 'move_members', name: 'Move Members', value: 16777216n },
                    { id: 'request_to_speak', name: 'Request to Speak', value: 4294967296n }
                ]
            },
            {
                id: 'other',
                category: "Other Permissions",
                permissions: [
                    { id: 'manage_emojis_stickers', name: 'Manage Emojis and Stickers', value: 1073741824n },
                    { id: 'manage_events', name: 'Manage Events', value: 8589934592n },
                    { id: 'create_invite', name: 'Create Invite', value: 1n }
                ]
            }
        ];

        let total = 0n;
        const permissionValues = new Map();
        const categoryStates = new Map();
        
        // Initialize interface
        function initializeInterface() {
            const grid = document.getElementById('permissionsGrid');
            
            discordPermissions.forEach(category => {
                // Create category header with toggle button
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'category-header';
                categoryHeader.innerHTML = `
                    <div class="category-title">${category.category}</div>
                    <button class="category-toggle" data-category="${category.id}">Toggle All</button>
                `;
                grid.appendChild(categoryHeader);
                
                // Store initial category state (all disabled)
                categoryStates.set(category.id, false);
                
                // Add category permissions
                category.permissions.forEach(perm => {
                    const item = document.createElement('div');
                    item.className = 'permission-item';
                    item.id = `item-${perm.id}`;
                    
                    item.innerHTML = `
                        <input type="checkbox" id="${perm.id}" value="${perm.value}">
                        <label for="${perm.id}">
                            ${perm.name}
                            <span class="permission-value">${perm.value.toString()}</span>
                        </label>
                    `;
                    
                    grid.appendChild(item);
                    
                    // Save permission information
                    permissionValues.set(perm.id, {
                        name: perm.name,
                        value: perm.value,
                        category: category.id
                    });
                });
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
            discordPermissions.forEach(category => {
                categoryStates.set(category.id, enable);
            });
            
            updateTotal();
        }
        
        function toggleCategoryPermissions(categoryId) {
            const category = discordPermissions.find(c => c.id === categoryId);
            if (!category) return;
            
            // Get current state of the category
            const currentState = categoryStates.get(categoryId);
            const newState = !currentState;
            
            // Toggle all permissions in this category
            category.permissions.forEach(perm => {
                const checkbox = document.getElementById(perm.id);
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
            
            // Update category states
            discordPermissions.forEach(category => {
                const categoryPermissions = category.permissions;
                const allChecked = categoryPermissions.every(perm => {
                    const checkbox = document.getElementById(perm.id);
                    return checkbox && checkbox.checked;
                });
                const anyChecked = categoryPermissions.some(perm => {
                    const checkbox = document.getElementById(perm.id);
                    return checkbox && checkbox.checked;
                });
                
                // Update category state based on checkboxes
                categoryStates.set(category.id, allChecked);
                
                // Update category toggle button text
                const toggleButton = document.querySelector(`.category-toggle[data-category="${category.id}"]`);
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
</script>