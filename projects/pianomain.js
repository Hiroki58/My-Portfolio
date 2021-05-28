// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'high-d-key' , 'high-e-key' , 'high-f-key' , 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key' , 'high-c-sharp-key' , 'high-d-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = function(event){
  event.target.style.backgroundColor = 'red'
}

const keyReturn = function(event){
  event.target.style.backgroundColor = '';
}

// Write a named function with event handler properties

function activateKey(note){
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
}


// Write a loop that runs the array elements through the function
notes.forEach(activateKey);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;

  document.getElementById('letter-note-five').innerHTML = 'レ';

  document.getElementById('letter-note-six').innerHTML = 'ド';
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function(){
  nextThree.hidden = false;
  nextTwo.hidden = true;

  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  document.getElementById('word-optional').innerHTML = 'END';
  lastLyric.style.display = 'inline-block';

  document.getElementById('letter-note-three').innerHTML = 'ミ';
  document.getElementById('letter-note-four').innerHTML = 'レ';
  document.getElementById('letter-note-five').innerHTML = 'ド';
  document.getElementById('letter-note-six').innerHTML = 'シ';
  document.getElementById('letter-note-optional').innerHTML = 'ラ';

}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function(){
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  lastLyric.style.display = 'none';


  document.getElementById('letter-note-one').innerHTML = 'ファ';
  document.getElementById('letter-note-two').innerHTML = 'ファ';
  document.getElementById('letter-note-three').innerHTML = '<br>ミ';
  document.getElementById('letter-note-four').innerHTML = '<br>ド';
  document.getElementById('letter-note-five').innerHTML = 'レ';
  document.getElementById('letter-note-six').innerHTML = 'ド';

}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'ソ';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'ソ';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'ラ';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'ソ';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'ド';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'シ';

  lastLyric.style.display = 'none';
}

document.getElementById("c-key").addEventListener("click", function () {
    document.getElementById("c3").play();
  });

document.getElementById("c-sharp-key").addEventListener("click", function () {
    document.getElementById("c-3").play();
  });

document.getElementById("d-key").addEventListener("click", function () {
    document.getElementById("d3").play();
  });

document.getElementById("d-sharp-key").addEventListener("click", function () {
    document.getElementById("d-3").play();
  });

document.getElementById("e-key").addEventListener("click", function () {
    document.getElementById("e3").play();
  });

document.getElementById("f-key").addEventListener("click", function () {
    document.getElementById("f3").play();
  });

document.getElementById("f-sharp-key").addEventListener("click", function () {
    document.getElementById("f-3").play();
  });

document.getElementById("g-key").addEventListener("click", function () {
    document.getElementById("g3").play();
  });

document.getElementById("g-sharp-key").addEventListener("click", function () {
    document.getElementById("g-3").play();
  });

document.getElementById("a-key").addEventListener("click", function () {
    document.getElementById("a4").play();
  });

document.getElementById("a-sharp-key").addEventListener("click", function () {
    document.getElementById("a-4").play();
  });

document.getElementById("b-key").addEventListener("click", function () {
    document.getElementById("b4").play();
  });

  document.getElementById("high-c-key").addEventListener("click", function () {
    document.getElementById("c4").play();
  });

document.getElementById("high-c-sharp-key").addEventListener("click", function () {
    document.getElementById("c-4").play();
  });

document.getElementById("high-d-key").addEventListener("click", function () {
    document.getElementById("d4").play();
  });

document.getElementById("high-d-sharp-key").addEventListener("click", function () {
    document.getElementById("d-4").play();
  });

document.getElementById("high-e-key").addEventListener("click", function () {
    document.getElementById("e4").play();
  });

document.getElementById("high-f-key").addEventListener("click", function () {
    document.getElementById("f4").play();
  });
