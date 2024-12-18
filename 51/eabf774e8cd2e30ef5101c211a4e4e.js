$(document).ready(function(){
    $('img.aligncenter').removeAttr('width');
    $('img.aligncenter').removeAttr('height');

    $('.blog-content').find('img').removeAttr('width');
    $('.blog-content').find('img').removeAttr('height');

    $('.blog-content').find('a').each(function( ) {
        $(this).attr('href', removeTrailingSlash($(this).attr('href')));
    });
});


function removeTrailingSlash(str) {
    return str.replace(/\/+$/, '');
  }
