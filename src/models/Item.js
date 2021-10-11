class Item {
    constructor(id,categoryId, customerId, title, price,  description, condition, location, imageUrl){
        this.id = id;
        this.categoryId = categoryId;
        this.customerId = customerId;
        this.title = title;
        this.price = price;
        this.description = description;
        this.condition = condition;
        // this.postDate = postDate;
        this.location = location;
        this.imageUrl = imageUrl;
    }

}
export default Item;