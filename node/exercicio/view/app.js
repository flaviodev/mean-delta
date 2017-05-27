
const Carro = require('../model/Carro');
const CarroController = require('../controller/CarroController');

let carro = new Carro();
let carroController = new CarroController();

carroController.consultar(carro);
carroController.incluir(carro);
carroController.alterar(carro);
carroController.excluir(carro);

