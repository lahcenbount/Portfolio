$(document).ready(function() { 
    $('.nav-link').on('click', function() { 
        var target = $(this).data('target'); 
    $('.page').removeClass('active');
     $(target).addClass('active');
    });
});