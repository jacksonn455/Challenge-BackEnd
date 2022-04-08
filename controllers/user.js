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

exports.postUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ error: 'Dados insuficientes!' });

    try {
        if (await users.findOne({ email })) return res.status(400).send({ error: 'Usuário já registrado!'});

        const user = await users.create(req.body);
        user.password = undefined;

        return res.status(201).send({user, token: createUserToken(user.id)});
    }
    catch (err) {
        return res.status(500).send({ error: 'Erro ao buscar usuário!' });
    }
};

exports.putUser = async (req, res) => {
  const { _id } = req.params; 
  const { email } = req.body 


  const userIndex = users.findIndex(user => user._id === _id);

  if(userIndex < 0){
      return response.status(400).json({ error: 'Erro ao buscar usuário!'});
  }

  const user = {
      id,
      email
  };

  users[userIndex] = user;
  return res.json(user);
};