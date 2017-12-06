/**/
var toggleIcon = document.querySelector('#toggleIcon');

toggleIcon.addEventListener('click', function() {

	console.log('toggleIcon is working');

	var nav = document.querySelector('header');
	nav.style.left = '-20%';

	var main = document.querySelector('main');
	main.style.width = '100%';

	var	toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.setAttribute('hidden', 'hidden');

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.removeAttribute('hidden');

});


/*Toggle to show sidebar*/

var toggleIcon = document.querySelector('#toggleIcon1');

toggleIcon1.addEventListener('click', function() {

	console.log('toggleIcon is working');

	var nav = document.querySelector('header');
	nav.style.left = '0';

	var main = document.querySelector('main');
	main.style.width = '80%';

	var	toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.removeAttribute('hidden');

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.setAttribute('hidden', 'hidden');

});