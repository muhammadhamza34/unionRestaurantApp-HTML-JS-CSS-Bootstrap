function next(){

    window.location ="next.html"
}

// cat add


let arr = []
function addproduct(){

var name = document.getElementById('name').value
var price = document.getElementById('price').value
var image = document.getElementById('image').value
// console.log(name,price,image)

var obj = {
   name,
   price,
   image
}

arr.push(obj)
// console.log(arr)
localStorage.setItem('products' , JSON.stringify(arr))




}