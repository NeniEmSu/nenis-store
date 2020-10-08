const request = require("supertest");
const app = require("../app");

const testObj = {
  title: "test title",
  image: "https://miro.medium.com/max/600/1*i37IyHf6vnhqWIA9osxU3w.png",
  description: "This will be added from my test.",
  price: 1.99,
  quantity: 1,
};

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

  test("Should get single product", async () => {
    const res = await request(app).get("/api/v1/products/1");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("product");
  });

  test("Add a new product and get it's id", async (done) => {
    const res = await request(app)
      .post("/api/v1/products")
      .send(testObj)
      .set("Accept", "application/json");
    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(typeof res.body.id).toBe("number");
    done();
  });
});

afterAll((done) => {
  done();
});
