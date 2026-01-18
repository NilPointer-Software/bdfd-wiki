const DiscordThemes = {
	light: {
		reactionColor: "#F2F3F5",
		messageTextColor: "#313338",
		background: "#FFF",
	},
	dark: {
		reactionColor: "#202226",
		messageTextColor: "#C6C7CC",
		background: "#1C1D22",
	},
	redmoon: {
		reactionColor: "#4e0505",
		background: "linear-gradient(-25deg, #240000, #740606)",
	},
	nightsapphire: {
		reactionColor: "#180052",
		background: "linear-gradient(-25deg, #000124, #260674)",
	},
	emeraldearth: {
		reactionColor: "#006d3f",
		background: "linear-gradient(-25deg, #0c2400, #067446)",
	},
	nightviolet: {
		reactionColor: "#390085",
		background: "linear-gradient(-25deg, #1d0024, #350674)",
	},
	oldwood: {
		reactionColor: "#714400",
		background: "linear-gradient(-25deg, #240f00, #744806)",
	},
	azuresky: {
		reactionColor: "#007162",
		background: "linear-gradient(-25deg, #001a24, #067465)",
	},
	cherryvelvety: {
		reactionColor: "#710049",
		background: "linear-gradient(-25deg, #240017, #74064d)",
	},
	forestdepth: {
		reactionColor: "#616d00",
		background: "linear-gradient(-25deg, #222400, #687406)",
	},
	nightchestnut: {
		reactionColor: "#4e0505",
		background: "linear-gradient(-25deg, #190024, #740606)",
	},
	mosscovered: {
		reactionColor: "#4b6d11",
		background: "linear-gradient(-25deg, #1c2400, #4c7406)",
	},
	deepruby: {
		reactionColor: "#74066e",
		background: "linear-gradient(-25deg, #1f0024, #74066e)",
	},
	fernvalley: {
		reactionColor: "#1e6d00",
		background: "linear-gradient(-25deg, #00240a, #247406)",
	},
	forestshadows: {
		reactionColor: "#086b00",
		background: "linear-gradient(-25deg, #000624, #086700 , #0a7f01)",
	},
	autumnblaze: {
		reactionColor: "#742006",
		background: "linear-gradient(-25deg, #240800, #742006)",
	},
};

function setDiscordTheme(colorId) {
	const discordMessages = document.getElementsByTagName("discord-messages");

	const styles = {
		reactionColor: "#131318",
		messageTextColor: "#DDDEE1",
		background: "#000",
		...(DiscordThemes[colorId] || {}),
	};

	// Callback function to execute when mutations are observed
	const callback = (mutationList, observer) => {
		for (const mutation of mutationList) {
			if (
				mutation.type === "attributes" &&
				mutation.attributeName === "class"
			) {
				const reactions =
					document.getElementsByTagName("discord-reaction");
				const messageColors = document.querySelectorAll(
					".discord-message .discord-message-markup"
				);

				const botToApp =
					document.querySelectorAll('.discord-application-tag');

				if (styles.background)
					mutation.target.style.background = styles.background;
					mutation.target.style.backgroundColor = styles.exampleColor;
				for (const reaction of reactions) {
					// change the div which is the actual reaction
					reaction.children.item(0).style.backgroundColor =
						styles.reactionColor;
				}
				messageColors.forEach((text) => {
					text.style.color = styles.messageTextColor;
				});

				botToApp.forEach(tag => {
        				if (tag.textContent.includes("Bot")) {
            					tag.textContent = tag.textContent.replace("Bot", "App");
						tag.setAttribute("aria-label", "Verified App");
        				}
    				});

				// Changes "00/00/0000" to "Today at 00:00".
				const timestamps = document.querySelectorAll(
					".discord-message-timestamp"
				);
				timestamps.forEach((timestamp) => {
					var time = new Date().getTime();
					var minuteExample = new Date().getMinutes();
					var hourExample = new Date().getHours();
					const formattedMinute =
						minuteExample < 10
							? `0${minuteExample}`
							: minuteExample;
					const formattedHour =
						hourExample < 10 ? `0${hourExample}` : hourExample;
					const formattedTime = `Today at ${formattedHour}:${formattedMinute}`;
					timestamp.textContent = formattedTime;
				});
			}
		}
	};

	for (message of discordMessages) {
		const mutObv = new MutationObserver(callback);
		mutObv.observe(message, { attributes: true });
	}
}

function applySettings() {
	const snowflakes = document.querySelector(".snowflakes");

	let data;

	try {
		data = JSON.parse(localStorage.getItem("json"));
	} catch {}

	const defaultData = {
		"discord-example-theme": "dark",
		"text-size": "60%",
		"language": "en",
		"text-hg": "none",
		"text-font": "Open Sans, sans-serif",
		"effects": "hidden",
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

	if (!data) localStorage.setItem("json", JSON.stringify(defaultData));
	data ??= defaultData;

	const html = document.querySelector("html");

	if (snowflakes) {
		snowflakes.style.visibility = data["effects"];
	}
	
	setDiscordTheme(data["discord-example-theme"]);
}

applySettings();
