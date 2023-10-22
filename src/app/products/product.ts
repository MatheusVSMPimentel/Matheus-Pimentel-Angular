export class Product {
    id: string;
    name: string;
    price: number;
    onSale: boolean;
    discountedPrice: number;
    image: string;

    constructor(id: string, name: string, price: number, onSale: boolean, discountedPrice: number, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.onSale = onSale;
        this.discountedPrice = discountedPrice;
        this.image = image;
    }
}
