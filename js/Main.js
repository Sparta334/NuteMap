

function reload(NameID){
    let container = document.getElementById(NameID);
    let content = container.innerHTML;
    container.innerHTML= content; 
    
   //this line is to watch the result in console , you can remove it later	
    console.log("Refrash"); 
}


window.addEventListener('load' , function(){

    let Container = document.getElementById("container");
    Container.style.backgroundSize = document.documentElement.clientWidth.toString()+"px "+ document.documentElement.clientHeight.toString()+"px" ;
    reload("container");

});

window.addEventListener('resize' , function(){

    let Container = document.getElementById("container");
    Container.style.backgroundSize = document.documentElement.clientWidth.toString()+"px "+ document.documentElement.clientHeight.toString()+"px" ;
    reload("container");

});


