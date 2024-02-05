# Generador de Contraseñas

Este es un generador de codigos aleatorio. Puedes utilizarlo para generar contraseñas o codigos rapidamente.

🔑 En este proyecto, ['Password Generator'](https://leo-spj.github.io/Password-generator-app/), se utiliza el paquete.

## Características

- Genera codigos aleatorias con diferentes longitudes y niveles de complejidad.
- Permite personalizar los caracteres incluidos en los códigos generados.

## Instalación

Para utilizar el paquete generador-de-codigos, sigue estos pasos:

1. Abre una terminal en tu proyecto.
2. Ejecuta el comando para instalar el paquete desde el registro de npm.

    ``` bash
    npm i generador-de-codigos
    ```


3. Importa el paquete en tu código utilizando `require` o `import`, según la sintaxis de tu proyecto.


## Uso

La función `genCode` recibe 5 parámetros requeridos y devuelve una cadena de texto con la contraseña generada:

1. Longitud de la contraseña (número)
2. Mayúsculas (booleano)
3. Minúsculas (booleano)
4. Números (booleano)
5. Símbolos (booleano)

Ejemplos:

CommonJS

``` javascript
const { genCode } = require('generador-de-codigos');

console.log( genCode(10, true, false, true, false) );
```

ESM  (ES6 Modules)

``` javascript
import { genCode } from 'generador-de-codigos';

console.log( genCode(10, true, false, true, false) );
```



## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`.
3. Realiza los cambios necesarios y realiza commit: `git commit -m "Agrega nueva funcionalidad"`.
4. Haz push a la rama: `git push origin nueva-funcionalidad`.
5. Abre un pull request en este repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. ❤️
