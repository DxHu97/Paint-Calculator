//ask for how many walls, call the user input that many times
import CalculateArea from "./CalculateArea";

const areaTotal = new CalculateArea();
areaTotal.addWall(5,10)
areaTotal.addWall(15,1)
console.log(areaTotal.walls)
const area = areaTotal.calculateTotalWallArea();
console.log(area)
areaTotal.addObstacles(1,20);
areaTotal.addObstacles(5,20);
const oArea = areaTotal.calculateTotalObstacleArea();
console.log(oArea);
const totalArea = areaTotal.calculateTotalAreaPaintable();
console.log(totalArea);

