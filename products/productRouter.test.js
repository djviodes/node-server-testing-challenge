const request = require("supertest");

const router = require("./productRouter");

describe("productRouter.js", () => {
  it("is testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
