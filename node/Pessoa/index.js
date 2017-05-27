function Pessoa() {
    this.nome = 'Átilla';

    this.getNome = function () {
        return this.nome;
    }
}

// o que estiver aqui é o que vai para o import
module.exports = Pessoa;