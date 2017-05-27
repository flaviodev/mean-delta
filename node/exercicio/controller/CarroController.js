
function CarroController() {

    this.consultar = function (carro) {
        console.log('Consultando carro: ' + carro.toString());
    }

    this.incluir = function (carro) {
        console.log('Incluindo carro: ' + carro.toString());
    }

    this.alterar = function (carro) {
        console.log('Alterando carro: ' + carro.toString());
    }

    this.excluir = function (carro) {
        console.log('Excluindo carro: ' + carro.toString());
    }
}

module.exports = CarroController;