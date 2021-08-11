function moreCityCards(){
    var vm = document.getElementById('vmButton'); 
    var divvm = document.getElementById('vmdiv');
    if(vm.innerText === 'View More'){
        vm.innerText = 'View Less';
        divvm.innerHTML += `<div id= "city-cards" >
        <div>
        <div class ="city-card-and-name-inner">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg" class="city-image">
            <div class = 'overlay'><span>Chennai</span></div>
        </div>
    </div>
    <div>
        <div class ="city-card-and-name-inner">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg" class="city-image">
            <div class='overlay'><span>Agra</span></div>
        </div>
    </div>
    <div>
        <div class ="city-card-and-name-inner">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg" class="city-image">
            <div class="overlay"><span>Jaipur</span></div>
        </div>
    </div>
    <div>
        <div class="city-card-and-name-inner">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg" class="city-image">
            <div class="overlay"><span>Bengaluru</span></div>
        </div>
    </div>
    </div>`;
}else if(vm.innerText === "View Less"){
    vm.innerText = "View More";
    divvm.innerHTML = '';
}
}