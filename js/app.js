alert('Welcome to my domain! We\'re going to play a guessing game.. Answer each of the 5 questions with a "Yes" or "No" to continue!');

let quest1 = prompt('Are my pronouns he/him?').toLowerCase();
    if(quest1 === 'yes'){
        alert('Spot on! Next question..')
        console.log('If you answered ' + quest1 + ' then that\'s correct!');
    } else {
        alert('Turns out, I AM a he/him!')
    }

let quest2 = prompt('Am I over 30 years old?').toLowerCase();
    if(quest2 === 'yes'){
        alert('You are on fire! Should I be keeping score?');
        console.log('I really don\'t want ' + quest2 + ' to be the answer..');
    } else {
        alert('Now now, flattery will get you nowhere :P')
    }

let quest3 = prompt('Did I grow up in San Diego where it is really always sunny?').toLowerCase();
    if(quest3 === 'yes'){
        alert('Sorry not sorry, Philadelphia.. Okay, I sort of gave that one away.')
        console.log(quest3 + ', I know you want to live there too.');
    } else {
        alert('Awww, thanks for thinking of a different place, but the answer is San Diego.')
    }

let quest4 = prompt('Do I own a cat named after Patrick Swayze in the 1991 action classic "Point Break" also starring Keanu Reeves as special agent Johnny Utah and a few scenes with Red Hot Chili Peppers lead singer Anthony Kiedis?').toLowerCase();
    if(quest4 === 'yes'){
        alert('Correct! His name is Bodhi and he is very fluff. Meow brah!')
        console.log('I think if you didn\'t say ' + quest4 + ' I would have been mildly dissapointed.')
    } else {
        alert('Utah! Get me TWO more tries to answer that question because you got it wrong! That\'s okay, still cool in my books.')
    }

let quest5 = prompt('Do I have a crazy story involving Mexican federales and skateboards?').toLowerCase();
    if(quest5 === 'yes'){
        alert('Absolutely I do, but I\'ll tell that tale another time.')
        console.log('If I didn\'t answer ' + quest5 + ' would you still want to know more about me?');
    } else {
        alert('I actually do and it\'s more funny than dangerous.')
    }

yourName = prompt('Thanks for answering so many questions about me. By the way, what\'s your name?');
console.log('Seems like your name is ' + yourName + '. Welcome!');

alert('Hey there, ' + yourName + '! Did we just become best friends?!');
alert(yourName + ', I\'d like to welcome you to my site where you can learn so much more about me than some yes or no questions. Feel free to drop me a line through LinkedIn or GitHub!')


