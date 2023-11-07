export class Product {
    constructor(name, price, ratings, discount) {
        // initialize
    }
}

export class ProductService {
    constructor() {
        this.productArray = [];
    }
    store(product) {
        this.productArray.push(product);
    }
}