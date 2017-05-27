//console.log("Hello World!");

let Pessoa = require('./pessoa');

let pessoa = new Pessoa();


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
