$(' .navigation-bar .flaticon-list').on('click', function(){
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






const realFileBtn = document.getElementById('real-file');
const customBtn = document.getElementById('custom-button');
const customText = document.getElementById('custom-text');
customBtn.addEventListener('click', function(){
    realFileBtn.click();
});
realFileBtn.addEventListener('change', function(){
    if(realFileBtn.value){
        customText.innerHTML = realFileBtn.value;
    }else{
        customText.innerHTML = 'لم يتم اختيار صورة';
    }
});
