let passadas = 0, comparacoes = 0, trocas = 0
/* fnComp compara dois elementos do vetor
recebe dois valores do vetor 
Retorn:
    - true , se o primeiro valor for maior do que o segundo 
    - false, caso contrario 
*/

function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length - 1) {
    //console.log({vetor, inicio, fim})
    if (fim > inicio) { // garante que haja, pelo menos, dois elementos para ordenar 
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim
        for (let i = inicio; i < fim; i++) {
            comparacoes++
            //if (vetor[i] < vetor[posPivot]) {
            if (fnComp(vetor[posPivot], vetor[i])) { 
            posDiv++
            [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
            trocas++
        }
    }

    // Ultimo incremento de posDiv, apos o Loop terminar
    posDiv++
    [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
    quickSort(vetor, fnComp, inicio, posDiv - 1) // lado esquerdo 
    quickSort(vetor, fnComp, posDiv + 1, fim)  // lado direito
}
}

/*let nums = [54, 81, 72, 36, 9, 90, 63, 27, 18, 45]
quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})*/

const candidatos = require('./dados/candidatos-2018')
console.time('teste candidatos')
//quickSort(candidatos, (a,b) =>a.NM_CANDIDATO > b.NM_CANDIDATO)

quickSort(candidatos, (a,b) => {
    // Ordenação considerando o primeiro NR_CANDIDATO e depois o NM_CANDIDATO
    if(a.NR_CANDIDATO == b.NR_CANDIDATO){
        if(a.NM_CANDIDATO > b.NM_CANDIDATO) return true
        else return false
    }
    else if(a.NR_CANDIDATO > b.NR_CANDIDATO) return true
    else return false
})


console.timeEnd('teste candidatos')
console.log(candidatos)
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
console.log({ passadas, comparacoes, trocas })