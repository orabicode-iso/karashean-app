$(' .navigation-bar').on('click', function(){
    $('.fixed-menu').toggleClass('is-visible');
    if($('.fixed-menu').hasClass('is-visible')){
        $('.fixed-menu').animate({
            right: 0
        }, 500);
    }else{
        $('.fixed-menu').animate({
            right: '-70%'
        }, 500);
    }
})