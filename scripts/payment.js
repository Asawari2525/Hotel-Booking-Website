 payOf();
 function payOf(){
    var pay = document.getElementById('payingBtn');
    var lgP = document.getElementById('login');
    if(lgP.innerText === "LOGOUT"){
        pay.disabled = false;
    }
 }
 function paymentAlert(){
     var pay = document.getElementById('payingBtn');
    alert("Hi your Booking is Successfull");
 }
 