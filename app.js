//ask for how many walls, call the user input that many times
import CalculateArea from "./CalculateArea.js";
import CalculatePrice from "./CalculatePrice.js";
import promptSync from "prompt-sync";
import promptSyncHistory from "prompt-sync-history";

const prompt = promptSync({ history: promptSyncHistory() });

function askQuestion(query) {
  console.log(query);
  return prompt("> ");
}

async function main() {
  try {
    const areaTotal = new CalculateArea();
    const wallsCount = askQuestion("How many walls do you want to paint?");
    for (let i = 0; i < wallsCount; i++) {
      areaTotal.addWall(
        askQuestion("From left to right how long in meters"),
        askQuestion("From top to bottom how tall in meters")
      );
      console.log("Area array:", areaTotal.walls);
    }
    const obstacleCount = askQuestion(
      "How many obstacles are there in the walls?"
    );
    for (let i = 0; i < obstacleCount; i++) {
      areaTotal.addObstacles(
        askQuestion("From left to right how long are the obstacles in meters"),
        askQuestion("From top to bottom how tall are the obstacles in meters")
      );
      console.log("Obstacles array:", areaTotal.obstacles);
    }
    const area = areaTotal.calculateTotalWallArea();
    console.log("Wall area:", area);
    const oArea = areaTotal.calculateTotalObstacleArea();
    console.log("Obstacle area:", oArea);
    const totalArea = areaTotal.calculateTotalAreaPaintable();
    console.log("Total area paintable:", totalArea);

    const priceTotal = new CalculatePrice(50, 0);
    priceTotal.setArea(totalArea);
    priceTotal.amountOfBucketsNeeded();
    const totalPrice = priceTotal.calculateTotalCost();
    console.log("Total price in pounds:", totalPrice);
  } catch (error) {
    console.error('Something went wrong');
  }
}

main();
