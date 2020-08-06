// thanks for using my code i am a 13yr/old who just started coding pls support me,hope u like it  
let div = document.getElementById('main');  // div element for inserting phrases
let next = document.getElementById('next'); // button element for new phrases

// ze array
let eightBallPhrases = ['It is certainly a yes',
'It is said that i am legend ',
'Without a doubt the authos is epic',
'Yes, why not ',
'Outlook good.',
'Outlook not so good.',
'Very doubtful.',
'without a doubt',
'Yes',
'Signs point to yes',
'Reply hazy try again',
'Ask again later',
'My sources say no.',
'Concentrate and ask again',
'Do not count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful'];

// ze functions

function randomizer(arrayCount){
  return Math.floor((Math.random() * arrayCount));
}

function eightBallMagic(array){
  return eightBallPhrases[randomizer(array.length)];
}

// element modifications

div.innerHTML = eightBallMagic(eightBallPhrases);

next.onclick = function() { // click to get a new response
  div.innerHTML = eightBallMagic(eightBallPhrases);
};
