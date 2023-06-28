const mongoose = require("mongoose");

module.exports = () => {
  const contato = new mongoose.Schema({
    nome: String,
    email: String,
  });

  const usuario = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    contatos: [contato],
  });

  return mongoose.model("Usuario", usuario);
};
