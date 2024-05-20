//ask for how many walls, call the user input that many times
import CalculateArea from "./CalculateArea.js";
import CalculatePrice from "./CalculatePrice.js";
import promptSync from "prompt-sync";
import promptSyncHistory from "prompt-sync-history";

const prompt = promptSync({ history: promptSyncHistory() });

function askQuestion(query) {
  const ans = prompt(query + " ");
  if (ans.toLowerCase() == 'quit'){
    console.log("Quitting");
    process.exit();
  }
  return ans;
}

async function main() {
  try {
    const areaTotal = new CalculateArea();
    const wallsCount = askQuestion("How many walls are you expecting to paint?");
    console.log("Please input measurements for each wall");
    for (let i = 0; i < wallsCount; i++) {
      console.log("Wall " + (i + 1) + ":");
      areaTotal.addWall(
        askQuestion("How many meters is the wall?(From left to right)"),
        askQuestion("How many meters is the wall?(From top to bottom)"),
        askQuestion("What shape is the wall?").toLowerCase()
      );
      console.log("Area array:", areaTotal.walls);
    }
    const obstacleCount = askQuestion(
      "How many obstacles are there in the walls you want to paint?"
    );
    console.log("Please input measurements for each obstacle");
    for (let i = 0; i < obstacleCount; i++) {
      areaTotal.addObstacles(
        askQuestion("How many meters is the obstacle?(From left to right)"),
        askQuestion("How many meters is the obstacle?(From top to bottom)"),
        askQuestion("What shape is the obstacle?").toLowerCase()
      );
      console.log("Obstacles array:", areaTotal.obstacles);
    }
    const area = areaTotal.calculateTotalWallArea();
    console.log("Wall area:", area.toFixed(2), "meters");
    const oArea = areaTotal.calculateTotalObstacleArea();
    console.log("Obstacle area:", oArea.toFixed(2), "meters");
    const totalArea = areaTotal.calculateTotalAreaPaintable();
    console.log("Total area paintable:", totalArea.toFixed(2), "meters");

    const priceTotal = new CalculatePrice();
    priceTotal.setArea(totalArea);
    const customerType = askQuestion("Would you like the cheapest option or best quality option?").toLowerCase();
    if (customerType !== 'cheapest' && customerType !== 'best quality') {
        throw new Error('Invalid input. Please enter "cheapest" or "best quality".');
    }
    priceTotal.amountOfBucketsNeeded(customerType);
    const totalPrice = priceTotal.calculateTotalCost();
    console.log("Total price:", "£" + totalPrice);
  } catch (error) {
    console.error(error.message);
  }
}

main();
