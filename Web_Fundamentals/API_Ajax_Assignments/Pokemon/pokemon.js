$(document).ready(function(){
    var $pokemon = '';
    for (var idx = 1; idx <= 151; idx++){
        $pokemon += '<img src="http://pokeapi.co/media/img/' + idx + '.png">';
    }
    $('.container').append($pokemon);
});
