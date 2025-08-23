// Math
function handlePlaygroundInput(inputValue, functionName, operation) {
  const playOutput = document.getElementById('play-output');

  if (!isNaN(inputValue) && inputValue !== "") {
    if (functionName === '$sqrt' && parseFloat(inputValue) < 0) {
      playOutput.innerHTML = `❌ Function <p id="errorFunctionName">${functionName}</p> at <p id="errorLineNumber">1:${functionName.length + 4}</p> returned an error: the input number can't be negative`;
    } else {
      const result = operation(inputValue);
      playOutput.textContent = `Result: ${result}`;
    }
  } else {
    if (inputValue === "") {
      outputEmptyValueError(functionName, 1, 1);
    } else {
      let nonNumericIndex = inputValue.search(/[^0-9\.]/); 
      nonNumericIndex = nonNumericIndex === -1 ? inputValue.length : nonNumericIndex + functionName.length + 3;
      playOutput.innerHTML = `❌ Function <p id="errorFunctionName">${functionName}</p> at <p id="errorLineNumber">1:${nonNumericIndex}</p> returned an error: expected integer in position 1, got '${inputValue}'`;
    }
  }
}

// $ceil[]
function ceilPlayground(inputValue) {
  handlePlaygroundInput(inputValue, '$ceil', Math.ceil); 
}

// $floor[]
function floorPlayground(inputValue) {
  handlePlaygroundInput(inputValue, '$floor', Math.floor); 
}

// $sqrt[]
function sqrtPlayground(inputValue) {
  handlePlaygroundInput(inputValue, '$sqrt', (value) => Math.round(Math.sqrt(value)));
}

// $round[]
function roundPlayground(inputValue) {
  handlePlaygroundInput(inputValue, '$round', Math.round); 
}

// $charCount[]
function charCountPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  const charCount = inputValue.length;
  playOutput.textContent = `Your message has ${charCount} characters.`;
}

// $byteCount[]
function byteCountPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  const byteCount = new TextEncoder().encode(inputValue).length;
  playOutput.textContent = `Your message has ${byteCount} bytes.`;
}

// $argCount[]
function argCountPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  const argCount = inputValue.trim().split(/\s+/).length;
  playOutput.textContent = `Word count: ${argCount}`;
}

// $isNumber[]
function isNumberPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.textContent = `Is number? ${!isNaN(parseFloat(inputValue)) && isFinite(inputValue)}`; 
}

// $isInteger[]
function isIntegerPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  if (inputValue === "") {
    outputEmptyValueError(`$isInteger`, 1, 1);
  } else {
    playOutput.textContent = `Is integer? ${Number.isInteger(parseFloat(inputValue))}`;
  }
}

// $isValidHex[]
function isValidHexPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.textContent = `Is valid HEX? ${/^#?[0-9a-fA-F]+$/.test(inputValue)}`;
}

// $isBoolean[]
function isBooleanPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  const booleanValues = ['true', 'false', 'on', 'off', 'enable', 'disable', 'yes', 'no'];
  playOutput.textContent = `Is valid HEX? ${booleanValues.includes(inputValue)}`;
}

function preserveLineBreaks(text) {
  return text.replace(/\n/g, '<br>');
}

function limitLines(text, maxLines) {
  const lines = text.split('\n');
  return lines.slice(0, maxLines).join('\n');
}

// $trimSpace[]
function trimSpacePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.innerHTML = preserveLineBreaks(limitLines(inputValue.trim(), 20));
  editInputHeight()
}

// $toLowercase[]
function toLowercasePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.innerHTML = preserveLineBreaks(limitLines(inputValue.toLowerCase(), 20));
  editInputHeight()
}

// $toUppercase[]
function toUppercasePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.innerHTML = preserveLineBreaks(limitLines(inputValue.toUpperCase(), 20));
  editInputHeight()
}

// $toTitleCase[]
function toTitleCasePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.innerHTML = preserveLineBreaks(limitLines(inputValue.replace(/\w\S*/g, (word) => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
  ), 20));
  editInputHeight()
}

// $randomString[]
function randomStringPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  let functionName = '$randomString';

  if (inputValue === "") {
    outputEmptyValueError(functionName, 1, 1);
  } else if (isNaN(inputValue)) {
    let nonNumericIndex = inputValue.search(/[^0-9]/);
    nonNumericIndex = nonNumericIndex === -1 ? inputValue.length : nonNumericIndex + functionName.length + 3;
    playOutput.innerHTML = `❌ Function <p id="errorFunctionName">${functionName}</p> at <p id="errorLineNumber">1:${nonNumericIndex}</p> returned an error: expected integer in position 1, got '${inputValue}'`;
  } else if (parseInt(inputValue) > 10) {
    playOutput.innerHTML = `❌ Function <p id="errorFunctionName">${functionName}</p> at <p id="errorLineNumber">1:${functionName.length + 3}</p> returned an error: String length has to be leser than 10`;
  } else if (parseInt(inputValue) < 1) { 
    playOutput.innerHTML = `❌ Function <p id="errorFunctionName">${functionName}</p> at <p id="errorLineNumber">1:${functionName.length + 3}</p> returned an error: String length has to be bigger than 0`;
  } else {
    let length = parseInt(inputValue);
    playOutput.textContent = `Random String: ` + generateRandomString(length);
  }
}

function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Empty value error
function outputEmptyValueError(functionName, lineNumber, position) {
  const playOutput = document.getElementById('play-output');
  playOutput.innerHTML  = `❌ Function <p id="errorFunctionName">${functionName}</p> at <p id="errorLineNumber">${lineNumber}:${functionName.length + 2}</p> returned an error: expected valid value in position ${position}, got empty value`;
}

// Better input size for large values
function editInputHeight() {
  const playInputt = document.getElementById('play-input');
  if (playInputt.scrollHeight / 16 <= 20) {
    playInputt.style.height = "1.7rem";
    playInputt.style.height = playInputt.scrollHeight + "px";
  }
  if (playInputt.scrollHeight > 36) {
    playInputt.style.width = "97.75%";
  } else {
    playInputt.style.width = "fit-content";
  }
}

// Editor tools
function updateStats() {
  const text = document.getElementById("editor").value;

  const words = text.trim().split(/\s+/).filter(word => word !== "");
  const wordCount = words.length;

  let spaceCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      spaceCount++;
    }
  }

  const lineCount = text.split('\n').length;
  const charCount = text.length;
  const byteCount = new TextEncoder().encode(text).length;
  const escapes = ["%{DOL}%", "%ESCAPED%", "\\]", "\\;", "%{-SEMICOL-}%"];
  let escapesCount = 0;
  escapes.forEach(escape => {
    let count = 0;
    let position = text.indexOf(escape);
    while (position !== -1) {
      count++;
      position = text.indexOf(escape, position + escape.length);
    }
    escapesCount += count;
  });

  const specialChars = text.replace(/[\w\s]/g, "").length;

  document.getElementById("wordCount").textContent = wordCount;
  document.getElementById("spaceCount").textContent = spaceCount;
  document.getElementById("lineCount").textContent = lineCount;
  document.getElementById("charCount").textContent = charCount;
  document.getElementById("byteCount").textContent = byteCount;
  document.getElementById("escapesCount").textContent = escapesCount;
  document.getElementById("specialChars").textContent = specialChars;
}

function replaceText() {
  const searchText = document.getElementById("searchText").value;
  const replaceText = document.getElementById("replaceText").value;
  const editor = document.getElementById("editor");

  try {
    const regex = new RegExp(searchText, 'g');
    editor.value = editor.value.replace(regex, replaceText);
  } catch (e) {
    const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    editor.value = editor.value.replaceAll(escapedSearchText, replaceText);
  }

  updateStats();
  checkBrackets();
}


function checkBrackets() {
  const text = document.getElementById("editor").value;
  const textBytes = new TextEncoder().encode(text).length;
  let dollarCount = 0;
  let openBrackets = 0;
  let closeBrackets = 0;
  const errors = [];

  if (textBytes > 65536) {
    errors.push({ message: "Error: Text exceeds the allowed size (65536 bytes).", id: errors.length });
  }

  if (text.indexOf('$') === -1 && text.length > 2000) {
    errors.push({ message: "Warning: Character limit exceeded (2000) for messages without functions.", id: errors.length });
  }

  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      if (line[j] === '$') {
        if (j + 1 < line.length && /[a-zA-Z]/.test(line[j + 1])) {
          dollarCount++;
        }
      } else if (line[j] === '[') {
        openBrackets++;
        if (j + 1 < line.length && line[j + 1] === ']') {
          errors.push({ message: `Warning: Empty brackets [] detected on line ${i + 1}.`, id: errors.length });
        }
      } else if (line[j] === ']' && (j === 0 || line[j - 1] !== '\\')) {
        closeBrackets++;
      }
    }
  }

  document.getElementById("openCount").textContent = openBrackets;
  document.getElementById("closeCount").textContent = closeBrackets;

  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.innerHTML = "";

  if (openBrackets <= dollarCount) {
    if (closeBrackets < openBrackets) {
      errors.push({ message: "Error: Not all open brackets are closed.", id: errors.length });
    }
  }

  if (errors.length > 0) {
    errorMessageElement.style.color = "red";

    errors.forEach(error => {
      const errorDiv = document.createElement("div");
      errorDiv.style.display = "block";

      if (error.message.includes("Warning:")) {
        errorDiv.style.color = "orange";
      }

      errorDiv.innerHTML = `${error.message} <span class="close-btn" data-id="${error.id}">×</span>`;
      errorMessageElement.appendChild(errorDiv);
    });

    errorMessageElement.addEventListener("click", function(event) {
      if (event.target.classList.contains("close-btn")) {
        const errorDiv = event.target.parentNode;
        errorDiv.remove();
      }
    });

      if (errors.length > 3) {
          const closeAllButton = document.createElement("button");
          closeAllButton.textContent = "Close All";
          closeAllButton.addEventListener("click", function() {
              errorMessageElement.innerHTML = "";
          });
          errorMessageElement.appendChild(closeAllButton);
      }
  } else {
    errorMessageElement.textContent = "";
    errorMessageElement.style.color = "black";
  }
}


function toggleHighlight() {
  const highlightedTextDiv = document.getElementById("highlightedText");
  const text = document.getElementById("editor").value;
  const searchText = document.getElementById("searchText").value;
  let highlighted = text;
  let matches = 0;

  if (searchText) {
    try {
      const regex = new RegExp(searchText, 'gi');

      highlighted = text.replace(regex, (match) => {
        matches++;
        return `<span class="highlight">${match}</span>`;
      });
    } catch (e) {
      const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearchText, 'gi');

      highlighted = text.replace(regex, (match) => {
        matches++;
        return `<span class="highlight">${match}</span>`;
      });
    }
  }

  // Channel & User mentions
  const mentionRegex = /<@(.*?)>/g;
  highlighted = highlighted.replace(mentionRegex, (match, content) => {
    return `<span class="mention">@${content}</span>`;
  });

  const channelRegex = /<#(.*?)>/g;
  highlighted = highlighted.replace(channelRegex, (match, content) => {
    return `<span class="channel">#${content}</span>`;
  });

  // **
  const boldRegex = /\*\*(.*?)\*\*/g;
  highlighted = highlighted.replace(boldRegex, (match, content) => {
    return `<b>${content}</b>`;
  });

  // *
  const italicRegex = /\*(.*?)\*/g;
  highlighted = highlighted.replace(italicRegex, (match, content) => {
    return `<i>${content}</i>`;
  });

  // Code
  const codeRegex = /`(.*?)`/g;
  highlighted = highlighted.replace(codeRegex, (match, content) => {
    return `<p id="hg-code">${content}</p>`;
  });

    // Link
  const linkRegex = /(https?:\/\/[^\s]+)/g;
  highlighted = highlighted.replace(linkRegex, (url) => {
    return `<a href="${url}" target="_blank">${url}</a>`;
  });

    // Unixtime
  const timestampRegex = /<t:(\d+):([tTdDfFR])>/g;
  highlighted = highlighted.replace(timestampRegex, (match, timestamp, format) => {
      const date = new Date(parseInt(timestamp) * 1000); // Преобразуем в миллисекунды
      let formattedDate = "";

      switch (format) {
          case 't': formattedDate = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); break;
          case 'T': formattedDate = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }); break;
          case 'd': formattedDate = date.toLocaleDateString(); break;
          case 'D': formattedDate = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }); break;
          case 'f': formattedDate = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); break;
          case 'F': formattedDate = date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); break;
          case 'R': formattedDate = getRelativeTime(date); break; // Функция для относительного времени (см. ниже)
          default: formattedDate = "Invalid format";
      }
      return `<span class="timestamp">${formattedDate}</span>`; // Оборачиваем в span
  });

  // Lines
  const lines = highlighted.split('\n');
  let numberedText = "";
  for (let i = 0; i < lines.length; i++) {
    numberedText += `<span class="line-number">${i + 1} </span>${lines[i]}<br>`;
  }

  const resultsString = `<p>Results: ${matches}</p>`;
  highlightedTextDiv.innerHTML = resultsString + numberedText;
}

function getRelativeTime(date) {
    const now = new Date();
    const diffInSeconds = Math.round((now - date) / 1000);

    const intervals = {
        'year': 31536000,
        'month': 2592000,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
    };

    for (const interval in intervals) {
        const secondsInInterval = intervals[interval];
        const quantity = Math.floor(diffInSeconds / secondsInInterval);

        if (quantity >= 1) {
            return quantity + ' ' + interval + (quantity > 1 ? 's' : '') + ' ago';
        }
    }

    return 'Just now';
}

function copyText() {
  const textarea = document.getElementById("editor");
  textarea.select();

  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy text: ", err);
  }

  window.getSelection().removeAllRanges();
}

function saveFile() {
  const fileName = document.getElementById('name').value;
  const finalFileName = fileName || "bdfdwikieditor";
  const fileContent = document.getElementById('editor').value;

  const blob = new Blob([fileContent], { type: 'text/plain' });
  const a = document.createElement('a');
  const url = URL.createObjectURL(blob);

  a.href = url; 
  a.download = finalFileName + '.txt';

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

function nameScript() {
  const textarea = document.getElementById('name');

  textarea.value = textarea.value.replace(/[\r\n]+/g, '');

  if (textarea.value.length > 32) {
    textarea.value = textarea.value.substring(0, 32);
  }
}

function typeScript() {
  const nameInput = document.getElementById('name');
  const nameValue = nameInput.value;
  const selectElement = document.querySelector('select[name="type"]');
  const selectedValue = selectElement.value;
  const nameLabel = document.getElementById('scriptType');

  let commandType = '';

  if (selectedValue === 'auto') {
    if (nameValue.startsWith('/')) {
      commandType = ' • Slash Command';
    } else if (nameValue.startsWith('$on')) {
      commandType = ' • Callback';
    } else {
      commandType = ' • Command';
    }
  } else if (selectedValue === 'command') {
    commandType = ' • Command';
  } else if (selectedValue === 'callback') {
    commandType = ' • Callback';
  } else if (selectedValue === 'slash') {
    commandType = ' • Slash Command';
  } 

  nameLabel.textContent = 'Name' + commandType;
}