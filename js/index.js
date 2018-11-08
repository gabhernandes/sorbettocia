
$(document).ready(function(){

    //////////// INIT **********************
    init();

    $('.content_item p').each(function(){
        $(this).after('<div class="line-separator"></div>');
    });

    // EVENTS  ***************************

    $(document).on("click", function(el){
        if( $(el.target).attr('class') == "menubar_mobile" ){
            $('.nav_mobile').show();
            TweenMax.fromTo( $('.nav_item_mobile').eq(0), 0.25, { left:'150px'}, {left:'0px'});
            TweenMax.fromTo( $('.nav_item_mobile').eq(1), 0.50, { left:'150px'}, {left:'0px'});
            TweenMax.fromTo( $('.nav_item_mobile').eq(2), 0.75, { left:'150px'}, {left:'0px'});
            TweenMax.fromTo( $('.nav_item_mobile').eq(3), 1.00, { left:'150px'}, {left:'0px'});
        }else{
            TweenMax.to( $('.nav_item_mobile').eq(0), 0.25, { left:'150px'});
            TweenMax.to( $('.nav_item_mobile').eq(1), 0.50, { left:'150px'});
            TweenMax.to( $('.nav_item_mobile').eq(2), 0.75, { left:'150px'});
            TweenMax.to( $('.nav_item_mobile').eq(3), 1.00, { left:'150px'});
            $('.nav_mobile').fadeOut(1000);
        }
    });

    $('#nav li a').mouseenter(function(){
        if( $(this).hasClass('nav_item_desktop') ){
            $(this).css('left', 'auto');
            TweenMax.to( $(this), 0.50, { top: '25px', right:'36px'});
        }
        if( $(this).hasClass('nav_item_mobile') ){
            $(this).css('left', 'auto');
            TweenMax.to( $(this), 0.50, { right:'30px'});
        }
    });
    $('#nav li a').mouseleave(function(){
        if( $(this).hasClass('nav_item_desktop') ){
            $(this).css('left', 'auto');
            TweenMax.to( $(this), 0.50, { top: '0px', right:'0px'});
        }
        if( $(this).hasClass('nav_item_mobile') ){
            $(this).css('left', 'auto');
            TweenMax.to( $(this), 0.50, { right:'0px'});
        }
    });

    // FUNNIMATIONS **********************

    TweenMax.from( $('#welcome_slogan'), 1, {bottom:'40px', alpha:0});


    TweenMax.from( $('.nav_item_desktop').eq(0), 0.5, { bottom: '75px', left:'100px'});
    TweenMax.from( $('.nav_item_desktop').eq(1), 1, { bottom: '75px', left:'100px'});
    TweenMax.from( $('.nav_item_desktop').eq(2), 1.5, { bottom: '75px', left:'100px'});
    TweenMax.from( $('.nav_item_desktop').eq(3), 2, { bottom: '75px', left:'100px'});

    var tl = new TimelineLite();

    var scoop = $('#featured h1');
    var slogan = $('#featured h3');
    var buttons = $('#featured button');
    var content = $('.content_item');
    var sideItem = $('.sidebar_item');
    var foot = $('footer');


    tl.from( $('#featured'), 0.5, { height: '0'})
        .from(scoop, 0.5, {alpha: 0, zoom: 3, right: 50, bottom:50})
        .from(slogan, 0.5, {alpha:0, left:500})
        .from(buttons.eq(0), 0.2, {alpha:0, zoom:4, right:150, bottom:50})
        .from(buttons.eq(1), 0.2, {alpha:0, zoom:4,})
        .from(content, 0.5, {height:0, padding:0, border: "0px"})
        .to(content, 0.1, {height: "auto"})
        .from(sideItem.eq(0), 0.2, {alpha:0, top:100})
        .from(sideItem.eq(1), 0.2, {alpha:0, top:100})
        .from(sideItem.eq(2), 0.2, {alpha:0, top:100})
        .from(sideItem.eq(3), 0.2, {alpha:0, top:100})
        .from(foot, 1, {alpha:0, zoom:0, left:"25%"})


}); ////////////// DOC READY END

$(window).resize(function(){
    init();
});

function init(){
    var ww = $(window).innerWidth(); // inner window width
    changeMenu(ww);
    changeContent(ww);
    changeFeature(ww);
    //console.log(ww);
}

function changeContent(val){

    if( val < 550 ){
        // Change Sidebar :
        $('.sidebar_container').detach().insertAfter('#content');
        $('.sidebar_container').addClass('sidebar_container_mobile');
        $('.sidebar_item').addClass('sidebar_item_mobile');

        // change content:
        $('#content').addClass('content_mobile');
        $('.content_item').addClass('content_item_mobile');

    }else{
        // Change Sidebar :
        $('.sidebar_container').detach().insertBefore('#content');
        $('.sidebar_container').removeClass('sidebar_container_mobile');
        $('.sidebar_item').removeClass('sidebar_item_mobile');


        // change content:
        $('#content').removeClass('content_mobile');
        $('.content_item').removeClass('content_item_mobile');
    }
}

function changeMenu(val){

    if( val < 680 ){
        $('#nav').hide();
        $('#menubar').addClass('menubar_mobile');
        $('#nav').addClass('nav_mobile');
        $('#nav li a').removeClass('nav_item_desktop').addClass('nav_item_mobile').css('left','auto');
    }else{
        $('#menubar').removeClass('menubar_mobile');
        $('#nav').removeClass('nav_mobile');
        $('#nav li a').removeClass('nav_item_mobile').addClass('nav_item_desktop').css('left','auto');
        $('#nav').show();
    }

}

function changeFeature(val){

    if( val < 530 ){

        var ratio = val/530;

        $('#featured').css('zoom', ratio);
        $('#welcome_slogan h3').css({
            'font-size':'35px',
            'padding-top':'11px'
        });

    }else{
        $('#featured').css('zoom', 1);
        $('#welcome_slogan h3').css({
            'font-size':'50px',
            'padding-top':'0px'
        });
    }

}

