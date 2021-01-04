"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LANGUAGES_SETTINGTYPE = exports.DISABLED_LANGUAGE = exports.PREFERRED_LANGUAGE = exports.DEFAULT_LANGUAGE_CODE = exports.languages = void 0;
var DEFAULT_LANGUAGE_CODE = 'en-US';
exports.DEFAULT_LANGUAGE_CODE = DEFAULT_LANGUAGE_CODE;
var PREFERRED_LANGUAGE = '2';
exports.PREFERRED_LANGUAGE = PREFERRED_LANGUAGE;
var DISABLED_LANGUAGE = '0';
exports.DISABLED_LANGUAGE = DISABLED_LANGUAGE;
var LANGUAGES = 3;
var LANGUAGES_SETTINGTYPE = LANGUAGES;
exports.LANGUAGES_SETTINGTYPE = LANGUAGES_SETTINGTYPE;
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
exports.languages = languages;