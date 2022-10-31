
//禁用滑鼠右鍵
function forbidRightMouse(evt)
{
    if (evt)
        evt.preventDefault();               //dom2的事件模型，主要針對firefox/sofari
    else
        window.event.returnValue = false;   //IE的事件模型
}



document.oncontextmenu = forbidRightMouse; //防止遊覽者使用滑鼠右鍵

$(window).resize(function(){
    $("#container").css("background-size" , $(window).width().toString()+"px  "+ $(window).height().toString() +"px "  );

    let Hrate = $(window).width() / $(window).height();
    let Varte = $(window).height() / $(window).width();

    

    if( Hrate >= 1.6){
        $(".Profile p").css("font-size" , ($(window).height() /100)*9  );
       
    }
    else if (Varte >= 1) {
        $(".Profile p").css("font-size" , ($(window).width() /100)*4  );
       
    }
    else{
        $(".Profile p").css("font-size" , ($(window).width() /100)*4  );
       
    }
});


$(window).ready(function(){
    $("#container").css("background-size" , $(window).width().toString()+"px  "+ $(window).height().toString() +"px "  );

    let Hrate = $(window).width() / $(window).height();
    let Varte = $(window).height() / $(window).width();


    if( Hrate >= 1.6){
        $(".Profile p").css("font-size" , ($(window).height() /100)*9  );
       
    }
    else if (Varte >= 1) {
        $(".Profile p").css("font-size" , ($(window).width() /100)*4  );
       
    }
    else{
        $(".Profile p").css("font-size" , ($(window).width() /100)*4  );
       
    }


    $("#p1").click(function () {  

        $("#p1").addClass("ProfileImgAn1");
        setTimeout(function(){$("#p1").removeClass("ProfileImgAn1");} , 1400 );


    });


    $("#p2").click(function () {  

        $("#p2").addClass("ProfileImgAn2");
        setTimeout(function(){$("#p2").removeClass("ProfileImgAn2");} , 1400 );

    });

    ButtonUrl();
});



function DelayUrl(url , time){


    setTimeout(function(){

        location.href = url;


    } , time  );

}

function ButtonUrl(){

    $("#Home").click(function (e) { 
        e.preventDefault();
        $("#Home").addClass("headerLinkItemUrlAnimate");
        setTimeout(function(){$("#Home").removeClass("headerLinkItemUrlAnimate");} , 1200);
        DelayUrl("./index.html" , 1200 );
    });

    $("#IG").click(function (e) { 
        e.preventDefault();
        $("#IG").addClass("headerLinkItemUrlAnimate");
        setTimeout(function(){$("#IG").removeClass("headerLinkItemUrlAnimate");} , 1200);
        setTimeout(function(){
            window.open("https://www.instagram.com/ntuedtd_ig/" , "_blank" );
        
        
            }  ,1200 );
    });

    $("#About_us").click(function (e) { 
        e.preventDefault();
        $("#About_us").addClass("headerLinkItemUrlAnimate");
        setTimeout(function(){$("#About_us").removeClass("headerLinkItemUrlAnimate");} , 1200);
        DelayUrl("./about_us.html" , 1200 );
    });


}
