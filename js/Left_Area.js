
let StoreContainer = document.querySelector('.StoreContainer');
StoreContainer.addEventListener("wheel" , function(event){


    event.preventDefault;

    for(let i = 0 ; i<1 ; i+=0.1 )
        StoreContainer.scrollLeft += event.deltaY*i*6;
  

});


//禁用滑鼠右鍵

function forbidRightMouse(evt)
{
    if (evt)
        evt.preventDefault();               //dom2的事件模型，主要針對firefox/sofari
    else
        window.event.returnValue = false;   //IE的事件模型
}


document.oncontextmenu = forbidRightMouse; //防止遊覽者使用滑鼠右鍵



function reload(NameID){
    let container = document.getElementById(NameID);
    let content = container.innerHTML;
    container.innerHTML= content; 
    
   //this line is to watch the result in console , you can remove it later	
    console.log("Refrash"); 
}


window.addEventListener('load' ,function(){


    if(document.documentElement.clientHeight*1.2 >= document.documentElement.clientWidth ){

        let HeaderIMG = document.getElementsByClassName('HeaderImg');
        for(let i = 0 ; i< HeaderIMG.length ; i++){
            HeaderIMG[i].style.height = "7vw";
        }
        document.querySelector('.Header').style.height ="8vw";
        
        document.querySelector('.Home').style.height ="3vw";
        document.querySelector('.Author').style.height ="3vw";
    }
    else{

        
        let HeaderIMG = document.getElementsByClassName('HeaderImg');
        for(let i = 0 ; i< HeaderIMG.length ; i++){
            HeaderIMG[i].style.height = "calc(10vh)";
        }
        document.querySelector('.Header').style.height = "13%";
        
        document.querySelector('.Home').style.height ="calc(5vh)";
        document.querySelector('.Author').style.height ="calc(5vh)";
    }

    


});



window.addEventListener('resize' , function(){


    
    if(document.documentElement.clientHeight*1.2 >= document.documentElement.clientWidth ){

        let HeaderIMG = document.getElementsByClassName('HeaderImg');
        for(let i = 0 ; i< HeaderIMG.length ; i++){
            HeaderIMG[i].style.height = "7vw";
        }
        document.querySelector('.Header').style.height ="8vw";
        
        document.querySelector('.Home').style.height ="3vw";
        document.querySelector('.Author').style.height ="3vw";
    }
    else{

        
        let HeaderIMG = document.getElementsByClassName('HeaderImg');
        for(let i = 0 ; i< HeaderIMG.length ; i++){
            HeaderIMG[i].style.height = "calc(10vh)";
        }
        document.querySelector('.Header').style.height = "13%";
        
        document.querySelector('.Home').style.height ="calc(5vh)";
        document.querySelector('.Author').style.height ="calc(5vh)";
    }

    
    
  

} );


reload("Headcontainer");

// hover

let title = document.getElementsByClassName("StoreBlocksImg");

for(let i = 0 ; i<title.length ;i++ ){

    title[i].addEventListener('mouseover' ,function(){

        let TargetTitle = document.querySelector("#StoreTitleBar :nth-child("+(i+1).toString()+")");
        TargetTitle.style.opacity = 1;
    });

}
for(let i = 0 ; i<title.length ;i++ ){

    title[i].addEventListener('mouseout' ,function(){

        let TargetTitle = document.querySelector("#StoreTitleBar :nth-child("+(i+1).toString()+")");
        TargetTitle.style.opacity = 0;
    });

}