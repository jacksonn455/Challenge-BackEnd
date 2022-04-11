const supertest = require('supertest');
const request = supertest('http://localhost:7001');

test(`Deve listar todos produtos`, () => {
  return request.get("/products").set('auth', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTNhMjA3ZjQ1N2Y1NDQ4NDRkN2UwOSIsImlhdCI6MTY0OTY0ODEzNSwiZXhwIjoxNjUwMjUyOTM1fQ.zE_BwxrX8LZZ4pqRNdV1_YrMl4DWauY40FcnskWzWZY`)
    .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body[0]).toHaveProperty('title');
        //expect(res.body[0]).toHaveProperty('description');
        //expect(res.body[0]).toHaveProperty('category');
        expect(res.body[0]).toHaveProperty('value');
        expect(res.body[0].value).toBeGreaterThan(0);
        expect(res.body[0].title).not.toBeNull();
        //expect(res.body[0].description).not.toBeNull();
       // expect(res.body[0].category).not.toBeNull();
        expect(res.body[0].value).not.toBeNull();
        expect(res.body.length).toBeGreaterThan(0);
    })});

    test(`Deve inserir novos produtos`, () => {
        return request.post("/products/create").set('auth', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTNhMjA3ZjQ1N2Y1NDQ4NDRkN2UwOSIsImlhdCI6MTY0OTY0ODEzNSwiZXhwIjoxNjUwMjUyOTM1fQ.zE_BwxrX8LZZ4pqRNdV1_YrMl4DWauY40FcnskWzWZY`)
        .send({title: `Camisa estampada ${Date.now()}`, description: "Bordada", category:"Camisa masculina", value: 89})
          .then((res) => {
          expect(res.status).toBe(201);
          })});