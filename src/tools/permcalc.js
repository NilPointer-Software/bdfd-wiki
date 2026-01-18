// Global Discord permissions object
const discordPermissionsList = {
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

// Permission function to get permission value
function permission(permissionName) {
    return discordPermissionsList[permissionName]; // Returns value or undefined
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
    // Clear the map
    permissionValues.clear();
    
    // Get only real permissions from our list
    Object.keys(discordPermissionsList).forEach(permissionName => {
        const checkbox = document.getElementById(permissionName);
        if (checkbox) {
            const permissionValue = discordPermissionsList[permissionName];
            const label = document.querySelector(`label[for="${permissionName}"]`);
            const permissionLabel = label ? label.textContent.trim().split('\n')[0] : permissionName;
            
            permissionValues.set(permissionName, {
                name: permissionLabel,
                value: permissionValue
            });
        }
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
    
    // Set all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.checked = enable;
    });
    
    // Update visual state for all permission items
    updateAllPermissionItemsVisualState();
    
    // Update all category states
    Object.keys(categoryMapping).forEach(category => {
        categoryStates.set(category, enable);
    });
    
    updateTotal();
}

function updateAllPermissionItemsVisualState() {
    // Update visual state for all permission items
    document.querySelectorAll('.permission-item').forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox) {
            if (checkbox.checked) {
                item.classList.add('checked');
            } else {
                item.classList.remove('checked');
            }
        }
    });
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
            
            // Update visual state for this permission item
            const permissionItem = document.querySelector(`#item-${permissionId}`);
            if (permissionItem) {
                if (newState) {
                    permissionItem.classList.add('checked');
                } else {
                    permissionItem.classList.remove('checked');
                }
            }
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
        // Use permission() function to get the value
        const permValue = permission(checkbox.id);
        if (permValue !== undefined) {
            total += permValue;
        }
    });
    
    // Update visual state for all permission items
    document.querySelectorAll('.permission-item').forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox) {
            if (checkbox.checked) {
                item.classList.add('checked');
            } else {
                item.classList.remove('checked');
            }
        }
    });
    
    // Update category states (without changing button colors)
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
        
        // Update category toggle button text (without changing color)
        const toggleButton = document.querySelector(`.category-toggle[data-category="${category}"]`);
        if (toggleButton) {
            if (allChecked) {
                toggleButton.textContent = 'Disable All';
            } else if (anyChecked) {
                toggleButton.textContent = 'Enable All';
            } else {
                toggleButton.textContent = 'Enable All';
            }
        }
    });
    
    // Update display
    const totalValueElement = document.getElementById('totalValue');
    const hexValueElement = document.getElementById('hexValue');
    
    if (totalValueElement) {
        totalValueElement.textContent = total.toString();
    }
    if (hexValueElement) {
        hexValueElement.textContent = `0x${total.toString(16).toUpperCase()}`;
    }
    
    findCombinations();
}

function findCombinations() {
    const targetInput = document.getElementById('targetValue');
    const targetValue = targetInput.value.trim();
    const resultDiv = document.getElementById('resultContent');
    
    // Get currently selected permissions
    const checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    const checkedPerms = checkedBoxes.map(cb => cb.id);
    const checkedSum = checkedBoxes.reduce((sum, cb) => {
        const permValue = permission(cb.id);
        return permValue !== undefined ? sum + permValue : sum;
    }, 0n);
    
    // If input field is empty
    if (!targetValue) {
        if (checkedPerms.length > 0) {
            const permNames = checkedPerms.map(id => permissionValues.get(id)?.name).filter(name => name);
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
            // No permissions selected and no search value
            resultDiv.innerHTML = '<div class="no-results">Select permissions from the list above or enter a value to find combinations</div>';
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
        const permNames = checkedPerms.map(id => permissionValues.get(id)?.name).filter(name => name);
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
    
    // Search for a single combination
    const allPerms = Array.from(permissionValues.entries());
    let foundCombination = null;
    
    // Function for recursive combination search (finds first match)
    function findCombinationRecursive(startIndex, currentSum, currentPerms) {
        // If we found a match, stop searching
        if (foundCombination) return;
        
        if (currentSum === targetBigInt && currentPerms.length > 0) {
            foundCombination = [...currentPerms];
            return;
        }
        
        if (currentSum > targetBigInt || currentPerms.length >= 5 || startIndex >= allPerms.length) {
            return;
        }
        
        // Search for a combination
        for (let i = startIndex; i < allPerms.length; i++) {
            const [id, perm] = allPerms[i];
            // Skip permissions with zero value
            if (!perm.value || perm.value === 0n || perm.value === undefined) continue;
            
            findCombinationRecursive(
                i + 1,
                currentSum + perm.value,
                [...currentPerms, { id, ...perm }]
            );
            
            // Stop if we found a combination
            if (foundCombination) return;
        }
    }
    
    // Start search
    findCombinationRecursive(0, 0n, []);
    
    // Display result
    if (foundCombination) {
        const sum = foundCombination.reduce((s, perm) => s + perm.value, 0n);
        let resultHTML = `
            <div class="search-info">Found a combination for value ${targetBigInt.toString()}:</div>
            <div class="combination">
                <div class="combination-title">Permission Combination:</div>
                <ul class="permission-list">
                    ${foundCombination.map(perm => `<li>${perm.name} (${perm.value.toString()})</li>`).join('')}
                </ul>
                <div class="combination-total">Total: ${sum.toString()} = ${formatBinarySum(foundCombination)}</div>
            </div>
        `;
        
        // Add current selection info if any permissions are selected
        if (checkedPerms.length > 0) {
            const permNames = checkedPerms.map(id => permissionValues.get(id)?.name).filter(name => name);
            if (permNames.length > 0) {
                resultHTML += `
                    <div class="current-selection">
                        <div class="combination-title">Currently Selected Permissions:</div>
                        <ul class="permission-list">
                            ${permNames.map(name => `<li>${name}</li>`).join('')}
                        </ul>
                        <div class="combination-total">Total: ${checkedSum.toString()} (0x${checkedSum.toString(16).toUpperCase()})</div>
                    </div>
                `;
            }
        }
        
        resultDiv.innerHTML = resultHTML;
    } else {
        let resultHTML = `<div class="no-results">No permission combination found for value ${targetBigInt.toString()}</div>`;
        
        // Only show current selection if permissions are actually selected
        if (checkedPerms.length > 0) {
            const permNames = checkedPerms.map(id => permissionValues.get(id)?.name).filter(name => name);
            if (permNames.length > 0) {
                resultHTML += `
                    <div class="current-selection">
                        <div class="combination-title">Currently Selected Permissions:</div>
                        <ul class="permission-list">
                            ${permNames.map(name => `<li>${name}</li>`).join('')}
                        </ul>
                        <div class="combination-total">Total: ${checkedSum.toString()} (0x${checkedSum.toString(16).toUpperCase()})</div>
                    </div>
                `;
            }
        }
        
        resultDiv.innerHTML = resultHTML;
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