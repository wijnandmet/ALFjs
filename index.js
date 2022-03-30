import { alf } from './alf.js';

// examples
alf('.items .item.border').removeClass('border');

alf('.items .item').each(function(el, index) {
	if (index == 1) {
		alf(el).addClass('border');
	}
});

alf('.items .item').last().addClass('border');

alf('.items .item').style('cursor','pointer').on('click', function(e) {
	alf(e.target).toggleClass('border');
});

alf('.ajax-clicker').on('click', function() {
	alf().ajax('/api.json', 'GET', '', function(r) {
		console.log('AJAX', r);
	});
});