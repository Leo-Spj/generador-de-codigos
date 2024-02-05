/**
 * Genera una contraseña aleatoria con las opciones especificadas.
 * @param {number} longitud - La longitud deseada de la contraseña.
 * @param {boolean} mayusculas - Indica si se deben incluir letras mayúsculas en la contraseña.
 * @param {boolean} minusculas - Indica si se deben incluir letras minúsculas en la contraseña.
 * @param {boolean} numeros - Indica si se deben incluir números en la contraseña.
 * @param {boolean} caracteres - Indica si se deben incluir caracteres especiales en la contraseña.
 * @returns {string} La contraseña generada.
 */
export declare function genCode(longitud: number, mayusculas: boolean, minusculas: boolean, numeros: boolean, caracteres: boolean): string;
