payOf();
 function payOf(){
    var lgP = document.getElementById('login-button');
    if(lgP.innerHTML == "LOGOUT"){
        alert("Hi your Booking is Successfull");
    }else{
        document.getElementById("m1").setAttribute("disabled",true);
    }
 }
 function paymentAlert(){
     var pay = document.getElementById('payingBtn');
    alert("Hi your Booking is Successfull");
 }
 
