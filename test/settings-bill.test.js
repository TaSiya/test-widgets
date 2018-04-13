describe('Settings bill widget', function(){

   describe('Checks if the totals are correct', function(){
      it('if the user make 2 calls and 2 sms(s)', function(){
         var referenced1 = settings();

         referenced1.calculated('call');
         referenced1.calculated('call');
         referenced1.calculated('sms');
         referenced1.calculated('sms');
         assert.equal(referenced1.getTotals(),(referenced1.getSms() + referenced1.getCall()).toFixed(2));
      });

      it('if the user make 4 calls and 4 sms(s)', function(){
         var referenced2 = settings();
         referenced2.calculated('call');
         referenced2.calculated('call');
         referenced2.calculated('sms');
         referenced2.calculated('sms');
         referenced2.calculated('call');
         referenced2.calculated('call');
         referenced2.calculated('sms');
         referenced2.calculated('sms');
         assert.equal(referenced2.getTotals(),(referenced2.getSms() + referenced2.getCall()).toFixed(2));
      });

   });

   describe('Checks if the values are updated', function(){
      it('check the call if it does update',function(){
         var referenced3 = settings();
         referenced3.calculated('call');
         referenced3.calculated('call');
         assert.equal(referenced3.getCall(),referenced3.getCallCost()*2);
      });

      it('check the sms(s) if it does update',function(){
         var referenced4 = settings();
         referenced4.calculated('sms');
         referenced4.calculated('sms');
         assert.equal(referenced4.getSms(),referenced4.getSmsCost()*2);
      });
   });

   describe('Prevent more data when critical point reached', function(){
      it('Check if it prevent further calls or sms(s) if reached critical point', function(){
         var referenced5 = settings();
         referenced5.setCrit(20);
         referenced5.calculated('call');
         referenced5.calculated('call');
         referenced5.calculated('call');
         referenced5.calculated('call');
         referenced5.calculated('call');
         referenced5.calculated('call');
         referenced5.calculated('call');
         referenced5.calculated('call');
         referenced5.calculated('call');
         referenced5.calculated('call');
         referenced5.calculated('call');

         assert.equal(referenced5.getTotals().toFixed(2),17.85)
      });

      it('Check if it prevent further calls or sms(s) if reached critical point', function(){
         var referenced6 = settings();
         referenced6.setCrit(20);
         referenced6.calculated('call');
         referenced6.calculated('call');
         referenced6.calculated('call');
         referenced6.calculated('call');
         referenced6.calculated('call');
         referenced6.calculated('call');
         referenced6.calculated('call');
         referenced6.calculated('call');
         referenced6.calculated('call');
         referenced6.calculated('call');
         referenced6.calculated('call');
         referenced6.calculated('sms');
         referenced6.calculated('sms');
         referenced6.calculated('sms');
         referenced6.calculated('sms');
         referenced6.calculated('sms');
         referenced6.calculated('sms');
         assert.equal(referenced6.getTotals(),19.8)
      });
   });





});
