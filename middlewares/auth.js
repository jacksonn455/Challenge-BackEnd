const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const auth = (req, res, next) => {
    const token_header = req.headers.auth;
    if(!token_header) return res.status(401).send({error: 'Token não enviado!'});

    jwt.verify(token_header, JWT_SECRET, (err, decoded) => {
        if(err) return res.status(401).send({error: 'Token inválido'});
        //res.locals.auth_data = decoded; //serve para pegar o id do usuário
        return next();
    });
}

module.exports = auth;