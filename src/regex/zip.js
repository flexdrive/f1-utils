const US = {
    regex: /(^\d{5}$)|(^\d{5}-?\d{4}$)/
};

const CA = {
    length: 6,
    regex: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/
}

const NO = {
    length: 4,
    regex: /^\d{4}$/
}

export default {
    US,
    CA,
    NO
}