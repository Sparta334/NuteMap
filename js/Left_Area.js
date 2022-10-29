
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

    console.log($(window).width());
    $("#container").css("background-size" , $(window).width().toString()+"px "+ $(window).height().toString() +"px"  );

});

    
$(document).ready(function(){

    // 開頭動畫

    $("#container").css("background-size" , $(window).width().toString()+"px "+ $(window).height().toString() +"px"  );
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
