# BackendCoderhouse

## Primer desafio
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


## Segundo desafio
>Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

1) save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
2) getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
3) getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
4) deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
5) deleteAll(): void - Elimina todos los objetos presentes en el archivo. */


## Tercer desafio
> Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:

1) Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
2) Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
3) Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.
