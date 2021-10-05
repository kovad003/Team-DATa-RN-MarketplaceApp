class PostedItem {
    constructor(id,categoryId, customerId, title, price,  description, condition, postDate, imageUrl){
        this.id = id;
        this.categoryId = categoryId;
        this.customerId = customerId;
        this.title = title;
        this.price = price;
        this.description = description;
        this.condition = condition;
        this.postDate = postDate;
        this.imageUrl = imageUrl;
    }

}
export default PostedItem;