
describe('Calculate bill widget test', function(){
   it('Checks if the given calls and sms will give correct total.', function(){
      assert.equal(calculateBillEvent('call,sms'),3.50);
   });
   it('Checks if the given calls and sms will give correct total.', function(){
      assert.equal(calculateBillEvent('call,sms,call,sms,call'),9.75);
   });
});
