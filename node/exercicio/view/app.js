
let Carro = require('../model/Carro');
let carro = new Carro();

let CarroController = require('../controller/CarroController');
let carroController = new CarroController();

carroController.consultar(carro);
carroController.incluir(carro);
carroController.alterar(carro);
carroController.excluir(carro);

