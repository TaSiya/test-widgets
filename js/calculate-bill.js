
//get a reference to the calculate button
var calculateBtn = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
var billTotal = document.querySelector('.billTotal');
//get a reference to the billString
var billString = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element


//link the function to a click event on the calculate button

function calculateBtnClicked(){

   billTotal.classList.remove("warning");
   billTotal.classList.remove("danger");

   var billList = billString.value;
   var tot = calculateBillEvent(billList);

   billTotal.textContent = tot;

   if(tot > 20 && tot <= 30){
      billTotal.classList.add("warning");
   }
   else if(tot > 30){
      billTotal.classList.add("danger");
   }
}

function calculateBillEvent(billList){
   var total = 0 ;
   var calls = 0;
   var smss = 0
   var bills = billList.split(',');
   for(var i= 0 ; i < bills.length ; i++ ){
      if(bills[i].startsWith('c')){
         calls += 2.75;
      }
      else if(bills[i].startsWith('s')){
         smss += 0.75;
      }
   }
   total = calls + smss;
   return total.toFixed(2);
}

calculateBtn.addEventListener('click', function(){
   calculateBtnClicked();
});
