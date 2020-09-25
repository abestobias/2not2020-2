//recebe dois vetores JA ORDENADOS PREVIAMENTE e os mescla 
// em um unico vetor tbm ordenado

function mesclarVetores(vetEsq, vetDir) {
    let vetRes = [], posEsq = 0, posDir = 0, sobra

    while (posEsq < vetEsq.length && posDir < vetDir.length) {
        if (vetEsq[posEsq] < vetDir[posDir]) {
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else {// vetDir[posDir] < vetEsq[posEsq]
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    // slice(): retorna no subvetor a partir da posição especificada até o fim 

    // Sobra no vetor da esquerda 
    if (posEsq < posDir) sobra = vetEsq.slice(posEsq) //Sobra no vetor da esquerda
    // Sobra no vetor da direita 
    else sobra = vetDir.slice(posDir)

    console.log({ posEsq, posDir, sobra })
    // A sobra é acrescentada ao resultado final
    return vetRes.concat(sobra)
}
function mergeSort(vetor) {

    if (vetor.length > 1) {
        // encontra o meio do vetor
        let meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio) // a posição do meio não entra
        let vetDir = vetor.slice(meio)
        console.log({vetor, vetEsq, vetDir})
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)
        return mesclarVetores(vetEsq, vetDir)
    }
    return vetor
}
// Resultado esperado:[0,1,2,3,4,5,6,7,8,9]
//console.log(mesclarVetores([0, 4, 7, 8, 9], [1, 2, 3, 5, 6]))

console.log(mergeSort([33,98,77,49,2,26,93,51,14,64]))