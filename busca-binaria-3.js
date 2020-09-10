// Pré requisito para a busca binaria: o conjunto de dados 
// PRECISA estar ordenado pelo critério de busca 

let comp = 0
// Implementação Recursiva
// Uma função a si mesma com pelo menos um de seus parametros com valor alterado 
// toda função recursiva precisa de uma condição de saida, isto é, uma posibilidade 
// de termino que não envolve uma chamada a ela mesma
function buscaBinaria(lista, valorBusca, fnComp, inicio =0, fim = lista.length -1) {
    //let inicio = 0
    //let fim = lista.length - 1

    if (fim >= inicio) {
        // Math.floor tira as casas decimais de um numero 
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        // Verifica se o valor na posição média é o valor de busca
        if (res == 0) {
            comp++
            return meio      // condição de saída
        }
        else if (res < 0) {
            comp += 2
            //fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
        }
        else { // res > 0
            comp += 2
            //inicio = meio + 1
            return buscaBinaria(lista, valorBusca, fnComp, meio + 1, fim)
        }
    }
    //condição de saida
    return -1 // valor não encontrado
}

function comparaNome(obj, valorBusca) {
    if (valorBusca === obj.first_name) return 0
    // Numero negativo para indicar que o primeiro < segundo
    else if (valorBusca < obj.first_name) return -1
    // Um número positivo para indicar que o primeiro > segundo
    else return 1 // valorBusca > obj.first_name 
}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

console.log(buscaBinaria(nums, 22, (elPos, busca) => {
    if (busca === elPos) return 0
    else if (busca < elPos) return -1
    else return 1
}, 0, 12))

//terminar a execusão sem passar pelas linhas 
//process.exit(0) // 0 = sem erros

let listaNomes = require('./dados/lista-nomes')

console.time('ENEDINO')
console.log(buscaBinaria(listaNomes, 'ENEDINO', comparaNome))
console.timeEnd('ENEDINO')
console.log('Comparações:', comp)