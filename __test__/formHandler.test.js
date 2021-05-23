import { handleSubmit } from "../src/client/js/formHandler";

describe("Test exported handleSubmit function", () => {
  test("Test handleSubmit() function definition", () => {
    expect(handleSubmit).toBeDefined();
  });
});
