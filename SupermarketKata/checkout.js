module.exports = class Checkout{
    constructor(){
        this.prices = new Object();
        this.total = 0;
        this.discounts = new Object();
    }

    addItemPrice(item, price){
        this.prices[item] = price;
    }

    addItem(item){
        this.total += this.prices[item];
    }

    calculateTotal(){
        return this.total;
    }

    addDiscount(item, itemCnt, discountPrice){
        this.discounts[item] = {cnt:itemCnt, price:discountPrice};
    }
}