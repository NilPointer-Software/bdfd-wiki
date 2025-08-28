function autocomplete() {
  if (2 > 1) {
    const sectionList = document.querySelector('ol.section');

    if (!sectionList) {
      console.error("Не найден элемент <ol class='section'>.");
      return;
    }
    const html = sectionList.innerHTML;
    const functions = Array.from(new DOMParser().parseFromString(html, 'text/html').querySelectorAll('a'))
      .map(a => a.textContent)
      .filter(text => text.startsWith('$'));

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
      autocompleteOutput.textContent = 'Hello';

      const matchingFunctions = functions.filter(func => func.toLowerCase().startsWith(searchTerm));

      matchingFunctions.forEach(func => {
        const span = document.createElement('span');
        span.textContent = func;
        span.style.backgroundColor = 'lightgray';
        span.style.marginRight = '5px';
        span.style.cursor = 'pointer';
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
}

autocomplete();

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

