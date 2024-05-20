class CalculateArea{
    constructor(base, height, shape){
    this.base = base;
    this.height = height;
    this.walls = [];
    this.obstacles = [];
    this.shape = null;
    }

    addWall(base, height, shape){
        this.walls.push({base,height,shape});
    }

    addObstacles(base, height, shape){
        this.obstacles.push({base,height,shape});
    }

    calculateTotalWallArea(base,height,shape){
        let totalArea = 0;
        for (let i = 0; i < this.walls.length; i++){
            let base = this.walls[i].base;
            let height = this.walls[i].height;
            if (this.walls[i].shape == 'triangle'){
                totalArea += 1/2 * base * height;
            } else {
                totalArea += base * height;
        }
    }
    return totalArea;
}

    calculateTotalObstacleArea(base,height,shape){
        let totalArea=0;
        for (let i = 0; i < this.obstacles.length; i++){
            let base = this.obstacles[i].base;
            let height = this.obstacles[i].height;
            if (this.obstacles[i].shape == 'triangle'){
                totalArea += 1/2 * base * height;
            } else if (this.obstacles[i].shape == 'circle') {
                totalArea += (1/2 * base)**2 * Math.PI
            } else {
                totalArea += base * height;
        }
    }
    return totalArea;
}

    calculateTotalAreaPaintable(walls, obstacles){
        return this.calculateTotalWallArea() - this.calculateTotalObstacleArea();
    }
}

export default CalculateArea;

