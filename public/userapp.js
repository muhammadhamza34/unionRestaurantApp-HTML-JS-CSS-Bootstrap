// 

var products = []
var getProducts = localStorage.getItem('products')

if(getProducts !== null)
{
    products = JSON.parse(getProducts)
}


let main = document.getElementById('products');

for(var i = 0; i < products.length; i++){
    main.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].price} RS</p>
        <a href="#" onclick='addToCart("${products[i].name}","${products[i].price}","${products[i].image}")' class="btn btn-primary">ADD TO CART</a>
    </div>
</div>
    `
}

 let allCarts = [];
 let cartss = localStorage.getItem('mul')

if(cartss !== null){
   allCarts = JSON.parse(cartss)
   let cart_badge = document.getElementById('cart_badge');
   cart_badge.innerHTML = allCarts.length
}
    
function addToCart(name,price,image){
    let cart = {
        name,
        price,
        image
    }
    //    allCarts.push(cart)
    localStorage.setItem('carts',JSON.stringify(cart))
    //  localStorage.setItem('mul',JSON.stringify(allCarts))
    let cart_badge = document.getElementById('cart_badge');
    cart_badge.innerHTML = allCarts.length
     
  
    window.location = "nex1.html"
   
}

function shopping()
{
    window.location = 'info.html'
}


