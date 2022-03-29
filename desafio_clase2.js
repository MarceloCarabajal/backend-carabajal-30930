class Usuario {
    nombre;
    edad;
    apellido;
    libros;
    mascotas;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`

    }
    addMascota(mascota) {
         this.mascotas.push(mascota);
    }
    countMascotas() {
         return this.mascotas.length;
    }
    showMascotas() {
        return this.mascotas;
    }


    addBook(newBook) {
        const p = {
            id: this.libros.length + 1,
            nombre: newBook.nombre,
            autor: newBook.autor,
        }
        this.libros.push(p);
    }
    showBooks() {
        return this.libros;
    }

    getBookNames() {
        return this.libros.map(book => book.nombre);
    }    
}

const user1 = new Usuario('Juan','Perez');
console.log(user1.getFullName());
user1.addMascota('perro');
user1.addMascota('gato');
console.log(user1.showMascotas());
console.log(user1.countMascotas());

const book1 = {
    nombre: 'El señor de los anillos',
    autor: 'J.R.R. Tolkien',
}
user1.addBook(book1);
console.log(user1.showBooks());
console.log(user1.getBookNames());

