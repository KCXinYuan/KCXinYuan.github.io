var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var w = null;
var questionArray = [
"What is your name?",
"Do I play video games?",
"Do I work at night?",
"Am I originally from Seattle?",
"What is my age?",
"Do I like licorice flavored licorice?",
"What day in March is my birthday?"
];
var image = function (a) {
  document.getElementById(a);
}
function question(x,y,z){
	//x=user input y=yes/no/num z=innerHTML reference i=imgtag
	if(y==="yes"){
		if(x === "yes"||x === "Yes"||x === "Y"||x === "y") {
		  console.log('User entered ' + x + ' as their answer to question one; Right');
		  alert("Your answer was " + x);
		  return true;
		}
		else if(x === "no"||x === "No"||x === "n"||x === "N") {
		  console.log('User entered ' + x + ' as their answer to question one; Wrong');
		  alert("Your answer was " + x);
		  return false;
		}
		else {
		  document.getElementById(z).innerHTML="Sorry, that answer doesn't work";
		  console.log('No/wrong answer entered');
		}
	}
	else if(y==="no"){
		if(x === "no"||x === "No"||x === "n"||x === "N") {
		  console.log('User entered ' + x + ' as their answer to question one; Right');
		  alert("Your answer was " + x);
		  return true;
		}
		else if(x === "yes"||x === "Yes"||x === "Y"||x === "y") {
		  console.log('User entered ' + x + ' as their answer to question one; Wrong');
		  alert("Your answer was " + x);
		  return false;
		}
		else {
		  document.getElementById(z).innerHTML="Sorry, that answer doesn't work";
		  console.log('No/wrong answer entered');
		}
	}
	else if(y!=NaN){
    if(x == y){
      console.log('User entered ' + x + " as their answer to question four; Right");
      alert("Your answer was " + x);
      return true;

    }
    else if(x < y){
      console.log('User entered ' + x + " as their answer to question four; Wrong");
      alert("Your answer was " + x);
      document.getElementById(z).innerHTML="Sorry " + name + ", you guessed too low!";
      return false;
    }
    else if(x > y){
      console.log('User entered ' + x + " as their answer to question four; Wrong");
      alert("Your answer was " + 'x');
      document.getElementById(z).innerHTML="Sorry " + name + ", you guessed too high!";
      return false;
    }
    else {
      document.getElementById(z).innerHTML="Sorry, that answer doesn't work";
      console.log('No/wrong answer entered');
    }
	}
}

var name = prompt(questionArray[0]);
alert("How's it going " + name + "? How about we play a guessing game?");

//QUESTION 1
var questionOne = prompt(questionArray[1]);
w=question(questionOne,"yes",'qOne','imgOne');
if(w===true){
  document.getElementById('qOne').innerHTML= "That's right " + name + "!" + " " + "I love to play video games!";
  document.getElementById('imgOne').src= "img/check.jpg";
  document.getElementById('qOne').className = "correct";
  a=1;
}
else if(w===false){
  document.getElementById('qOne').innerHTML="Sorry " + name + ", that's incorrect. I play games very often.";
  document.getElementById('imgOne').src= "img/cross.jpg";
  document.getElementById('qOne').className = "incorrect";
}

else {
 document.getElementById('imgOne').src= "img/cross.jpg";
 document.getElementById('qOne').className = "incorrect";
}

//QUESTION 2
var questionTwo = prompt(questionArray[2]);
w=question(questionTwo,"yes",'qTwo');
if(w===true){
	document.getElementById('qTwo').innerHTML="That's right " + name + "!" + " " + "I am a vampire and work night shift!";
  document.getElementById('imgTwo').src= "img/check.jpg";
  document.getElementById('qTwo').className = "correct";
  b=1;
}
else if(w===false){
	document.getElementById('qTwo').innerHTML="Sorry " + name + ", I wish you were correct. Unfortunately I work night shift.";
  document.getElementById('imgTwo').src= "img/cross.jpg";
  document.getElementById('qTwo').className = "incorrect";
}

else {
 document.getElementById('imgTwo').src= "img/cross.jpg";
 document.getElementById('qTwo').className = "incorrect";
}

//QUESTION 3
var questionThree = prompt(questionArray[3]);
w=question(questionThree,"no",'qThree','imgOne');
if(w===true){
  document.getElementById('qThree').innerHTML="That's right " + name + "!" + " " + "I was from Burlington, North Carolina before I came to Seattle.";
  document.getElementById('imgThree').src= "img/check.jpg";
  document.getElementById('qThree').className = "correct";
  c=1;
}
else if(w===false){
  document.getElementById('qThree').innerHTML="Sorry " + name + ". " +"I am not originally from Seattle, Washington."
  document.getElementById('imgThree').src= "img/cross.jpg";
  document.getElementById('qThree').className = "incorrect";
}

else {
 document.getElementById('imgThree').src= "img/cross.jpg";
 document.getElementById('qThree').className = "incorrect";
}

//QUESTION 4
var questionFour = parseInt(prompt(questionArray[4]));

w=question(questionFour,25,'qFour');
if(w === true){
  document.getElementById('qFour').innerHTML="That's right " + name + "!" + " " + "I am 25 years old!";
  document.getElementById('imgFour').src= "img/check.jpg";
  document.getElementById('qFour').className = "correct";
  d = 1;
}

else {
 document.getElementById('imgFour').src= "img/cross.jpg";
 document.getElementById('qFour').className = "incorrect";
}

//QUESTION 5
var questionFive = prompt(questionArray[5]);
w=question(questionFive,"no",'qFive');
if(w===true){
  document.getElementById('qFive').innerHTML="That's right " + name + "!" + " " + "I like licorice type candy, but I'm not fond of the true licorice flavor.";
  document.getElementById('imgFive').src= "img/check.jpg";
  document.getElementById('qFive').className = "correct";
  e=1;
}
else if(w===false){
  document.getElementById('qFive').innerHTML="Sorry " + name + ". " +"I don't prefer the licorice flavor."
  document.getElementById('imgFive').src= "img/cross.jpg";
  document.getElementById('qFive').className = "incorrect";
}
else {
 document.getElementById('imgFive').src= "img/cross.jpg";
 document.getElementById('qFive').className = "incorrect";
}

//QUESTION 6
var questionSix = parseInt(prompt(questionArray[6]));
w=question(questionSix,15,'qSix');
if(w === true){
  document.getElementById('qSix').innerHTML="That's right " + name + "!" + " " + "I was born on the Ides of March!";
  document.getElementById('imgSix').src= "img/check.jpg";
  document.getElementById('qSix').className = "correct";
  f = 1;
}
else {
  document.getElementById('imgSix').src= "img/cross.jpg";
  document.getElementById('qSix').className = "incorrect";
}

function total(a,b,c,d,e,f){
 return a+b+c+d+e+f;
}
document.getElementById('score').innerHTML="You got " + total(a,b,c,d,e,f) + " out of 6 correct!";
