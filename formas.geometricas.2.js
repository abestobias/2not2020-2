class FormaGeometrica {
    constructor(base = 1, altura = 1, tipo = 'R') {
        if (isNaN(base) || base <= 0) {
            throw new Error(`Valor da base: inválido.`)
        }
        if(isNaN(altura) || altura <= 0){
            throw new Error (`Valor da altura invalido`)
        }
        if (['R', 'T', 'E'].indexOf(tipo)<0)
            throw new Error(`O tipo é invalido`)

        this.base = base
        this.altura = altura
        this.tipo = tipo
    }
    
    
    // Método de uma classe
    area() {
        switch (this.tipo) {
            case 'R':
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2
            case 'E':
                return (this.base / 2) * (this.altura / 2) * Math.PI
            default: // tipo invalido 
                return null
        }
    }

}

const retangulo = new FormaGeometrica(2, 6.5, 'R')
const triangulo = new FormaGeometrica(4.2, 6.5, 'E')
const elipse = new FormaGeometrica(4, 6.5, 'E')
//const Tchonga = new FormaGeometrica(-5, caco, "y")

console.log(retangulo)
console.log(triangulo)
console.log(elipse)

console.log(retangulo.area())
console.log(triangulo.area())
console.log(elipse.area())
//console.log(Tchonga.area())