/* 
 algoritimo de ordenação Bubble Sort

 Estratégia :
 Percorrer o vetor de Dados , comparando elementos adjacentes 
 e promovendo a troca quando o sucessor for maior que o antecessor .

 O percusor no vetor é feito tantas vezes quanto necessário, até 
 que nenhuma troca seja efetuado no percurso 
 */

 function bubbleSort(vetor){
    let passadas = 0, comparacoes = 0, totalTrocas = 0 
    let trocas
     do{
        passadas ++ 
        trocas=0

         // Percursso do vetor até a penultima posição (length-2)
         for(let i = 0; i<= vetor.length - 2; i++){
             comparacoes ++
             //Comparando o elemento da posição atual (i)
             // com o elemento da frente (i+1)
             if(vetor[i] > vetor[i +1]){
                 //A troca vai aqui 
                 [vetor[i], vetor[i+1]] = [vetor[i + 1], vetor[i]]
                 trocas++
                 totalTrocas++
             }
         }
     }while(trocas>0)
     //exibindo as estatisticas
     console.log({passadas, comparacoes, totalTrocas})
 }

 let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 89]

 console.time('Teste 1')
 bubbleSort(nums)
 console.timeEnd('Teste 1')

 console.log(nums)

 console.log('-------------------------------------------------')

 /*
 let empresas = require('./dados/15-mil-empresas')

 console.time('Teste Empresas')
 bubbleSort(empresas)
 console.timeEnd('Teste Empresas')

 console.log(empresas)

 console.log('-------------------------------------------------')
 */

 let nomes = require('./dados/100-mil-nomes')

 console.time('Teste Nomes')
 bubbleSort(nomes)
 console.timeEnd('Teste Nomes')

 console.log(nomes)

 console.log('-------------------------------------------------')



