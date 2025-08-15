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
  for (let i = 0; i < text.length; i++) { if (text[i] === ' ') { spaceCount++; } }
  const lineCount = text.split('\n').length;
  const charCount = text.length;
  const byteCount = new TextEncoder().encode(text).length;

  document.getElementById("wordCount").textContent = wordCount;
  document.getElementById("spaceCount").textContent = spaceCount;
  document.getElementById("lineCount").textContent = lineCount;
  document.getElementById("charCount").textContent = charCount;
  document.getElementById("byteCount").textContent = byteCount;
}

function replaceText() {
  const searchText = document.getElementById("searchText").value;
  const replaceText = document.getElementById("replaceText").value;
  const editor = document.getElementById("editor");
  editor.value = editor.value.replaceAll(searchText, replaceText);
  updateStats();
  checkBrackets();
}

function checkBrackets() {
  const text = document.getElementById("editor").value;
  let openBrackets = 0;
  let closeBrackets = 0;
  let i = 0;

  while (i < text.length) {
    if (text[i] === '[') {
      openBrackets++;
      i++;
    } else if (text[i] === ']' && (i === 0 || text[i - 1] !== '\\')) {
      closeBrackets++;
      i++;
    } else {
      i++;
    }
  }

  document.getElementById("openCount").textContent = openBrackets;
  document.getElementById("closeCount").textContent = closeBrackets;

  const errorMessageElement = document.getElementById("error-message");

  if (errorMessageElement) {
    if (openBrackets > closeBrackets) {
      errorMessageElement.textContent = "Error:  Brackets are not closed..";
      errorMessageElement.style.color = "red";
    } else if (openBrackets < closeBrackets) {
      errorMessageElement.textContent = "Warning: Different amounts of [ and ] are used";
      errorMessageElement.style.color = "orange";
    } else {
      errorMessageElement.textContent = "";
      errorMessageElement.style.color = "black";
    }
  }
}

function toggleHighlight() {
  const button = document.getElementById("highlightButton");
  const highlightedTextDiv = document.getElementById("highlightedText");
  const text = document.getElementById("editor").value;
  const searchText = document.getElementById("searchText").value;
  let highlighted = text;
  let matches = 0;

  if (searchText) {
    const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedSearchText, 'gi');

    highlighted = text.replace(regex, (match) => {
      matches++;
      return `<span class="highlight">${match}</span>`;
    });
  }

  const lines = highlighted.split('\n');
  let numberedText = "";
  for (let i = 0; i < lines.length; i++) {
    numberedText += `<span class="line-number">${i + 1} </span>${lines[i]}<br>`;
  }
  const resultsString = `<p>Results: ${matches}</p>`;
  highlightedTextDiv.innerHTML = resultsString + numberedText;
}
