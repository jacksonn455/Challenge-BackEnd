const supertest = require('supertest');
const request = supertest('http://localhost:7001');

test(`Subindo servidor em http://localhost:7001`, () => {
  return request.get("/").set('auth', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTNhMjA3ZjQ1N2Y1NDQ4NDRkN2UwOSIsImlhdCI6MTY0OTY0ODEzNSwiZXhwIjoxNjUwMjUyOTM1fQ.zE_BwxrX8LZZ4pqRNdV1_YrMl4DWauY40FcnskWzWZY`)
  .then((res) => {
    expect(res.status).toBe(200)
  });
});
