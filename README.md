AgendaReunionesCiisa-Front
Este proyecto contiene el frontend para la agenda de reuniones de ciisa

Requisitos:

-Node js 10 +

-Npm 6.4 +

-Git

Instalación:

*Nota: El proyecto se encuentra en fase de desarrollo y este es solo un MVP, por lo que el siguiente manual está enfocado para la realización de pruebas o para que puedas desarrollar por tu cuenta. Para el manual de instalación para configurar el proyecto en entorno de producción, deberás esperar la primera versión estable del proyecto que será lanzado prontamente.

Preparando el proyecto.

Antes de comenzar con este apartado, asegurate de tener instalados los requisitos minímos para el proyecto que están declarados en la sección de "Requisitos", una vez tengas todos los requisitos, prosigue con esta sección.

Obtener una copia del proyecto:

Lo primero que debes hacer es clonar o descargar el proyecto, debes acceder a él mediante el siguiente compando en consola:

git clone https://github.com/GetColors/Agenda-reuniones-api.git

Una vez hayas clonado el proyecto ya cuentas con el código fuente del proyecto, por lo que ya podemos comenzar con los preparativos.

Instalando el proyecto:

Para realizar la instalación del proyecto, contamos con la ayuda de npm para gestionar las dependencias, por lo que se encargará de realizar casi todo el trabajo por nosotros. Debes situarte dentro de el directorio raíz del proyecto (donde está ubicado el archivo package.json), una vez dentro del directorio debes ejecutar el siguiente comando en la consola:

npm install

Debes contar con una conexión a internet para realizar ésto, puesto que npm debe descargar las dependencias requeridas por el proyecto para llevar a cabo su correcto funcionamiento. Una vez ejecutes el comando, npm comenzará a descargar todas las dependencias y las guardará en una carpeta "vendor" que se ubicará automáticamente en la raíz del proyecto, por lo que no debes realizar nada más que esperar a que finalice.

Ejecutar la aplicación:

Con los pasos anteriores ya has terminado de preparar y configurar el proyecto, por lo que puedes ejecutarlo, para ello, solo ejecuta dentro del directorio raíz del proyecto el siguiente comando:

ng serve -o

Con esto se abrirá la aplicación en el navegador de internet, por lo que ya puedes usarla. 

Puedes utilizar el usuario de pruebas creado en el backend (ver proyecto de la api) para acceder a la aplicación.

El usuario por defecto es admin@email.com y su contraseña es 00000000  


