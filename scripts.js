var submitting;
var submission = {};

var submitAnswers = function() {
	if (submitting) return false;

	submitting = true;
	var loaderEl = document.createElement("div");
	loaderEl.setAttribute("id", "loader");
	document.getElementById('submit').innerHTML = '';
	document.getElementById('submit').appendChild(loaderEl);

	submission = {
		name: document.getElementById('name').value,
		answers: {
			move: document.getElementById('move').value,
			marquee: document.getElementById('marquee').value,
			lasso: document.getElementById('lasso').value,
			magic: document.getElementById('magic').value,
			crop: document.getElementById('crop').value,
			eyedropper: document.getElementById('eyedropper').value,
			healing: document.getElementById('healing').value,
			brush: document.getElementById('brush').value,
			stamp: document.getElementById('stamp').value,
			history: document.getElementById('history').value,
			eraser: document.getElementById('eraser').value,
			fill: document.getElementById('fill').value,
			// blur: document.getElementById('blur').value,
			dodge: document.getElementById('dodge').value,
			pen: document.getElementById('pen').value,
			type: document.getElementById('type').value,
			select: document.getElementById('select').value,
			rectangle: document.getElementById('rectangle').value,
			grab: document.getElementById('grab').value,
			zoom: document.getElementById('zoom').value,
			flip: document.getElementById('flip').value,
		},
		total: 20,
		correct: 0
	};

	for ( var key in submission.answers) {
		var value = submission.answers[key].toLowerCase();
	    switch(key) {
	    	case 'move':
	    		if ( value=='v' ) submission.correct++ ;
	    		break;
	    	case 'marquee':
	    		if ( value=='m' ) submission.correct++ ;
	    		break;
	    	case 'lasso':
	    		if ( value=='l' ) submission.correct++ ;
	    		break;
	    	case 'magic':
	    		if ( value=='w' ) submission.correct++ ;
	    		break;
	    	case 'crop':
	    		if ( value=='c' ) submission.correct++ ;
	    		break;
	    	case 'eyedropper':
	    		if ( value=='i' ) submission.correct++ ;
	    		break;
	    	case 'healing':
	    		if ( value=='j' ) submission.correct++ ;
	    		break;
	    	case 'brush':
	    		if ( value=='b' ) submission.correct++ ;
	    		break;
	    	case 'stamp':
	    		if ( value=='s' ) submission.correct++ ;
	    		break;
	    	case 'history':
	    		if ( value=='y' ) submission.correct++ ;
	    		break;
	    	case 'eraser':
	    		if ( value=='e' ) submission.correct++ ;
	    		break;
	    	case 'fill':
	    		if ( value=='g' ) submission.correct++ ;
	    		break;
	    	// case 'blur':
	    	// 	if ( value=='v' ) submission.correct++ ;
	    	// 	break;
	    	case 'dodge':
	    		if ( value=='o' ) submission.correct++ ;
	    		break;
	    	case 'pen':
	    		if ( value=='p' ) submission.correct++ ;
	    		break;
	    	case 'type':
	    		if ( value=='t' ) submission.correct++ ;
	    		break;
	    	case 'select':
	    		if ( value=='a' ) submission.correct++ ;
	    		break;
	    	case 'rectangle':
	    		if ( value=='u' ) submission.correct++ ;
	    		break;
	    	case 'grab':
	    		if ( value=='h' ) submission.correct++ ;
	    		break;
	    	case 'zoom':
	    		if ( value=='z' ) submission.correct++ ;
	    		break;
	    	case 'flip':
	    		if ( value=='x' ) submission.correct++ ;
	    		break;
	    }
	}

	if(typeof emailjs !== 'undefined'){
		emailjs.send("outlook", "ps_test_temp", submission)
			.then(function(response) {
				console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
				showResults();
			}, function(err) {
				console.log("FAILED. error=", err);
				showResults();
			});
	} else {
		showResults();
	}

	return false;
};

var showResults = function() {
	var results = document.getElementById('results');
	// results.className = "show";
	results.innerHTML = "<div id='results-modal'><h3>You got " + submission.correct + " out of " + submission.total + " shortcuts correct!</h3><h3>你" + submission.total + "题里答对了" + submission.correct + "题！</h3><div class='reset-btns'><button onclick='reloadPage()'>Retry 再来一遍</button></div></div>";
	var answers = {
		move: document.getElementById('move-item'),
		marquee: document.getElementById('marquee-item'),
		lasso: document.getElementById('lasso-item'),
		magic: document.getElementById('magic-item'),
		crop: document.getElementById('crop-item'),
		eyedropper: document.getElementById('eyedropper-item'),
		healing: document.getElementById('healing-item'),
		brush: document.getElementById('brush-item'),
		stamp: document.getElementById('stamp-item'),
		history: document.getElementById('history-item'),
		eraser: document.getElementById('eraser-item'),
		fill: document.getElementById('fill-item'),
		// blur: document.getElementById('blur-item'),
		dodge: document.getElementById('dodge-item'),
		pen: document.getElementById('pen-item'),
		type: document.getElementById('type-item'),
		select: document.getElementById('select-item'),
		rectangle: document.getElementById('rectangle-item'),
		grab: document.getElementById('grab-item'),
		zoom: document.getElementById('zoom-item'),
		flip: document.getElementById('flip-item')
	};

	for ( var key in answers) {
		var value = submission.answers[key].toLowerCase();
	    switch(key) {
	    	case 'move':
	    		if ( value=='v' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">V</span>';
	    		}
	    		break;
	    	case 'marquee':
	    		if ( value=='m' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">M</span>';
	    		}
	    		break;
	    	case 'lasso':
	    		if ( value=='l' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">L</span>';
	    		}
	    		break;
	    	case 'magic':
	    		if ( value=='w' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">W</span>';
	    		}
	    		break;
	    	case 'crop':
	    		if ( value=='c' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">C</span>';
	    		}
	    		break;
	    	case 'eyedropper':
	    		if ( value=='i' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">I</span>';
	    		}
	    		break;
	    	case 'healing':
	    		if ( value=='j' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">J</span>';
	    		}
	    		break;
	    	case 'brush':
	    		if ( value=='b' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">B</span>';
	    		}
	    		break;
	    	case 'stamp':
	    		if ( value=='s' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">S</span>';
	    		}
	    		break;
	    	case 'history':
	    		if ( value=='y' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">Y</span>';
	    		}
	    		break;
	    	case 'eraser':
	    		if ( value=='e' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">E</span>';
	    		}
	    		break;
	    	case 'fill':
	    		if ( value=='g' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">G</span>';
	    		}
	    		break;
	    	// case 'blur':
	    	// 	if ( value=='v' ) submission.correct++ ;
	    	// 	break;
	    	case 'dodge':
	    		if ( value=='o' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">O</span>';
	    		}
	    		break;
	    	case 'pen':
	    		if ( value=='p' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">P</span>';
	    		}
	    		break;
	    	case 'type':
	    		if ( value=='t' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">T</span>';
	    		}
	    		break;
	    	case 'select':
	    		if ( value=='a' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">A</span>';
	    		}
	    		break;
	    	case 'rectangle':
	    		if ( value=='u' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">U</span>';
	    		}
	    		break;
	    	case 'grab':
	    		if ( value=='h' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">H</span>';
	    		}
	    		break;
	    	case 'zoom':
	    		if ( value=='z' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">Z</span>';
	    		}
	    		break;
	    	case 'flip':
	    		if ( value=='x' ) {
	    			answers[key].className = 'correct';
	    		} else {
	    			answers[key].className = 'incorrect';
	    			answers[key].innerHTML += '<span class="correct-answer">X</span>';
	    		}
	    		break;
	    }
	}

	return false;
};

var reloadPage = function() {
	if (window.scrollY != 0) {
		window.scrollBy( 0, -window.scrollY );
	}
	window.location.reload();
};

document.addEventListener("DOMContentLoaded", function(event) {
	if(typeof emailjs !== 'undefined'){
		emailjs.init("user_17IFxUh62EclEap0rJrrN");
	}
    document.getElementById('results').innerHTML = '<button type="submit" id="submit">Submit</button>';
});

setTimeout( function(){
	console.log('STOP');
	if(typeof emailjs=='undefined' || !emailjs.init) {
		window.stop();
	}
}, 15*1000);