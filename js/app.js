// Assignment 1 | COMP1073 Client-Side JavaScript

var synth = window.speechSynthesis;

var storyButton1 = document.getElementById("list1");
var storyButton2 = document.getElementById("list2");
var storyButton3 = document.getElementById("list3");
var storyButton4 = document.getElementById("list4");
var storyButton5 = document.getElementById("list5");
var storyButton6 = document.getElementById("completeStory");
var storyButton7 = document.getElementById("reset");
var storyButton8 = document.getElementById("randomStory");

const nouns1 = new Array("The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat");
const nouns2 = new Array("sat on", "ate", "danced with", "saw", "doesn't like", "kissed");
const nouns3 = new Array("a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat");
const nouns4 = new Array("goat", "monkey", "fish", "cow", "frog", "bug", "worm");
const nouns5 = new Array("on the moon.", "on the chair.", "in my spaghetti.", "in my soup.", "on the grass.", "in my shoes.");
let completeText = [5];   

var lecturatextos = function(phrases, linea, position, flag){
    var i;
  
    for (i=0;i<phrases.length;i++){
      var newquotes = phrases[Math.floor(Math.random() * phrases.length)];
      document.getElementById(linea).innerText = newquotes;
    }
	completeText[position] = newquotes;
    var utterThis = new SpeechSynthesisUtterance(newquotes);
	synth.cancel();
    if(flag == 1){
        synth.speak(utterThis);
    }else{
        var textoCorrido = completeText.toString().replaceAll(",", " ");
        speakNow(textoCorrido);
    }
    
  };



/* Functions
-------------------------------------------------- */
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

function clean() {
    document.getElementById("listBox1").innerText = "_";
    document.getElementById("listBox2").innerText = "_";
    document.getElementById("listBox3").innerText = "_";
    document.getElementById("listBox4").innerText = "_";
    document.getElementById("listBox5").innerText = "_";
    completeText = [5];
}

function randomStory() {
    for (i=1;i<=5;i++){
        var nouns;
        switch(i) {
            case 1:
              nouns =  nouns1;
              break;
            case 2:
                nouns =  nouns2;
              break;
            case 3:
                nouns =  nouns3;
              break;
            case 4:
                nouns =  nouns4;
              break;
            case 5:
                nouns =  nouns5;
                break;
          }
        var boxName = "listBox" + i; 
        
        lecturatextos(nouns,boxName, i-1,0);
      }
    
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

storyButton1.onclick = function() {
	console.log(completeText);
    lecturatextos(nouns1,"listBox1", 0,1);
}
storyButton2.onclick = function() {
	console.log(completeText);
    lecturatextos(nouns2,"listBox2", 1,1);
}
storyButton3.onclick = function() {
	console.log(completeText);
    lecturatextos(nouns3,"listBox3", 2,1);
}
storyButton4.onclick = function() {
	console.log(completeText);
    lecturatextos(nouns4,"listBox4", 3,1);
}
storyButton5.onclick = function() {
	console.log(completeText);
    lecturatextos(nouns5,"listBox5", 4,1);
}
storyButton6.onclick = function() {
	
	var textoCorrido = completeText.toString().replaceAll(",", " ");
	console.log(textoCorrido);

    speakNow(textoCorrido);
}
storyButton7.onclick = function() {
    clean();
}
storyButton8.onclick = function() {
    randomStory();
}