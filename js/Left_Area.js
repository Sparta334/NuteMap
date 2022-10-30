
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
    $(".StoreListItem").css( "width", $(".FoodImgFrame").width()-  $(".FoodImgFrame").width()/10 );
    $(".StoreListItem").css( "height", $(".FoodImgFrame").height()- $(".FoodImgFrame").height()/3.4);
    $(".StoreList").css("margin-left" , $(window).width()/70 - (40 - $(window).width()/160)  );
    $(".StoreList").css("margin-top" , $(window).height()/10);

    $(".StoreContentlistItem").css("height" ,  $(".StoreContent").height());



    let Hrate = $(window).width() / $(window).height();
    let Varte = $(window).height() / $(window).width();

    console.log(Varte);
    if( Hrate >= 1.6){
        $(".StoreDetailTitle").css("font-size" , ($(window).height() /100)*5  );
        $(".StoreTitle").css("font-size" , ($(window).height() /100)*7  );
        $(".StoreDetailImg").css("height" , ($(window).height() /100)*10  );
        $(".StoreDetailContext").css("font-size" , ($(window).height() /100)*2.5  );
    }
    else if (Varte >= 1) {
        $(".StoreTitle").css("font-size" , ($(window).width() /100)*3  );
        $(".StoreDetailImg").css("height" , ($(window).width() /100)*7  );
        $(".StoreDetailTitle").css("font-size" , ($(window).width() /100)*3.5 );
        $(".StoreDetailContext").css("font-size" , ($(window).width() /100)*1  );
    }
    else{
        $(".StoreTitle").css("font-size" , ($(window).width() /100)*3  );
        $(".StoreDetailImg").css("height" , ($(window).width() /100)*7  );
        $(".StoreDetailTitle").css("font-size" , ($(window).width() /100)*3 );
        $(".StoreDetailContext").css("font-size" , ($(window).width() /100)*1  );
    }


    ChanageImg();



});

 
let idx = 0 ;
const img = $(".StoreListItem").length;
let interval = setInterval( function ( ) {  AutoChanage()  } , 8000);

$(document).ready(function(){

    // 開頭動畫

    $("#container").css("background-size" , $(window).width().toString()+"px  "+ $(window).height().toString() +"px "  );
    ButtonUrl();
    setTimeout(function(){ $(".btn").addClass("BtnAn");} , 1300 );
    setTimeout(function(){ $(".btn").removeClass("BtnAn");} , 3000 );


    //大小調整

   $(".StoreListItem").css( "width", $(".FoodImgFrame").width()-  $(".FoodImgFrame").width()/10 );
   $(".StoreListItem").css( "height", $(".FoodImgFrame").height()- $(".FoodImgFrame").height()/3.4);
   $(".StoreList").css("margin-left" , $(window).width()/70 - (40- $(window).width()/160)  );
   $(".StoreList").css("margin-top" , $(window).height()/10);
   
   $(".StoreContentlistItem").css("height" ,  $(".StoreContent").height());



   let Hrate = $(window).width() / $(window).height();
    let Varte = $(window).height() / $(window).width();

    console.log(Varte);
    if( Hrate >= 1.6){
        $(".StoreDetailTitle").css("font-size" , ($(window).height() /100)*5  );
        $(".StoreTitle").css("font-size" , ($(window).height() /100)*7  );
        $(".StoreDetailImg").css("height" , ($(window).height() /100)*10  );
        $(".StoreDetailContext").css("font-size" , ($(window).height() /100)*2.5  );
    }
    else if (Varte >= 1) {
        $(".StoreTitle").css("font-size" , ($(window).width() /100)*3  );
        $(".StoreDetailImg").css("height" , ($(window).width() /100)*7  );
        $(".StoreDetailTitle").css("font-size" , ($(window).width() /100)*3.5 );
        $(".StoreDetailContext").css("font-size" , ($(window).width() /100)*1  );
    }
    else{
        $(".StoreTitle").css("font-size" , ($(window).width() /100)*3  );
        $(".StoreDetailImg").css("height" , ($(window).width() /100)*7  );
        $(".StoreDetailTitle").css("font-size" , ($(window).width() /100)*3 );
        $(".StoreDetailContext").css("font-size" , ($(window).width() /100)*1  );
    }



    // carousel
    
   
    $("#LeftBtn").click(function(){

        idx--;
        ChanageImg();
        resetInterval();
    
       
    });
    
    $("#RightBtn").click(function(){
    
        idx++;
        ChanageImg();
        resetInterval();
    
    
    });
   
    console.log(idx);

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



    // carousel

    function ChanageImg (){


    
        if(idx > img - 1) {
            idx = 0;
    
        } else if(idx < 0) {
            idx = img - 1;
        }
    
        $(".StoreList").css("transform" , "translateX(" + -((idx)* ( $(".StoreListItemimg").width() + 400 )  ).toString() + "px )"   );
        $(".StoreContentlist").css("transform" , "translateY(" + -((idx)* ( $(".StoreContentlistItem").height() )  ).toString() + "px )"  )
        console.log(idx);
    }
    

function AutoChanage () 
{  

    idx++;
    ChanageImg();
}



function resetInterval() 
{
    clearInterval(interval);
    interval = setInterval(function () { AutoChanage() } , 8000);
}

