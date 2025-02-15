export namespace Reg {
    export const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    export const hexCode = /0[xX][0-9a-fA-F]+/
    export const hasSomeSpace = /\s/
    export const onlySpace = /^\s*$/
    export const RU_TEXT = /^[а-яё\s-]+$/i
    export const DIGIT_ONLY = /^\d+$/;
    export const INN = /^\d{10}$|^\d{12}$/

    export namespace Pass {
        export const UPPER_CASE = /(?=.*[A-Z])/ // – буквы верхнего регистра (A-Z, А-Я);
        export const LOWER_CASE = /(?=.*[a-z])/ // – буквы нижнего регистра (a-z, а-я);
        export const DIGIT = /(?=.*\d)/ // – цифры (0-9);(?=.*\d)
        export const SPECIAL_CHARS = /(?=.*[!@#$%^&*()_+|~\-=\\`{}\[\]:";'<>?,.\/])/ // –	спецсимволы (!@#$%^&*()_+|~-=\`{}[]:";'<>?,./).
    }
}