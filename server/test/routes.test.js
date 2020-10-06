const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe('Get Endpoints', () => {
  it('Should get list of all products', async () => {
    const res = await request(app).get('/api/products')
    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('message')
  })
})