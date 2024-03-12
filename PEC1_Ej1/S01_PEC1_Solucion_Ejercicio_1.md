# SOLUCIÓN EJERCICIO 1

## 1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno

### ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas

1. **Accesibilidad:** Las etiquetas proporcionan una mejora en la accesibilidad y comprensión del contenido tanto para los usuarios como para los distintos motores de búsqueda.

2. **SEO:** El uso adecuado de etiquetas semánticas puede mejorar el posicionamiento en los resultados de búsqueda, ya que valoran el contenido semántico con el objetivo de clasificar las páginas web de manera más efectiva.

3. **Mejor desarrollo:** El uso de etiquetas semánticas promueve la adopción de buenas prácticas de desarrollo web. Al seguir una estructura semántica, los desarrolladores pueden crear un código más limpio y mantenible, lo que resulta en una mejor experiencia de usuario y una mayor eficiencia en el desarrollo.

### Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad

1. **APIs para manipular documentos** cargados en el navegador: El ejemplo más obvio es la **API DOM** (Document Object Model), que permite manipular HTML y CSS — crear, eliminar y modificar HTML, aplicar estilos dinámicos a una página, etc.

2. Las **APIS de almacenamiento** en el lado del cliente . La habilidad de almacenar información en el lado del cliente es muy útil para hacer aplicaciones que salven su estado entre carga de páginas, e incluso trabajar cuando el dispositivo está fuera de línea. Un ejemplo son las **API de almacenamiento local** (localStorage y sessionStorage) las cuales permiten almacenar datos en el navegador del usuario de forma persistente (localStorage) o solo durante la sesión (sessionStorage).

3. Las **APIs para dibujar y manipular graficos** ya son soportadas por la mayoría de navegadore y permiten actualizar la información de cada uno de los píxeles contenidos en un canvas HTML, para crear escenas 2D y 3D. **API de Canvas** es la mas conocida y permite  dibujar gráficos, animaciones y otros elementos gráficos en tiempo real utilizando JavaScript.

### Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla)

Los **Media Queries** permiten aplicar estilos específicos según las características del dispositivo: el ancho de la pantalla o el ancho del viewport del navegado, la orientación. O también, según el tipo general de un dispositivo (como impresión o pantalla) u otras características.

### Cita al menos 4 de las características principales de TypeScript

1. **Tipado estático:** permite declarar tipos de datos para variables, parámetros de funciones, propiedades de objetos, etc. Esto puede ayudar a detectar errores en tiempo de compilación y ofrecer sugerencias de autocompletado en los editores de código, lo que mejora la productividad del desarrollador.

2. **Compatibilidad ECMAScript:** TypeScript es un superset de JavaScript, lo que significa que incluye todas las características de JavaScript y agrega algunas características adicionales, como soporte para clases, módulos, interfaces, etc.

3. **Compilación a JavaScript:** TypeScript se compila a JavaScript, lo que significa que puede ser ejecutado en cualquier navegador o entorno que admita JavaScript.

4. **Mejoras en el desarrollo y mantenimiento del código:**TypeScript proporciona características como IntelliSense, refactorización segura y navegación rápida entre archivos, que mejoran la productividad del desarrollador y facilitan el mantenimiento del código a medida que el proyecto crece.

## 2.El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas

### Cita al menos 2 de estos preprocesadores

1. **Sass:** es uno de los preprocesadores CSS más populares. Introduce características como variables, anidamiento de reglas, mixins, funciones, herencia, entre otros.

2. **Less:** Al igual que Sass, también permite utilizar variables, anidamiento de reglas, mixins y funciones. Y,además, proporciona algunas características adicionales, como operaciones matemáticas directamente en el código Less, lo que puede ser útil para definir valores dinámicos en los estilos.

### Cita al menos 4 ventajas que ofrecen estos preprocesadores

1. **Reutilización de código:** Los preprocesadores CSS permiten definir variables y mixins, lo que facilita la reutilización de estilos y la creación de estilos consistentes en todo el proyecto.

2. **Facilidad de mantenimiento:** Al utilizar características como variables y mixins, los preprocesadores CSS facilitan el mantenimiento del código al permitir realizar cambios en un solo lugar y que estos se reflejen automáticamente en todo el proyecto.

3. **Anidamiento de reglas:** Los preprocesadores CSS permiten anidar reglas CSS, lo que puede hacer que el código sea más legible y fácil de entender, especialmente en casos donde se utilizan estilos para elementos secundarios dentro de otros elementos.

4. **Mejora de la productividad:** Los preprocesadores CSS pueden aumentar la productividad del desarrollador al proporcionar herramientas y características que simplifican la escritura y organización del código CSS, como funciones matemáticas, bucles, entre otros.

### Explica brevemente en qué consisten los sourcemaps

Los sourcemaps son una especie de mapa que vincula el código fuente original al código generado. Realmente son archivos que contienen información sobre cómo se relaciona el código generado con el código fuente original. Esta información incluye los nombres de los archivos fuente, las líneas de código correspondientes y las columnas originales. Los source maps se generan generalmente en formato JSON o en formato de mapa de origen (.map).

Cuando ocurre un error o se necesita depurar la aplicación en producción, los developer tools del navegador utilizan el sourcemap para mapear el código generado al código fuente original. Esto le permite a los desarrolladores examinar y depurar el código como si estuvieran trabajando con el código fuente original.

### Explica qué es un transpilador

Un transpilador es un tipo de compilador que traduce el código fuente de un lenguaje de programación a otro lenguaje de programación similar. En el contexto de CSS y JavaScript, un transpilador se utiliza para convertir código escrito en un preprocesador como Sass, Less o TypeScript a su equivalente en CSS o JavaScript estándar, respectivamente. Esto permite utilizar características avanzadas y mejorar la productividad sin sacrificar la compatibilidad con los navegadores.

## 3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos

## Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos

### Sistemas de control de versiones

1. **Git**: es uno de los sistemas de control de versiones más populares y ampliamente utilizados en la actualidad. Permite realizar un seguimiento de los cambios en el código fuente de un proyecto, así como colaborar con otros desarrolladores de manera eficiente. Es distribuido, lo que significa que cada usuario tiene una copia completa del repositorio, lo que facilita la colaboración y el trabajo offline.

2. **SVN**: es un sistema de control de versiones centralizado que fue popular antes de la adopción generalizada de Git. A diferencia de Git, SVN sigue un modelo centralizado, donde existe un único repositorio central que almacena todas las versiones del código.

### Herramientas de gestión de módulos

1. **npm** (Node Package Manager): npm es el gestor de paquetes por defecto para Node.js y es ampliamente utilizado en el ecosistema de desarrollo de JavaScript. Permite instalar, gestionar y compartir paquetes de código reutilizable.

2. **Yarn** : Yarn es otra herramienta de gestión de paquetes para JavaScript que se ha vuelto popular en los últimos años. Ofrece mejoras de rendimiento y algunas características adicionales sobre npm, como la instalación paralela de paquetes y la gestión de dependencias más eficiente.

### Cita y explica al menos 3 comandos de Git

1. **git init**: inicializa un repositorio en el sistema de ficheros. Es el primer caso que se realiza cuando se crea un repositorio en una máquina local. Si en un futuro se desea crear un repositorio central (para poder realizar las acciones de push y pull ), se ha de configurar el repositorio mediante el comando config ). Toda la información necesaria para gestionar el repositorio Git se encuentra en el directorio .git.

2. **git add** : Añade un nuevo fichero, o uno existente pero que ha sido modificado, para registrar sus cambios en el repositorio Git. Este comando se ha de ejecutar siempre que se modifiquen ficheros del repositorio y se desee registrar sus cambios por el sistema de control de versiones.

3. **git clone**: Realiza una copia de un repositorio Git remoto en nuestro sistema de Este es generalmente el paso inicial para poder trabajar con los ficheros de un repositorio Git. Además de copiar los ficheros remotos en nuestro sistema, también inicializa la información básica necesaria para gestionar el repositorio Git.

### Cita y explica brevemente las características más definitorias de WebPack

Webpack es una herramienta de construcción de módulos para aplicaciones web modernas. Sus características más definitorias incluyen:

1. **Empaquetamiento de módulos**: Webpack permite empaquetar múltiples módulos de JavaScript y sus dependencias en uno o varios archivos bundles, lo que facilita la gestión de dependencias y mejora el rendimiento de carga de la aplicación.

2. **Carga de archivos estáticos**: Webpack puede cargar una amplia variedad de tipos de archivos estáticos, como imágenes, fuentes, CSS, HTML, entre otros, tratándolos como módulos y aplicando transformaciones según sea necesario.

3. **Uso de loaders y plugins**: Webpack es altamente configurable y extensible mediante el uso de loaders y plugins. Los loaders permiten transformar archivos antes de ser agregados al bundle, mientras que los plugins ofrecen funcionalidades adicionales como optimización, minificación, generación de HTML, entre otros. Esto permite adaptar Webpack a las necesidades específicas de cada proyecto.
