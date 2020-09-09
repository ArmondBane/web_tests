$(document).ready(function(){

    $.cookie('name', 123);

    $('#menu_button').on('click', function(){

        alert('Hellow, it is menu!');
        alert($.cookie('name'));
    });

    $('#head_title').hide(0).fadeIn(2000);

    
});