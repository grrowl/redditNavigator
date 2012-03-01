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
	 

function redditNavigator() {
	
	var currentComment = document.querySelector('.comment');

	//window.scroll(0,findPos(currentComment));

	function navigate(ev) {
		console.log('navigating', ev, currentComment);


		var nextComment = currentComment;
		switch (ev.keyCode) {
			case 37: // left
					// find parent
				do {
					nextComment = nextComment.parentElement;
				} while (nextComment.className.indexOf('comment') < 0);
				break;

			case 39: // right
					// find first child:
					nextComment = nextComment.querySelector('.comment');
				break;
				
			case 38: // up
				do {
					nextComment = nextComment.previousElementSibling;
				} while (nextComment.className.indexOf('comment') < 0);
				break;

			case 40: // down
				do {
					nextComment = nextComment.nextElementSibling;
				} while (nextComment.className.indexOf('comment') < 0);
				break;

			default:
				console.log('i dno lol', ev, ev.keyCode);
				return true;
		}
		if (nextComment != null) {
			currentComment.style.outline = '1px solid green';
	
			currentComment = nextComment;
			currentComment.style.outline = '4px solid purple';
			window.scrollTo(0, findPos(currentComment) - 100);
		}

		console.log('found him!', currentComment);
	}

	var body = document.querySelector('body'); 
	body.addEventListener('keydown', navigate, false);
}

window.onload = function () {
	console.log('fck ou');
	redditNavigator();
}

//document.addEventListener("load", redditNavigator, false);
//document.addEventListener("DOMContentLoaded", redditNavigator, false);


