
let StoreContainer = document.querySelector('.StoreContainer');
StoreContainer.addEventListener("wheel" , function(event){


    event.preventDefault;

    
    StoreContainer.scrollLeft += event.deltaY*1.8;


});

