// Expressão Tradicional 

// Caracteristicas dessa função
// Um unico argumento
// Seu corpo tem apenas uma linha de código com return

let quadrado = function(n){
    return n *n
}

console.log('-----------------------------------------')

// A função tradicional acima, pode ser transformada em uma ARROW FUNCTION
// As palavras function, return, aspas e chaves são omitidos

let quadrado2 = n=>n*n

console.log(quadrado(6))
console.log(quadrado2(5))

console.log('------------------------------------------')

// Situação alternativa 1 : função sem argumento
// Retorna um numero aleatorio entre 0-99

let aleatorio = function(){
    //Math.random() -> gera um numero aleatorio entre 0-1 (fracionario)
    //Math.floor -> "corta fora" as casas decimais de um numero
    
    return Math.floor(Math.random()*1000)
}
console.log(aleatorio())

console.log('--------------------------------------------')

// Arrow function com 0 argumento
// Os parenteses vazios marcam o lugar do argumento (obrigatorio)
let aleatorio2 = () =>Math.floor(Math.random() *1000)
console.log(aleatorio2())



