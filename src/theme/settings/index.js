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
	charCountElement.style.color = document.body.style.color;
	
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

function foldersSetting() {
	const manageFolderButton = document.getElementById("manageFolder");
	let inv = JSON.parse(localStorage.getItem("json"));

	if (inv["folders"] === false) {
		// Enabled
		var folderStatus = "Disable";
		var boolFolderStatus = true;
	} else {
		// Disabled
		var folderStatus = "Enable";
		var boolFolderStatus = false;
	}

	manageFolderButton.textContent = folderStatus;
	updateJsonFile("folders", boolFolderStatus);
}

function effectsSetting() {
	const manageEffectButton = document.getElementById("manageEffect");
	const snowflakes = document.querySelector(".snowflakes");
	let inv = JSON.parse(localStorage.getItem("json"));

	if (inv["effects"] === "hidden") {
		// Enabled
		var effectStatus = "Disable";
		var boolEffectStatus = "visible";
	} else {
		// Disabled
		var effectStatus = "Enable";
		var boolEffectStatus = "hidden";
	}

	snowflakes.style.visibility = boolEffectStatus;
	manageEffectButton.textContent = effectStatus;
	updateJsonFile("effects", boolEffectStatus);
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
	const fonntHtml = document.querySelector("html");
	let color = textHighlights[colorId] || "none";

	if (colorId === "sync") {
		const originalShasowColor = document.body.style.color;
		const [r, g, b] = originalShasowColor.match(/\d+/g).map(Number);
		const darkerShadowColor = darkenRGB(r, g, b, 0.6);
		fonntHtml.style.textShadow = "0 0 10px " + darkerShadowColor;
	} else {
		if (color === "none") {
			fonntHtml.style.textShadow = color;
		} else {
			fonntHtml.style.textShadow = "0 0 10px" + " #" + color;
		}
	}

	// Save in Storage
	updateJsonFile("text-hg", fonntHtml.style.textShadow);
}

let isLocked = true;

// Used in status bar (iPhone).
function setStatusBar(HueInput) {
	if (HueInput == "dark") {
		document
			.querySelector('meta[name="theme-color"]')
			.setAttribute("content", `#000`);
	} else if (HueInput == "light") {
		document
			.querySelector('meta[name="theme-color"]')
			.setAttribute("content", `#fff`);
	} else {
		document
			.querySelector('meta[name="theme-color"]')
			.setAttribute("content", `hsl(${HueInput}, 80%, 8%)`);
	}
}

function updateColor() {
	// Settings page
	const colorSlider = document.getElementById("themeSlider");
	const colorDisplay = document.getElementById("colorThemeDisplay");
	const jsonInput = document.getElementById("jsonhginput");

	// Main changes
	const bdsCode = document.querySelector("code.hljs");
	const previousPage = document.querySelector(".previous");
	const nextPage = document.querySelector(".next");
	const headers = document.querySelectorAll(".content .header:link");

	// Sidebar
	const sidePages = document.querySelectorAll(".chapter li a");
	const sideMainPages = document.querySelectorAll(".chapter li");

	// Search changes
	const searchBar = document.getElementById("searchbar");

	// Color Settings
	const hue = colorSlider.value;
	const saturation = 80;
	const lightness = 50;

	// Creating cute HSL colors
	const color1 = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	const color2 = `hsl(${hue}, ${saturation}%, ${lightness - 20}%)`;
	const color3 = `hsl(${hue}, 80%, 15%)`;

	// Locked text gameplay
	if (isLocked) {
		if (document.body.style.background.includes("linear-gradient")) {
			const colorGradient1 = `hsl(${hue}, 80%, 20%)`;
			const colorGradient2 = `hsl(${hue}, 80%, 5%)`;
			document.body.style.background = `linear-gradient(to bottom right, ${colorGradient1}, ${colorGradient2})`;
			updateJsonFile(
				"theme-bg",
				`linear-gradient(to bottom right, ${colorGradient1}, ${colorGradient2})`
			);
		} else {
			document.body.style.background = `hsl(${hue}, 80%, 8%)`;
			updateJsonFile("theme-bg", `hsl(${hue}, 80%, 8%)`);
		}
		setStatusBar(hue);
		document.body.style.color = `hsl(${hue}, 100%, 90%)`;
		headers.forEach((head) => {
			head.style.color = document.body.style.color;
		});
		document.documentElement.style.scrollbarColor =
			`hsl(${hue}, 70%, 25%)` + `hsl(${hue}, 80%, 8%)`;
		updateJsonFile("theme-text", document.body.style.color);
	}

	// Updating design
	document.documentElement.style.setProperty("--color1", color1);
	document.documentElement.style.setProperty("--color2", color2);
	document.documentElement.style.setProperty("--color3", color3);

	sidePages.forEach((page) => {
		page.style.color = document.body.style.color;
	});
	sideMainPages.forEach((mainPage) => {
		mainPage.style.color = document.body.style.color;
	});
	if (previousPage) {
		previousPage.style.background = `hsl(${hue}, 45%, 25%)`;
		nextPage.style.background = `hsl(${hue}, 45%, 25%)`;
	}
	if (searchBar) {
		searchBar.style.background = `hsl(${hue}, 60%, 20%)`;
		searchBar.style.color = document.body.style.color;
	}

	colorDisplay.textContent = hue + "°";
	jsonInput.style.scrollbarColor =
		`hsl(${hue}, 70%, 25%)` + `hsl(${hue}, 60%, 20%)`;
	bdsCode.style.scrollbarColor = `hsl(${hue}, 70%, 25%)` + color3;

	hexColor.textContent = rgbToHex(color1);

	updateJsonFile("theme-main", hue);
}

// Lock is used to sync text color and background with main color
function lockTheme() {
	const lockText = document.getElementById("lockText");
	if (!isLocked) {
		lockText.textContent = "Locked";
		isLocked = true;
	} else {
		lockText.textContent = "Unlocked";
		isLocked = false;
	}
}

function useBackground() {
	const colorSlider = document.getElementById("themeSlider");

	const hue = colorSlider.value;

	const backgroundColor = `hsl(${hue}, 80%, 8%)`;
	setStatusBar(hue);
	document.body.style.background = backgroundColor;
	document.documentElement.style.scrollbarColor =
		`hsl(${hue}, 70%, 25%)` + `hsl(${hue}, 80%, 8%)`;
	updateJsonFile("theme-bg", backgroundColor);
}

function useFontColor() {
	const colorSlider = document.getElementById("themeSlider");
	const headers = document.querySelectorAll(".content .header:link");
	const sidePages = document.querySelectorAll(".chapter li a");
	const sideChapterBar = document.querySelector(".chapter li a.active");
	const sideMainPages = document.querySelectorAll(".chapter li");
	const searchBar = document.getElementById("searchbar");
	const hue = colorSlider.value;

	if (searchBar) {
		searchBar.style.color = `#fff`;
	}
	sidePages.forEach((page) => {
		page.style.color = `#fff`;
	});
	sideMainPages.forEach((mainPage) => {
		mainPage.style.color = `#fff`;
	});
	headers.forEach((head) => {
		head.style.color = `#fff`;
	});
	document.body.style.color = `#fff`;
	sideChapterBar.style.color = `hsl(${hue}, 80%, 50%)`;
	updateJsonFile("theme-text", document.body.style.color);
}

function useDarkBackground() {
	document.body.style.background = `#000`;
	document.documentElement.style.scrollbarColor = `#fff` + `#000`;
	setStatusBar("dark");
	updateJsonFile("theme-bg", document.body.style.background);
}

function useLightBackground() {
	const colorSlider = document.getElementById("themeSlider");
	const headers = document.querySelectorAll(".content .header:link");
	const sidePages = document.querySelectorAll(".chapter li a");
	const sideChapterBar = document.querySelector(".chapter li a.active");
	const sideMainPages = document.querySelectorAll(".chapter li");
	const searchBar = document.getElementById("searchbar");
	const hue = colorSlider.value;

	if (searchBar) {
		searchBar.style.color = `#000`;
	}
	sidePages.forEach((page) => {
		page.style.color = `#000`;
	});
	sideMainPages.forEach((mainPage) => {
		mainPage.style.color = `#000`;
	});
	headers.forEach((head) => {
		head.style.color = `#000`;
	});
	document.body.style.color = `#000`;
	sideChapterBar.style.color = `hsl(${hue}, 80%, 50%)`;
	
	document.body.style.background = `#fff`;
	document.documentElement.style.scrollbarColor = `#000` + `#fff`;
	setStatusBar("light");
	updateJsonFile("theme-bg", document.body.style.background);
	updateJsonFile("theme-text", document.body.style.color);
}

function resetTheme() {
	const colorSlider = document.getElementById("themeSlider");

	colorSlider.value = 270;

	setStatusBar(colorSlider.value);
	updateColor();
	useBackground();
}

function gradientBackground() {
	const colorSlider = document.getElementById("themeSlider");

	const hue = colorSlider.value;

	const color1 = `hsl(${hue}, 80%, 20%)`;
	const color2 = `hsl(${hue}, 80%, 5%)`;

	setStatusBar(hue);
	document.body.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
	document.documentElement.style.scrollbarColor =
		`hsl(${hue}, 70%, 25%)` + `hsl(${hue}, 80%, 8%)`;

	updateJsonFile("theme-bg", document.body.style.background);
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
	charCountElement.textContent = `${charCount} / 10000`;

	if (charCount >= 10000) {
		charCountElement.style.color = "red";
	} else {
		charCountElement.style.color = document.body.style.color;
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

function rgbToHex(rgb) {
	const c = rgb.match(/\d+/g).map(Number);
	return (
		"#" +
		("000000" + ((c[0] << 16) | (c[1] << 8) | c[2]).toString(16)).slice(-6)
	);
}

function darkenRGB(r, g, b) {
	return `rgb(${Math.round(r * 0.5)}, ${Math.round(g * 0.5)}, ${Math.round(
		b * 0.5
	)})`;
}

function reloadHGPage() {
	location.reload();
}

function loadSettings() {
	const displaySize = document.getElementById("display-size");
	const range = document.getElementById("textsize");
	const themeChangerRange = document.getElementById("themeSlider");
	const codeTextInput = document.getElementById("jsonhginput");
	const charCountElement = document.querySelector(".charCount");
	const effectButton = document.getElementById("manageEffect");
	const uiManageEffectButton = document.getElementById("manageEffect");
	const uiSnowflakes = document.querySelector(".snowflakes");
	const uiManageFolderButton = document.getElementById("manageFolder");

	let data;

	try {
		data = JSON.parse(localStorage.getItem("json"));
	} catch {}

	data ??= {
		"theme-main": "270",
		"theme-bg": "270",
		"theme-text": "270",
		folders: false,
		"discord-example-theme": "dark",
		"text-size": "60%",
		language: "en",
		"text-hg": "none",
		"text-font": "Open Sans, sans-serif",
		effects: "hidden",
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

		charCountElement.textContent = `${charJSONCount} / 10000`;
		codeTextInput.value = inputcodedesign;
	}

	if (themeChangerRange) {
		themeChangerRange.value = parseInt(data["theme-main"].replace("%", ""));
	}

	if (displaySize) {
		displaySize.textContent = data["text-size"].replace("%", "");
		range.value = parseInt(data["text-size"].replace("%", ""));
	}

	if (data["effects"] === "hidden") {
		var effectStatus = "Enable";
	} else {
		var effectStatus = "Disable";
	}

	uiSnowflakes.style.visibility = data["effects"];
	uiManageEffectButton.textContent = effectStatus;

	if (data["folders"] === false) {
		var folderStatus = "Enable";
	} else {
		var folderStatus = "Disable";
	}

	uiManageFolderButton.textContent = folderStatus;

	const button = document.querySelector(".resetToDefault");
	button.addEventListener("mousedown", resetAllHover);
	button.addEventListener("mouseup", resettAllNone);
	button.addEventListener("mouseleave", resetAllLeave);
}

loadSettings();
try {
	updateColor();
} catch (err) {
	console.error("Failed to update color", err);
}
