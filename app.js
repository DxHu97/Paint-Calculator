//ask for how many walls, call the user input that many times
import CalculateArea from "./CalculateArea.js";
import CalculatePrice from "./CalculatePrice.js";

const areaTotal = new CalculateArea();
areaTotal.addWall(5,10)
areaTotal.addWall(15,1)
console.log(areaTotal.walls)
const area = areaTotal.calculateTotalWallArea();
console.log(area)
areaTotal.addObstacles(1,1);
areaTotal.addObstacles(1,1);
const oArea = areaTotal.calculateTotalObstacleArea();
console.log(oArea);
const totalArea = areaTotal.calculateTotalAreaPaintable();
console.log(totalArea);

const priceTotal = new CalculatePrice(50,0,10);
priceTotal.setArea(totalArea);
console.log("Area:", priceTotal.area)
priceTotal.amountOfBucketsNeeded();
const totalPrice = priceTotal.calculateTotalCost();
console.log(totalPrice)




