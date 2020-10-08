let passadas = 0, comparacoes = 0, trocas = 0
function quickSort(vetor, inicio = 0, fim = vetor.length - 1) {
    //console.log({vetor, inicio, fim})
    if (fim > inicio) {
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim
        for (let i = inicio; i < fim; i++) {
            comparacoes++
            if (vetor[i] < vetor[posPivot]) {
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }
        }

        // Ultimo incremento de posDiv, apos o Loop terminar
        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        quickSort(vetor, inicio, posDiv - 1) // lado esquerdo 
        quickSort(vetor, posDiv + 1, fim)  // lado direito
    }
}

/*let nums = [54, 81, 72, 36, 9, 90, 63, 27, 18, 45]
quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})*/

const nomes = require('./dados/100-mil-nomes')
console.time('teste nomes')
quickSort(nomes)
console.timeEnd('teste nomes')
console.log(nomes)
console.log('Memória usada (MB):', process.memoryUsage().heapUsed/1024/1024)
console.log({passadas, comparacoes, trocas})