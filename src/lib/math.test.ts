import { describe, expect, it } from "vitest";
import { add } from "./math";

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });
});
