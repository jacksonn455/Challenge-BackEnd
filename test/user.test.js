const supertest = require('supertest');
const request = supertest('http://localhost:7001');

test(`Deve listar todos usuários`, () => {
  return request.get("/users").set('auth', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTNhMjA3ZjQ1N2Y1NDQ4NDRkN2UwOSIsImlhdCI6MTY0OTY0ODEzNSwiZXhwIjoxNjUwMjUyOTM1fQ.zE_BwxrX8LZZ4pqRNdV1_YrMl4DWauY40FcnskWzWZY`)
  .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body[0]).toHaveProperty('email');
        expect(res.body[0].token).not.toBeNull();
        expect(res.body[0].email).not.toBeNull();
        expect(res.body[0].password).not.toBeNull();
        expect(res.body.length).toBeGreaterThan(0);
    })});

    test(`Deve inserir novos usuários`, () => {
        const email = `${Date.now()}@email.com`;
        return request.post("/users/create")
        .send({email, password: "123456"})
          .then((res) => {
              expect(res.status).toBe(201);
          })});