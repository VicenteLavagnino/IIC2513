[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/UFP5mCQD)
# Tarea 1 :construction:

* :pencil2: **Nombre:** Vicente Antonio Lavagnino Gatica
* :pencil2: **Correo:** vicente.lavagnino@uc.cl

## Código :symbols:

### :computer: Cómo ejecutar este código

```bash
# Si es la primera vez que se ejecuta el código
python3 Packages.py
# Acceder a la carpeta del proyecto
python3 main.py
```

### :teacher: Explicación del funcionamiento del código 

El código se divide en 4 archivos principales:
- Packages.py: donde se encuentran todas la gestión de las dependencias del proyecto, en particular este archivo no fue modificado.
- Main.py: donde se encuentra la clase Main que se encarga de ejecutar el código principal del proyecto, además en este archivo se instancia la clase Scrapper y se ejecuta el método principal de esta clase junto con la inicialización del webdriver (y posterior cierre).
- Webdriver.py: donde se encuentra la clase Webdriver que se encarga de la gestión del webdriver de selenium en aspectos generales y puede ser escalable.
- Scrapper.py: donde se encuentra la clase Scrapper que se encarga de obtener la información de la página web en particular de los pokemones y fue especialmente diseñada para este proyecto.

Sobre el desarrollo de este proyecto, en particular se comenzó por desarrollar la clase WebDriver, la cual a mi impresión es la más importante para el desarrollo de este proyecto, ya que se encarga de la gestión del webdriver de selenium y a su vez es la que utiliza recursos desconocidos para mi previo al desarrollo del curso.

Luego, en paralelo se realizó el desarrollo del Scrapper junto con el archivo Main, donde se trabajó en paralelo en la creación de la clase y su inialización en el archivo Main.

Finalmente se trabajó en el readme y el debugging del código para asegurar su correcto funcionamiento.

## Reflexión :thought_balloon:

### :scroll: ¿Cómo se usó DevTools para realizar la tarea?

Para este proyecto se utilizó DevTools para explorar la página web y poder identificar los elementos necesarios para el desarrollo del código, en particular se utilizó para identificar los elementos de la página web que contienen la información solicitada utilizando el inspector de elementos y la consola de la página web junto con los XPath de los elementos.

Además, el uso de selenium y el controlador fueron claves para el desarrollo de este proyecto, ya que en primer lugar la modularización me permitió separar el código segun sus funciones y así darme cuenta de la escalabilidad que se le puede dar al código del driver y el scrapper de manera independiente, siendo mucho más fácil de replicar para otro potencial proyecto futuro, haciendo únicamente las modificacione sustanciales en el scrapper.

### :thinking: ¿Por qué necesaria la exploración previa con Devtool?

El manejo y previa exploración de la herramienta Devtool es fundamental para el desarrollo de esta Tarea ya que permite familiarizarse con la estructura de la página web y los elementos que la componen, de esta forma se puede identificar los elementos necesarios para el desarrollo del código y poder obtener la información necesaria de la página web.

Además, la exploración previa con Devtool permite identificar los elementos de la página web que contienen la información solicitada y poder obtener los XPath de estos elementos, lo que facilita el desarrollo del código y la obtención de la información.

### :adhesive_bandage: ¿Qué elementos en la página web podrían haber facilitado este desarrollo?

Una modificación de la página web que podría ser más fácil para el desarrollo del código, sería que toda la información se encuentre en un solo formato, ya sea texto o con el tag de title, de esta forma se pueda recurrir a la información con una sola función del webdriver y sea más fácil de escalar.

Otro tema a mejorar de la página para facilitar la función del Scrapper puede ser que para el html generado para el "tipo" de pokemon, se podría agregar una etiqueta o en alguna sección del código los "tipos" del pokemon separados por , o ; a modo de facilitar la recolección de información.

Por otra parte, los overlays que aparecen en la página al escribir en el buscador de la página web, dificultan la obtención de la información, ya que al hacer click en el overlay se redirige a otra página y no se puede obtener la información necesaria.