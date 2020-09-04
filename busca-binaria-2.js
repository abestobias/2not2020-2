// Pré requisito para a busca binaria: o conjunto de dados 
// PRECISA estar ordenado pelo critério de busca 

let comp = 0 
function buscaBinaria(lista, valorBusca, fnComp) {
    let inicio = 0
    let fim = lista.length - 1

    while (fim >= inicio) {
        // Math.floor tira as casas decimais de um numero 
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        // Verifica se o valor na posição média é o valor de busca
        if (res == 0 ){
            comp++
            return meio
        }
        else if (res < 0 ) {
            comp +=2
            fim = meio - 1
        }
        else { // res > 0
            comp += 2
            inicio = meio + 1
        }
    }
    return -1 // valor não encontrado
}

function comparaNome(obj, valorBusca){
    if(valorBusca === obj.first_name) return 0 
    // Numero negativo para indicar que o primeiro < segundo
    else if(valorBusca<obj.first_name) return -1  
    // Um número positivo para indicar que o primeiro > segundo
    else return 1 // valorBusca > obj.first_name 
}

let listaNomes = require('./dados/lista-nomes')

console.time('ENEDINO')
console.log(buscaBinaria(listaNomes,'ENEDINO', comparaNome))
console.timeEnd('ENEDINO')
console.log('Comparações:',comp)