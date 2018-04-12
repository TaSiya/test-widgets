// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var callTotalTwo = document.querySelector('.callTotalTwo');
var smsTotalTwo = document.querySelector('.smsTotalTwo');
var totalTwo = document.querySelector('.totalTwo');

var call2 = 0.00 ;
var sms2 = 0.00 ;
var total2 = 0.00 ;
//add an event listener for when the add button is pressed

radioBillAddBtn.addEventListener('click', function(){
   radio_bill();
   if(total2 > 30 & total2 <= 50){
      totalTwo.classList.add("warning");
   }
   else if (total2 > 50){
   totalTwo.classList.add("danger");
   }
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function radio_bill(){
   var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
   }
   if(billItemType === 'call'){
      call2 = call2 + 2.75;
   }
   else if (billItemType === 'sms'){
      sms2 = sms2 + 0.75;
   }
   total2 = call2 + sms2 ;
   callTotalTwo.textContent = call2.toFixed(2);
   smsTotalTwo.textContent = sms2.toFixed(2) ;
   totalTwo.textContent = total2.toFixed(2);
}
