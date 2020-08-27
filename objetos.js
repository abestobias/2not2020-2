// Declaração de objetos vazio
let pessoa1 = {}                // Método moderno 
let pessoa2 = new Object()      // método tradicional 

//Declarando e inicializando já com propriedades
// - propiedades -> atributo + valor
let pessoa3 = {
    nome :'João das Couves',
    naturalidade: 'Franca/SP',
    "data de nascimento" : '1997-11-03',
    estudante: true
}

// Acessando uma propriedade de um objeto 
// Atributo é uma unica palavra -> sintaxe do ponto

console.log(pessoa3.nome)
console.log(pessoa3.estudante)

// Acessando uma propriedade composta por várias palavras
// Sintaxe do colchetes
console.log(pessoa3["data de nascimento"])
console.log(pessoa3['naturalidade'])

let atrib = 'nome'
console.log(pessoa3[atrib])

// Criando novas propriedades em um objeto
// Basta atribuir o valor a cada atributo
pessoa3.nacionalidade ='portuguesa'             //Única Palavra
pessoa3['registro de estrangeiro'] = 1234567789 // Várias palavras

console.log(pessoa3)

console.log('--------------------------------------------------')

// Eliminando uma propriedade
delete pessoa3.estudante
console.log(pessoa3)

// Como percorrer todas as propriedades de um objeto: for ... in
for(let prop in pessoa3){
    console.log(prop)
}

console.log('--------------------------------------------------')

// Listando atributo e valor de um objeto usando for..in
for(let atrib in pessoa3){
    console.log(`Atributo: ${atrib}; valor:${pessoa3[atrib]}`)
} 

