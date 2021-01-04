var DEFAULT_LANGUAGE_CODE = 'en-US';
var PREFERRED_LANGUAGE = '2';
var DISABLED_LANGUAGE = '0';
var LANGUAGES = 3;
var LANGUAGES_SETTINGTYPE = LANGUAGES;
var languages = [{
  settingKey: 1,
  settingType: LANGUAGES,
  languageCode: 'en-US',
  languageName: 'english'
}, {
  settingKey: 2,
  settingType: LANGUAGES,
  languageCode: 'es',
  languageName: 'spanish'
}, {
  settingKey: 3,
  settingType: LANGUAGES,
  languageCode: 'no',
  languageName: 'norwegian'
}];
export { languages, DEFAULT_LANGUAGE_CODE, PREFERRED_LANGUAGE, DISABLED_LANGUAGE, LANGUAGES_SETTINGTYPE };