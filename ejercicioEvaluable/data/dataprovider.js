// Importa el archivo `juegos.json` que contiene un array de objetos con los datos de cada juego
var juegos = require('./juegos.json');

// Función que devuelve todos los juegos
function getJuegos(){
    return juegos; // Retorna el array completo de juegos
}

// Función que devuelve un juego específico basado en el `id` proporcionado
function getItemJuegos(id){
    // Usa `filter` para encontrar el juego que tenga un `id` igual al proporcionado
    const item = juegos.filter((a) => { return (a.id == id); });
    return item[0]; // Retorna el primer elemento del resultado (ya que el `id` debería ser único)
}

// Exporta las funciones para que puedan ser utilizadas en otros módulos
module.exports = {
    getJuegos,
    getItemJuegos
};
