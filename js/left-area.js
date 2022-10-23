
let StoreContainer = document.querySelector('.StoreContainer');
StoreContainer.addEventListener("wheel" , function(event){


    event.preventDefault;

    for(let i = 0 ; i<1 ; i+=0.1 )
        StoreContainer.scrollLeft += event.deltaY*i*6;
  

});


if(document.documentElement.clientHeight >= document.documentElement.clientWidth ){

    let HeaderIMG = document.getElementsByClassName('HeaderImg');
    for(let i = 0 ; i< HeaderIMG.length ; i++){
        HeaderIMG[i].style.height = "7vw";
    }
    document.querySelector('.Header').style.height ="8vw";
    
    document.querySelector('.Home').style.height ="3vw";
    document.querySelector('.Author').style.height ="3vw";

}

