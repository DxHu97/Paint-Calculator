class CalculatePrice{
    constructor(price, buckets, coverage, area = null){
        this.price = price;
        this.buckets = 0;
        this.coverage = coverage;
        this.area = null;
    }

    setArea(area){
        this.area = area;
    }

    amountOfBucketsNeeded(){
        this.buckets = Math.ceil(this.area/this.coverage);
    }
    calculateTotalCost(){
        return this.price * this.buckets;
    }
}

export default CalculatePrice;