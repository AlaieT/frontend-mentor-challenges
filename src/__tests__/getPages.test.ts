import getPages from "../utils/getPages";

describe("getPages", () => {
  it("should return correct pages, when last less then 8", () => {
    expect(getPages(1, 7)).toEqual(
      Array(7)
        .fill(0)
        .map((_, idx) => idx + 1)
    );
  });

  it("should return correct pages, when last more then 7 and current is less then 5", () => {
    expect(getPages(4, 8)).toEqual([1, 2, 3, 4, 5, 0, 8]);
  });

  it("should return correct pages, when last more then 7 and current is more then 4", () => {
    expect(getPages(5, 8)).toEqual([1, 0, 4, 5, 6, 7, 8]);
    expect(getPages(8, 20)).toEqual([1, 0, 7, 8, 9, 0, 20]);
    expect(getPages(29, 33)).toEqual([1, 0, 28, 29, 30, 0, 33]);
  });
});
