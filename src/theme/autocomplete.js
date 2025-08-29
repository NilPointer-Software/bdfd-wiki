let autocompleteEnabled = true;

function changeAutocomplete() {
  autocompleteEnabled = !autocompleteEnabled;

  const textarea = document.getElementById('editor');

  if (!textarea) {
    console.error('Textarea element with id "editor" not found.');
    return;
  }

  if (autocompleteEnabled) {
    textarea.addEventListener('input', handleInput);
  } else {
    textarea.removeEventListener('input', handleInput);
    document.getElementById('autocomplete').innerHTML = '';
  }
}

function handleInput(event) {
  if (autocompleteEnabled) {
    autocomplete(event);
  }
}

function autocomplete(event) {
  const functionsHeader = Array.from(document.querySelectorAll('li.chapter-item'))
    .find(li => {
      const div = li.querySelector('div');
      return div && div.textContent.trim() === 'Functions';
    });

  if (!functionsHeader) return console.warn('Element not found.');

  const sectionList = functionsHeader.nextElementSibling;
  if (!sectionList) return console.warn('Functions arent found.');

  const html = sectionList.innerHTML;
  const functions = Array.from(new DOMParser().parseFromString(html, 'text/html').querySelectorAll('a'))
    .map(a => a.textContent)
    .filter(text => text.startsWith('$'));

  const textarea = document.getElementById('editor');
  const autocompleteOutput = document.getElementById('autocomplete');
  const inputText = event.target.value;
  const cursorPosition = textarea.selectionStart;
  let searchTerm = '';
  let dollarIndex = inputText.lastIndexOf('$', cursorPosition);

  if (dollarIndex === -1) return autocompleteOutput.innerHTML = '';

  searchTerm = inputText.substring(dollarIndex).toLowerCase();
  autocompleteOutput.innerHTML = '';

  const matchingFunctions = functions.filter(func => func.toLowerCase().startsWith(searchTerm));
  const displayedFunctions = matchingFunctions.slice(0, 5);

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

