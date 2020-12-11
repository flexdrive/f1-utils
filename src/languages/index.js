const DEFAULT_LANGUAGE_CODE = 'en-US'
const PREFERRED_LANGUAGE = '2'
const DISABLED_LANGUAGE = '0'
const LANGUAGES = 3
const languages = [
  {
    settingKey: 1,
    settingType: LANGUAGES,
    languageCode: 'en-US',
    languageName: 'english'
  },
  {
    settingKey: 2,
    settingType: LANGUAGES,
    languageCode: 'es',
    languageName: 'spanish'
  },
  {
    settingKey: 3,
    settingType: LANGUAGES,
    languageCode: 'no',
    languageName: 'norwegian'
  }
]

export { languages, DEFAULT_LANGUAGE_CODE, PREFERRED_LANGUAGE, DISABLED_LANGUAGE }
