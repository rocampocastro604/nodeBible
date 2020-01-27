//Teoria de Funciones 
//Las funciones por defecto retornan UNDEFINED

const saludo = function(name) {
    console.log(`Hola ${name}`)
};
saludo("Pedro");

//Funciones Flecha
const saludoFlecha = name => console.log(`Hola ${name}`);
saludoFlecha("Juan");