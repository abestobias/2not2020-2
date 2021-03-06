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

console.log('--------------------------------------------')
// Situação alternativa 2 : Função com 1 + argumentos

//Função tradicional com 1+ argumentos

let imc = function(peso, altura){
    return peso/(altura**2)
}

//Arrow function com 1+ argumentos
//Os parenteses dos argumentos são obrigatórios quando o numero de argumentos >1

let imc2 = (peso, altura) =>peso/(altura**2) 

console.log(imc(87,1.78))
console.log(imc2(87, 1.78))

// Conclusão: os parenteses só podem ser omitidos da lista de argumentos 
// de uma arrow function quando ha um e apenas 1 argumento

// Situação alternativa 3 : funções com mais de uma linha no corpo

// Função tradicional
//5! = 5 * 4 * 3 * 2 * 1 (120)
let fatorial = function(n){
    let res = 1
    for (let i=n; i > 1; i--){
        res *=i
    }
    return res
}

// Arrow Function com corpo maior que uma linha
// Não há como fazer otimização quanto ao corpo da função 

let fatorial2 = n => {
    let res = 1
    for (let i = n; i > 1; i--){
        res *= i
    }
    return res
}

console.log('===========================================')
console.log(fatorial(5))
console.log(fatorial2(5))