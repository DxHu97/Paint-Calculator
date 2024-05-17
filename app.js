//ask for how many walls, call the user input that many times
import CalculateArea from "./CalculateArea.js";
import CalculatePrice from "./CalculatePrice.js";
import promptSync from 'prompt-sync';
import promptSyncHistory from 'prompt-sync-history';

const prompt = promptSync({ history: promptSyncHistory() });

function askQuestion(query) {
    return prompt(query);
}

const areaTotal = new CalculateArea();
/*areaTotal.addWall(5,10)
areaTotal.addWall(15,1)
console.log(areaTotal.walls)*/
const wallsCount = askQuestion("How many walls do you want to paint?")
for (let i = 0; i < wallsCount; i++){
    areaTotal.addWall(askQuestion("From left to right how long in feet"), askQuestion("From top to bottom how tall in feet"))
    console.log("Area array:", areaTotal.walls)
}
const obstacleCount = askQuestion("How many obstacles are there in the walls?")
for (let i = 0; i < obstacleCount; i++){
    areaTotal.addObstacles(askQuestion("From left to right how long are the obstacles in feet"), askQuestion("From top to bottom how tall are the obstacles in feet"))
    console.log("Obstacles array:", areaTotal.obstacles)
}
const area = areaTotal.calculateTotalWallArea();
console.log("Wall area:", area)
/*areaTotal.addObstacles(1,1);
areaTotal.addObstacles(1,1);
*/
const oArea = areaTotal.calculateTotalObstacleArea();
console.log("Obstacle area:", oArea);
const totalArea = areaTotal.calculateTotalAreaPaintable();
console.log("Total area paintable:", totalArea);

const priceTotal = new CalculatePrice(50,0,10);
priceTotal.setArea(totalArea);
priceTotal.amountOfBucketsNeeded();
const totalPrice = priceTotal.calculateTotalCost();
console.log("Total price:", totalPrice)




