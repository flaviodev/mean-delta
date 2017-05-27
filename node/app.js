//console.log("Hello World!");

let Pessoa = require('./Pessoa/index');
let pessoa = new Pessoa();

let moment = require('moment');

let mydate = new moment();

console.log(mydate);

console.log(pessoa.getNome());

let itens = [
   'Átilla',
   'Alunos',
   'Node',
   'Angular'
];

itens.forEach(
   (item) => {
      console.log(item);
   }
);
