const { DB_ADDR, DB_USER, DB_PASS, NODE_ENV, JWT_SECRET, JWT_EXPIRES_IN} = process.env;

const config = () => {
    switch (NODE_ENV) {
        case 'dev':
        return {
            bd_string: `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_ADDR}.czbld.mongodb.net/test`,
            jwt_pass: JWT_SECRET,
            jwt_expires_in: JWT_EXPIRES_IN
        }

        case 'hml':
        return {    
            bd_string: `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_ADDR}.czbld.mongodb.net/test`,
            jwt_pass: JWT_SECRET,
            jwt_expires_in: JWT_EXPIRES_IN
        }

        case 'prod':
        return {
            bd_string: `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_ADDR}.czbld.mongodb.net/test`,
            jwt_pass: JWT_SECRET,
            jwt_expires_in: JWT_EXPIRES_IN
        }
    }
}

console.log(`Iniciando a API em ambiente ${NODE_ENV.toUpperCase()}`);

module.exports = config();