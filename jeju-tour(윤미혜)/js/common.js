$(function(){
    $(window).resize(function(){
        if(parseInt($('header').css('width')) > 800) {
            $('nav').show()
        }else{
            $('nav').hide()
        };
    })
    $('#logo .hamburger').click(function(){
        $(this).parent().next().slideToggle('on');
        $(this).toggleClass('active');
    })

    $('.add').click(function(){
        $(this).next().addClass('onn')
        $(this).text('')
    });
});