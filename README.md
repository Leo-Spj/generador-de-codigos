# Generador de Contraseñas

Este proyecto es un generador de contraseñas aleatorias. Puedes utilizarlo para generar contraseñas seguras y difíciles de adivinar.

[En este proyecto se utiliza el paquete](https://leo-spj.github.io/Password-generator-app/)

## Características

- Genera contraseñas aleatorias con diferentes longitudes y niveles de complejidad.
- Permite personalizar los caracteres incluidos en las contraseñas generadas.

## Instalación

Para utilizar el paquete generador-de-contrasenas, sigue estos pasos:

1. Abre una terminal en tu proyecto.
2. Ejecuta el comando para instalar el paquete desde el registro de npm.

    ``` bash
    npm i generador-de-contrasenas
    ```


3. Importa el paquete en tu código utilizando `require` o `import`, según la sintaxis de tu proyecto.


## Uso

La función `generarPassword` recibe 5 parámetros requeridos y devuelve una cadena de texto con la contraseña generada:

1. Longitud de la contraseña (número)
2. Mayúsculas (booleano)
3. Minúsculas (booleano)
4. Números (booleano)
5. Símbolos (booleano)

Ejemplo:

``` javascript
import { generarPassword } from 'generador-de-contrasenas';

let contraseña = generarPassword(15, true, true, true, false);
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
