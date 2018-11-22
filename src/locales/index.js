export const getActiveLocales = (langFlag = 'en') => {
  return langFlag === 'ru' ? require('./ru.js').default : require('./en.js').default;
}
