
$(document).ready(function() {
    
    $('a').on('click', function(event) { 
    	event.preventDefault(); 
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

		$.getJSON('http://vps227573.ovh.net/u-11.json', function(data) {
		    var FullName = Mustache.to_html('{{first_name }} {{last_name }}', data);
		   // var rendered = Mustache.render(template, data);
		    $('h1').html(FullName);

		    var metier = Mustache.to_html('{{occupation}}', data);
		    $('h2').html(metier);

		    var Contact = Mustache.to_html('contact {{email}} {{website}}', data);
		    $('h3').html(Contact);
		});

	});