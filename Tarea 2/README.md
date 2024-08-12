[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/67mQsdfI)
# Tarea 2 :construction:

* :pencil2: **Nombre:** Vicente Antonio Lavagnino Gatica
* :pencil2: **Correo:** vicente.lavagnino@uc.cl

## Código :symbols:

### :computer: Cómo ejecutar este código



```bash
# Asumiendo que nos encontramos en la carpeta del proyecto
yarn dev
```

### :teacher: Explicación del funcionamiento del código

El codigo principalmente opera según los siguintes archivos:

- [Router.jsx](src/Router.jsx): La cual ordena todo el sistema de enlaces y direcciones del código.
- [Main.jsx](src/Main.jsx) y [App.jsx](src/App.jsx): Creada por react, principalmente para crear la raíz del código.
- [productform.jsx](src/components/ProductForm/ProductForm.jsx): Archivo utilizado para crear la estructura del forms, para luego ser utilizado en cada página requerida.
- [ProductCard](src/components/Products/ProductCard.jsx): Archivo utilizado para crear la estructura de la tarjeta del, para luego ser utilizado en cada página requerida.
- [ProductsPage](src/pages/ProductsPage/ProductsPage.jsx): Archivo que crea la página principal, donde se muestran todas las tarjetas de productos y funciones principales.

- [ProductPage](src/pages/ProductPage/ProductPage.jsx): Archivo que crea la página donde se puede ver detalladamente un producto.

- [ProductFormPage](src/pages/ProductFormPage/ProductFormPage.jsx): Archivo que crea la página donde se puede ver el formulario de productos. En el caso de que se requiera editar un producto, este archivo visualizará la posibilidad de edición.


En general al acceder al acceder a la aplicación, entraremos a nuestra root "/" la cual nos direccionará hacia [ProductsPage](src/pages/ProductsPage/ProductsPage.jsx), luego tendremos la posibilidad de crear un nuevo producto al hacer click en el botón de "Publicar Producto", el cual direccionará a [:/product-form](src/pages/ProductFormPage/ProductFormPage.jsx), que a su vez contiene un [form](src/components/ProductForm/ProductForm.jsx) para poder crear un nuevo producto si rellenamos bien toda la información.

En el caso de que queramos ver los productos, nos mantenemos en nuestra root y podemos hacer scroll-down hasta ver uno que nos llame la atención, cuando ese sea el caso podemos tanto apretar los botones para ver más imágenes como clickear el producto para verlo más en [detalle](src/pages/ProductPage/ProductPage.jsx), una vez en esta nueva página, podemos regresar, eliminarlo o bien [editarlo](src/pages/ProductFormPage/ProductFormPage.jsx), donde seremos dirigidos a [:/product-form/id](src/pages/ProductFormPage/ProductFormPage.jsx) para poder sobreescribir el forms que contiene los detalles del producto.

### :warning: Funcionalidades implementadas y no implementadas

Se implementaron todas las funcionalidades mencionadas en la  [Rúbrica](IIC2513_Tarea_2_24_1.pdf), exceptuando el Bonus.


## Reflexión :thought_balloon:

### :scroll: ¿Para que utilizamos *async* y *await* en las funciones?

Durante el desarrollo de la tarea, la implementación de  *async* y *await*  fue fundamental para un correcto funcionamiento del código.

En particular ya que al trabajar con APIs tenemos muchos procesos donde se nos solicita un valor que todavía no podemos entregar, de esta forma el uso de await dentro de una función async evita la producción de errores debido a que permite que la promesa en cuestión tenga un valor antes de ser entregada. 

### :thinking: En cuanto a códigos de error, ¿qué ocurre al intentar enviar valores que no son válidos?

De la mano de la respuesta anterior, el uso de async y await permite la estandarización del uso de try & catch error en nuestro código, permitiendo manejar de una manera mucho más simple estos.

De esta forma, podemos acompañarnos del uso de console.log para poder debbugear los errores de una manera simple y evitando que nuestra aplicación se "caiga" simplemnete por encontrarnos con errores como el 400 Bad Request, cuando enviamos mal los datos o por ejemplo con 422 Unprocessable Entity cuando otro usuario eliminó uno de los productos con los cuales estabamos testeando nuestro código y su interacción con la API.

### :adhesive_bandage: Explica la diferencia entre *props* y *state* dentro de un componente React. ¿En qué situaciones utilizarías cada uno?

Sobre todo cuando modularizamos nuestro código, el uso de *props* y *state* se hace fundamental para facilitar nuestro trabajo.

En particular el uso de *props* fundamental radica cuando queremos citar datos de otras partes para armar una visualización o utilizarlo en alguna parte donde sabemos que si modificamos la variable original, esta repercutirá en el resto del código.

Por otra parte, el uso de *state* lo usamos principalmente cuando queremos usar datos para posteriormente cambiar su valor debido a un proceso posterior del código, un ejemplo donde podríamos hacer uso esto puede ser la posibilidad de enviar un formulario si se cumplen con todos los campos rellenos u otro tipo de acción que esté de cierto modo relacionado con el funcionamiento del código en virtud del tiempo 
