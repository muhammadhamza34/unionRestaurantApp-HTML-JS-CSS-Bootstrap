var billing = document.getElementById('row1')

let allCarts = [];
let cartss = localStorage.getItem('mul')

if(cartss !== null){
  allCarts = JSON.parse(cartss)
//   console.log(allCarts)
  let cart_badge = document.getElementById('cart_badge');
  cart_badge.innerHTML = allCarts.length
}

var val1 =0;
for(var i = 0; i < allCarts.length; i++){
  
billing.innerHTML += ` 
<tr>
<td class="col-md-9">${Array.from(allCarts[i].name)}</td>
<td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i>${Array.from(allCarts[i].price)}</td>
</tr>

`

var c = parseInt(allCarts[i].price)
 val1 = (val1) + c 
// console.log(val1)

}



var b =document.getElementById('abb')
b.innerHTML= val1

var d = parseInt(document.getElementById('abc').innerText);
// console.log(d)

var s = parseInt(document.getElementById('abd').innerText);
// console.log(s)

var payable = val1 + d - s
// console.log(payable)

var pay = document.getElementById('aab');
pay.innerHTML = payable

var total = document.getElementById('total');
total.innerHTML = payable

function foo(){
  alert("Thankyou For Shopping On Our Union Website...")
  window.location = "signin.html"
}
