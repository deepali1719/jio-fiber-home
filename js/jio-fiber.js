$(document).ready(function(){


$("html").niceScroll({
    scrollspeed:"170",
    //autohidemode:false,
    zindex:"10000",
    horizrailenabled:false
});


 // Owl Carousel  //////////////    
$('.owl-carousel').owlCarousel({
    margin: 0,

    dots: false,
    nav:true,
    autoWidth: true,
    smartSpeed: 1000,
    // items: 4
});



$('.links .addpro').on( "click", function(e) {
    $(".pro-cal-dropbox").css('bottom','-230px');   
    $(".explor-btn a.exp-btn").css('display','block');

});


// Explor btn  //////////////   
$(".explor-btn a.exp-btn").click(function () {
$(".pro-cal-dropbox").css('bottom','0');
    $(".explor-btn a.exp-btn").css('display','none');
    $(".explor-btn a.close-btn").css('display','block');
    $(".disabled-slider").css({ "opacity": "1", "z-index": "98"});
    $(".links .item .addpro, .owl-drag").css('pointer-events','none');
    //$.fn.fullpage.setAllowScrolling(false);
    //$.fn.fullpage.setKeyboardScrolling(false);
    
}); 

 
// Close reset value  //////////////    
$(".explor-btn a.close-btn").click(function () {
    //$.fn.fullpage.setAllowScrolling(true);
    //$.fn.fullpage.setKeyboardScrolling(true);
    $(".pro-cal-dropbox").css('bottom','-306px');
    $(".links .item .addpro, .owl-drag").css('pointer-events','auto');
    $(".disabled-slider").css({ "opacity": "0", "z-index": "1", "pointer-events": "none"});
    $(".explor-btn a.close-btn").css('display','none');
    $(".links .addpro").removeClass('pro-disable');
    $(".inc").show();
    $(".dec").hide();
    $("ul.pro-cls li.quantity").css('display','none');
    $("ul#list li").remove();
    a = 0; 
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    
});  



// Lamp  ////////////// 
$(".lamp .inc").click(function () {
    $('ul#list').append('<li class="lamp-pro-load"></li>');
    $('.broadband ul#list').append('<li class="lamp-pro-load"></li>');
});

$(".lamp .dec").click(function () {
    $("ul#list li.lamp-pro-load:last-child").remove();
    $(".broadband ul#list li.lamp-pro-load:last-child").remove();
});


$(".lamp .inc").one("click",function(){
    $('.pro-cls').append('<li class="lamp-qty quantity">Lamp<b id="lamp-count">1</b></li>');
});


$(".lamp .dec").hide();
    var a = 0;

$(".lamp .inc").click(function () {
        if (a < 4) {
            a++;
             $(".lamp-qty.quantity").show();
        } else if (a = 5) {
            a = 5;
            $(".lamp .inc").hide();
            $(".lamp .dec").show();
            $(".lamp .addpro").toggleClass('pro-disable');
        }
        document.getElementById("lamp-count").innerHTML = a;
});


$(".lamp .dec").click(function () {
        if (a > 1) {
            --a;            
        } else if (a = 1) {
            a = 0; 
            $(".lamp .dec, .lamp-qty.quantity").hide();
            $(".lamp .inc").show();
            $(".lamp .addpro").toggleClass('pro-disable'); 
        }
        document.getElementById("lamp-count").innerHTML = a;
});










// AC  //////////////   
$(".ac .inc").click(function () {
    $('ul#list').append('<li class="ac-pro-load"></li>');
    $('.broadband ul#list').append('<li class="ac-pro-load"></li>');
});

$(".ac .dec").click(function () {
    $("ul#list li.ac-pro-load:last-child").remove();
    $(".broadband ul#list li.ac-pro-load:last-child").remove();
});


$(".ac .inc").one("click",function(){
    $('.pro-cls').append('<li class="ac-qty quantity">AC<b id="ac-count">1</b></li>');
});


$(".ac .dec").hide();
    var b = 0;

$(".ac .inc").click(function () {
        if (b < 2) {
            b++;
             $(".ac-qty.quantity").show();
        } else if (b = 3) {
            b = 3;
            $(".ac .inc").hide();
            $(".ac .dec").show();
            $(".ac .addpro").toggleClass('pro-disable');
        }
        document.getElementById("ac-count").innerHTML = b;
});


$(".ac .dec").click(function () {
        if (b > 1) {
            --b;            
        } else if (b = 1) {
            b = 0; 
            $(".ac .dec, .ac-qty.quantity").hide();
            $(".ac .inc").show();
            $(".ac .addpro").toggleClass('pro-disable'); 
        }
        document.getElementById("ac-count").innerHTML = b;
});




// Wall Lamp  //////////////    
$(".wall-lamp .inc").click(function () {
    $('ul#list').append('<li class="wall-lamp-pro-load"></li>');
    $('.broadband ul#list').append('<li class="wall-lamp-pro-load"></li>');
});

$(".wall-lamp .dec").click(function () {
    $("ul#list li.wall-lamp-pro-load:last-child").remove();
    $(".broadband ul#list li.wall-lamp-pro-load:last-child").remove();
});


$(".wall-lamp .inc").one("click",function(){
    $('.pro-cls').append('<li class="wall-lamp-qty quantity">Wall Lamp<b id="wall-lamp-count">1</b></li>');
});


$(".wall-lamp .dec").hide();
    var c = 0;

$(".wall-lamp .inc").click(function () {
        if (c < 5) {
            c++;
             $(".wall-lamp-qty.quantity").show();
        } else if (c = 6) {
            c = 6;
            $(".wall-lamp .inc").hide();
            $(".wall-lamp .dec").show();
            $(".wall-lamp .addpro").toggleClass('pro-disable');
        }
        document.getElementById("wall-lamp-count").innerHTML = c;
});


$(".wall-lamp .dec").click(function () {
        if (c > 1) {
            --c;            
        } else if (c = 1) {
            c = 0; 
            $(".wall-lamp .dec, .wall-lamp-qty.quantity").hide();
            $(".wall-lamp .inc").show();
            $(".wall-lamp .addpro").toggleClass('pro-disable'); 
        }
        document.getElementById("wall-lamp-count").innerHTML = c;
});

















    
// Chair  //////////////    
$(".chair .inc").click(function () {
    $('ul#list').append('<li class="chair-pro-load"></li>');
    $('.broadband ul#list').append('<li class="chair-pro-load"></li>');
});

$(".chair .dec").click(function () {
    $("ul#list li.chair-pro-load:last-child").remove();
    $(".broadband ul#list li.chair-pro-load:last-child").remove();
});


$(".chair .inc").one("click",function(){
    $('.pro-cls').append('<li class="chair-qty quantity">Chair<b id="chair-count">1</b></li>');
});


$(".chair .dec").hide();
    var d = 0;

$(".chair .inc").click(function () {
        if (d < 3) {
            d++;
             $(".chair-qty.quantity").show();
        } else if (d = 4) {
            d = 4;
            $(".chair .inc").hide();
            $(".chair .dec").show();
            $(".chair .addpro").toggleClass('pro-disable');
        }
        document.getElementById("chair-count").innerHTML = d;
});


$(".chair .dec").click(function () {
        if (d > 1) {
            --d;            
        } else if (d = 1) {
            d = 0; 
            $(".chair .dec, .chair-qty.quantity").hide();
            $(".chair .inc").show();
            $(".chair .addpro").toggleClass('pro-disable'); 
        }
        document.getElementById("chair-count").innerHTML = d;
});
















// tv  //////////////   
$(".tv .inc").click(function () {
    $('ul#list').append('<li class="tv-pro-load"></li>');
    $('.broadband ul#list').append('<li class="tv-pro-load"></li>');
});

$(".tv .dec").click(function () {
    $("ul#list li.tv-pro-load:last-child").remove();
    $(".broadband ul#list li.tv-pro-load:last-child").remove();
});


$(".tv .inc").one("click",function(){
    $('.pro-cls').append('<li class="tv-qty quantity">TV<b id="tv-count">1</b></li>');
});


$(".tv .dec").hide();
    var e = 0;

$(".tv .inc").click(function () {
        if (e < 1) {
            e++;
             $(".tv-qty.quantity").show();
        } else if (e = 2) {
            e = 2;
            $(".tv .inc").hide();
            $(".tv .dec").show();
            $(".tv .addpro").toggleClass('pro-disable');
        }
        document.getElementById("tv-count").innerHTML = e;
});


$(".tv .dec").click(function () {
        if (e > 1) {
            --e;            
        } else if (e = 1) {
            e = 0; 
            $(".tv .dec, .tv-qty.quantity").hide();
            $(".tv .inc").show();
            $(".tv .addpro").toggleClass('pro-disable'); 
        }
        document.getElementById("tv-count").innerHTML = e;
});




// scrollmagic js start

// init controller
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
            //triggerHook: 0.5
        }
});


//nav controller
$('.scroll-cont a').on('click',function() {
    var targetSection = $(this).attr('href').substring(1);
    var targetPerc = (targetSection-1) / ($('.scroll-cont a').length-1);
    var targetPos = scene.scrollOffset() + (scene.duration()*targetPerc);
    controller.scrollTo(targetPos);
});

  
    // build scene
    var wallscene = new ScrollMagic.Scene({
        triggerElement: "#inner-fiber-section", 
        duration: 2000,
        tweenChanges: true,
        triggerHook: 0.7
    })
    .setClassToggle("#inner-fiber-section" ,"active")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


     // build scene
    var wallsetpin = new ScrollMagic.Scene({
        triggerElement: "#fiber-section2", 
        duration: 300,
        triggerHook: 0
    })
    .setPin("#fiber-section2")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);





 // scrollmagic js script

function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}

var $path0 = $("path#path0");
var $path1 = $("path#path1");
var $path2 = $("path#path2");
var $path3 = $("path#path3");

// prepare SVG
pathPrepare($path0);
pathPrepare($path1);
pathPrepare($path2);
pathPrepare($path3);


// build tween
var tween = new TimelineMax()
    .add(TweenMax.to($path0, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) 
    .add(TweenMax.to($path1, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) 
    .add(TweenMax.to($path2, 1, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($path3, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) 
    
    
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#fiber-section3", 
    duration: 2000, tweenChanges: true,triggerHook: 0.05})
    .setTween(tween)
    .setPin("#fiber-section3")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


});  
