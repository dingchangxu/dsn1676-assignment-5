var $add = $('#add');
//var $add = $('.add');
//var $add = $('.name');
var $form = $('form');


$form.on('submit', function (e) {
    var $li = $('<li>');
    $li.addClass('addnew');
    $('body').append($li);
    e.preventDefault();
    //$add.css('background-color', $add.val());
    
    
});



    
