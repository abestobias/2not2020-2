let vetor1 = []         // "forma moderna"
let vetor2 = Array()    // forma 'tradicional'

// Criação de vetores com valores iniciais
let vetor3 = [2,4,6,8,10]
let vetor4 = Array('vaca','cachorro','gato','papagaio')

// Inserção de novos valores dentro de um vetor

// Forma 1 : push() - adiciona novos elementos ao final do vetor
vetor1.push('laranja')
vetor1.push('limão')

console.log(vetor1)

// Forma 2 unshift()

vetor1.unshift('maça')
console.log(vetor1)

vetor1.unshift('abacaxi')
console.log(vetor1)

// forma 3 : splice() 2 - adiciona na posição 2 / 0 - não retira ninguem / e escreve morango

vetor1.splice(2,0,'morango')
console.log(vetor1)


vetor1.splice(1,0,'jaca')
console.log(vetor1)

//Remoção de elementos do vetor 

// Forma 1: POP() retira o ultimo elemento do vetor 
let x1 = vetor1.pop()
console.log(vetor1,x1)

// Forma 2 : shift() retira o primeiro elemento 
let x2 = vetor1.shift()
console.log(vetor1, x2)

// Forma 3 : splice() retira tambem elementos no meio do vetor
//1º: primeiro parametropara a remoção 2º a quantidade de elementos a ser removido
let x3 = vetor1.splice(2,1)
console.log(vetor1,x3)

// O splice() também serve para fazer substituições 
vetor1.splice(1,1,'pera')
console.log(vetor1)

// Colocando mais alguns elementos no vetor
vetor1.push('amora','jabuticaba')
vetor1.push('pessego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

// Métodos de percursso de vetores 
//forma1 usando o for tradicional 
// O inicio da variavel é sempre na posição 0 e seu incremento // Deve ir até uma posição antes do seu número de elemntos (length)

for(let i=0; i< vetor1.length; i++){
    console.log(vetor1[i])
}

console.log('--------------------------------------------------')

// Forma 2 for ..of
// For..of serve para percorrer do primeiro ao ultimo ele mento de uma forma mais simples que o for tradicional 

for(let fruta of vetor1){
    console.log(fruta)
}

