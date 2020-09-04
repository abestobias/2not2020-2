// Pré requisito para a busca binaria: o conjunto de dados 
// PRECISA estar ordenado pelo critério de busca 

let comp = 0 
function buscaBinaria(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length - 1

    while (fim >= inicio) {
        // Math.floor tira as casas decimais de um numero 
        let meio = Math.floor((fim + inicio) / 2)

        // Verifica se o valor na posição média é o valor de busca
        if (lista[meio] === valorBusca){ 
            comp++
            return meio
        }
        else if (valorBusca < lista[meio]) {
            comp +=2
            fim = meio - 1
        }
        else { // valorBusca > lista [meio]
            comp += 2
            inicio = meio + 1
        }
    }
    return -1 // valor não encontrado
}

let vetorNomes = require('./dados/vetor-nomes')

comp = 0 
console.time('FAUSTO')
console.log(buscaBinaria(vetorNomes,'FAUSTO'))
console.timeEnd('FAUSTO')
console.log('Comparações:',comp)

console.log('*************************************')

comp = 0 
console.time('TOBIAS')
console.log(buscaBinaria(vetorNomes,'TOBIAS'))
console.timeEnd('TOBIAS')
console.log('Comparações:',comp)

console.log('*************************************')

comp = 0 
console.time('HELOISE')
console.log(buscaBinaria(vetorNomes,'HELOISE'))
console.timeEnd('HELOISE')
console.log('Comparações:',comp)

console.log('*************************************')

comp = 0 
console.time('ZULU')
console.log(buscaBinaria(vetorNomes,'ZULU'))
console.timeEnd('ZULU')
console.log('Comparações:',comp)

