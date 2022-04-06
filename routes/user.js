const express = require("express");
const router = express.Router();
const users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const createUserToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

router.get("/", async (req, res) => {
    try {
        const user = await users.find({});
        res.send(user);
    } catch (error) {
        res.status(500).send({ error: "Erro ao consultar usuários!" });;
    }
});

router.post('/create', async (req, res) => {
  const { email, password } = req.body;
 
  if (!email || !password) return res.status(400).send({ error: "Dados insuficientes" });

  try{
    if(await users.findOne({ email })) return res.status(500).send({ error: "Usuário já cadastrado" });

    const user = await users.create(req.body);
    user.password = undefined;
    return res.status(201).send({ user, token: createUserToken(user.id) }); //criando o token
  } catch (error) {
    res.status(500).send({ error: "Erro ao criar usuário!" });
  }
})


router.post("/auth", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send({ error: "Dados insuficientes" });

  try {
    const user = await users.findOne({ email }).select("+password");
    if (!user) return res.status(400).send({ error: "Usuário não encontrado" });

    const passOk = await bcrypt.compare(password, user.password);
    if (!passOk) return res.status(401).send({ error: "Erro ao autenticar usuário" });

    user.password = undefined;
    return res.send(({ user, token: createUserToken(user.id) }));
  } catch (error) { 
    res.status(500).send({ error: "Erro ao buscar usuário!" });
  }
});

module.exports = router;
