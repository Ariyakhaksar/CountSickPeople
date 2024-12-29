import OptimizeSickCount from "../components/OptimizeSickCount";

describe("OptimizeSickCount", () => {
  it("should return correct sick counts for given temperature tolerances and daily temperatures", () => {
    const Cip = [37, 39, 40, 42, 45]; // Temperature tolerances
    const D = [38, 40, 43]; // Daily temperatures

    const result = OptimizeSickCount(Cip, D);

    expect(result).toEqual([1, 2, 4]);
  });

  it("should handle cases where no one is sick", () => {
    const Cip = [37, 39, 40, 42, 45];
    const D = [30, 35];

    const result = OptimizeSickCount(Cip, D);

    expect(result).toEqual([0, 0]);
  });

  it("should handle cases where everyone is sick", () => {
    const Cip = [37, 39, 40, 42, 45];
    const D = [50, 55];

    const result = OptimizeSickCount(Cip, D);

    expect(result).toEqual([5, 5]);
  });

  it("should handle edge cases with empty inputs", () => {
    const Cip: number[] = [];
    const D: number[] = [];

    const result = OptimizeSickCount(Cip, D);

    expect(result).toEqual([]);
  });

  it("should handle cases where temperatures match exact tolerances", () => {
    const Cip = [37, 39, 40, 42, 45];
    const D = [37, 39, 45];

    const result = OptimizeSickCount(Cip, D);

    expect(result).toEqual([0, 1, 4]);
  });

  it("should handle large inputs efficiently", () => {
    const Cip = Array.from({ length: 100000 }, (_, i) => i + 1);
    const D = [50000, 100000, 150000];

    const result = OptimizeSickCount(Cip, D);

    expect(result).toEqual([49999, 99999, 100000]);
  });
});
