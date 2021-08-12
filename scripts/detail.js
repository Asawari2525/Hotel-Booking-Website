var bookingFromDate;
var bookingToDate;
BookingForm();
function BookingForm(){
    var adultNumber = document.getElementById('adult').value;
    var bookingFromDate = new Date(document.getElementById('fromDate').value);
    var bookingToDate = new Date(document.getElementById('toDate').value);
    var afterBookingCalculatedPrice = document.getElementById('price');
    if(bookingToDate>bookingFromDate && adultNumber>0){
        afterBookingCalculatedPrice.value = "Rs. "+ payment();
    }else{
    afterBookingCalculatedPrice.innerText = "Rs. 0";
}
}
function payment(){
    var adultNumber = document.getElementById('adult').value;
    var bookingFromDate = new Date(document.getElementById('fromDate').value);
    var bookingToDate = new Date(document.getElementById('toDate').value);
    return parseInt((bookingToDate - bookingFromDate) / (24 * 3600 * 1000 ))*adultNumber*1000;
}
