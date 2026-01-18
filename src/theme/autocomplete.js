// Setting
let autocompleteEnabled = true;
let allFunctions = []; // Array to store all functions from API
let allFunctionNames = []; // Array to store simplified function names (without parameters)

// Load functions from API on page load
async function loadFunctionsFromAPI() {
  try {
    const response = await fetch('https://botdesignerdiscord.com/public/api/function_list');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Store all functions with their full tag information
    allFunctions = data;
    
    // Extract simplified function names for autocomplete matching
    // This includes both versions with and without brackets
    allFunctionNames = [];
    
    data.forEach(func => {
      const tag = func.tag;
      // Extract base function name (without parameters)
      const baseName = tag.split('[')[0];
      
      // Add both versions to the array for better autocomplete
      if (tag.includes('[')) {
        // Add version with brackets
        allFunctionNames.push({
          simpleName: baseName + '[]',
          fullTag: tag,
          hasParams: true,
          baseName: baseName
        });
        
        // Also add version without brackets if it doesn't exist already
        if (!allFunctionNames.some(f => f.simpleName === baseName)) {
          allFunctionNames.push({
            simpleName: baseName,
            fullTag: baseName,
            hasParams: false,
            baseName: baseName
          });
        }
      } else {
        // Function without brackets
        allFunctionNames.push({
          simpleName: baseName,
          fullTag: tag,
          hasParams: false,
          baseName: baseName
        });
      }
    });
    
    console.log(`Loaded ${allFunctions.length} functions from API`);
    return true;
  } catch (error) {
    console.error('Error loading functions from API:', error);
    // If API fails, use fallback to DOM parsing
    loadFunctionsFromDOM();
    return false;
  }
}

// Fallback function to load functions from DOM if API fails
function loadFunctionsFromDOM() {
  const functionsHeader = Array.from(document.querySelectorAll('li.chapter-item')).find(li => li.querySelector('div')?.textContent.trim() === 'Functions');
  if (!functionsHeader) return;
  
  const sectionList = functionsHeader.nextElementSibling;
  if (!sectionList) return;
  
  const html = sectionList.innerHTML;
  const domFunctions = Array.from(new DOMParser().parseFromString(html, 'text/html').querySelectorAll('a')).map(a => a.textContent).filter(text => text.startsWith('$'));
  
  allFunctionNames = [];
  domFunctions.forEach(func => {
    const baseName = func.split('[')[0];
    
    if (func.includes('[')) {
      allFunctionNames.push({
        simpleName: baseName + '[]',
        fullTag: func,
        hasParams: true,
        baseName: baseName
      });
      
      if (!allFunctionNames.some(f => f.simpleName === baseName)) {
        allFunctionNames.push({
          simpleName: baseName,
          fullTag: baseName,
          hasParams: false,
          baseName: baseName
        });
      }
    } else {
      allFunctionNames.push({
        simpleName: baseName,
        fullTag: func,
        hasParams: false,
        baseName: baseName
      });
    }
  });
}

function changeAutocomplete() {
  autocompleteEnabled = !autocompleteEnabled;
  const autocompleteElement = document.getElementById('autocomplete');
  autocompleteElement.style.display = autocompleteEnabled ? 'block' : 'none';
  autoSettingChange('changeAutocompleteButton', autocompleteEnabled);
  updateAutocompleteState();
}

function autoSettingChange(buttonName, status) {
  const button = document.getElementById(buttonName);
  if (!button) {
    console.error(`Failed to find "${buttonName}" button.`);
    return;
  }
  const activeGradient = 'linear-gradient(to right, rgb(255 255 255 / 40%), rgb(1 192 36 / 75%))';
  const inactiveGradient = 'linear-gradient(to left, rgb(255 255 255 / 40%), rgb(192 1 1 / 75%))';
  button.style.background = status ? activeGradient : inactiveGradient;
}

// Main autocomplete function
function initAutocomplete() {
  const textarea = document.getElementById('editor');
  const autocompleteOutput = document.getElementById('autocomplete');
  let cursorInactiveTimeout;
  let selectedIndex = -1;

  function hideAutocomplete() {
    autocompleteOutput.innerHTML = '';
    clearTimeout(cursorInactiveTimeout);
    selectedIndex = -1;
    Array.from(autocompleteOutput.children).forEach(child => child.classList.remove('selected'));
  }

  function updateAutocomplete() {
    if (!autocompleteEnabled || allFunctionNames.length === 0) {
      hideAutocomplete();
      return;
    }
    
    const inputText = textarea.value;
    const cursorPosition = textarea.selectionStart;
    
    // Find the last $ before cursor position
    let dollarIndex = inputText.substring(0, cursorPosition).lastIndexOf('$');
    if (dollarIndex === -1) { 
      hideAutocomplete(); 
      return; 
    }
    
    // Get what user typed after $ (search term)
    const searchTerm = inputText.substring(dollarIndex, cursorPosition).toLowerCase();
    autocompleteOutput.innerHTML = '';
    
    // Filter functions based on search term
    const matchingFunctions = allFunctionNames.filter(func => 
      func.simpleName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    
    // Remove duplicates (keep only one entry per simpleName)
    const uniqueFunctions = [];
    const seenNames = new Set();
    
    matchingFunctions.forEach(func => {
      if (!seenNames.has(func.simpleName)) {
        seenNames.add(func.simpleName);
        uniqueFunctions.push(func);
      }
    });
    
    // Take first 5 functions
    const displayedFunctions = uniqueFunctions.slice(0, 5);
    selectedIndex = -1;
    Array.from(autocompleteOutput.children).forEach(child => child.classList.remove('selected'));

    // Calculate position for autocomplete dropdown
    const { left, top } = textarea.getBoundingClientRect();
    const textareaStyle = window.getComputedStyle(textarea);
    let lineHeight = parseInt(textareaStyle.lineHeight) || 16;
    const paddingTop = parseInt(textareaStyle.paddingTop) || 0;
    const borderTopWidth = parseInt(textareaStyle.borderTopWidth) || 0;
    
    // Calculate position based on cursor
    const cursorLine = inputText.substring(0, cursorPosition).split('\n').length - 1;
    const cursorInLine = cursorPosition - inputText.substring(0, cursorPosition).lastIndexOf('\n') - 1;
    
    // Approximate cursor position (this is a simplification)
    const x = left + cursorInLine * 8; // 8px per character approximation
    const y = top + paddingTop + borderTopWidth + cursorLine * lineHeight + 30;

    autocompleteOutput.style.position = 'absolute';
    autocompleteOutput.style.left = `${x}px`;
    autocompleteOutput.style.top = `${y}px`;
    autocompleteOutput.style.zIndex = '1000';

    // Create autocomplete items
    displayedFunctions.forEach((func, index) => {
      const span = document.createElement('span');
      span.textContent = func.simpleName;
      span.addEventListener('click', () => {
        selectFunction(func.fullTag, dollarIndex, cursorPosition, inputText);
      });
      autocompleteOutput.appendChild(span);
    });

    clearTimeout(cursorInactiveTimeout);
    cursorInactiveTimeout = setTimeout(hideAutocomplete, 10000);
  }

  // Function to insert selected function
  function selectFunction(funcToInsert, dollarIndex, cursorPosition, inputText) {
    textarea.value = inputText.substring(0, dollarIndex) + funcToInsert + inputText.substring(cursorPosition);
    
    // Position cursor after inserted function
    textarea.selectionStart = textarea.selectionEnd = dollarIndex + funcToInsert.length;
    
    hideAutocomplete();
    textarea.focus();
  }

  function handleArrowKeys(event) {
    if (autocompleteOutput.children.length === 0) return;
    
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, autocompleteOutput.children.length - 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
    } else if (event.key === 'Enter' && selectedIndex !== -1) {
      event.preventDefault();
      const selectedSpan = autocompleteOutput.children[selectedIndex];
      const selectedFunctionName = selectedSpan.textContent;
      
      // Find the full tag for this function
      const funcData = allFunctionNames.find(f => f.simpleName === selectedFunctionName);
      const funcToInsert = funcData ? funcData.fullTag : selectedFunctionName;
      
      const inputText = textarea.value;
      const cursorPosition = textarea.selectionStart;
      let dollarIndex = inputText.substring(0, cursorPosition).lastIndexOf('$');
      
      selectFunction(funcToInsert, dollarIndex, cursorPosition, inputText);
      return;
    }
    
    highlightSelected();
  }

  function highlightSelected() {
    Array.from(autocompleteOutput.children).forEach((child, index) => {
      child.classList.toggle('selected', index === selectedIndex);
    });
  }

  // Setup event listeners for textarea
  if (textarea) {
    textarea.addEventListener('input', updateAutocomplete);
    textarea.addEventListener('mouseup', updateAutocomplete);
    
    textarea.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter') {
        handleArrowKeys(event);
      }
    });

    textarea.addEventListener('blur', () => {
      setTimeout(hideAutocomplete, 200);
    });

    document.addEventListener('click', event => {
      if (!autocompleteOutput.contains(event.target) && event.target !== textarea) {
        hideAutocomplete();
      }
    });
  }
}

function addTooltips() {
  const textarea = document.getElementById('editor');
  const tooltip = document.createElement('div');
  tooltip.id = 'tooltip';
  tooltip.style.position = 'absolute';
  tooltip.style.display = 'none';
  tooltip.style.zIndex = '1001';
  document.body.appendChild(tooltip);

  textarea.addEventListener('keyup', updateTooltip);
  textarea.addEventListener('mouseup', updateTooltip);

  function updateTooltip() {
    if (!autocompleteEnabled) {
      tooltip.style.display = 'none';
      return;
    }

    const text = textarea.value;
    const cursor = textarea.selectionStart;
    const commandTrigger = '$commandTrigger';
    const isSlashTrigger = '$isSlash';
    const timestampTrigger = '$getTimestamp';
    let tooltipText = '';

    if (text.substring(cursor - commandTrigger.length, cursor) === commandTrigger) {
      const name = document.getElementById('name').value || 'trigger';
      tooltipText = `Returns '${name}'`;
    } else if (text.substring(cursor - isSlashTrigger.length, cursor) === isSlashTrigger) {
      const slash = document.getElementById('scriptType').textContent.includes('Slash Command') ? 'true' : 'false';
      tooltipText = `Returns '${slash}'`;
    } else if (text.substring(cursor - timestampTrigger.length, cursor).startsWith(timestampTrigger)) {
      const timestamp = Math.floor(Date.now() / 1000);
      tooltipText = `Returns '${timestamp}'`;
    }

    if (tooltipText) {
      const { left, top } = textarea.getBoundingClientRect();
      const textareaStyle = window.getComputedStyle(textarea);
      let lineHeight = parseInt(textareaStyle.lineHeight);
      lineHeight = isNaN(lineHeight) ? 16 : lineHeight;
      const paddingTop = parseInt(textareaStyle.paddingTop) || 0;
      const borderTopWidth = parseInt(textareaStyle.borderTopWidth) || 0;
      
      const cursorLine = text.substring(0, cursor).split('\n').length - 1;
      const x = left + (cursor - text.substring(0, cursor).lastIndexOf('\n') - 1) * 8;
      const y = top + paddingTop + borderTopWidth + cursorLine * lineHeight + 30;

      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
      tooltip.textContent = tooltipText;
      tooltip.style.display = 'block';
    } else {
      tooltip.style.display = 'none';
    }
  }
}

function updateAutocompleteState() {
  const textarea = document.getElementById('editor');
  const autocompleteOutput = document.getElementById('autocomplete');
  
  if (!autocompleteEnabled) {
    autocompleteOutput.innerHTML = ''; // Clear autocomplete
    textarea.removeEventListener('input', updateAutocomplete);
    textarea.removeEventListener('mouseup', updateAutocomplete);
    
    // Hide tooltip
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
      tooltip.style.display = 'none';
    }
    textarea.removeEventListener('keyup', updateTooltip);
    textarea.removeEventListener('mouseup', updateTooltip);
  } else {
    // Re-add event listeners if they were removed
    textarea.addEventListener('input', updateAutocomplete);
    textarea.addEventListener('mouseup', updateAutocomplete);
    textarea.addEventListener('keyup', updateTooltip);
    textarea.addEventListener('mouseup', updateTooltip);
  }
}

document.addEventListener("DOMContentLoaded", async function() {
  if (window.location.href.includes('editor.html')) {
    // Load functions from API first
    const apiLoaded = await loadFunctionsFromAPI();
    
    if (!apiLoaded) {
      console.log('Falling back to DOM parsing for functions');
    }
    
    // Initialize autocomplete with loaded functions
    initAutocomplete();
    addTooltips();
    updateAutocompleteState();
  }
});

window.addEventListener('beforeunload', function (event) {
  const textarea = document.getElementById('editor');

  if (textarea && textarea.value.trim() === '') {
    return;
  }

  event.preventDefault();
  event.returnValue = '';
  const confirmationMessage = 'Are you sure you want to leave the page?';
  return confirmationMessage;
});

function updateInternetConnection() {
  const text = document.getElementById('internetConnection');

  if (text) {
    if (window.navigator.onLine) {
      text.textContent = '👍 All services work stably.';
      text.style.color = 'green';
    } else {
      text.textContent = '🛜 Check your internet connection! It may affect some services...';
      text.style.color = 'red';
    }
  } else {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(updateInternetConnection, 1000);
