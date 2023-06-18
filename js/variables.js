function recuperarLS(){
    return JSON.parse(localStorage.getItem("miCarrito")) || []
}

const carrito = recuperarLS()

const autos = [{ id: 1327, marca: "Peugeot", nombre: "208", precio: 7500000, stock: 13, imagen: "./assets/img/208.jpg" },
{ id: 1328, marca: "Peugeot", nombre: "308", precio: 9500000, stock: 10, imagen: "./assets/img/308.jpg"},
{ id: 1329, marca: "FIAT", nombre: "Cronos", precio: 5500000, stock: 24, imagen:"./assets/img/cronos.jpg" },
{ id: 1330, marca: "FIAT", nombre: "Argo", precio: 6200000, stock: 17, imagen: "./assets/img/argo.jpg" },
{ id: 1331, marca: "VW", nombre: "Gol Trend", precio: 700000, stock: 11, imagen: "./assets/img/gol.jpg" },
{ id: 1332, marca: "Toyota", nombre: "Corolla", precio: 9500000, stock: 12, imagen: "./assets/img/corolla.jpg" },
{ id: 1333, marca: "VW", nombre: "Golf", precio: 8300000, stock: 15, imagen: "./assets/img/golf.jpg" },
{ id: 1334, marca: "VW", nombre: "Fox", precio: 4300000, stock: 20, imagen: "./assets/img/fox.jpg"},
{ id: 1335, marca: "FIAT", nombre: "Mobi", precio: 5300000, stock: 28, imagen: "./assets/img/mobi.jpg"}]