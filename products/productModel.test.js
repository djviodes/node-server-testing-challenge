const { default: expectCt } = require("helmet/dist/middlewares/expect-ct");
const Product = require("./productModel");

const router = require("./productRouter");

describe("productRouter.js", () => {
  it("is testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
