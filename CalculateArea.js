class CalculateArea{
    constructor(base, height){
    this.base = base;
    this.height = height;
    this.walls = [];
    this.obstacles = [];
    }

    addWall(base, height){
        this.walls.push({base,height});
    }

    addObstacles(base, height){
        this.obstacles.push({base,height});
    }

    calculateTotalWallArea(base,height){
        let totalArea = 0;
        for (let i = 0; i < this.walls.length; i++){
            let base = this.walls[i].base;
            let height = this.walls[i].height;
            totalArea += base * height;
        }
        return totalArea;
    }

    calculateTotalObstacleArea(base,height){
        let totalArea=0;
        for (let i = 0; i < this.obstacles.length; i++){
            let base = this.obstacles[i].base;
            let height = this.obstacles[i].height;
            totalArea += base * height;
        }
        return totalArea;
    }

    calculateTotalAreaPaintable(walls, obstacles){
        return this.calculateTotalWallArea() - this.calculateTotalObstacleArea();
    }
}


