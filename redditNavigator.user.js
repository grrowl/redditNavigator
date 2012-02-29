// ==UserScript==
// @name           Reddit Navigator
// @namespace      http://chillidonut.com/userscripts/
// @description    Navigates reddit
// @include        http://*.reddit.com/*
// ==/UserScript==


// http://clifgriffin.com/2008/10/14/using-javascript-to-scroll-to-a-specific-elementobject/
//Finds y value of given object
function findPos(obj) {
	var curtop = 0;
	if (obj.offsetParent) {
		do {
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	return [curtop];
	}
}
	 

function redditNavigator(function () {
	currentComment = document.querySelectorAll('.comment:first');
	console.log('hello', this, currentComment);

	window.scroll(0,findPos(currentComment));

	document.querySelector('body').addEventListener('onkeypress', function (ev) {
		console.log('navigating', ev, this, currentComment);

		switch (ev.keyCode) {
			case 38: // up
				//currentComment = currentComment.nextElementSibling;

					//.prevUntil('.comment').addClass('highlightedComment').scrollTo();
				break;

			case 40: // down
				/*currentComment = currentComment.removeClass('highlightedComment')
					.nextUntil('.comment').addClass('highlightedComment').scrollTo();
				*/

				currentComment

				break;

			case 37: // left
				/*currentComment = currentComment.removeClass('highlightedComment')
					.find('.comment:first').addClass('highlightedComment').scrollTo();
				*/break;

			case 39: // right
				/*currentComment = currentComment.removeClass('highlightedComment')
					.parentsUntil('.comment').addClass('highlightedComment').scrollTo();
				*/break;

			default:
				console.log('i dno lol', ev, ev.keyCode);
		}
	});
});

document.addEventListener("DOMContentLoaded", redditNavigator, false);