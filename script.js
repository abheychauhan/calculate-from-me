let inp = document.querySelector("input")
buttons = document.querySelectorAll("button")
var inputValue = ""
buttons.forEach((btn) => {

btn.addEventListener('click',function(e){


   if(e.target.innerHTML == '='){
     inputValue = eval(inputValue);
     inp.value =  inputValue;
   }
   else if(e.target.innerHTML == 'C'){
    inputValue = "";
    inp.value =  inputValue;

   }
   else{
      
   inputValue = inputValue + e.target.innerHTML;
   inp.value =  inputValue;
   }
   
})
});
