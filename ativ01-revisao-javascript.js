/*

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

estadosNe.push(estado1)

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/

//Alagoas;AL;27848.14;3322820
let estado2 = {
    nome: 'Alagoas',
    sigla: 'AL',
    area:27848.14,
    populacao: 3322820
}
estadosNe.push(estado2)

//Rio Grande do Norte;RN;52811.05;3479010
let estado3 = {
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    area: 52811.05,
    populacao:3479010  
}
estadosNe.push(estado3)

// Paraíba;PB;56469.78;3996496
let estado4 = {
    nome: 'Paraiba',
    sigla:'PB',
    area:56469.78,
    populacao:3996496 
}
estadosNe.push(estado4)

//Pernambuco;PE;98148.32;9496294
let estado5 = {
    nome:'Pernambuco',
    sigla: 'PE',
    area:98148.32,
    populacao:9496294
}
estadosNe.push(estado5)

//Ceará;CE;148920.47;9075649
let estado6 = {
    nome: 'Ceará',
    sigla: 'CE',
    area: 148920.47,
    populacao: 9075649
}
estadosNe.push(estado6)

//Piauí;PI;251577.74;3264531
let estado7 = {
    nome:'Piauí',
    sigla:'PI',
    area: 251577.74,
    populacao:3264531
}
estadosNe.push(estado7)

//Maranhão;MA;331937.45;7035055
let estado8 = {
    nome:'Maranhão',
    sigla:'MA',
    area: 331937.45,
    populacao:7035055 
}
estadosNe.push(estado8)

// Bahia;BA;564733.18;14812617
let estado9 = {
    nome:'Bahia',
    sigla:'BA',
    area:564733.18,
    populacao:14812617
}
estadosNe.push(estado9)

console.log(estadosNe)

/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/

let demo = (area, populacao) => populacao/area

console.log('*******************************************')

/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/

for (let i = 0; i < estadosNe.length; i++) {
    let densidade = demo(estadosNe[i].area, estadosNe[i].populacao)
    estadosNe[i][`densidade demográfica`] = densidade
    delete estadosNe[i].sigla
}

console.log(estadosNe)

/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/

let exibir = propriedades => {
    for (let prop in propriedades) {
        console.log(`${prop}: ${propriedades[prop]}`)

    }
}

/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.

*/
for (let estado of estadosNe) {
    exibir(estado)
    console.log('#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#_#')
}
console.log('*****************************************************************')


/*   6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/

let estados =[]

estados.push(estado1)
estados.unshift(estado2)
estados.splice(1, 0, estado3)
estados.splice(1, 0, estado4)
estados.splice(2, 0, estado5)
estados.splice(1, 0, estado6)
estados.splice(4, 0, estado7)
estados.splice(2, 0, estado8)
estados.splice(1, 0, estado9)

console.log(estados)
