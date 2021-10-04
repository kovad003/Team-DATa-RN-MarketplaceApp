import Category from '../models/Category';
import PostedItem from '../models/PostedItem';


export const CATEGORIES = [
  new Category('c1', 'Furnitures', '#586ba4' , "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=809&q=80"),
  new Category('c2', 'Books', '#f5dd90' , "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('c3', 'Cars', '#f68e5f', "https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"),
  new Category('c4', 'Clothes', '#324376', "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('c5', 'Electronics', '#f76c5e', "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('c6', 'Games', '#586ba4', "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('c7', 'Kitchen', '#f5dd90', "https://images.unsplash.com/photo-1609766856923-7e0a0c06584d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('c8', 'Sports', '#f68e5f', "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"),
  new Category('c9', 'Others', '#324376', "https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
];


// id,categoryId, customerId, title, price,  description, condition, postDate, imageUrl

export const POSTEDITEMS = [
  new PostedItem('ab134', 'c4' , 'p004' , 'Nike shoes', '18' , 'Limited edition Nike shoes', 'new', '20.09.2021',  "https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"),
  new PostedItem('fr564', 'c1' , 'p004' , 'Sofa', '70' , 'blue leather sofa - barely used', 'very new', '15.09.2021',  "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"),
  new PostedItem('rt741', 'c5' , 'p004' , 'Play station 3', '120' , 'Play station 3 slim with two controller', 'Old', '06.09.2021',  "https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
  new PostedItem('nr431', 'c7' , 'p004' , 'Coocking Pan', '5' , '28 cm Cooking pan - brand Teffal', 'new', '06.08.2021',  "https://images.unsplash.com/photo-1592156328757-ae2941276b2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),

];