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

const datetimePicker = document.getElementById('datetimepicker');
const unixTimeDisplay = document.getElementById('unixtime-display');
const timestampInfo = document.getElementById('timestamp-info');
const unixInput = document.getElementById('unix-input');
const dateDisplay = document.getElementById('date-display');
const dateInfo = document.getElementById('date-info');
const currentTimeEl = document.getElementById('current-time');

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

datetimePicker.value = `${year}-${month}-${day}T${hours}:${minutes}`;

const currentUnixTime = Math.floor(now.getTime() / 1000);
unixInput.value = currentUnixTime;

function updateCurrentTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const unixTime = Math.floor(now.getTime() / 1000);
    
    currentTimeEl.innerHTML = `${dateString}<br>${unixTime}`;
}

window.updateUnixTime = function() {
    const selectedDate = new Date(datetimePicker.value);
    
    if (!isNaN(selectedDate.getTime())) {
        const unixTime = Math.floor(selectedDate.getTime() / 1000);
        const dateString = selectedDate.toLocaleString();
        
        unixTimeDisplay.textContent = unixTime;
        
        if (parseInt(unixInput.value) !== unixTime) {
            unixInput.value = unixTime;
            updateDateFromUnix();
        }
    }
}

window.updateDateFromUnix = function() {
    const unixTime = parseInt(unixInput.value);
    
    if (!isNaN(unixTime) && unixTime >= 0) {
        const date = new Date(unixTime * 1000);
        
        if (!isNaN(date.getTime())) {
            const dateString = date.toLocaleString();
            const isoString = date.toISOString().replace('T', ' ').substring(0, 19);
            
            dateDisplay.textContent = dateString;
            
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            
            const datetimeLocalValue = `${year}-${month}-${day}T${hours}:${minutes}`;
            
            if (datetimePicker.value !== datetimeLocalValue) {
                datetimePicker.value = datetimeLocalValue;
            }
        }
    } else if (unixInput.value === '') {
        dateDisplay.textContent = 'Not set';
        dateInfo.textContent = '';
    } else {
        dateDisplay.textContent = 'Invalid timestamp';
        dateInfo.textContent = 'Please enter a valid Unix timestamp';
    }
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const quickButtons = document.createElement('div');
    quickButtons.className = 'time-buttons';
    
    const times = [
        {label: 'Now', seconds: 0},
        {label: '1 hour ago', seconds: -3600},
        {label: '1 day ago', seconds: -86400},
        {label: '1 week ago', seconds: -604800},
        {label: 'New Year 2027', seconds: 1798761600}
    ];
    
    times.forEach(time => {
        const button = document.createElement('button');
        button.textContent = time.label;
        
        button.onclick = function() {
            let unixTime;
            if (time.seconds === 0) {
                unixTime = Math.floor(Date.now() / 1000);
            } else if (time.seconds > 0) {
                unixTime = time.seconds;
            } else {
                unixTime = Math.floor(Date.now() / 1000) + time.seconds;
            }
            
            unixInput.value = unixTime;
            updateDateFromUnix();
        };
        
        quickButtons.appendChild(button);
    });
    
    unixInput.parentNode.insertBefore(quickButtons, unixInput.nextSibling);
});


// Color

function colorPickerChange() {
  const colorPicker = document.getElementById('colorPicker');
  const hexInput = document.getElementById('hexInput');
  const errorText = document.getElementById('errorText');
  
  const color = colorPicker.value;
  hexInput.value = color;
  errorText.textContent = '';
}

function hexInputChange() {
  const colorPicker = document.getElementById('colorPicker');
  const hexInput = document.getElementById('hexInput');
  const errorText = document.getElementById('errorText');
  
  let val = hexInput.value.trim();
  
  if (val === '') {
    errorText.textContent = '';
    return;
  }
  
  if (val[0] !== '#') {
    val = '#' + val;
    hexInput.value = val;
  }
  
  const isValid = /^#[0-9A-Fa-f]{6}$/.test(val) || /^#[0-9A-Fa-f]{3}$/.test(val);
  
  if (isValid) {
    const finalColor = val.length === 4 ? expandHex(val) : val;
    colorPicker.value = finalColor;
    errorText.textContent = '';
  } else {
    errorText.textContent = 'Invalid color';
  }
}

function expandHex(short) {
  if (short.length === 4 && short[0] === '#') {
    return '#' + short[1] + short[1] + short[2] + short[2] + short[3] + short[3];
  }
  return short;
}