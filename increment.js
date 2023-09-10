var incrementButton = document.getElementsByClassName('inc'); 
var decrementButton = document.getElementsByClassName('dec'); 
    

   for(var i = 0; i < incrementButton.length; i++){
       var button = incrementButton[i];
       button.addEventListener('click' ,function(event){

        var buttonClicked =  event.target;
        var input = buttonClicked.parentElement.children[2];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        input.value = newValue;
       })
    }
    for(var i = 0; i < decrementButton.length; i++){
        var button = decrementButton[i];
        button.addEventListener('click' ,function(event){
 
         var buttonClicked =  event.target;
         var input = buttonClicked.parentElement.children[2];
         var inputValue = input.value;
         var newValue = parseInt(inputValue) - 1;
         input.value = newValue;
         if(newValue >= 0){
            input.value = newValue;
         }
         else{
            alert('GIVEN NO IS LESS THAN 0')
         }
        })
     }
     