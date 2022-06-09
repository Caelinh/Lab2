'use strict'


let userName = prompt("What is your name? Get to know me a bit...");
console.log(userName);
document.write("Hello " + userName + " A " + "few " + "things " + "about " + "me...");


function Questions(){

let question1 = prompt("Hi! Was I a ballet dancer?");
if (question1 == "yes"){
    alert("Your right!")
}else(question1 == "no"){
    alert("You're wrong");
}

//     if (confirm("Hi! Was I a ballet dancer?")){
//     alert("You are right, I was!");
// } else { alert("I actually was!");
}


if (prompt("Do I have a daughter?")){
    alert("Yes, she is the light of my life");
} else { alert("I am glad you are wrong!");
}

if (confirm("Do I love sports?")){
    alert("Nope.");
} else { alert("Never been a fan");
}

if (confirm("Do I love to swim?")){
    alert("I am a fish!");
} else { alert("Take me to the water!");
}

if (confirm("Do I love coding?")){
    document.write("YES! I am happy to be learning to code!");
} else { document.write("Wrong answer, I love coding!");
    
}
    

    let dog = [''];
prompt('how many dogs do i have between 1-4?');
if ('2') {
    alert("yes!");
} else { alert("no, try again!");
}

}
Questions();


let questions = [
    'Where did I grow up?',
    'How many dogs do I have?',
    'Am I a Sagittarius?'
];

let answers = [
    "SEATTLE",
    "2",
    "YES"
]

let responses = [];
for (let i =0; i < questions.length; i++) {
     responses[i] = prompt(questions[i]).toUpperCase();
     checkAnswers(i);
    
}
console.log("responses", responses);

function checkAnswers(qNumber){
    if (responses[qNumber] === answers[qNumber] ){
        alert("you got it right");
    } else alert("You're wrong")
    }
// let manyDogs = prompt('How many dogs do you have?');

// let nnumber = manyDogs
//  for (let i = 0; i < manyDogs; i++) {
//       alert(number);
//    console.log('I' + 'have' + [i+1] + 'dogs');
//  } 







