
function getMatch(match) {
      return {
        1 : ' are Friends',
        2 : 'are Lovers',
        3 : 'have Affections',
        4 : 'will Marry',
        5 : 'are Enemy',
        6 : 'are Secret Lover'
      }[match];
}
getMatch();
const arr = [];
const randomTime = Math.floor(Math.random() * (7000 - 3000 + 1) + 3000);
const inputs = document.querySelectorAll('.inputBox input');
const checkMatchBtn = document.getElementById('checkMatchBtn');
const tryAgainBtn =  document.getElementById('tryAgainBtn');
const matchResultBox = document.querySelector('.matchResultBox');


checkMatchBtn.addEventListener('click',(e)=>{
    //getting names
    var userName = document.getElementById('userName').value;
    var crushName = document.getElementById('crushName').value;
    //validate names
    if(userName.length < 3 || crushName.length < 3) {
        matchResultBox.innerHTML = 'Nmae must be greater than 2 characters';
        matchResultBox.classList.add('visible');
        return;
    }
    //show loader gif
    checkMatchBtn.querySelector('span').style.display = 'block';
    checkMatchBtn.querySelector('img').style.display = 'none';
    //getting both names
    var bothNames = userName+crushName;
    //check for repeated characters
    const nameArray = [...bothNames].sort();
    const repeatedChars = [];
    for(let i = 0; i < nameArray.length - 1; i++){
        if(nameArray[i] === nameArray[i+1]) repeatedChars.push(nameArray[i]);
    }
    //getting repeated characters array
    const repeatedCharsArray =  [...new Set(repeatedChars)];
    //empty name array
    arr = [];
    //getting all characters of both names 
    for(let i = 0; i < bothNames.length; i++){
    arr.push(bothNames.charAt(i));
    //now remove repeated characters
    for(let j = 0; j < repeatedCharsArray.length; j++){
         arr = arr.filter(e => e !== repeatedCharsArray[j]);
    }
}
//getting array valueaftervremoving
var finalName = arr.join('').toString();//converting array into string
//getting name length that is most important
var finalNameLeght = arr.join('').toString().length;
//print match on final name length
if(finalNameLeght > 6) {
    var remainingLenght = finalNameLeght - 6;
    setTimeout(function(){
        //hide loader after 3 seconds
        checkMatchBtn.querySelector('span').style.display = 'block';
        checkMatchBtn.querySelector('img').style.display = 'none';
        matchResultBox.innerHTML = userName + 'and' + crushName + '' + getMatch(remainingLenght);
        matchResultBox.classList.add('visible');
         //show try agin button
         tryAgainBtn.style.display = 'block';
         //hide match again button
         checkMatchBtn.style.display = 'none';
    },randomTime)
}
else{
    setTimeout(function(){
        //hide loader after 3 seconds
        checkMatchBtn.querySelector('span').style.display = 'block';
        checkMatchBtn.querySelector('img').style.display = 'none';
        matchResultBox.innerHTML = userName + 'and' + crushName + '' + getMatch(finalNameLeght);
        matchResultBox.classList.add('visible');
        //show try agin button
        tryAgainBtn.style.display = 'block';
        //hide match again button
        checkMatchBtn.style.display = 'none';
    },randomTime)
}
})
tryAgainBtn.addEventListener('click',()=> {
    location.reload();
})