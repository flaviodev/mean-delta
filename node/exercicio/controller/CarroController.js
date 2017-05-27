function CarroController() {

    this.consultar = consultar;
    this.incluir = incluir;
    this.alterar = alterar;
    this.excluir = excluir;
}


function consultar(carro) {
    console.log('Consultando carro: ' + carro.toString());
}

function incluir(carro) {
    console.log('Incluindo carro: ' + carro.toString());
}

function alterar(carro) {
    console.log('Alterando carro: ' + carro.toString());
}

function excluir(carro) {
    console.log('Excluindo carro: ' + carro.toString());
}

module.exports = CarroController;