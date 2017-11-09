
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState ==4 && this.status ==200){
            myobject = JSON.parse(this.responseText);
            console.log(myobject);
            localStorage.current_json = JSON.stringify(myobject);
        }
    }
    xhttp.open("GET","guitardata.json",true);
    xhttp.send();
    i=0;
    function next() {

        if  (i<myobject.allProducts[i].image_path.length)
        {
            document.getElementById("image").src = myobject.allProducts[i].image_path;
            document.getElementById("pi").innerHTML = myobject.allProducts[i].product_description;
            document.getElementById("sp").innerHTML= myobject.allProducts[i].shipping_details;
            document.getElementById("customer_reviews").innerHTML = myobject.allProducts[i].customer_reviews;
            document.getElementById("price").innerHTML = myobject.allProducts[i].price;
            document.getElementById("stock_availability").innerHTML = myobject.allProducts[i].stock_availability;
            document.getElementById("no_of_items").innerHTML = myobject.allProducts[i].no_of_items;
           i++;

        }
        else {
            alert("More Products are coming soon ");
        }

localStorage.setItem("index",i-1);
    }
    function prev () {
        if (i>=1)
        {
            i--;
            document.getElementById("image").src = myobject.allProducts[i].image_path;
            document.getElementById("pi").innerHTML = myobject.allProducts[i].product_description;
            document.getElementById("customer_reviews").innerHTML = myobject.allProducts[i].customer_reviews;
            document.getElementById("price").innerHTML = myobject.allProducts[i].price;
            document.getElementById("stock_availability").innerHTML = myobject.allProducts[i].stock_availability;
            document.getElementById("no_of_items").innerHTML = myobject.allProducts[i].no_of_items;

        }
        else
        {
            alert("These is first image");
        }
        localStorage.setItem("current_index",i);
    }
