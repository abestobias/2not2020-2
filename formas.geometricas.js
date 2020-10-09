/*  
Área do retangulo : base x altura
Área do triangulo : base x altura /2
Área da Elipse : (base /2) x (altura/2) *pi
*/

//DADOS GEOMETRICOS

let retangulo ={
    base:2.5,
    altura:4.5, 
    tipo: 'R' // retengulo 
}
let triangulo = {
    base: 2.5,
    altura:4.5,
    tipo: 'T' // triangulo 
}

let Elipse ={
    base: 2.5,
    altura: 4.5,
    tipo:'E' // elipse
}

// Algoritimos
const area = forma =>{
    switch(forma.tipo){
        case'R':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura /2
        case 'E':
            return (forma.base/2) * (forma.altura/2) * Math.PI
        default:
            return nell // Passado um tipo de forma invalido     
    }
}

console.log(area(retangulo))
console.log(area(triangulo))
console.log(area(Elipse))