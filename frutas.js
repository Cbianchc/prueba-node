const frutas = ["banana", "Manzana", "banana", "pera", "durazno"];
const dinero = 1000; 

module.exports = {
    frutas: frutas, //primero el nombre de la propiedad y segundo el valor
    dinero //si ambas son iguales podes poner una sola
}
//module.exports = frutas; si se eporta una sola cosa
//asi se exporta el modulo, para que lo tome app.js

//module.exports = dinero -- no se puede hacer asi
//tener que hacer un objeto para ambas cosas
