class ojota{
    constructor(id, Demo, Modelo, Precio, Imagen){
       this.id = id,
       this.Demo = Demo,
       this.Modelo = Modelo,
       this.Precio = Precio,
       this.Imagen = Imagen
    }
 }
 //Instanciación de objetos: 
//  const libro1 = new Libro(1,"Jorge Luis Borges", "Aleph", 800, "AlephBorges.jpg")
 
//  const libro2 = new Libro(2,"Gabriel García Marquez", "Cien años de Soledad", 4500, "CienSoledadMarquez.jpg")
 
//  const libro3 = new Libro(3,"Isabel Allende", "Paula", 2800, "PaulaAllende.jpg")

//  const libro4 = new Libro(4,"Jorge Luis Borges","Ficciones", 1400, "FiccionesBorges.jpg")
 
//  const libro5 = new Libro(5,"Mario Benedetti", "Andamios", 2200, "AndamiosBenedetti.jpg")

//  const libro6 = new Libro(6,"Mario Vargas Llosa", "La ciudad y los perros", 2800, "CiudadPerrosVargasLlosa.jpg")

//carga con fetch de nuestra estanteria
//URL DEL FETCH (NO ES DESDE EL JS AL JSON, SINO DEL HTML AL JSON)
// function cargarLibros(array){
//     fetch("libros.json")
//     .then((resp)=>resp.json())
//     .then((dataLibro) => {
//         //dataLibro es mi array con la info del .json
//         for(let book of dataLibro){
//             let libronuevo = new Libro (book.id, book.autor, book.titulo, book.precio, book.imagen)
//             array.push(libronuevo)
//         }
//         localStorage.setItem("estanteria", JSON.stringify(array))

//     })
//     return array
// }
//cargar
const cargarStock = async () =>{
    const resp = await fetch("productos.json")
    const dataProducto = await resp.json()
    for(let OJOTAS of dataProducto){
        let productonuevo = new ojota (OJOTAS.id, OJOTAS.Demo, OJOTAS.Modelo, OJOTAS.Precio, OJOTAS.Imagen)
        Stock.push(productonuevo)
    }
    localStorage.setItem("Stock", JSON.stringify(Stock))
}


//function para cargar los libros desde el JSON con async await

 //arrays de objetos:
 //es preguntar si estanteria existe en el storage:
 //si existe, hay info cargada
 
let Stock = []
if(localStorage.getItem("Stock")){
     
     // estanteria = JSON.parse(localStorage.getItem("estanteria"))
     //hacer for of de estanteria y pasarle new Libro
    for(let OJOTAS of JSON.parse(localStorage.getItem("Stock"))){
        let ojotaStorage = new ojota (OJOTAS.id, OJOTAS.Demo, OJOTAS.Modelo, OJOTAS.Precio, OJOTAS.Imagen)
        Stock.push(ojotaStorage)
    }

}else{
    //no existe seteamos porprimera vez
    console.log("seteamos por primera vez")
    // estanteria.push(libro1,libro2,libro3,libro4,libro5,libro6)
    // localStorage.setItem("estanteria", JSON.stringify(estanteria))
    // estanteria = cargarLibros(estanteria)
    // console.log(estanteria)

    //FUNCTION ASYNC para cargar libros
    cargarStock()
    
}
//setear productosCarrito con operador Nullish
//pasarle class a lo quye capturamos del carrito
let productosCarrito = JSON.parse(localStorage.getItem("carrito")) ?? []

