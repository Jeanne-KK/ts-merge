import { describe, it, expect } from "vitest";
import { merge } from "./merge";

describe("math", () => {
  it("กรณีปกตื", () => {
    const collection_1 = [1, 2, 3]
    const collection_2 = [6, 5, 4]
    const collection_3 = [7, 8, 9]
    const result = merge(collection_1, collection_2, collection_3)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });

  it("กรณีแต่ละ collection มีข้อมูลไม่เท่ากัน", () => {
    const collection_1 = [1, 2]
    const collection_2 = [6, 5, 4]
    const collection_3 = [3, 7, 8, 9]
    const result = merge(collection_1, collection_2, collection_3)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });

  it("กรณีแต่ละ collection 1 ไม่มีข้อมูล", () => {
    const collection_1: number[] = []
    const collection_2 = [6, 5, 4]
    const collection_3 = [7, 8, 9]
    const result = merge(collection_1, collection_2, collection_3)
    expect(result).toEqual([4, 5, 6, 7, 8, 9])
  });

  it("กรณีมีตัวเลขซ้ำ", () => {
    const collection_1 = [1, 2, 3]
    const collection_2 = [6, 5, 2]
    const collection_3 = [2, 8, 9]
    const result = merge(collection_1, collection_2, collection_3)
    expect(result).toEqual([1, 2, 2, 2, 3, 5, 6, 8, 9])
  });
});