class CalculatePrice{
    constructor(price, buckets, area = null){
        this.price = price;
        this.buckets = 0;
        //this.coverage = coverage;
        this.area = null;
    }

    setArea(area){
        this.area = area;
    }

    amountOfBucketsNeeded(){
        const litersNeeded = Math.ceil(this.area/10);
        if (litersNeeded === 0){
            this.buckets = 0;
            this.price = 0;
        } else if (litersNeeded < 5){
            this.buckets = 1;
            this.price = 11;
        } else {
            const bucketsNeeded = litersNeeded/10
            this.buckets = bucketsNeeded;
            this.price = 15
    }
}
    calculateTotalCost(){
        return this.price * this.buckets;
    }
}

export default CalculatePrice;