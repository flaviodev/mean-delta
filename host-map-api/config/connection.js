const db = require("./db");

function MongoDBConnection() {

    this.connect = connect;
    return this;
}

function connect() {

    console.log("Conectando MongoDB");
}

function getUrlConnection() {
    return "mongodb://" + db.mongouser + ":" + db.mongopass + "@ds155411.mlab.com:55411/mean-delta-fdsdev";
}

module.exports = MongoDBConnection(); // return instância
