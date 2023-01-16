# BackendCoderhouse

## Primer desafio || Clases y objetos
>1) Declarar una clase Usuario 

>2) Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[]
Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

>3) Hacer que Usuario cuente con los siguientes métodos:
getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

>4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.


## Segundo desafio || Clases y Objetos
>Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

1) save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
2) getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
3) getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
4) deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
5) deleteAll(): void - Elimina todos los objetos presentes en el archivo. */


## Tercer desafio || Express
> Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:

1) Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
2) Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
3) Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.


## Cuarto desafio || API RESTful
> Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos.

En detalle, que incorpore las siguientes rutas:
1) GET '/api/productos' -> devuelve todos los productos.
2) GET '/api/productos/:id' -> devuelve un producto según su id.
3) POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
4) PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
5) DELETE '/api/productos/:id' -> elimina un producto según su id.

> Para el caso de que un producto no exista, se devolverá el objeto: { error : 'producto no encontrado' }

> Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.

> Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.

> Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.

> El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.

> Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.

## Quinto desafio || Router

> Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
1) Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
2) Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
3) Ambas páginas contarán con un botón que redirija a la otra.
> Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por pug.

> Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por ejs.

> Por escrito, indicar cuál de los tres motores de plantillas prefieres para tu proyecto y por qué

## Sexto desafio || Websocket

> Consigna 1:  Modificar el último entregable para que disponga de un canal de websocket que permita representar, por debajo del formulario de ingreso, 
> una tabla con la lista de productos en tiempo real. 
> Puede haber varios clientes conectados simultáneamente y en cada uno de ellos se reflejarán los cambios que se realicen en los productos sin necesidad de recargar la vista.
> Cuando un cliente se conecte, recibirá la lista de productos a representar en la vista.
> Aspectos a incluir en el entregable:
1) Para construir la tabla dinámica con los datos recibidos por websocket utilizar Handlebars en el frontend. Considerar usar archivos públicos para alojar
2) la plantilla vacía, y obtenerla usando la función fetch( ). Recordar que fetch devuelve una promesa.

> Consigna 2:  Añadiremos al proyecto un canal de chat entre los clientes y el servidor.
> Aspectos a incluir en el entregable:
1) En la parte inferior del formulario de ingreso se presentará el centro de mensajes almacenados en el servidor, donde figuren los mensajes de todos los usuarios identificados por su email. 
2) El formato a representar será: email (texto negrita en azul) [fecha y hora (DD/MM/YYYY HH:MM:SS)](texto normal en marrón) : mensaje (texto italic en verde) 
3) Además incorporar dos elementos de entrada: uno para que el usuario ingrese su email (obligatorio para poder utilizar el chat) y otro para ingresar mensajes y enviarlos mediante un botón. 
4) Los mensajes deben persistir en el servidor en un archivo (ver segundo entregable).

## Septimo desafio || DATABASE's

> Agregar persistencia de datos en bases de datos MariaDB y Sqlite3 al quinto desafio

## Proyecto final ecommerce || Primer entrega

> Consigna: Deberás entregar el estado de avance de tu aplicación eCommerce Backend, que implemente un servidor de aplicación basado en la plataforma Node.js y el módulo express.
> El servidor implementará dos conjuntos de rutas agrupadas en routers, uno con la url base '/productos' y el otro con '/carrito'.
> El puerto de escucha será el 8080 para desarrollo y process.env.PORT para producción en glitch.com

1) Aspectos a incluir en el entregable: 
> El router base '/api/productos' implementará cuatro funcionalidades:
> GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
> POST: '/' - Para incorporar productos al listado (disponible para administradores)
> PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
> DELETE: '/:id' - Borra un producto por su id (disponible para administradores)

2) El router base '/api/carrito' implementará tres rutas disponibles para usuarios y administradores:
> POST: '/' - Crea un carrito y devuelve su id.
> DELETE: '/:id' - Vacía un carrito y lo elimina.
> GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
> POST: '/:id/productos/:id_prod' - Para incorporar productos al carrito por su id de producto
> DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto

3) Crear una variable booleana administrador, cuyo valor configuraremos más adelante con el sistema de login. Según su valor (true ó false) me permitirá alcanzar o no las rutas indicadas.
> En el caso de recibir un request a una ruta no permitida por el perfil, devolver un objeto de error.
> El status http de la respuesta debe ser 403. Ejemplo: { error : -1, descripcion: ruta 'x' método 'y' no autorizada }

4) Un producto dispondrá de los siguientes campos:  id, timestamp, nombre, descripcion, código, foto (url), precio, stock.
> El carrito de compras tendrá la siguiente estructura: id, timestamp(carrito), productos: [id]
> El timestamp puede implementarse con Date.now()

> Realizar la persistencia de productos y del carrito de compras en el filesystem.

5) A tener en cuenta:
> Para realizar la prueba de funcionalidad hay dos opciones:
> Probar con postman cada uno de los endpoints (productos y carrito) y su operación en conjunto.

6) Realizar una aplicación frontend sencilla, utilizando HTML/CSS/JS ó algún framework de preferencia, que represente el listado de productos en forma de cards.
> En cada card figuran los datos del producto, que, en el caso de ser administradores, podremos editar su información. Para este último caso incorporar los botones actualizar y eliminar.
> También tendremos un formulario de ingreso de productos nuevos con los campos correspondientes y un botón enviar.
> Asimismo, construir la vista del carrito donde se podrán ver los productos agregados e incorporar productos a comprar por su id de producto.
> Esta aplicación de frontend debe enviar los requests get, post, put y delete al servidor utilizando fetch y debe estar ofrecida en su espacio público.
> En todos los casos, el diálogo entre el frontend y el backend debe ser en formato JSON. El servidor no debe generar ninguna vista.
> En el caso de requerir una ruta no implementada en el servidor, este debe contestar un objeto de error: ej { error : -2, descripcion: ruta 'x' método 'y' no implementada}, status code: 404
> La estructura de programación será ECMAScript, separada tres en módulos básicos (router, lógica de negocio/api y persistencia ). Más adelante implementaremos el desarrollo en capas.
> Utilizar preferentemente clases, constructores de variables let y const y arrow function.
> Realizar la prueba de funcionalidad completa en el ámbito local (puerto 8080) y en glitch.com
