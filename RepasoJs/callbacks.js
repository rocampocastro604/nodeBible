// CallBacks
// Funciones anidadas en otras funciones  que usan los argumentos de la primera como parametros de la segunda
function calculate(number1, number2, operation){
    return operation(number1, number2);
} 

const add = function add(number1, number2){
    return number1 + number2;
}


const result = calculate(1, 10, add);
console.log(result)
