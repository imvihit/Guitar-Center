getdata = localStorage.current_json;
info = JSON.parse(getdata);
console.log(info);
a = parseInt(localStorage.getItem("index"));
console.log(a);

function loaddata() {


    document.getElementById("im1").src = info.allProducts[a].image_path;
    document.getElementById("pd").innerHTML = info.allProducts[a].product_description;
    document.getElementById("sd").innerHTML = info.allProducts[a].shipping_details;
    document.getElementById("price").innerHTML = info.allProducts[a].price;
}

function fct1() {

    document.getElementById("p1").innerHTML = document.getElementById("fname").value;
       document.getElementById("p2").innerHTML = document.getElementById("lname").value;
        if(document.getElementById("genderMale").checked === true)
        {
            document.getElementById("p3").innerHTML = document.getElementById("genderMale").value;
        }
        else if(document.getElementById("genderfemale").checked === true){
            document.getElementById("p4").innerHTML = document.getElementById("genderfemale").value;
        }
        document.getElementById("p5").innerHTML = document.getElementById("state").value;
        document.getElementById("p6").innerHTML = document.getElementById("email").value;
        document.getElementById("p7").innerHTML = document.getElementById("no").value;
        document.getElementById("p8").innerHTML = document.getElementById("pwd").value;
       document.getElementById("form1").reset();
    document.getElementById("edit").hidden = false;

return false;
}

function fct3() {
    document.getElementById("fname").value = document.getElementById("p1").innerHTML;
    document.getElementById("lname").value = document.getElementById("p2").innerHTML;
    document.getElementById("state").value = document.getElementById("p5").innerHTML;
    document.getElementById("email").value = document.getElementById("p6").innerHTML;
    document.getElementById("number").value = document.getElementById("p7").innerHTML;
    document.getElementById("pwd").value = document.getElementById("p8").innerHTML;
}