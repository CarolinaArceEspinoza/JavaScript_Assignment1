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

var turkey = document.getElementById("turkey");
var mom = document.getElementById("mom");
var dad = document.getElementById("dad");
var dog = document.getElementById("dog");
var teacher = document.getElementById("teacher");
var elephant = document.getElementById("elephant");
var cat = document.getElementById("cat");

var sit = document.getElementById("sit");
var eat = document.getElementById("eat");
var dance = document.getElementById("dance");
var saw = document.getElementById("saw");
var dislike = document.getElementById("dislike");
var kiss = document.getElementById("kiss");

var funny = document.getElementById("funny");
var scary = document.getElementById("scary");
var goofy = document.getElementById("goofy");
var slimy = document.getElementById("slimy");
var bark = document.getElementById("bark");
var fat = document.getElementById("fat");

var goat = document.getElementById("goat");
var monkey = document.getElementById("monkey");
var fish = document.getElementById("fish");
var cow = document.getElementById("cow");
var frog = document.getElementById("frog");
var bug = document.getElementById("bug");
var worm = document.getElementById("worm");

var moon = document.getElementById("moon");
var chair = document.getElementById("chair");
var spaguetti = document.getElementById("spaguetti");
var soup = document.getElementById("soup");
var grass = document.getElementById("grass");
var shoes = document.getElementById("shoes");

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


  var lecturaNombre = function(phrases, position, linea, arrayPos){
    console.log(completeText);
  var newquotes = phrases[position];
  document.getElementById(linea).innerText = newquotes;
  
  completeText[arrayPos] = newquotes;
  synth.cancel();
  console.log(completeText);
  var textoCorrido = completeText.toString().replaceAll(",", " ");
    console.log(textoCorrido);
  speakNow(textoCorrido);

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
turkey.onclick = function() {
    lecturaNombre(nouns1, 0, "listBox1", 0);
}
mom.onclick = function() {
    lecturaNombre(nouns1, 1, "listBox1", 0);
}
dad.onclick = function() {
    lecturaNombre(nouns1, 2, "listBox1", 0);
}
dog.onclick = function() {
    lecturaNombre(nouns1, 3, "listBox1", 0);
}
teacher.onclick = function() {
    lecturaNombre(nouns1, 4, "listBox1", 0);
}
elephant.onclick = function() {
    lecturaNombre(nouns1, 5, "listBox1", 0);
}
cat.onclick = function() {
    lecturaNombre(nouns1, 6, "listBox1", 0);
}

sit.onclick = function() {
    lecturaNombre(nouns2, 0, "listBox2", 0);
}
eat.onclick = function() {
    lecturaNombre(nouns2, 1, "listBox2", 0);
}
dance.onclick = function() {
    lecturaNombre(nouns2, 2, "listBox2", 0);
}
saw.onclick = function() {
    lecturaNombre(nouns2, 3, "listBox2", 0);
}
dislike.onclick = function() {
    lecturaNombre(nouns2, 4, "listBox2", 0);
}
kiss.onclick = function() {
    lecturaNombre(nouns2, 5, "listBox2", 0);
}

funny.onclick = function() {
    lecturaNombre(nouns3, 0, "listBox3", 0);
}
scary.onclick = function() {
    lecturaNombre(nouns3, 1, "listBox3", 0);
}
goofy.onclick = function() {
    lecturaNombre(nouns3, 2, "listBox3", 0);
}
slimy.onclick = function() {
    lecturaNombre(nouns3, 3, "listBox3", 0);
}
bark.onclick = function() {
    lecturaNombre(nouns3, 4, "listBox3", 0);
}
fat.onclick = function() {
    lecturaNombre(nouns3, 5, "listBox3", 0);
}

goat.onclick = function() {
    lecturaNombre(nouns4, 0, "listBox4", 0);
}
monkey.onclick = function() {
    lecturaNombre(nouns4, 1, "listBox4", 0);
}
fish.onclick = function() {
    lecturaNombre(nouns4, 2, "listBox4", 0);
}
cow.onclick = function() {
    lecturaNombre(nouns4, 3, "listBox4", 0);
}
frog.onclick = function() {
    lecturaNombre(nouns4, 4, "listBox4", 0);
}
bug.onclick = function() {
    lecturaNombre(nouns4, 5, "listBox4", 0);
}
worm.onclick = function() {
    lecturaNombre(nouns4, 6, "listBox4", 0);
}

moon.onclick = function() {
    lecturaNombre(nouns5, 0, "listBox5", 0);
}
chair.onclick = function() {
    lecturaNombre(nouns5, 1, "listBox5", 0);
}
spaguetti.onclick = function() {
    lecturaNombre(nouns5, 2, "listBox5", 0);
}
soup.onclick = function() {
    lecturaNombre(nouns5, 3, "listBox5", 0);
}
grass.onclick = function() {
    lecturaNombre(nouns5, 4, "listBox5", 0);
}
shoes.onclick = function() {
    lecturaNombre(nouns5, 5, "listBox5", 0);
}



