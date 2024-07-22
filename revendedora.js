const carros = []
const marcas = ["fiat", "volkswagen", "ford", "chevrolet", "renault"]

function criar (carro){
    if(marcas.includes(carro.marca)){
        carros.push(carro)
        console.log("carro criado")
    }else{
        console.log("maraca invalida")
    }
    
}

const listar = function() {
    
    carros.forEach(function(carro, indice){
        console.log(++indice)
    
    })
}
