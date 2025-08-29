function autocomplete() {
  const functionsHeader = Array.from(document.querySelectorAll('li.chapter-item'))
    .find(li => {
      const div = li.querySelector('div');
      return div && div.textContent.trim() === 'Functions';
    });

  if (!functionsHeader) {
    console.warn('Element not found.');
    return;
  }

  const sectionList = functionsHeader.nextElementSibling;

  if (!sectionList) {
    console.warn('Functions arent found.');
    return;
  }

  const html = sectionList.innerHTML;

  const functions = Array.from(new DOMParser().parseFromString(html, 'text/html').querySelectorAll('a'))
    .map(a => a.textContent)
    .filter(text => text.startsWith('$'));

  const textarea = document.getElementById('editor');
  const autocompleteOutput = document.getElementById('autocomplete');

  function updateAutocomplete() {
    const inputText = textarea.value;
    const cursorPosition = textarea.selectionStart;

    let dollarIndex = inputText.substring(0, cursorPosition).lastIndexOf('$');

    if (dollarIndex === -1) {
      autocompleteOutput.innerHTML = '';
      return;
    }

    const searchTerm = inputText.substring(dollarIndex, cursorPosition).toLowerCase();
    autocompleteOutput.innerHTML = '';

    const matchingFunctions = functions.filter(func => func.toLowerCase().startsWith(searchTerm));
    const displayedFunctions = matchingFunctions.slice(0, 5);

    const { left, top, height } = textarea.getBoundingClientRect();
    const cursorRect = textarea.getBoundingClientRect();
    const textareaStyle = window.getComputedStyle(textarea);
    const lineHeight = parseInt(textareaStyle.lineHeight);
    const paddingTop = parseInt(textareaStyle.paddingTop);
    const borderTopWidth = parseInt(textareaStyle.borderTopWidth);

    const x = left + textarea.selectionStart * 8;
    const y = top + paddingTop + borderTopWidth + (Math.floor(textarea.value.substring(0, textarea.selectionStart).split('\n').length)) * lineHeight - 45;

    autocompleteOutput.style.position = 'absolute';
    autocompleteOutput.style.left = `${x}px`;
    autocompleteOutput.style.top = `${y + lineHeight}px`;
    autocompleteOutput.style.zIndex = '1000';

    displayedFunctions.forEach(func => {
      const span = document.createElement('span');
      span.textContent = func;
      span.addEventListener('click', function () {
        textarea.value = inputText.substring(0, dollarIndex) + func + inputText.substring(cursorPosition);
        textarea.selectionStart = textarea.selectionEnd = dollarIndex + func.length;
        autocompleteOutput.innerHTML = '';
        textarea.focus();
      });
      autocompleteOutput.appendChild(span);
    });
  }

  textarea.addEventListener('input', updateAutocomplete);
  textarea.addEventListener('mouseup', updateAutocomplete);
  textarea.addEventListener('keyup', updateAutocomplete);
}


document.addEventListener("DOMContentLoaded", function() {
  autocomplete();
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

