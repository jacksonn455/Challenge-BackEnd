const users = require("../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const createUserToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

exports.getUser = async (req, res) => {
  try {
    const user = await users.find({});
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: "Erro ao consultar usuários!" });
  }
};

exports.getUserById = async (req, res) => {
  users.findOne({ _id: req.params.id }, function (err, doc) {
    if (err) {
      res.status(500).json({ error: err.message });
      res.end();
      return;
    }
    res.json(doc);
    res.end();
  });
}

exports.postUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ error: 'Dados insuficientes!' });

    try {
        if (await users.findOne({ email })) return res.status(400).send({ error: 'Dados divergentes!'});

        const user = await users.create(req.body);
        user.password = undefined;

        return res.status(201).send({user, token: createUserToken(user.id)});
    }
    catch (err) {
        return res.status(500).send({ error: 'Erro ao buscar usuário!' });
    }
};

exports.putUser = async (req, res, next) => {
  users.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
      if (err) {
          res.status(500).json({ error: err.message });
          res.end();
          return;
      }
      res.json(req.body);
      res.end();
  });
};

exports.deleteUser = async (req, res, next) => {
  users.findOneAndDelete({ _id: req.params.id }, function (err, doc) {
      if (err) {
          res.status(500).json({ error: err.message });
          res.end();
          return;
      }
      res.json(doc);
      res.end();
  });
};
