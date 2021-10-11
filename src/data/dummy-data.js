import Category from '../models/Category';
import Item from '../models/Item';
import Customer from '../models/Customer';



export const CATEGORIES = [
  new Category('1', 'Furnitures', '#586ba4', 'Furnitures, Sofa, Chair, Table and etc.' , "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=809&q=80"),
  new Category('2', 'Books', '#f5dd90' , 'Books and other written documents' , "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('3', 'Cars', '#f68e5f', 'Vehicles and all related items', "https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"),
  new Category('4', 'Clothes', '#324376', 'All the items worn to cover the body like pants, dress, glasses and etc.' , "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('5', 'Electronics', '#f76c5e', 'All the electronic items like TV, Iron, computer, labtop, Phone and etc.', "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('6', 'Games', '#586ba4', 'All the differnt type of games like Boeardgames, console, toys and etc.', "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('7', 'Kitchen', '#f5dd90', 'All the items related to Kitchen', "https://images.unsplash.com/photo-1609766856923-7e0a0c06584d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('8', 'Sports', '#f68e5f', 'All sport materials',"https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"),
  new Category('9', 'Property', '#324376', 'Houses, Villas, and any type of tradable properties', "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
  new Category('10', 'Bikes', '#f5dd90', 'Bikes and bicycles and all items related to them' , "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Category('11', 'Others', '#f68e5f', 'Items that do not fall into the specified categories.', "https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),

];


// id,categoryId, customerId, title, price,  description, condition, location, imageUrl

export const ITEM = [
  new Item('4', '3' , '1001' , 'Lamborgini', '86000' , 'Black interior with white accent stitching. Full babied with 5 layers of Ceramic Pro 9H and 3 layers of Ceramic Pro Lite. Full frontal protection (PPF). Carbon Fiber mirror caps. Selling to make room for additional investments', 'old', 'Hameenlinna' , "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Item('5', '7' , '1002' , 'Cofee maker', '150' , 'Etiam in commodo mauris. Integer cursus laoreet ante, sed consectetur urna molestie id. Nunc hendrerit quis dolor ac sollicitudin. Fusce ut pretium velit. ', 'very new', 'Hameenlinna' , "https://images.unsplash.com/photo-1576470331852-65ef7a0243a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Item('6', '4' , '1004' , 'Nike shoes', '48' , 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, lectus quis lacinia vulputate, orci mauris consectetur lectus, ut pharetra leo velit ut nisl.', 'new', 'Hameenlinna' , "https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Item('7', '1' , '1004' , 'Sofa', '100' , 'This sofa was bought from Sofology and is 4 years old - it is extremely comfortable and all the electrics are in full working order.There are 3 small areas on the arms and seat where the surface has worn slightly and there is an area where excessive head wear has dis-colored the leather, I tried to clean it and it went a darker colour,See pics - so we use a "Throw" to cover the top part of the sofa and it looks fine. Clean.', 'very new', 'Hameenlinna' , "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"),
  new Item('8', '5' , '1001' , 'Play station 3', '120' , 'Aenean ut ex lacinia, consectetur quam vitae, iaculis nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', 'Old',  'Lahti' ,"https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
  new Item('9', '7' , '1004' , 'Coocking Pan', '5' , 'Quisque convallis mi at sapien molestie faucibus. In velit ex, elementum vitae cursus id, interdum nec mi. Sed pellentesque risus malesuada, egestas mi pretium, porttitor risus.', 'new',  'Hameenlinna' , "https://images.unsplash.com/photo-1592156328757-ae2941276b2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Item('10', '4' , '1005' , 'Nike shoes', '18' , 'Nunc ultricies imperdiet ligula ac ullamcorper. Cras eget dictum nulla, lobortis malesuada metus. Vestibulum iaculis, eros vel tempus laoreet, augue diam lacinia lacus, a pretium risus nunc sit amet tortor. Aenean volutpat nisl vitae tellus sagittis aliquet. Mauris a felis a nisi auctor accumsan.', 'new',  'Helsinki' ,"https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"),
  new Item('11', '1' , '1005' , 'Sofa', '180' , 'Praesent ut nisi non arcu sodales cursus eget ut nunc. Donec vulputate, lorem faucibus porttitor lacinia, massa diam hendrerit metus, sed pharetra leo velit consequat massa. Donec malesuada elementum condimentum. Etiam leo diam, viverra vitae leo id, auctor suscipit enim.', 'new', 'Helsinki' , "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"),
  new Item('12', '6' , '1002' , 'Boardgame', '120' , 'Donec congue neque lacus, id finibus libero commodo id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean laoreet interdum arcu, vitae sodales augue bibendum quis. Sed rhoncus arcu ex, ut luctus velit posuere a. Morbi in nibh metus.', 'new', 'Helsinki' , "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
  new Item('13', '1' , '1006' , 'Classic Chair', '35' , 'Sed at erat molestie, efficitur mi id, vehicula augue. Vestibulum non libero ac mi condimentum venenatis et a arcu. Maecenas nec nulla semper, vehicula odio at, interdum leo.', 'new', 'Tampere' , "https://images.unsplash.com/photo-1462212210333-335063b676bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"),
  new Item('14', '3' , '1006' , 'Volkswagen', '980' , 'Donec congue neque lacus, id finibus libero commodo id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean laoreet interdum arcu, vitae sodales augue bibendum quis. Sed rhoncus arcu ex, ut luctus velit posuere a. Morbi in nibh metus.', 'old', 'Helsinki' , "https://images.unsplash.com/photo-1503650923300-dd2f6a007eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"),

];



// (id, name , family, username ,dateofbirth, email, phone, imageurl
export const CUSTOMER = [
new Customer('1001', 'Frank', 'Larson', 'flarson', '20.03.1989', 'f.larson@gmail.com', '0403771254', "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
new Customer('1004', 'Jacki', 'Fitcher', 'jackyfi' , '12.05.1992', 'jacki.fitcher@gmail.com', '0402875145', "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"),
new Customer('1005', 'Sara', 'Peterson', 'speterson', '10.08.1996', 's.peterson@gmail.com', '0467568412', "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=895&q=80"),
]