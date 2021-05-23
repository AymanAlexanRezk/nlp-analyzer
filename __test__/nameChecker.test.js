import { checkForName } from "../src/client/js/nameChecker";

describe("Test checkForName functionality", () => {
  test("Test checkForName() function definition", () => {
    expect(checkForName).toBeDefined();
  });
  test("Testing valid URL should return true", () => {
    expect(checkForName("http://example.com")).toBeTruthy();
  });

  test("Testing invalid URL should return false", () => {
    expect(checkForName("invalid URL")).toBeFalsy();
  });
});
