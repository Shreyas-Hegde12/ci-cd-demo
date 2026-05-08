const request = require("supertest");

const app = require("../server");

describe("Node.js CI/CD Demo App", () => {

  test("GET / should return app information", async () => {

    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);

    expect(response.body.message).toBe("CI/CD Pipeline Working");

    expect(response.body.status).toBe("success");
  });

  test("GET /health should return UP status", async () => {

    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body.status).toBe("UP");
  });

  test("GET /api/users should return users array", async () => {

    const response = await request(app).get("/api/users");

    expect(response.statusCode).toBe(200);

    expect(Array.isArray(response.body)).toBe(true);

    expect(response.body.length).toBeGreaterThan(0);
  });
});