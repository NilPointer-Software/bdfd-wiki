import { p as promiseResolve, b as bootstrapLazy } from './index-1e0eea8c.js';
export { s as setNonce } from './index-1e0eea8c.js';

/*
 Stencil Client Patch Esm v3.4.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["discord-action-row_29",[[4,"discord-action-row"],[0,"discord-attachment",{"url":[1],"height":[2],"width":[2],"alt":[1]}],[4,"discord-attachments"],[4,"discord-bold"],[4,"discord-button",{"emoji":[1],"emojiName":[1,"emoji-name"],"url":[1],"disabled":[4],"type":[1]}],[0,"discord-command",{"profile":[1],"author":[1],"avatar":[1],"roleColor":[1,"role-color"],"command":[1]}],[0,"discord-custom-emoji",{"name":[1],"url":[1025],"embedEmoji":[1028,"embed-emoji"]}],[4,"discord-embed",{"color":[1],"authorName":[1,"author-name"],"authorImage":[1,"author-image"],"authorUrl":[1,"author-url"],"embedTitle":[1,"embed-title"],"url":[1],"thumbnail":[1],"image":[1],"video":[1],"provider":[1],"hasProvidedDescriptionSlot":[32]}],[4,"discord-embed-description"],[4,"discord-embed-field",{"fieldTitle":[1,"field-title"],"inline":[4],"inlineIndex":[2,"inline-index"]}],[4,"discord-embed-fields"],[4,"discord-embed-footer",{"footerImage":[1,"footer-image"],"timestamp":[1537]}],[4,"discord-inline-code"],[0,"discord-invite",{"icon":[1],"name":[1],"url":[1],"online":[2],"members":[2],"verified":[4],"partnered":[4],"inviteTitle":[1,"invite-title"],"joinBtn":[1,"join-btn"]}],[4,"discord-italic"],[4,"discord-mention",{"highlight":[4],"color":[1],"type":[1]}],[4,"discord-message",{"profile":[1],"author":[1],"avatar":[1],"bot":[4],"server":[4],"verified":[4],"op":[4],"edited":[4],"roleColor":[1,"role-color"],"roleIcon":[1,"role-icon"],"roleName":[1,"role-name"],"highlight":[4],"ephemeral":[4],"timestamp":[1537],"twentyFour":[4,"twenty-four"]}],[4,"discord-messages",{"lightTheme":[1540,"light-theme"],"noBackground":[1540,"no-background"],"compactMode":[1540,"compact-mode"]}],[4,"discord-quote"],[0,"discord-reaction",{"emoji":[1],"name":[1],"count":[1026],"reacted":[4],"interactive":[4]}],[4,"discord-reactions"],[4,"discord-reply",{"profile":[1],"author":[1],"avatar":[1],"bot":[4],"server":[4],"op":[4],"verified":[4],"edited":[4],"roleColor":[1,"role-color"],"command":[4],"attachment":[4],"mentions":[4]}],[4,"discord-spoiler"],[4,"discord-system-message",{"timestamp":[1537],"type":[1],"channelName":[4,"channel-name"]}],[0,"discord-tenor-video",{"url":[1],"height":[2],"width":[2]}],[4,"discord-thread",{"name":[1],"cta":[1]}],[4,"discord-thread-message",{"profile":[1],"author":[1],"avatar":[1],"bot":[4],"server":[4],"verified":[4],"edited":[4],"roleColor":[1,"role-color"],"relativeTimestamp":[1,"relative-timestamp"]}],[4,"discord-time"],[4,"discord-underlined"]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map