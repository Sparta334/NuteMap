
let StoreContainer = document.querySelector('.StoreContainer');
StoreContainer.addEventListener("wheel" , function(event){


    event.preventDefault;

    for(let i = 0 ; i<1 ; i+=0.1 )
        StoreContainer.scrollLeft += event.deltaY*i*7;
  

});

