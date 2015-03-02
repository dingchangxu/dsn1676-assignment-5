var $add = $('#add');
var $add = $('.add');
//var $add = $('.name');
var $form = $('form');
var $list = $('.list');
var $remove = $('.remove');
var $prime = $('prime');


$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>');
    $li.addClass('addnew').html($name.val());
    
    $li.append($li);
    $dinos.append($li);
    var list = $add.attr('href');
    $add.css('ulr(' + list + ')');
    
    
});



    
$add.on('click', function () {
    list.append('<li>fffff</li>');
    
});

$remove.on('click', function () {
    $prime.remove();
});