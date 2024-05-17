import CalculateArea from "../CalculateArea";
describe("CalculateArea", () => {
  test("Total area should be calculated correctly", () => {
    const totalArea = new CalculateArea();
    totalArea.addWall(25, 1);
    totalArea.addObstacles(1, 1);
    const wallArea = totalArea.calculateTotalWallArea();
    const obstacleArea = totalArea.calculateTotalObstacleArea();
    const paintableArea = totalArea.calculateTotalAreaPaintable();
    expect(wallArea).toBe(25);
    expect(obstacleArea).toBe(1);
    expect(paintableArea).toBe(24);
  });
});
