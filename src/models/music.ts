interface Music {
    id: string,
    title: string,
    price: number,
    description: string
}

class Music {
    constructor(id: string, title: string, price: number, description: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }
}
export default Music;