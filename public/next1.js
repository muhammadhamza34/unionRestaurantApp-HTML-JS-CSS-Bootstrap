
var info = document.getElementById("p1");

let allCarts = [];
  let cartss = localStorage.getItem('mul')

 if(cartss !== null){
   allCarts = JSON.parse(cartss)
   let cart_badge = document.getElementById('cart_badge');
   cart_badge.innerHTML = allCarts.length
 }


    let carts = localStorage.getItem('carts')
    var z = JSON.parse(carts)
    //  console.log(z)
   
    

    info.innerHTML = `
    
    <div class="card mb-3" style="max-width: 640px; ">
  <div class="row g-0">
    <div class="col-md-6">
   
      <img src="${z.image}" class="img-fluid rounded-start" alt="..." style="height:400px;">
    </div>
    <div class="col-md-6">
      <div class="card-body">
      <br><br><br><br><br>
        <h5 class="card-title">Product Name :   &nbsp; ${z.name}</h5>
        <br><br>
        <p class="card-text">Product Price : ${z.price} Bitcoin</p>
        <p class="card-text"><small class="text-muted"></small></p>
       
            <a href="#" onclick="buy()" class="btn btn-primary">ADD TO CART</a>
      </div>
    </div>
  </div>
</div>
 
    `


    function buy(){
        allCarts.push(z)
        localStorage.setItem('mul',JSON.stringify(allCarts))

          let cart_badge = document.getElementById('cart_badge');
    cart_badge.innerHTML = allCarts.length

    }



   
   
   
    function goback(){
        
       
        window.location = "user.html"
    }

    function shopping()
{
    window.location = 'info.html'
}
//Array.from(z, z => z.name)