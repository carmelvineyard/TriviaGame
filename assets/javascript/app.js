$(document).ready(function() {

//Global var

	var correct = 0;
	var banners = ["Try your best!", "How did you do?"];
	var timeLeft = 120;
	counter = setInterval(function(){timer();}, 1000);
	wrong = 0;
	$("#questions").show();
	$("#timer").show();
	$("#results").hide();
	$("#resources").hide();
	
	const element = document.querySelector('form');
		element.addEventListener('submit', event => {
  		event.preventDefault();
  		// actual logic, e.g. validate the form
  		console.log('Form submission cancelled.');
  		done();
	});
	  
	function timer() {
		$("#timer").text("Time remaining: " + timeLeft);
		timeLeft--;
		
		if (timeLeft === -1) {
			console.log("time's up");
			clearInterval(counter);
			done();
		}
	};


	function done() {
		//All the display changes
		$("#questions").hide();
		$("#timer").hide();
		$("#done-butt").hide();
		$("#results").show();
		$("#resources").show();
		$("p").hide();
		$("#subheader").text(banners[1]);
		//stop the timer
		clearInterval(counter);
		//check the answers and display them
		//tons of variables!!!  I'd love to use a loop to grab the answer values.
		var total = 8;
		
		
		var q1 = document.forms["qform"]["q1"].value;
		var q2 = document.forms["qform"]["q2"].value;
		var q3 = document.forms["qform"]["q3"].value;
		var q4 = document.forms["qform"]["q4"].value;
		var q5 = document.forms["qform"]["q5"].value;
		var q6 = document.forms["qform"]["q6"].value;
		var q7 = document.forms["qform"]["q7"].value;
		var q8 = document.forms["qform"]["q8"].value;
		//set correct answers -- btw, two questions are tricks where all answers are correct. 
		//For those, I gave all the possible answers the value of "a" and will set that in here as well.
		var cAnswers = ["b", "d", "a", "c", "a", "d", "c", "b"];
		
		//check answer values against the cAnswers array
		for (var i = 1; i <= total; i++) {
			if (eval('q' + i) == cAnswers[i - 1]){
				correct++;
				wrong = (total - correct);
			}
		};
		//display results in the proper place
		$("#results").text("Correct: " + correct + "  Incorrect: " + wrong);

	};

	//bonus round: making the <p> above each link in the resources div toggle display
	//when the link is moused over.

	$(".reveal").on("mouseover", event =>{
		$(event.currentTarget).next("p").toggle("slow");
	});
	



});//document.ready close
