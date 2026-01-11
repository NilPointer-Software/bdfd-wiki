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

function replaceOneText() {
  const searchText = document.getElementById("searchText").value;
  const replaceText = document.getElementById("replaceText").value;
  const editor = document.getElementById("editor");

  try {
    const regex = new RegExp(searchText);
    editor.value = editor.value.replace(regex, replaceText);
  } catch (e) {
    const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    editor.value = editor.value.replace(escapedSearchText, replaceText);
  }

  updateStats();
  checkBrackets();
}


let showWarnings = true;
let showErrors = true;

function editorWarning() {
  showWarnings = !showWarnings;

  callButtonChange('changeWarningsButton', showWarnings);
  updateErrorVisibility();
}

function editorError() {
  showErrors = !showErrors;

  callButtonChange('changeErrorsButton', showErrors);
  updateErrorVisibility();
}

function updateErrorVisibility() {
  const errorMessageElement = document.getElementById("error-message");
  const errorDivs = errorMessageElement.children;

  for (let i = 0; i < errorDivs.length; i++) {
    const errorDiv = errorDivs[i];

    if (errorDiv.style && errorDiv.style.color) {
      const isWarning = errorDiv.style.color === "orange";
      const isError = errorDiv.style.color === "red";

      if (isWarning) {
        errorDiv.style.display = showWarnings ? "block" : "none";
      }

      if (isError) {
        errorDiv.style.display = showErrors ? "block" : "none";
      }
    }
  }
}

function callError(message, type = 'error', unique = false) {
  const errorMessageElement = document.getElementById("error-message");

  if (unique) {
    for (let i = 0; i < errorMessageElement.children.length; i++) {
      if (errorMessageElement.children[i].textContent.startsWith(message)) {
        return;
      }
    }
  }

  let closeAllButton = document.getElementById('close-all-errors-btn');
  const errorDiv = document.createElement("div");
  errorDiv.style.display = "block";

  if (type === 'warn') {
    errorDiv.style.color = "orange";
  } else {
    errorDiv.style.color = "red";
  }

  errorDiv.innerHTML = `${message} <span class="close-btn" data-id="">×</span>`;
  errorMessageElement.appendChild(errorDiv);

  if (closeAllButton) {
    errorMessageElement.appendChild(closeAllButton);
  }

  const closeBtn = errorDiv.querySelector('.close-btn');
  closeBtn.addEventListener('click', function() {
    errorDiv.remove();
  });

  updateErrorVisibility();
}

function deleteError(message) {
  const errorMessageElement = document.getElementById("error-message");

  for (let i = errorMessageElement.children.length - 1; i >= 0; i--) {
    const child = errorMessageElement.children[i];

    if (child.tagName === 'DIV' && child.textContent.startsWith(message)) {
      child.remove();
    }
  }
  updateCloseAllButton();
}

function updateCloseAllButton() {
    let closeAllButton = document.getElementById('close-all-errors-btn');
    const errorMessageElement = document.getElementById("error-message");
    const errorCount = errorMessageElement.children.length - (closeAllButton ? 1 : 0);
    const closeAllButtonId = 'close-all-errors-btn';

    if (errorCount > 3) {
      if (!closeAllButton) {
        closeAllButton = document.createElement('button');
        closeAllButton.id = closeAllButtonId;
        closeAllButton.textContent = `Close all ${errorCount} notifications`;

        closeAllButton.addEventListener('click', () => {
          while (errorMessageElement.firstChild) {
            errorMessageElement.removeChild(errorMessageElement.firstChild);
          }
        });
        errorMessageElement.appendChild(closeAllButton);
      } else {
        closeAllButton.textContent = `Close all ${errorCount} notifications`;
      }
    } else if (closeAllButton) {
      closeAllButton.remove();
    }
}

function checkBrackets() {
  const text = document.getElementById("editor").value;
  const textBytes = new TextEncoder().encode(text).length;
  let dollarCount = 0;
  let openBrackets = 0;
  let closeBrackets = 0;
  let lastOpenBracketLine = -1;

  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.innerHTML = "";
  errorMessageElement.style.color = "black";

  if (textBytes > 65536) {
    callError("Error: Text exceeds allowed size (65536 bytes).");
  }

  if (text.indexOf('$') === -1 && text.length > 2000) {
    callError("Warning: Character limit exceeded (2000) for messages without functions.", 'warn');
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
        lastOpenBracketLine = i + 1;
        if (j + 1 < line.length && line[j + 1] === ']') {
            if (openBrackets <= dollarCount) {
               callError(`Warning: Empty brackets [] detected on line ${i + 1}.`, 'warn');
            }
        }
      } else if (line[j] === ']' && (j === 0 || line[j - 1] !== '\\')) {
        closeBrackets++;
      }
    }
  }

  document.getElementById("openCount").textContent = openBrackets;
  document.getElementById("closeCount").textContent = closeBrackets;

  if (openBrackets <= dollarCount) {
    if (closeBrackets < openBrackets) {
       callError(`Error: Not all open brackets are closed. Last opened on line ${lastOpenBracketLine}.`);
    }
  }
}

let caseSensitive = false;

function editorFindCase() {
  caseSensitive = !caseSensitive;

  callButtonChange('caseSensitiveButton', caseSensitive);
  toggleHighlight();
}

let highlightEnabled = true;

function toggleHighlight() {
  const highlightedTextDiv = document.getElementById("highlightedText");
  const text = document.getElementById("editor").value;
  const searchText = document.getElementById("searchText").value;
  let highlighted = text;
  let matches = 0;

  if (searchText) {
    try {
      const flags = caseSensitive ? 'g' : 'gi';
      const regex = new RegExp(searchText, flags);

      highlighted = text.replace(regex, (match) => {
        matches++;
        return `<span class="highlight">${match}</span>`;
      });
    } catch (e) {
      const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const flags = caseSensitive ? 'g' : 'gi';
      const regex = new RegExp(escapedSearchText, flags);

      highlighted = text.replace(regex, (match) => {
        matches++;
        return `<span class="highlight">${match}</span>`;
      });
    }
  }

  if (highlightEnabled) {
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

    // ~~
    const delRegex = /~~(.*?)~~/g;
    highlighted = highlighted.replace(delRegex, (match, content) => {
      return `<strike>${content}</strike>`;
    });

    // __
    const underRegex = /__(.*?)__/g;
    highlighted = highlighted.replace(underRegex, (match, content) => {
      return `<u>${content}</u>`;
    });

    // ```
    const hgbCodeRegex = /```(.*?)```/g;
    highlighted = highlighted.replace(hgbCodeRegex, (match, content) => {
      return `<hgBCode>${content}</hgBCode>`;
    });

    // `
    const hgsCodeRegex = /`(.*?)`/g;
    highlighted = highlighted.replace(hgsCodeRegex, (match, content) => {
      return `<hgSCode>${content}</hgSCode>`;
    });

    // ||
    const spoilerRegex = /\|\|(.*?)\|\|/g;
    highlighted = highlighted.replace(spoilerRegex, (match, content) => {
      return `<spoiler class="spoiler-inactive">${content}</spoiler>`;
    });

    const highlightedText = document.getElementById('highlightedText');

    if (highlightedText) {
      highlightedText.innerHTML = highlighted;

      highlightedText.addEventListener('click', (event) => {
        if (event.target.tagName === 'SPOILER') {
          event.target.classList.add('spoiler-active');
        }
      });
    }

    // Unixtime
    const timestampRegex = /<t:(\d+):([tTdDfFR])>/g;
    highlighted = highlighted.replace(timestampRegex, (match, timestamp, format) => {
      const date = new Date(parseInt(timestamp) * 1000);
      let formattedDate = "";

      switch (format) {
          case 't': formattedDate = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); break;
          case 'T': formattedDate = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }); break;
          case 'd': formattedDate = date.toLocaleDateString(); break;
          case 'D': formattedDate = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }); break;
          case 'f': formattedDate = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); break;
          case 'F': formattedDate = date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); break;
          case 'R': formattedDate = getRelativeTime(date); break;
          default: formattedDate = "Invalid format";
      }
      return `<span class="timestamp">${formattedDate}</span>`;
    });
    
    // Headers
    highlighted = highlighted.replace(/^# (.*)$/gm, '<h1>$1</h1>');
    highlighted = highlighted.replace(/^## (.*)$/gm, '<h2>$1</h2>');
    highlighted = highlighted.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  }

  // >
  const quoteRegex = /^> (.*)$/gm;
  highlighted = highlighted.replace(quoteRegex, (match, content) => {
    return `<quote>${content}</quote>`;
  });

  // Link
  const linkRegex = /(https?:\/\/[^\s]+)/g;
  highlighted = highlighted.replace(linkRegex, (url) => {
    return `<a href="${url}" target="_blank">${url}</a>`;
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

function textHighlighting() {
  highlightEnabled = !highlightEnabled;
  callButtonChange('findHighlightingButton', highlightEnabled);
  toggleHighlight();
}


function getRelativeTime(date) {
    const now = new Date();
    const diffInSeconds = Math.round((date - now) / 1000);

    const intervals = {
        'year': 31536000,
        'month': 2592000,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
    };

    const isFuture = diffInSeconds > 0;

    let prefix = isFuture ? 'in ' : '';
    let suffix = isFuture ? '' : ' ago';

    let absDiffInSeconds = Math.abs(diffInSeconds);

    for (const interval in intervals) {
        const secondsInInterval = intervals[interval];
        const quantity = Math.floor(absDiffInSeconds / secondsInInterval);

        if (quantity >= 1) {
            return prefix + quantity + ' ' + interval + (quantity > 1 ? 's' : '') + suffix;
        }
    }

    return isFuture ? 'Soon' : 'Just now';
}

function copyCodeText() {
  const textarea = document.getElementById("editor");

  if (!textarea) {
    console.error("Textarea element with ID 'editor' not found.");
    return;
  }

  textarea.select();

  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy text: ", err);
  } finally {
    window.getSelection().removeAllRanges();
  }
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
  const count = textarea.parentNode.querySelector('span');

  textarea.value = textarea.value.replace(/[\r\n]+/g, '');

  if (textarea.value.length > 50) {
    textarea.value = textarea.value.substring(0, 50);
  }

  count.textContent = textarea.value.length + '/50';

  if (textarea.value.length >= 50) {
    count.style.color = 'red'; 
  } else {
    count.style.color = '';
  }
}

function typeScript() {
  const nameInputVal = document.getElementById('name')?.value || '';
  const selectValue = document.querySelector('select[name="type"]')?.value || '';
  const nameLabel = document.getElementById('scriptType');

  const errorMessages = {
    empty: "Error: Name cannot be empty.",
    regex: "Error: Slash command name must contain only English letters.",
    length: "Error: Slash command name exceeds 32 characters.",
    invalidCallback: "Error: Invalid callback name.",
    slashStart: "Error: Slash command name must start with /"
  };

  deleteError(errorMessages.regex);
  deleteError(errorMessages.empty);
  deleteError(errorMessages.length);
  deleteError(errorMessages.invalidCallback);
  deleteError(errorMessages.slashStart);
  
  const callbackKeywords = ['$awaitedCommand', '$awaitedCommandError', '$onJoined', '$onLeave', '$onBanAdd', '$onBanRemove', '$onMessageDelete', '$onInteraction', '$alwaysReply', '$messageContains', '$reaction'];

  if (selectValue !== 'file') {
    if (!nameInputVal) {
      callError(errorMessages.empty, 'error', true);
    } else {
      deleteError(errorMessages.empty);
    }
  } else {
    deleteError(errorMessages.empty);
  }

  let commandType = 'Command';

  if (selectValue === 'file') {
    commandType = ' • File';
  } else if (selectValue === 'callback') {
    commandType = ' • Callback';
    if (!callbackKeywords.some(keyword => nameInputVal.startsWith(keyword))) {
      callError(errorMessages.invalidCallback, 'error', true);
    } else {
      deleteError(errorMessages.invalidCallback);
    }
  } else if (selectValue === 'slash') {
    commandType = ' • Slash Command';

    if (!nameInputVal.startsWith('/')) {
      callError(errorMessages.slashStart, 'error', true);
    } else {
      deleteError(errorMessages.slashStart);

        const nameToCheck = nameInputVal.substring(1);
        const regex = /^[a-z-]+$/;

        if (!regex.test(nameToCheck)) {
          callError(errorMessages.regex, 'error', true);
        } else {
          deleteError(errorMessages.regex);
        }
        if (nameInputVal.length > 32) {
          callError(errorMessages.length, 'error', true);
        } else {
          deleteError(errorMessages.length);
        }
     }
  } else if (selectValue === 'auto') {
      const nameToCheck = nameInputVal.substring(1);
      const regex = /^[a-zA-Z-]+$/;

      if (callbackKeywords.some(keyword => nameInputVal.startsWith(keyword))) {
          commandType = ' • Callback';
      } else if (nameInputVal.startsWith('/')) {
          commandType = ' • Slash Command';
        if (!regex.test(nameToCheck)) {
          callError(errorMessages.regex, 'error', true);
        } else {
          deleteError(errorMessages.regex);
        }
        if (nameInputVal.length > 32) {
          callError(errorMessages.length, 'error', true);
        } else {
          deleteError(errorMessages.length);
       }
   } else {
      commandType = ' • Command';
   }

  } else {
    commandType = ' • Command';
  }
  if(nameLabel)
    nameLabel.textContent = 'Name' + commandType;
}

function bdscript2() {
  const editor = document.getElementById("editor");
  const languageSelect = document.querySelector('select[name="language"]');
  const scriptLanguage = languageSelect.value;
  const scriptText = editor.value;

  const bdscript2Keywords = ["$try", "$endtry", "$catch", "$async", "$endasync", "$eval", "$error", "$optOff", "$elseif", "$stop", "$var"];

  const containsBDScript2Keywords = bdscript2Keywords.some(keyword => scriptText.includes(keyword));

  if (containsBDScript2Keywords && scriptLanguage !== "bds2") {
    const firstKeyword = bdscript2Keywords.find(keyword => scriptText.includes(keyword));
    callError(`Function ${firstKeyword} is only available in BDScript2`);
  }
}

function editorAreaButtons() {
  const scriptDiv = document.querySelector('.scriptdiv');
  const buttons = scriptDiv.querySelectorAll('button');
  const isHidden = buttons[0].style.display === 'none';

  buttons.forEach(button => {
    button.style.display = isHidden ? 'inline-block' : 'none';
  });
  
  callButtonChange('usefulButtonsButton', isHidden);
}


function editorBrokeLinks() {
  const links = document.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('href', '#');
    links[i].style.pointerEvents = 'none';
  }

  callButtonChange('brokeLinksButton', 'true');
}

let isWrappingEnabled = false;

function editorWrapping() {
  const textarea = document.getElementById('editor');
  const findcode = document.getElementById('highlightedText');
  isWrappingEnabled = !isWrappingEnabled;

  textarea.style.whiteSpace = isWrappingEnabled ? 'pre-wrap' : 'nowrap';
  findcode.style.whiteSpace = isWrappingEnabled ? 'pre-wrap' : 'nowrap';

  callButtonChange('textWrappingButton', isWrappingEnabled);
}

function callButtonChange(buttonName, status) {
  const button = document.getElementById(buttonName);

  if (!button) {
    console.error(`Failed to find "${buttonName}" button.`);
    return;
  }

  const activeGradient = 'linear-gradient(to right, rgb(255 255 255 / 40%), rgb(1 192 36 / 75%))';
  const inactiveGradient = 'linear-gradient(to left, rgb(255 255 255 / 40%), rgb(192 1 1 / 75%))';
  const extraGradient = 'linear-gradient(to right, rgb(255 255 255 / 40%), rgb(0 0 0 / 50%))';

  if (buttonName === 'brokeLinksButton') {
    button.style.background = extraGradient;
  } else {
    button.style.background = status ? activeGradient : inactiveGradient;
  }
}

let autocompleteEnabled = true;
function changeAutocomplete() {
  autocompleteEnabled = !autocompleteEnabled;

  const autocompleteElement = document.getElementById('autocomplete');

  if (autocompleteEnabled) {
    autocompleteElement.style.display = 'block';
  } else {
    autocompleteElement.style.display = 'none';
  }
  callButtonChange('changeAutocompleteButton', autocompleteEnabled);
}





// Timestamp



// Color

const colorNames = {
  // CSS
  aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff",
  aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc",
  bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd",
  blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a",
  burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00",
  chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff",
  darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f",
  darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000",
  darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1",
  darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff",
  dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff",
  firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22",
  fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff",
  gold: "#ffd700", goldenrod: "#daa520", gray: "#808080",
  green: "#008000", greenyellow: "#adff2f", grey: "#808080",
  honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c",
  indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c",
  lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080",
  lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3",
  lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa",
  lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32",
  linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000",
  mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3",
  mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585",
  midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080",
  oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23",
  orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6",
  palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee",
  palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9",
  peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd",
  powderblue: "#b0e0e6", purple: "#800080", rebeccapurple: "#663399",
  red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1",
  saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460",
  seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d",
  silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd",
  slategray: "#708090", slategrey: "#708090", snow: "#fffafa",
  springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c",
  teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347",
  turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3",
  white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00",
  yellowgreen: "#9acd32",

  // Extra
  absolutezero: "#0048ba", acidgreen: "#b0bf1a", aero: "#7cb9e8",
  aeroblue: "#c0e8d5", africanviolet: "#b284be", airforceblue: "#5d8aa8",
  airsuperiorityblue: "#72a0c1", alabamacrimson: "#af002a", alloyorange: "#c46210",
  almond: "#efdecd", amaranthdeep: "#9f2b68", amaranthpink: "#f19cbb",
  amaranthpurple: "#ab274f", amazon: "#3b7a57", amber: "#ffbf00",
  amethyst: "#9966cc", androidgreen: "#a4c639", antiflashwhite: "#f2f3f4",
  antiquebrass: "#cd9575", antiquebronze: "#665d1e", antiquefern: "#8cb06c",
  antiquefuchsia: "#915c83", antiqueruby: "#841b2d", antiquewhite: "#faebd7",
  aoenglish: "#008000", applegreen: "#8db600", apricot: "#fbceb1",
  arcticlime: "#d0ff14", armygreen: "#4b5320", arsenic: "#3b444b",
  artichoke: "#8f9779", arylideyellow: "#e9d66b", ashgray: "#b2beb5",
  asparaguscra: "#87a96b", atomictangerine: "#ff9966", aureolin: "#fdee00",
  aurometalsaurus: "#6e7f80", avocado: "#568203", azure: "#007fff",
  azurex11: "#f0ffff", babypowder: "#fefefa", babypink: "#f4c2c2",
  babypuce: "#8c8180", babysbreath: "#8c9fa8", babysblue: "#89cff0",
  babysblueeyes: "#a1caf1", babypurple: "#ca9bf7", babysapphire: "#8fd8d8",
  babysilver: "#838996", bakerchocolate: "#5c3317", banana: "#ffe135",
  bananamania: "#fae7b5", barbiepink: "#e0218a", barnred: "#7c0a02",
  battleshipgrey: "#848482", bazaar: "#98777b", beaublue: "#bcd4e6",
  beaver: "#9f8170", beige: "#f5f5dc", bigdip: "#1cac78",
  bisque: "#ffe4c4", bistre: "#3d2b1f", bistrebrown: "#967117",
  bittersweet: "#fe6f5e", bittersweetshimmer: "#bf4f51", blackbean: "#3d0c02",
  blackcoral: "#54626f", blackleatherjacket: "#253529", blackolive: "#3b3c36",
  blackshadows: "#bfafb2", blanchedalmond: "#ffebcd", blastoffbronze: "#a57164",
  bleudefrance: "#318ce7", blizzardblue: "#ace5ee", blond: "#faf0be",
  bloodred: "#660000", blue: "#0000ff", bluebell: "#a2a2d0",
  bluegray: "#6699cc", bluegreen: "#0d98ba", bluesapphire: "#126180",
  blueviolet: "#8a2be2", blueyonder: "#5072a7", blueberry: "#4f86f7",
  bluebonnet: "#1c1cf0", blush: "#de5d83", bole: "#79443b",
  bondiblue: "#0095b6", bone: "#e3dac9", boogerbuster: "#dde26a",
  bostonuniversityred: "#cc0000", bottle: "#006a4e", boysenberry: "#873260",
  brandeisblue: "#0070ff", brass: "#b5a642", brickred: "#cb4154",
  brightgreen: "#66ff00", brightlavender: "#bf94e4", brightlilac: "#d891ef",
  brightmaroon: "#c32148", brightnavyblue: "#1974d2", brightpink: "#ff007f",
  brightturquoise: "#08e8de", brightube: "#d19fe8", brightyellow: "#ffaa1d",
  brilliantazure: "#3399ff", brilliantlavender: "#f4bbff", brilliantrose: "#ff55a3",
  brinkpink: "#fb607f", britishracinggreen: "#004225", bronze: "#cd7f32",
  bronzeyellow: "#737000", brown: "#a52a2a", brownchocolate: "#664228",
  browntraditional: "#964b00", brownweb: "#a52a2a", brownsugar: "#af6e4d",
  brownyellow: "#cc9966", brunswickgreen: "#1b4d3e", bubblegum: "#ffc1cc",
  bubbles: "#e7feff", buff: "#f0dc82", budgreen: "#7bb661",
  bulgarianrose: "#480607", burgundy: "#800020", burlywood: "#deb887",
  burnishedbrown: "#a17a74", burntalmond: "#b0725e", burntorange: "#cc5500",
  burntsienna: "#e97451", burntumber: "#8a3324", byzantine: "#bd33a4",
  byzantium: "#702963", cadmiumgreen: "#006b3c", cadmiumorange: "#ed872d",
  cadmiumred: "#e30022", cadmiumyellow: "#fff600", cafeaulait: "#a67b5b",
  cafenoir: "#4b3621", calpolypomonagreen: "#1e4d2b", cambridgeblue: "#a3c1ad",
  camel: "#c19a6b", camouflagegreen: "#78866b", canary: "#ffff99",
  canaryyellow: "#ffef00", candyapplered: "#ff0800", candypink: "#e4717a",
  capri: "#00bfff", caputmortuum: "#592720", cardinal: "#c41e3a",
  caribbeangreen: "#00cc99", carmine: "#960018", carminered: "#ff0038",
  carnation: "#ffa6c9", carnationpink: "#ffa6c9", carnelian: "#b31b1b",
  carolinalue: "#56a0d3", carrot: "#ed9121", castletongreen: "#00563f",
  catalinablue: "#062a78", catawba: "#703642", cedarchest: "#c95a49",
  ceil: "#92a1cf", celadon: "#ace1af", celadonblue: "#007ba7",
  celadongreen: "#2f847c", celeste: "#b2ffff", celestialblue: "#4997d0",
  ceramic: "#fcfff9", cerise: "#de3163", cerisepink: "#ec3b83",
  cerulean: "#007ba7", ceruleanblue: "#2a52be", ceruleanfrost: "#6d9bc3",
  cetaceanblue: "#001440", chamoisee: "#a0785a", champagne: "#f7e7ce",
  charcoal: "#36454f", charlotte: "#a4dce6", charm: "#d0748b",
  charmpink: "#e68fac", chartreuse: "#7fff00", cherry: "#de3163",
  cherryblossompink: "#ffb7c5", chestnut: "#954535", chinapink: "#de6fa1",
  chinarose: "#a8516e", chineseblack: "#141414", chineseblue: "#365194",
  chinesebronze: "#cd8032", chinesebrown: "#ab381f", chinesegold: "#cc9900",
  chinesegreen: "#d0db61", chineseorange: "#f37042", chinesepink: "#de70a1",
  chinesepurple: "#720b98", chinesered: "#aa381e", chinesesilver: "#ccd0d6",
  chineseviolet: "#856088", chinesewhite: "#e2e5de", chineseyellow: "#ffb200",
  chocolate: "#7b3f00", chocolatetraditional: "#7b3f00", chocolateweb: "#d2691e",
  christmasblue: "#2a8fbd", christmasbrown: "#5d2b2c", christmasgreen: "#3c8d0d",
  christmasgold: "#caa906", christmasorange: "#ff6600", christmaspink: "#ffcccb",
  christmaspurple: "#663399", christmasred: "#aa0114", christmassilver: "#e1dfe0",
  christmasyellow: "#ffcc00", chromium: "#7f8e88", cinereous: "#98817b",
  cinnabar: "#e34234", cinnamon: "#d2691e", citrine: "#e4d00a",
  citron: "#9fa91f", claret: "#7f1734", classicrose: "#fbcce7",
  cobaltblue: "#0047ab", cocoabrown: "#d2691e", coconut: "#965a3e",
  coffee: "#6f4e37", columbiablue: "#c4d8e2", congopink: "#f88379",
  coolblack: "#002e63", coolgrey: "#8c92ac", copper: "#b87333",
  copperpenny: "#ad6f69", copperred: "#cb6d51", copperrose: "#996666",
  coquelicot: "#ff3800", coral: "#ff7f50", corald: "#ff7f50",
  coralpink: "#f88379", coralred: "#ff4040", cordovan: "#893f45",
  corn: "#fbec5d", cornellred: "#b31b1b", cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc", cosmiccobalt: "#2e2d88", cosmiclatte: "#fff8e7",
  coyotebrown: "#81613c", cottoncandy: "#ffbcd9", cream: "#fffdd0",
  crimson: "#dc143c", crimsonred: "#990000", cultured: "#f5f5f5",
  cyan: "#00ffff", cyanazure: "#4e82b4", cyanblue: "#1e4d8c",
  cyancobalt: "#28589c", cyanblueazure: "#4682bf", cyberyellow: "#ffd300",
  cyclamen: "#f56fa1", daffodil: "#ffff31", dandelion: "#f0e130",
  darkblue: "#00008b", darkbluegray: "#666699", darkbrown: "#654321",
  darkbrowntangelo: "#88654e", darkbyzantium: "#5d3954", darkcandyapple: "#a40000",
  darkcerulean: "#08457e", darkchestnut: "#986960", darkcoral: "#cd5b45",
  darkcyan: "#008b8b", darkelectricblue: "#536878", darkgold: "#b59410",
  darkgoldenrod: "#b8860b", darkgrayx11: "#a9a9a9", darkgreen: "#006400",
  darkgreenx11: "#013220", darkgunmetal: "#1f262a", darkimperial: "#00416a",
  darkjungle: "#1a2421", darkkhaki: "#bdb76b", darklava: "#483c32",
  darklavender: "#734f96", darkliver: "#534b4f", darkliverhorses: "#543d37",
  darkmagenta: "#8b008b", darkmediumgray: "#a9a9a9", darkmidnight: "#003366",
  darkmoss: "#4a5d23", darkolive: "#556b2f", darkorange: "#ff8c00",
  darkorchid: "#9932cc", darkpastel: "#03c03c", darkpink: "#e75480",
  darkpowder: "#003399", darkpuce: "#4f3a3c", darkpurple: "#301934",
  darkraspberry: "#872657", darkred: "#8b0000", darksalmon: "#e9967a",
  darkscarlet: "#560319", darkseagreen: "#8fbc8f", darksienna: "#3c1414",
  darksky: "#8cbed6", darkslate: "#483d8b", darkspring: "#177245",
  darktan: "#918151", darktangerine: "#ffa812", darktaupe: "#483c32",
  darkterracotta: "#cc4e5c", darkturquoise: "#00ced1", darkvanilla: "#d1bea8",
  darkviolet: "#9400d3", darkyellow: "#9b870c", dartmouth: "#00693e",
  davysgrey: "#555555", debianred: "#d70a53", deepamethyst: "#9c8aa4",
  deepaquamarine: "#40826d", deepcarmine: "#a9203e", deepcarminepink: "#ef3038",
  deepcarrot: "#e9692c", deepcerise: "#da3287", deepchampagne: "#fad6a5",
  deepchestnut: "#b94e48", deepcoffee: "#704241", deepfuchsia: "#c154c1",
  deepgreen: "#056608", deepgreencyanturquoise: "#0e7c61", deepjungle: "#004b49",
  deepkoamaru: "#333366", deeplemon: "#f5c71a", deeplilac: "#9955bb",
  deepmagenta: "#cc00cc", deepmaroon: "#820000", deepmauve: "#d473d4",
  deepmoss: "#355e3b", deeppeach: "#ffcba4", deeppink: "#ff1493",
  deeppuce: "#a95c68", deepred: "#850101", deepruby: "#843f5b",
  deepsaffron: "#ff9933", deepsky: "#00bfff", deepspacesparkle: "#4a646c",
  deepspring: "#2e8b57", deeptaupe: "#7e5e60", deeptuscan: "#66424d",
  deepviolet: "#330066", deer: "#ba8759", denim: "#1560bd",
  desert: "#c19a6b", desertsand: "#edc9af", desire: "#ea3c53",
  diamond: "#b9f2ff", dimgray: "#696969", dirt: "#9b7653",
  dodgerblue: "#1e90ff", dogwood: "#f8b1cc", dollar: "#85bb65",
  donkeybrown: "#664c28", drab: "#967117", duke: "#00009c",
  duststorm: "#e5ccc9", dutchwhite: "#efdfbb", earth: "#e2a76f",
  ebony: "#555d50", ecru: "#c2b280", eerieblack: "#1b1b1b",
  eggplant: "#614051", eggshell: "#f0ead6", eggwhite: "#ffeaa7",
  egyptian: "#1034a6", electric: "#7df9ff", electricblue: "#7df9ff",
  electriccrimson: "#ff003f", electriccyan: "#00ffff", electricgreen: "#00ff00",
  electricindigo: "#6f00ff", electriclavender: "#f4bbff", electriclime: "#ccff00",
  electricpurple: "#bf00ff", electricultramarine: "#3f00ff", electricviolet: "#8f00ff",
  electricyellow: "#ffff33", emerald: "#50c878", eminence: "#6c3082",
  emperor: "#51454d", empire: "#00549e", empireyellow: "#f7d000",
  enamelsapphire: "#126180", enamelturquoise: "#00a78e", english: "#b48395",
  englishgreen: "#1b4d3e", englishlavender: "#b48395", englishred: "#ab4b52",
  englishvermillion: "#cc474b", englishviolet: "#563c5c", eton: "#96c8a2",
  eucalyptus: "#44d7a8", fallow: "#c19a6b", falured: "#801818",
  fandango: "#b53389", fandangopink: "#de5285", fashion: "#f400a1",
  fawn: "#e5aa70", feldgrau: "#4d5d53", feldspar: "#fdd5b1",
  fern: "#71bc78", ferngreen: "#4f7942", ferrari: "#ff2800",
  field: "#6c541e", fieryrose: "#ff5470", fire: "#b22222",
  firebrick: "#b22222", fireenginered: "#ce2029", flame: "#e25822",
  flamingo: "#fc8eac", flattery: "#6b4423", flavescent: "#f7e98e",
  flax: "#eedc82", flirt: "#a2006d", floral: "#fffaf0",
  fluorescentorange: "#ffbf00", fluorescentpink: "#ff1493", fluorescentyellow: "#ccff00",
  folly: "#ff004f", forest: "#228b22", french: "#a67b5b",
  frenchbeige: "#a67b5b", frenchbistre: "#856d4d", frenchblue: "#0072bb",
  frenchfuchsia: "#fd3f92", frenchlilac: "#86608e", frenchlime: "#9efd38",
  frenchmauve: "#d473d4", frenchpink: "#fd6c9e", frenchplum: "#811453",
  frenchpuce: "#4e1609", frenchraspberry: "#c72c48", frenchrose: "#f64a8a",
  frenchsky: "#77b5fe", frenchviolet: "#8806ce", frenchwine: "#ac1e44",
  freshair: "#a6e7ff", fuchsia: "#ff00ff", fuchsiapink: "#ff77ff",
  fuchsiapurple: "#cc397b", fuchsiarose: "#c74375", fulvous: "#e48400",
  fuzzy: "#cc6666"
};

function colorPickerChange() {
  const colorPicker = document.getElementById('colorPicker');
  const hexInput = document.getElementById('hexInput');
  const errorText = document.getElementById('errorText');
  const validColorDisplay = document.getElementById('validColorDisplay');
  
  const color = colorPicker.value;
  hexInput.value = color;
  errorText.textContent = '';
  validColorDisplay.innerHTML = `<div class="valid-color" style="background:${color}">${color}</div>`;
}

function hexInputChange() {
  const hexInput = document.getElementById('hexInput');
  const colorPicker = document.getElementById('colorPicker');
  const errorText = document.getElementById('errorText');
  const validColorDisplay = document.getElementById('validColorDisplay');
  
  let val = hexInput.value.trim().toLowerCase();
  
  if (val === '') {
    errorText.textContent = '';
    validColorDisplay.innerHTML = '';
    return;
  }
  
  let hexColor = '';
  
  if (colorNames[val]) {
    hexColor = colorNames[val];
  } else if (val[0] !== '#') {
    val = '#' + val;
  }
  
  if (hexColor) {
    colorPicker.value = hexColor;
    errorText.textContent = '';
    validColorDisplay.innerHTML = `<div class="valid-color" style="background:${hexColor}">${hexColor}</div>`;
    return;
  }
  
  const isValid = /^#[0-9A-Fa-f]{6}$/.test(val) || /^#[0-9A-Fa-f]{3}$/.test(val);
  
  if (isValid) {
    const finalColor = val.length === 4 ? expandHex(val) : val;
    colorPicker.value = finalColor;
    errorText.textContent = '';
    validColorDisplay.innerHTML = `<div class="valid-color" style="background:${finalColor}">${finalColor}</div>`;
  } else {
    errorText.textContent = 'Invalid color HEX or name.';
    validColorDisplay.innerHTML = '';
  }
}

function expandHex(short) {
  if (short.length === 4 && short[0] === '#') {
    return '#' + short[1] + short[1] + short[2] + short[2] + short[3] + short[3];
  }
  return short;
}

document.getElementById('validColorDisplay').innerHTML = `<div class="valid-color" style="background:#000000">#000000</div>`;