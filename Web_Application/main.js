var currentCategory='Autism';
var Questions= [
	// store answer with questions for easier retrieval
	{ category: 'Autism', question : 'Autism is curable.', answer: false },
	{ category: 'Autism', question : ' Asperger Syndrome is a subtype of Autism Spectrum Disorder (ASD). ', answer: true },
	{ category: 'Autism', question : 'There is currently no medical test to diagnose Autism.', answer: true },
	{ category: 'Autism', question : 'Autism can be observed within six months after giving birth.', answer: false },
	{ category: 'Autism', question : ' Most scientists and doctors know what causes autism.', answer: false },
	{ category: 'Autism', question : 'Autism occurs in an equal number of boys and girls. ', answer: false },
	{ category: 'Autism', question : 'People with Autism can live normal lives.', answer: true },
	{ category: 'Autism', question : 'Many scientists think that heredity and genes play a role in the cause of autism.', answer: true },
	{ category: 'Autism', question : 'In cases of identical twins, if one twin has autism, the other would have a 50-50% chance of obtaining autism as well, the same case applies to fraternal twins. ', answer: false },
	{ category: 'Autism', question : 'Studies have shown that approximately 1 in 225 children suffer Autism Spectrum Disorder in the United States.', answer: false },


];

// when declared over here other functions will see it; it's not best practice to register them in global/window scope, but better than nothing ;)
var count = 0;
var points = 0;
var category=0;
var question;

//show answer buttons only after clicking start button
function showButtons(){
	document.getElementById('answerT').style.display="";
	document.getElementById('answerF').style.display="";
}

// choose a category and a question
function catAndQuest() {
	start.style.display = 'none';
	showButtons();

	document.getElementById('points').innerHTML= 'Points: ' + (points);
	document.getElementById('count').innerHTML= 'Question ' + (++count) + ' \/ 10';

	currentCategory = Questions.map(function(question) {
    	return question.category;
    });
	category = currentCategory[Math.floor(Math.random() * currentCategory.length)];
	document.getElementById('category').innerHTML= 'Category: ' + (category);

	var questionList= Questions.filter( function (question){
		return question.category === category;
	});

	question = questionList[Math.floor(Math.random() * questionList.length)];
	document.getElementById('quest').innerHTML= question.question;
}

// create a copy of Questions array
var copy = [].concat(Questions);

// delete used question out of the copy array
function deleteUsed (){
	if(Questions.length > 0) {
		Questions.splice(Questions.indexOf(question),0);
	} else {
		document.getElementById('answerT').style.display="none";
		document.getElementById('answerF').style.display="none";
		document.getElementById('questions').style.display="none";
		document.getElementById('looser').style.display="";
		document.getElementById('reset').style.display="";
	}
}

//user answered question
function answer(value){
	deleteUsed();
	if(value === question.answer) {
		points++;
		if(points==5){
			document.getElementById('answerT').style.display="none";
			document.getElementById('answerF').style.display="none";
			document.getElementById('questions').style.display="none";
			document.getElementById('winner').style.display="";
			document.getElementById('reset').style.display="";
		}
	}
	catAndQuest();
}

//restart the game
function restart(){
	document.location.href="";
}
