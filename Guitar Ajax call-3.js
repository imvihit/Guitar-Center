getdata = localStorage.current_json;
info = JSON.parse(getdata);
console.log(info);
a = parseInt(localStorage.getItem("index"));
b = parseInt(localStorage).getitem("fct3");
console.log(a);
console.log(b);
function loaddata() {


    document.getElementById("im2").src = info.allProducts[a].image_path;
    document.getElementById("pd").innerHTML = info.allProducts[a].product_description;

}
function loaddata1() {


    document.getElementById("fname").value = document.getElementById("p1").innerHTML;
    document.getElementById("lname").value = document.getElementById("p2").innerHTML;
    document.getElementById("state").value = document.getElementById("p5").innerHTML;
    document.getElementById("email").value = document.getElementById("p6").innerHTML;
    document.getElementById("number").value = document.getElementById("p7").innerHTML;
    document.getElementById("pwd").value = document.getElementById("p8").innerHTML;
}