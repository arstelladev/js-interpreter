
import { JSInterpreter } from "../src/js-evaluate"

describe("A suite", function () {
  let counter = 0;
  beforeEach(function () {
    //;
  });
  afterEach(function () {
    counter += 1;
  });
  beforeAll(function () {
    //;
  });
  afterAll(function () {
    counter += 1;
  });
  it("Test 1", function () {
    const expr = new JSInterpreter(
      "(tags.car.color)=='blue' && tags.owner.name == 'John'"
    );
    interp = expr.evaluate({
      tags: { car: { color: "blue" }, owner: { name: "John" } },
    });
    expect(interp).toBe(true);
  });
});
