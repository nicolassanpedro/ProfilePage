"use strict"

$(document).ready(function() {

	$('body').on('click', 'a', function(event) { 
		event.preventDefault(); 
		var val = $(this).attr('href');
		

		if(val == '#contact') {
			$('#conteneur').toggle();

			$('#fermer').on('click', function()  {
				$('#conteneur').hide();
			});
		}

		else {
			$(val).toggle();
		}

	});
/*
$(function () {
	$.getJSON('user-11.json', function(data) {
		var t = $('[elt]');
		for (var i = 0; i < t.length; i ++) {

			var attribut = $(t[i]).attr('elt');
			var valeur = data [attribut];
			$(t[i]).html(valeur);
		}
	});
});
*/
$.getJSON('user-11.json', function(data) {
	var template = $('#template').html();
	var rendered = Mustache.render(template, data);
	$('body').html(rendered);

});
});