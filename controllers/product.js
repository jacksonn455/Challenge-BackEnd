const products = require("../models/product");

exports.getProduct = async (req, res) => {
  try {
    const product = await products.find({});

    res.send(product);
  } catch (error) {
    res.status(500).send({ error: "Erro ao consultar produto!" });
  }
};

exports.postProduct = async (req, res) => {
    const { title, description, category, value } = req.body;
    if ( !title || !description || !category || !value ) return res.status(400).send({ error: 'Dados insuficientes!' });

    try {
        if (await products.findOne({ title })) return res.status(400).send({ error: 'Produto já registrado!'});

        const product = await products.create(req.body);
        return res.status(201).send({product});
    }
    catch (err) {
        return res.status(500).send({ error: 'Erro ao buscar produto!' });
    }
};
