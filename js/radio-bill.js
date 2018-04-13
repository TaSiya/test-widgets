// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var callTotalTwo = document.querySelector('.callTotalTwo');
var smsTotalTwo = document.querySelector('.smsTotalTwo');
var totalTwo = document.querySelector('.totalTwo');


//add an event listener for when the add button is pressed

radioBillAddBtn.addEventListener('click', function(){
   radio_bill_Dom();
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var refRadioFact = radioFact();
function radio_bill_Dom(){
   var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;

      refRadioFact.calculate(billItemType);

   }

   callTotalTwo.textContent = refRadioFact.getCall2();
   smsTotalTwo.textContent = refRadioFact.getSms2();
   totalTwo.textContent = refRadioFact.getTotal2();

   if(refRadioFact.getTotal2() > 30 & refRadioFact.getTotal2() <= 50){
      totalTwo.classList.add("warning");
   }
   else if (refRadioFact.getTotal2() > 50){
   totalTwo.classList.add("danger");
   }
}

function radioFact(){
   var call2 = 0.00 ;
   var sms2 = 0.00 ;
   var total2 = 0.00 ;

   function radio_bill(value){
      if(value === 'call'){
         call2 = call2 + 2.75;
      }
      else if (value === 'sms'){
         sms2 = sms2 + 0.75;
      }
      total2 = call2 + sms2 ;
   }

   function getBill(){
      return total2;
   }

   function getCall(){
      return call2;
   }

   function getSms(){
      return sms2;
   }

   return {
      calculate : radio_bill,
      getTotal2 : getBill,
      getCall2 : getCall,
      getSms2 : getSms
   }
}
