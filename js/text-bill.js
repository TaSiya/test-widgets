// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var addToBillBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector('.callTotalOne');
var smsTotalOne = document.querySelector('.smsTotalOne');
var totalOne = document.querySelector('.totalOne');


//add an event listener for when the add button is pressed
addToBillBtn.addEventListener('click', function(){
   text_Dom();
});
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var factRef = factory();
function text_Dom(){

   var flo =(billTypeText.value);
   factRef.calculations(flo);
   var answer = factRef.getter();

   smsTotalOne.textContent = factRef.getSmss();
   callTotalOne.textContent = factRef.getCalls();


   if(answer > 30 & answer < 50){totalOne.classList.add("warning");}
   else if (answer > 50){totalOne.classList.add("danger");}
   totalOne.textContent = answer.toFixed(2);
}

function factory(){
   var call1 = 0.00 ;
   var sms1 = 0.00 ;
   var total1 = 0.00 ;

   function text_bill(bill){
      if(bill === 'sms'){
         sms1 = sms1 + 0.75 ;
      }
      else if(bill=== 'call'){
         call1 = call1 + 2.75
      }
      total1 = sms1 + call1;
   }

   function getTotal(){
      return total1 ;
   }

   function getCall(){
      return call1;
   }

   function getSms(){
      return sms1;
   }

   return{
      calculations : text_bill,
      getter : getTotal,
      getCalls : getCall,
      getSmss : getSms
   }
}
