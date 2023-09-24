let who = ['The dog ', 'My grandma ', 'His turtle ', 'My bird '];
let action = ['ate ', 'peed ', 'crushed ', 'broke '];
let what = ['my homework ', 'the keys ', 'the car '];
let when = ['before the class ', 'right on time ', 'when I finished ', 'during my lunch ', 'while I was praying '];

function createExcuse(){
    var randomIndexWho = Math.floor(Math.random()*who.length);
    var randomIndexAction = Math.floor(Math.random()*action.length);
    var randomIndexWhat = Math.floor(Math.random()*what.length);
    var randomIndexWhen = Math.floor(Math.random()*when.length);

    document.getElementById("excuse").innerHTML = who[randomIndexWho] + action[randomIndexAction] + what[randomIndexWhat] + when[randomIndexWhen];
}