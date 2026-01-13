<div class="tag-beta">
  <span class="warn"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>
  <span class="text">
    <span class="head">Experimental Feature!</span>
    <span class="desc">If you encountered an error, please contact us on the official BDFD Support Server.</span>
  </span>
</div>

# Settings

Let's customize your experience in our Bot Designer For Discord wiki world!

<link rel="stylesheet" href="./theme/settings/style.css">
<script src="./theme/settings/index.js" defer></script>

<div class="settingembed">
  <h2>Wiki Theme</h2>
  <p>You can choose a color scheme that best suits your preferences and requirements.</p>
  <button class="resetSettingButton" id="resetTheme" onClick="resetTheme()" title="Reset" aria-label="Reset">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
  <input type="range" id="themeSlider" min="0" max="360" oninput="updateColor()">
  <div id="themePreview">
    <div id="colorThemeDisplay"></div>
    <div id="hexColor"></div>
    <div class="lock-text" id="lockText" onClick="lockTheme()">Locked</div>
  </div>
  <div class="themebuttons">
    <button class="tbutton" id="setBackground" onClick="useBackground()">Background</button>
    <button class="tbutton" id="gradientTheme" onClick="gradientBackground()">Gradient</button>
    <button class="tbutton" id="setDarkBackground" onClick="setBackground('dark')">Dark background</button>
    <button class="tbutton" id="setLightBackground" onClick="setBackground('light')">Light background</button>
	<button class="tbutton" id="setBlackColor" onClick="useFontColor()">Set text color</button>
	<button class="tbutton" id="setBlackColor" onClick="setFontColor('dark')">Dark text</button>
	<button class="tbutton" id="setWhiteColor" onClick="setFontColor('light')">Light text</button>
	<button class="tbutton" id="setDarkTheme" onClick="setTheme('dark')">Dark theme</button>
	<button class="tbutton" id="setLightTheme" onClick="setTheme('light')">Light theme</button>
  </div>
  <p id="default-is">270°</p>
</div>

<div class="settingembed">
  <h2>Text Highlighting</h2>
  <p>Improve readability and make your text stand out with  text highlighting.</p>
  <div class="texthighbuttons">
    <button id="high-none" onClick="changeTextHigh('none')" class="hbutton">Disable</button>
    <button id="high-white" onClick="changeTextHigh('white')" class="hbutton">White</button>
    <button id="high-black" onClick="changeTextHigh('black')" class="hbutton">Black</button>
    <button id="high-red" onClick="changeTextHigh('red')" class="hbutton">Red</button>
    <button id="high-pink" onClick="changeTextHigh('pink')" class="hbutton">Pink</button>
    <button id="high-orange" onClick="changeTextHigh('orange')" class="hbutton">Orange</button>
    <button id="high-yellow" onClick="changeTextHigh('yellow')" class="hbutton">Yellow</button>
    <button id="high-green" onClick="changeTextHigh('green')" class="hbutton">Green</button>
    <button id="high-blue" onClick="changeTextHigh('blue')" class="hbutton">Blue</button>
    <button id="high-purple" onClick="changeTextHigh('purple')" class="hbutton">Purple</button>
    <button id="high-sync" onClick="changeTextHigh('sync')" class="hbutton">Sync</button>
  </div>
  <p id="default-is">"Disable" (Disabled)</p>
</div>

<div class="settingembed">
  <h2>Text Size</h2>
  <p>Easily modify the size of text for optimal viewing and readability.</p>
  <button class="resetSettingButton" id="textResetButton" onClick="resetFontSize()" title="Reset" aria-label="Reset">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
  <div class="textsizebuttons">
    <label id="display-size">60</label>
    <input type="range" id="textsize" min="50" max="100" value="60" oninput="changeFontSize()"/>
    <p id="default-is">60%</p>
  </div>
</div>

<div class="settingembed">
  <h2>Text Font</h2>
  <p>Select the font that makes text more understandable.</p>
  <button class="resetSettingButton" id="font1" onClick="changeTextFont('font1')" title="Reset" aria-label="Reset">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
  <div class="textfontbuttons">
  	<button id="font1" class="fbutton" onClick="changeTextFont('font1')">Open Sans</button>
    <button id="font2" class="fbutton" onClick="changeTextFont('font2')">Serif</button>
  	<button id="font3" class="fbutton" onClick="changeTextFont('font3')">Montserrat</button>
  	<button id="font4" class="fbutton" onClick="changeTextFont('font4')">Cursive</button>
  	<button id="font5" class="fbutton" onClick="changeTextFont('font5')">Monospace</button>
  	<button id="font6" class="fbutton" onClick="changeTextFont('font6')">System UI</button>
    <p id="default-is">"Open Sans"</p>
  </div>
</div>

<div class="settingembed">
  <h2>Folders (Soon...)</h2>
  <p>Folders make it easier to find the functions you need.</p>
  <div class="folderbuttons">
  	<button id="manageFolder" class="folderbutton" onClick="foldersSetting()">Enable</button>
  </div>
  <p id="default-is">"Enable" (Disabled)</p>
</div>

<div class="settingembed">
  <h2>Effects</h2>
  <p>It's only decoration for wiki.</p>
  <div class="effectbuttons">
    <button id="manageEffect" class="ebutton" onClick="effectsSetting()">Enable</button>
  </div>
  <p id="default-is">"Enable" (Disabled)</p>
</div>

<div class="settingembed">
  <h2>Discord Example</h2>
  <p>Let’s give our Discord example previews a color makeover to make them look better.</p>
  <button class="resetSettingButton" onClick="changeDiscordTheme('dark')" title="Reset" aria-label="Reset">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
  <div class="discordexamplebuttons">
    <button id="light-button" class="dbutton" onClick="changeDiscordTheme('light')">
      <div class="display-color" id="light"></div>
      <div class="display-text"> Discord Light</div>
    </button>
    <button id="dark-button" class="dbutton" onClick="changeDiscordTheme('dark')">
      <div class="display-color" id="dark"></div>
      <div class="display-text"> Discord Dark</div>
    </button>
    <button id="midnight-button" class="dbutton" onClick="changeDiscordTheme('midnight')">
      <div class="display-color" id="midnight"></div>
      <div class="display-text">Discord Midnight</div>
    </button>
    <button id="redmoon-button" class="dbutton" onClick="changeDiscordTheme('redmoon')">
      <div class="display-color" id="redmoon"></div>
      <div class="display-text">Red Moon</div>
    </button>
    <button id="oldwood-button" class="dbutton" onClick="changeDiscordTheme('oldwood')">
      <div class="display-color" id="oldwood"></div>
      <div class="display-text">Old Wood</div>
    </button>
    <button id="nightsapphire-button" class="dbutton" onClick="changeDiscordTheme('nightsapphire')">
      <div class="display-color" id="nightsapphire"></div>
      <div class="display-text">Night Sapphire</div>
    </button>
    <button id="emeraldearth-button" class="dbutton" onClick="changeDiscordTheme('emeraldearth')">
      <div class="display-color" id="emeraldearth"></div>
      <div class="display-text">Emerald Earth</div>
    </button>
    <button id="cherryvelvety-button" class="dbutton" onClick="changeDiscordTheme('cherryvelvety')">
      <div class="display-color" id="cherryvelvety"></div>
      <div class="display-text">Cherry Velvety</div>
    </button>
    <button id="forestdepth-button" class="dbutton" onClick="changeDiscordTheme('forestdepth')">
      <div class="display-color" id="forestdepth"></div>
      <div class="display-text">Forest Depth</div>
    </button>
    <button id="nightchestnut-button" class="dbutton" onClick="changeDiscordTheme('nightchestnut')">
      <div class="display-color" id="nightchestnut"></div>
      <div class="display-text">Night Chestnut</div>
    </button>
    <button id="azuresky-button" class="dbutton" onClick="changeDiscordTheme('azuresky')">
      <div class="display-color" id="azuresky"></div>
      <div class="display-text">Azure Sky</div>
    </button>
    <button id="nightviolet-button" class="dbutton" onClick="changeDiscordTheme('nightviolet')">
      <div class="display-color" id="nightviolet"></div>
      <div class="display-text">Night Violet</div>
    </button>
    <button id="mosscovered-button" class="dbutton" onClick="changeDiscordTheme('mosscovered')">
      <div class="display-color" id="mosscovered"></div>
      <div class="display-text">Moss Covered</div>
    </button>
    <button id="deepruby-button" class="dbutton" onClick="changeDiscordTheme('deepruby')">
      <div class="display-color" id="deepruby"></div>
      <div class="display-text">Deep Ruby</div>
    </button>
    <button id="fernvalley-button" class="dbutton" onClick="changeDiscordTheme('fernvalley')">
      <div class="display-color" id="fernvalley"></div>
      <div class="display-text">Fern Valley</div>
    </button>
    <button id="forestshadows-button" class="dbutton" onClick="changeDiscordTheme('forestshadows')">
      <div class="display-color" id="forestshadows"></div>
      <div class="display-text">Forest Shadows</div>
    </button>
    <button id="autumnblaze-button" class="dbutton" onClick="changeDiscordTheme('autumnblaze')">
      <div class="display-color" id="autumnblaze"></div>
      <div class="display-text">Autumn Blaze</div>
    </button>
  </div>
  <p id="default-is">"Discord Dark"</p>
</div>

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example ❤️
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png
      count: 1
      reacted: false
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Added!
```

<div class="settingembed">
  <h2>Code Highlighting</h2>
  <p>Input your  highlighting code here! Reload the page when you finish.</p>
  <button class="resetSettingButton" id="resetHG" onClick="resetHGInput()" title="Reset" aria-label="Reset">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
  <div class="codehighlighting">
    <button id="copyHG" onClick="copyHGInput()" class="hgButton">
      <p><i class="fa fa-clipboard" aria-hidden="true"></i> Copy</p>
    </button>
    <button id="reloadHG" onClick="reloadHGPage()" class="hgButton">
      <p><i class="fa fa-circle-o-notch" aria-hidden="true"></i> Save and reload</p>
    </button>
    <button class="hgButton">
      <p><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><i class="fa fa-book" aria-hidden="true"></i> What is this?</a></p>
    </button>
    <textarea id="jsonhginput" oninput="updateCodeHG()" maxlength="10000"></textarea>
  </div>
  <p class="charCount">0 / 10000</p>
</div>

```
$nomention
$allowUserMentions[]
$reply
$botTyping

$try
  $sendMessage[Hello, $username 👋, ping: $ping ms]
  $if[$toLowercase[$message]==secret]
    $footer[BDFD 🤩]
  $endif
$catch
  $sendMessage[Bye!]
  $botLeave $c[Magic😉]
$endtry
```

<div class="importantReset">
	<button class="resetToDefault" onmousedown="resetAllHover()" onmouseup="resettAllNone()" onmouseleave="resetAllLeave()">
		<span>Reset to default settings</span>
		<div class="progress"></div>
	</button>
	<span id="instructionAndWarning">Press and hold the button for 2 seconds to reset all settings to default. All settings will be permanently reset. This action cannot be undone.</span>
</div>
