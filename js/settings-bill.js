// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings');
// get refences to all the settings fields
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');

var callCostSetting = document.querySelector('.callCostSetting');
var smsCostSetting = document.querySelector('.smsCostSetting');
var warningLevelSetting = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector('.criticalLevelSetting');
//get a reference to the add button
var settingBtnAdd = document.querySelector('.settingBtnAdd');
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector('.updateSettings');
// create a variables that will keep track of all the settings
var referenceSettings = settings();
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', function(){
   callCostTemp = parseFloat(callCostSetting.value);
   referenceSettings.setCritical(callCostTemp);
   smsCost = parseFloat(smsCostSetting.value);
   warning = parseFloat(warningLevelSetting.value);
   critical = parseFloat(criticalLevelSetting.value);
   color();
});
//add an event listener for when the add button is pressed
settingBtnAdd.addEventListener('click', function(){
   settings_Dom();
   color();
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function color(){
   if(referenceSettings.getTotals() <= warning){
      totalSettings.classList.remove('warning');
   }
   if(referenceSettings.getTotals() >= warning  & referenceSettings.getTotals() <critical){
      totalSettings.classList.add("warning");
   }
   else if (referenceSettings.getTotals() >= critical){
      totalSettings.classList.add("danger");
   }
}


function settings_Dom(){
   var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
   if (checkedRadioBtn){
      var billItemSettings = checkedRadioBtn.value;

      referenceSettings.calculated(billItemSettings);

      callTotalSettings.textContent = referenceSettings.getCall().toFixed(2);
      smsTotalSettings.textContent = referenceSettings.getSms().toFixed(2);
      totalSettings.textContent = referenceSettings.getTotals();
   }
}

function settings(){
   var call = 0;
   var sms = 0;
   var total = 0;

   var callCost = 2.55 ;
   var smsCost = 0.65;
   var warning = 30.00;
   var critical = 65.00;

   function settings_Bill(value){
      if(total > critical){

      }
      else{
         if(value === 'call'){
            call = call + callCost;
         }
         else if (value === 'sms'){
            sms = sms + smsCost;
         }
         total = (call + sms).toFixed(2);
         if(total > critical){
            if(value === 'call'){
               total -= callCost;
               call -= callCost;

            }
            else if (value === 'sms'){
               total -= smsCost;
               sms -= smsCost;
            }
         }
      }
   }

   function getTotal(){return total;}
   function getCalls(){return call;}
   function getSmses(){return sms;}
   function getCallCost(){return callCost;}
   function getSmsCost(){return smsCost;}
   function getWarning(){return warning;}
   function getCritical(){return critical;}

   function setCritical(value){
      critical = value;
   }

   return {
      calculated : settings_Bill,
      getTotals : getTotal,
      getCall : getCalls,
      getSms : getSmses,
      getCallCost : getCallCost,
      getSmsCost : getSmsCost,
      getWarningLevel : getWarning,
      getCriticalLevel : getCritical,
      setCrit : setCritical

   }
}
