var _a, _b, _c, _d, _e, _f, _g, _h, _j;
const defaultDiscordAvatars = {
  blue: 'https://cdn.discordapp.com/embed/avatars/0.png',
  gray: 'https://cdn.discordapp.com/embed/avatars/1.png',
  green: 'https://cdn.discordapp.com/embed/avatars/2.png',
  orange: 'https://cdn.discordapp.com/embed/avatars/3.png',
  red: 'https://cdn.discordapp.com/embed/avatars/4.png',
  pink: 'https://cdn.discordapp.com/embed/avatars/5.png'
};
const globalAvatars = (_b = (_a = window.$discordMessage) === null || _a === void 0 ? void 0 : _a.avatars) !== null && _b !== void 0 ? _b : {};
const avatars = Object.assign(defaultDiscordAvatars, globalAvatars, {
  default: (_d = (_c = defaultDiscordAvatars[globalAvatars.default]) !== null && _c !== void 0 ? _c : globalAvatars.default) !== null && _d !== void 0 ? _d : defaultDiscordAvatars.blue
});
const profiles = (_f = (_e = window.$discordMessage) === null || _e === void 0 ? void 0 : _e.profiles) !== null && _f !== void 0 ? _f : {};
const defaultTheme = ((_g = window.$discordMessage) === null || _g === void 0 ? void 0 : _g.defaultTheme) === 'light' ? 'light' : 'dark';
const defaultMode = ((_h = window.$discordMessage) === null || _h === void 0 ? void 0 : _h.defaultMode) === 'compact' ? 'compact' : 'cozy';
const defaultBackground = ((_j = window.$discordMessage) === null || _j === void 0 ? void 0 : _j.defaultBackground) === 'none' ? 'none' : 'discord';

export { avatars as a, defaultTheme as b, defaultMode as c, defaultDiscordAvatars as d, defaultBackground as e, profiles as p };

//# sourceMappingURL=options-e1c0ed35.js.map