function autocomplete() {
  const functionsHeader = Array.from(document.querySelectorAll('li.chapter-item'))
    .find(li => {
      const div = li.querySelector('div'); 
      return div && div.textContent.trim() === 'Functions';
    });

  if (!functionsHeader) {
    console.warn('Не найден элемент списка (li.chapter-item), содержащий <div>Functions</div>.');
    return;
  }

  const sectionList = functionsHeader.nextElementSibling;

  if (!sectionList) {
    console.warn('Не найден список (ol) после заголовка Functions.');
    return;
  }

  const html = sectionList.innerHTML;

  const functions = Array.from(new DOMParser().parseFromString(html, 'text/html').querySelectorAll('a'))
    .map(a => a.textContent)
    .filter(text => text.startsWith('$'));

  console.log(`Найдено функций (начинаются с $): ${functions.length}`);

  const textarea = document.getElementById('editor');
  const autocompleteOutput = document.getElementById('autocomplete');

  textarea.addEventListener('input', function (event) {
    const inputText = event.target.value;
    const cursorPosition = textarea.selectionStart;
    let searchTerm = '';
    let dollarIndex = inputText.lastIndexOf('$', cursorPosition);

    if (dollarIndex === -1) {
      autocompleteOutput.innerHTML = '';
      return;
    }

    searchTerm = inputText.substring(dollarIndex).toLowerCase();
    autocompleteOutput.innerHTML = '';

    const matchingFunctions = functions.filter(func => func.toLowerCase().startsWith(searchTerm));

    matchingFunctions.forEach(func => {
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

