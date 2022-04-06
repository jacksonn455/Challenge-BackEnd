const mongoose = require("mongoose");
const config = require("../config/config");
const CON = config.bd_string;

var connMongo = mongoose
  .connect(CON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Conexão com MongoDB realizada com sucesso");
  })
  .catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso");
    console.log(erro);
  });

module.exports = connMongo;
