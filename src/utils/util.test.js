import { classNames } from "./util"; // Importa la función classNames

describe("classNames function", () => {
  test("Should return '' when not pass arguments", () => {
    const result = classNames();
    expect(result).toBe("");
  });

  test("Should return a string with the provided classes.", () => {
    const result = classNames("class1", "class2", "class3");
    expect(result).toBe("class1 class2 class3");
  });

  test("Should omit falsy classes", () => {
    const result = classNames(
      "class1",
      "",
      "class2",
      undefined,
      "class3",
      null
    );
    expect(result).toBe("class1 class2 class3");
  });
});
