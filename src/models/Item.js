class Item {
    constructor(id,categoryId, customerId, title, price,  description, condition, postDate, city,  imageUrl){
        this.id = id;
        this.categoryId = categoryId;
        this.customerId = customerId;
        this.title = title;
        this.price = price;
        this.description = description;
        this.condition = condition;
        this.postDate = postDate;
        this.city = city;
        this.imageUrl = imageUrl;
    }

}
export default Item;