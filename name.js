var firstName = ["aravind","sunny","aparna","srinivasarao","sujatha",
                 "mahesh","suresh","kalavathi","swapna","santosh","sathya","suresh"];

var lastName = ["lanka","p","p"];
function getName(){
    var randomName = firstName[Math.floor(Math.random() * firstName.length)] + ''+ lastName[Math.floor(Math.random() *lastName.length)];
    return randomName;
}
function nameQty(){
    var userQty = document.querySelector('.qty').value;
    document.querySelector('nameList').innerHTML = '';
    if(userQty > 30 ) {
        document.querySelector('nameList').innerHTML = 'ONLY 10 NAMES CAN GENERATE';
    }
    else{
        for(var i = 0; i < userQty; i++)
        document.querySelector('nameList').innerHTML += getName() + '<br>';
    }
}