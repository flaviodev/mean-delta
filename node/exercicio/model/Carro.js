function Carro() {
    this.modelo = 'Spin';
    this.marca = 'Chevrolet';
    this.serie = "LTZ";

    this.getModelo = function () {
        return this.modelo;
    }

    this.getMarca = function () {
        return this.marca;
    }

    this.getSerie = function () {
        return this.serie;
    }

    this.toString = function () {
        return this.marca + ' - ' + this.modelo + ' - ' +this.serie;
    }
}

module.exports = Carro;