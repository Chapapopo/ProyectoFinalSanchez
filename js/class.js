/* ,
    {
        "id": 30,
        "Demo": "nreldrnbhd",
        "Modelo": "fgyjyj",
        "Precio": 1200000000,
        "Imagen": "basico.webp"
    } */
class ojota{
    constructor(id, Demo, Modelo, Precio, Imagen){
       this.id = id,
       this.Demo = Demo,
       this.Modelo = Modelo,
       this.Precio = Precio,
       this.Imagen = Imagen
    }
 }

//defino una funcion usando async con funcion flecha para cargar los productos

const cargarStock = async () =>{
    const resp = await fetch("productos.json")
    const dataProducto = await resp.json()
    for(let OJOTAS of dataProducto){
        let productonuevo = new ojota (OJOTAS.id, OJOTAS.Demo, OJOTAS.Modelo, OJOTAS.Precio, OJOTAS.Imagen)
        Stock.push(productonuevo)
    }
    localStorage.setItem("Stock", JSON.stringify(Stock))
}

//arrays de objetos:
//defino el array 
let Stock = []
//pregunto si hay informacion cargada
if(localStorage.getItem("Stock")){
    //si existe
    //le paso ojotas a stock
    for(let OJOTAS of JSON.parse(localStorage.getItem("Stock"))){
        let ojotaStorage = new ojota (OJOTAS.id, OJOTAS.Demo, OJOTAS.Modelo, OJOTAS.Precio, OJOTAS.Imagen)
        Stock.push(ojotaStorage)
    }

}else{
    //no existe seteamos porprimera vez
    console.log("seteamos por primera vez")
    //funcion async para cargar productos
    cargarStock()
}
//setear productosCarrito
let productosCarrito = JSON.parse(localStorage.getItem("carrito")) ?? []