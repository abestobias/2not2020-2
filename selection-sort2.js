/* 
Função de comparação fnComp
- Recebe dois valores para a comparação 
- Retorno:
    -True se o primeiro for maior que o segundo
    -False caso contrario
*/

function selectionSort(vetor, fnComp) {
    let pasadas = 0, comparacoes = 0, totalTrocas = 0


    // Função que encontra o menor numero em um segmento de vetor ( subvetor)
    // A função deverá retornar A POSICAO do menor valor encontrado 
    function encontrarMenor(vetor, inicio) {
        let posMenor = inicio
        for (let i = inicio + 1; i < vetor.length; i++) {
            //if(vetor[i] < vetor[posMenor]) posMenor =i
            if (! fnComp(vetor[i],  vetor[posMenor])) posMenor = i
            comparacoes++
        }
        return posMenor
    }

    // O for externo vai até a penultima posição
    for (i = 0; i < vetor.length - 1; i++) {
        pasadas++
        // Busca-se o menorvalor no restante do vetor 
        posMenor = encontrarMenor(vetor, i + 1)

        // Caso o valor encontrado seja menor que o valor atual,
        //procede-se a troca
        comparacoes++
        //if (vetor[posMenor] < vetor[i]) {
        if (fnComp( vetor[i], vetor[posMenor])) { // ordem dos argumentos invertidos
            // Permuta de valores usando a desetruturação 
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({ pasadas, comparacoes, totalTrocas })
}



let candidatos = require('./dados/candidatos-2018')

console.time('Teste candidatos-2018')
selectionSort(candidatos, (x, y) => x.NM_CANDIDATO > y.NM_CANDIDATO)
console.timeEnd('Teste candidatos-2018')

// medindo a memoria utilizada pelo programa 

let memoria= process.memoryUsage().heapUsed /1024 /1024 
console.log(candidatos)
console.log(' Memoria utilizada (MB):', memoria)

