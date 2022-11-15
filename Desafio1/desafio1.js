/* DESAFIO 1 */

class User{
    
  constructor ( nombre, apellido, libros, mascotas ){
      this.nombre = nombre
      this.apellido = apellido
      this.libros = libros
      this.mascotas = mascotas
  }

  getFullName(){
      return (`${this.nombre} ${this.apellido}`)
  }
  
  addMascota( Mascota ){
      this.mascotas.push(Mascota)
  }

  countMascotas(){
      return (this.mascotas).length
  }

  addBook( Nombre, Autor ){
      this.libros.push({ nombre:Nombre, autor:Autor })
  }

  getBookNames(){
      return this.libros.map( libro => libro.nombre )
  }

}


/*********************************************/

const usuario = new User( 'Elvis', 'Tek', [ { nombre:'El Dorado', autor: 'JP' }, { nombre:'Quijote', autor: 'MC' } ], ['perro'])


console.log('Nombre de usuario: ', usuario.getFullName())
usuario.addMascota('gato')
console.log('Cantidad de mascotas del usuario: ', usuario.countMascotas())
usuario.addBook('Heroe Recio', 'MJ')
console.log('Nombres de libros del usuario: ', usuario.getBookNames())
