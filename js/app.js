"use strict"
$(document).ready(function() {
    
    $('a').on('click', function(event) { 
    	event.defaultPrevented(); 
    	var val = $(this).attr('href');
       	$('#par1').load(val);
    });
});


$(function () {
		$.getJSON('http://vps227573.ovh.net/u-11.json', function(data) {
			var t = $('[elt]');
			for (var i = 0; i < t.length; i ++) {

				var attribut = $(t[i]).attr('elt');
				var valeur = data [attribut];
				$(t[i]).html(valeur);
			}
	});
});

$.getJSON('http://s.idsympa.com/u-11.json', function(data) {
    var template = $('#template').html();
    var rendered = Mustache.render(template, data);
    $('body').html(rendered);

});

