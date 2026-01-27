const codeScheme = {
	defaultTextHighlight: {
		color: 4288341353,
		style: 0,
	},
	fallbackHighlight: {
		color: 4285791231,
		style: 0,
	},
	bracketHighlight: {
		color: 4294921292,
		style: 1,
	},
	semicolonHighlight: {
		color: 4294920266,
		style: 1,
	},
	functionsHighlights: {
		$nomention: {
			color: 4294932473,
			style: 0,
		},
		$catch: {
			color: 4288905212,
			style: 0,
		},
		$else: {
			color: 4288905212,
			style: 0,
		},
		$elseif: {
			color: 4288905212,
			style: 0,
		},
		$endif: {
			color: 4288905212,
			style: 0,
		},
		$endtry: {
			color: 4288905212,
			style: 0,
		},
		$error: {
			color: 4288905212,
			style: 0,
		},
		$if: {
			color: 4288905212,
			style: 0,
		},
		$try: {
			color: 4288905212,
			style: 0,
		},
	},
};

const fonts = {
	font2: "Georgia, serif",
	font3: "Montserrat",
	font4: "cursive",
	font5: "monospace",
	font6: "system-ui",
};

const textHighlights = {
	blue: "257df0",
	red: "f02525",
	green: "25f03e",
	yellow: "f0ea25",
	purple: "8f25f0",
	white: "ffffff",
	black: "000000",
	pink: "f025d7",
	orange: "f07025",
};

function changeFontSize() {
	const range = document.getElementById("textsize");
	const displaySize = document.getElementById("display-size");
	const webSize = document.documentElement;
	displaySize.textContent = range.value;

	webSize.style.fontSize = `${range.value}%`;

	// Save in Storage
	updateJsonFile("text-size", range.value + "%");
}

function resetFontSize() {
	const range = document.getElementById("textsize");
	const displaySize = document.getElementById("display-size");
	const webSize = document.documentElement;
	range.value = 60;
	displaySize.textContent = range.value;

	webSize.style.fontSize = `${range.value}%`;

	// Save in Storage
	updateJsonFile("text-size", range.value + "%");
}

function resetHGInput() {
	const codeInput = document.getElementById("jsonhginput");
	const charCountElement = document.querySelector(".charCount");

	var inputcodedesign = JSON.stringify(codeScheme);
	const charJSONCount = inputcodedesign.length;

	charCountElement.textContent = `${charJSONCount} / 10000`;

	codeInput.style.boxShadow = "none";
	codeInput.value = inputcodedesign;

	localStorage.setItem("code-hg", inputcodedesign);
}

function copyHGInput() {
	const textarea = document.getElementById("jsonhginput");
	navigator.clipboard
		.writeText(textarea.value)
		.catch((err) => console.error("Failed copying to clipboard", err));
}

function changeDiscordTheme(colorId) {
	const discordMessages = document.getElementsByTagName("discord-messages");

	const styles = {
		reactionColor: "#131318",
		messageTextColor: "#DDDEE1",
		background: "#000",
		...(DiscordThemes[colorId] || {}),
	};

	for (const message of discordMessages) {
		const reactions = document.getElementsByTagName("discord-reaction");
		const messageColors = document.querySelectorAll(
			".discord-message .discord-message-markup"
		);
		if (styles.background) message.style.background = styles.background;
		message.style.backgroundColor = styles.exampleColor;
		for (const reaction of reactions) {
			reaction.children.item(0).style.backgroundColor =
				styles.reactionColor;
		}
		messageColors.forEach((text) => {
			text.style.color = styles.messageTextColor;
		});
	}

	updateJsonFile("discord-example-theme", colorId);
}

function changeTextFont(fontId) {
	const fontHtml = document.querySelector("html");
	let font = fonts[fontId] || "Open Sans, sans-serif";

	fontHtml.style.fontFamily = font;

	// Save in Storage
	updateJsonFile("text-font", font);
}

function updateJsonFile(key, value) {
	let data = JSON.parse(localStorage.getItem("json")) || {};

	data[key] = value;

	localStorage.setItem("json", JSON.stringify(data, null, 2));
}

function changeTextHigh(colorId) {
	const fontHtml = document.querySelector("html");
	let color = textHighlights[colorId] || "none";

	if (color === "none") {
		fontHtml.style.textShadow = color;
	} else {
		fontHtml.style.textShadow = "0 0 10px" + " #" + color;
	}

	// Save in Storage
	updateJsonFile("text-hg", fontHtml.style.textShadow);
}

let timer;
let time = 2000;
let interval;
let isMouseDown = false;
let buttonMouseDownTime = null;

function resetAllHover() {
	const button = document.querySelector(".resetToDefault");
	const progress = document.querySelector(".resetToDefault .progress");

	if (progress.style.width === "100%") {
		return;
	}

	const resetState = () => {
		progress.style.width = "0%";
		clearInterval(interval);
		clearTimeout(timer);
		isMouseDown = false;
		buttonMouseDownTime = null;
	};

	const handleStart = (e) => {
		resetState();
		buttonMouseDownTime = Date.now();
		isMouseDown = true;

		clearTimeout(timer); // make sure timer is cleared if it exists
		timer = setTimeout(() => {
			if (isMouseDown) {
				console.log("Settings Status: Reset");
				localStorage.removeItem("json");
				loadSettings();
				location.reload();
			}
		}, time);

		updateProgress(); // Update progress
		if (e) e.preventDefault(); // only prevent default if the event exists
	};

	const handleEnd = () => {
		resetState();
	};

	function updateProgress() {
		if (isMouseDown) {
			const elapsedTime = Date.now() - buttonMouseDownTime;
			let progressPercent = (elapsedTime / time) * 100;

			if (progressPercent < 100) {
				// Limit percent to below 100
				progress.style.width = progressPercent + 45 + "%";
			} else {
				resetState();

				if (button.disabled === false) {
					button.classList.add("pulsating");
				}
				setTimeout(() => {
					button.classList.remove("pulsating");
				}, 100);
			}
			interval = requestAnimationFrame(updateProgress);
		}
	}

	button.addEventListener("mousedown", handleStart);
	button.addEventListener("touchstart", handleStart, { passive: false });

	button.addEventListener("mouseup", handleEnd);
	button.addEventListener("mouseleave", handleEnd);

	button.addEventListener("touchend", handleEnd);
	button.addEventListener("touchcancel", handleEnd);

	if (button.matches(":active") || button.matches(":hover")) {
		handleStart(); // initialize state when function loads
	}
}

function resettAllNone() {
	const progress = document.querySelector(".resetToDefault .progress");
	progress.style.width = "0%";
	clearTimeout(timer);
	clearInterval(interval);
	isMouseDown = false;
	buttonMouseDownTime = null;
}

function resetAllLeave() {
	if (isMouseDown) {
		const progress = document.querySelector(".resetToDefault .progress");
		progress.style.width = "0%";
		clearTimeout(timer);
		clearInterval(interval);
		isMouseDown = false;
		buttonMouseDownTime = null;
	}
}

function updateCodeHG() {
	const codeInput = document.getElementById("jsonhginput");
	const charCountElement = document.querySelector(".charCount");
	const jsonHG = codeInput.value;

	const charCount = codeInput.value.replace(/[\s\n]/g, "").length; // Ignore spaces and new rows
	charCountElement.textContent = `${charCount} / 25000`;

	if (charCount > 25000) {
		charCountElement.style.color = "red";
	} else {
		charCountElement.style.color = "";
	}

	if (isJson(jsonHG)) {
		codeInput.style.boxShadow = "0 0 10px green";
		localStorage.setItem("code-hg", jsonHG);
	} else {
		codeInput.style.boxShadow = "0 0 10px red";
	}
}

function isJson(str) {
	try {
		JSON.parse(str);
		return true;
	} catch {
		return false;
	}
}

function reloadHGPage() {
	location.reload();
}

function loadSettings() {
	const displaySize = document.getElementById("display-size");
	const range = document.getElementById("textsize");
	const codeTextInput = document.getElementById("jsonhginput");
	const charCountElement = document.querySelector(".charCount");
	const uiSnowflakes = document.querySelector(".snowflakes");

	let data;

	try {
		data = JSON.parse(localStorage.getItem("json"));
	} catch {}

	data ??= {
		"discord-example-theme": "dark",
		"text-size": "60%",
		"language": "en",
		"text-hg": "none",
		"text-font": "Open Sans, sans-serif",
		"code-hg": {
			defaultTextHighlight: {
				color: 4288341353,
				style: 0,
			},
			fallbackHighlight: {
				color: 4285791231,
				style: 0,
			},
			bracketHighlight: {
				color: 4294921292,
				style: 1,
			},
			semicolonHighlight: {
				color: 4294920266,
				style: 1,
			},
			functionsHighlights: {
				$nomention: {
					color: 4294932473,
					style: 0,
				},
				$catch: {
					color: 4288905212,
					style: 0,
				},
				$else: {
					color: 4288905212,
					style: 0,
				},
				$elseif: {
					color: 4288905212,
					style: 0,
				},
				$endif: {
					color: 4288905212,
					style: 0,
				},
				$endtry: {
					color: 4288905212,
					style: 0,
				},
				$error: {
					color: 4288905212,
					style: 0,
				},
				$if: {
					color: 4288905212,
					style: 0,
				},
				$try: {
					color: 4288905212,
					style: 0,
				},
			},
		},
	};

	var codedesign = data["code-hg"];

	if (codeTextInput) {
		try {
			if (localStorage.getItem("code-hg"))
				codedesign = JSON.parse(localStorage.getItem("code-hg"));
		} catch {}

		var inputcodedesign = JSON.stringify(codedesign);
		const charJSONCount = inputcodedesign.length;

		charCountElement.textContent = `${charJSONCount} / 25000`;
		codeTextInput.value = inputcodedesign;
	}

	if (displaySize) {
		displaySize.textContent = data["text-size"].replace("%", "");
		range.value = parseInt(data["text-size"].replace("%", ""));
	}

	const button = document.querySelector(".resetToDefault");
	button.addEventListener("mousedown", resetAllHover);
	button.addEventListener("mouseup", resettAllNone);
	button.addEventListener("mouseleave", resetAllLeave);
}

loadSettings();
