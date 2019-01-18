var US = {
  regex: /(^\d{5}$)|(^\d{5}-?\d{4}$)/
};
var CA = {
  length: 6,
  regex: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/
};
var NO = {
  length: 4,
  regex: /^\d{4}$/
};
export default {
  US: US,
  CA: CA,
  NO: NO
};