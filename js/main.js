var $form = $('.form');
var $list = $('.list');
var $remove = $('.remove');
var $prime = $('prime');
var $add = $('.add');
var $todolist = $('.todolist');

$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>');
    var $todolistH2 = $('<h2>').html($todolist.val());
    var $button = $('<button>');
    $button.html('✘');
    
    $li.append($todolistH2).append($button);
    $list.append($li);
    
    $button.on('click', function () {
    $li.remove();
});
});

$list.on('click', 'li', function () {
    $(this).toggleClass('js-highlight');
});
  