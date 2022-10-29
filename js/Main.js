



$(window).resize(function(){

    console.log($(window).width());
    $("#container").css("background-size" , $(window).width().toString()+"px "+ $(window).height().toString() +"px"  );

});

    
$(document).ready(function(){

    // 開頭動畫

    $("#container").css("background-size" , $(window).width().toString()+"px "+ $(window).height().toString() +"px"  );

    LogoAnimate();
    FoodMarkAnimate();
    setTimeout(arrowAnimate , 4500);
    ButtonUrl();
  
  


  // 按鈕前往動畫
  FoodMarkClickAnimate();

});
 


function LogoAnimate() 
{  

    setTimeout(function(){ $("#LogoAn").addClass("Logo")}, 10);
    setTimeout(function(){$("#LogoAn").addClass("LogoTada")} , 3000 );
    setTimeout(function(){$("#LogoAn").removeClass("Logo") } , 3000 );

}

function FoodMarkAnimate(){

    setTimeout(function(){$("#food1").addClass("An_foodPopOut1") }, 3500 );
    setTimeout(function(){$("#food2").addClass("An_foodPopOut2") }, 3750 );
    setTimeout(function(){$("#food3").addClass("An_foodPopOut3") }, 4000 );
    setTimeout(function(){$("#food4").addClass("An_foodPopOut4") }, 4250 );
    setTimeout(function(){$("#food5").addClass("An_foodPopOut5") }, 4500 );
 
    setTimeout(function () { 
    $(".foodDisplay").css("opacity" , "1");
    $("#food1").removeClass("An_foodPopOut1") ;
    $("#food2").removeClass("An_foodPopOut2") ;
    $("#food3").removeClass("An_foodPopOut3") ;
    $("#food4").removeClass("An_foodPopOut4") ;
    $("#food5").removeClass("An_foodPopOut5") ; }
    , 6000) ;
    
 
}
function arrowAnimate () 
{  

    $(".arrow").addClass("arrowAnimate");

}

function DelayUrl(url , time){


    setTimeout(function(){

        location.href = url;


    } , time  );

}

function ButtonUrl(){

    $("#Home").click(function (e) { 
        e.preventDefault();
        $("#Home").addClass("headerLinkItemUrlAnimate");
        DelayUrl("./index.html" , 1200 );
    });

    $("#IG").click(function (e) { 
        e.preventDefault();
        $("#IG").addClass("headerLinkItemUrlAnimate");
        DelayUrl("https://www.instagram.com/ntuedtd_ig/" , 1200 );
    });

    $("#About_us").click(function (e) { 
        e.preventDefault();
        $("#About_us").addClass("headerLinkItemUrlAnimate");
        DelayUrl("./index.html" , 1200 );
    });


}

function FoodMarkClickAnimate(){

    $("#food1").click(function (e) { 
        e.preventDefault();


       $("#food1").addClass("An_food1");
       setTimeout( function(){ $("#food1").removeClass("An_food1")} , 600 );



    });

    $("#food2").click(function (e) { 
        e.preventDefault();


       $("#food2").addClass("An_food2");
       setTimeout( function(){ $("#food2").removeClass("An_food2")} , 600 );



    });

    $("#food3").click(function (e) { 
        e.preventDefault();


       $("#food3").addClass("An_food3");
       setTimeout( function(){ $("#food3").removeClass("An_food3")} , 600 );



    });
    
    $("#food4").click(function (e) { 
        e.preventDefault();


       $("#food4").addClass("An_food4");
       setTimeout( function(){ $("#food4").removeClass("An_food4")} , 600 );



    });

    $("#food5").click(function (e) { 
        e.preventDefault();


       $("#food5").addClass("An_food5");
       setTimeout( function(){ $("#food5").removeClass("An_food5")} , 600 );



    });
    
    

}