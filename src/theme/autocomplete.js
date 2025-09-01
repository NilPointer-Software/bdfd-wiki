function autocomplete() {
  const functionsHeader = Array.from(document.querySelectorAll('li.chapter-item')).find(li => li.querySelector('div')?.textContent.trim() === 'Functions');
  if (!functionsHeader) return;
  const sectionList = functionsHeader.nextElementSibling;
  if (!sectionList) return;
  const html = sectionList.innerHTML;
  const functions = Array.from(new DOMParser().parseFromString(html, 'text/html').querySelectorAll('a')).map(a => a.textContent).filter(text => text.startsWith('$'));
  const textarea = document.getElementById('editor');
  const autocompleteOutput = document.getElementById('autocomplete');
  let cursorInactiveTimeout;
  let selectedIndex = -1;

  function hideAutocomplete() {
    autocompleteOutput.innerHTML = '';
    clearTimeout(cursorInactiveTimeout);
    selectedIndex = -1;
  }

  function updateAutocomplete() {
    const inputText = textarea.value;
    const cursorPosition = textarea.selectionStart;
    let dollarIndex = inputText.substring(0, cursorPosition).lastIndexOf('$');
    if (dollarIndex === -1) { hideAutocomplete(); return; }
    const searchTerm = inputText.substring(dollarIndex, cursorPosition).toLowerCase();
    autocompleteOutput.innerHTML = '';
    const matchingFunctions = functions.filter(func => func.toLowerCase().startsWith(searchTerm));
    const displayedFunctions = matchingFunctions.slice(0, 5);
   selectedIndex = -1;
        Array.from(autocompleteOutput.children).forEach(child => child.classList.remove('selected'));

    const { left, top } = textarea.getBoundingClientRect();
    const textareaStyle = window.getComputedStyle(textarea);
    let lineHeight = parseInt(textareaStyle.lineHeight) || 16;
    const paddingTop = parseInt(textareaStyle.paddingTop) || 0;
    const borderTopWidth = parseInt(textareaStyle.borderTopWidth) || 0;
    const x = left + textarea.selectionStart * 8;
    let y = top + paddingTop + borderTopWidth + (Math.floor(inputText.substring(0, cursorPosition).split('\n').length)) * lineHeight + 30;

    autocompleteOutput.style.position = 'absolute';
    autocompleteOutput.style.left = `${x}px`;
    autocompleteOutput.style.top = `${y}px`;
    autocompleteOutput.style.zIndex = '1000';

    displayedFunctions.forEach((func, index) => {
      const span = document.createElement('span');
      span.textContent = func;
      span.addEventListener('click', () => selectFunction(func,dollarIndex,cursorPosition,inputText));
      autocompleteOutput.appendChild(span);
    });

    clearTimeout(cursorInactiveTimeout);
    cursorInactiveTimeout = setTimeout(hideAutocomplete, 10000);
  }
    function selectFunction(func,dollarIndex,cursorPosition,inputText) {
        textarea.value = inputText.substring(0, dollarIndex) + func + inputText.substring(cursorPosition);
        textarea.selectionStart = textarea.selectionEnd = dollarIndex + func.length;
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
            const selectedFunction = autocompleteOutput.children[selectedIndex].textContent;
            const inputText = textarea.value;
            const cursorPosition = textarea.selectionStart;
            let dollarIndex = inputText.substring(0, cursorPosition).lastIndexOf('$');
             selectFunction(selectedFunction,dollarIndex,cursorPosition,inputText);
             return;
        }

    highlightSelected();
  }
    function highlightSelected() {
        Array.from(autocompleteOutput.children).forEach((child, index) => {
            child.classList.toggle('selected', index === selectedIndex);
        });
    }

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
    const text = textarea.value;
    const cursor = textarea.selectionStart;
    const commandTrigger = '$commandTrigger';
    const isSlashTrigger = '$isSlash';
    const timestampTrigger = '$getTimestamp';

    let tooltipText = '';

    //  $commandTrigger
    if (text.substring(cursor - commandTrigger.length, cursor) === commandTrigger) {
      const name = document.getElementById('name').value || 'trigger';
      tooltipText = `Returns '${name}'`;
    }
    //  $isSlash
    else if (text.substring(cursor - isSlashTrigger.length, cursor) === isSlashTrigger) {
      const slash = document.getElementById('scriptType').textContent.includes('Slash Command') ? 'true' : 'false';
      tooltipText = `Returns '${slash}'`;
    }
    //  $getTimestamp
    else if (text.substring(cursor - timestampTrigger.length, cursor).startsWith(timestampTrigger)) {
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

      const x = left + cursor * 8;
      const y = top + paddingTop + borderTopWidth + (Math.floor(textarea.value.substring(0, textarea.selectionStart).split('\n').length)) * lineHeight + 30;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
      tooltip.textContent = tooltipText;
      tooltip.style.display = 'block';
    } else {
      tooltip.style.display = 'none';
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  autocomplete();
  addTooltips();
});

window.addEventListener('beforeunload', function (event) {
  const textarea = document.getElementById('editor');

  if (textarea.value.trim() === '') {
    return;
  }

  event.preventDefault();
  event.returnValue = '';
  const confirmationMessage = 'Are you sure you want to leave the page?';
  return confirmationMessage;
});

function updateInternetConnection() {
  const text = document.getElementById('internetConnection');

  if (window.navigator.onLine) {
    text.textContent = '👍 All services work stably.';
    text.style.color = 'green';
  } else {
    text.textContent = '🛜 Check your internet connection! It may affect some services...';
    text.style.color = 'red';
  }
}

setInterval(updateInternetConnection, 1000);

