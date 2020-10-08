const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("Get Endpoints", () => {
  test("Should get list of all products", async () => {
    const res = await request(app).get("/api/v1/products");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("products");
  });
});

describe("Get Endpoints", () => {
  test("Should get single product", async () => {
    const res = await request(app).get("/api/v1/products/1");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("product");
  });
});
