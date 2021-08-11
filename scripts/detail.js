BookingForm();
function BookingForm(){
    var adultNumber = document.getElementById('adult');
    var bookingFromDate = document.getElementById('fromDate');
    var bookingToDate = document.getElementById('toDate');
    var afterBookingCalculatedPrice = document.getElementById('price');
    var bookingNumberOfDays = (bookingToDate.value - bookingFromDate.value);
    afterBookingCalculatedPrice.innerText += "Rs" + (adultNumber.value * bookingNumberOfDays * 1000);
}