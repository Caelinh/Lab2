'use strict'


let userName = prompt("What is your name?");
console.log(userName);
document.write("Hello " + userName + " A " + "few " + "things " + "about " + "me...");



if (confirm("Was I a ballet dancer?")){
    alert("You are right, I was!");
} else { alert("I actually was!");
}

if (confirm("Do I have a daughter?")){
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

