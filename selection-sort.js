function selectionSort(vetor){
    let pasadas = 0 , comparacoes = 0, totalTrocas = 0


// Função que encontra o menor numero em um segmento de vetor ( subvetor)
// A função deverá retornar A POSICAO do menor valor encontrado 
function encontrarMenor(vetor, inicio){
    let posMenor = inicio
    for(let i = inicio + 1; i<vetor.length; i++){
        if(vetor[i] < vetor[posMenor])posMenor = i
        comparacoes ++
    }
    return posMenor
}

    // O for externo vai até a penultima posição
    for(i=0; i <vetor.length -1 ;i++){
        pasadas ++
        // Busca-se o menorvalor no restante do vetor 
        posMenor = encontrarMenor(vetor, i +1)

        // Caso o valor encontrado seja menor que o valor atual,
        //procede-se a troca
        comparacoes ++
        if(vetor[posMenor] < vetor[i]){
            // Permuta de valores usando a desetruturação 
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas ++
        }
    }
    console.log({pasadas, comparacoes, totalTrocas})
}

/*const nums =[56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]

console.time('nums')
selectionSort(nums)
console.timeEnd('nums')

console.log(nums)

*/

let nomes = require('./dados/100-mil-nomes')

 console.time('Teste Nomes')
 selectionSort(nomes)
 console.timeEnd('Teste Nomes')

 console.log(nomes)

 console.log('-------------------------------------------------')

