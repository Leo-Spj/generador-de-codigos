"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCode = void 0;
const c_mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const c_munisculas = 'abcdefghijklmnopqrstuvwxyz';
const c_numeros = '0123456789';
const c_caracteres = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
/**
 * Genera una contraseña aleatoria con las opciones especificadas.
 * @param {number} longitud - La longitud deseada de la contraseña.
 * @param {boolean} mayusculas - Indica si se deben incluir letras mayúsculas en la contraseña.
 * @param {boolean} minusculas - Indica si se deben incluir letras minúsculas en la contraseña.
 * @param {boolean} numeros - Indica si se deben incluir números en la contraseña.
 * @param {boolean} caracteres - Indica si se deben incluir caracteres especiales en la contraseña.
 * @returns {string} La contraseña generada.
 */
function genCode(longitud, mayusculas, minusculas, numeros, caracteres) {
    if (longitud <= 0) {
        throw new Error('Longitud no válida.');
    }
    let caracteresEscogidos = '';
    let password = '';
    // Se añaden los caracteres que se van a incluir en la contraseña.
    if (mayusculas)
        caracteresEscogidos += c_mayusculas;
    if (minusculas)
        caracteresEscogidos += c_munisculas;
    if (numeros)
        caracteresEscogidos += c_numeros;
    if (caracteres)
        caracteresEscogidos += c_caracteres;
    let posicion = 0;
    // Se genera la contraseña.
    for (let i = 0; i < longitud; i++) {
        posicion = Math.floor(Math.random() * caracteresEscogidos.length);
        password += caracteresEscogidos.charAt(posicion);
    }
    return password;
}
exports.genCode = genCode;
