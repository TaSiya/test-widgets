describe('Settings bill widget', function(){
   it('if the user make 2 calls and 2 sms(s)', function(){
      var referenced = settings();

      referenced.calculated('call');
      referenced.calculated('call');
      referenced.calculated('sms');
      referenced.calculated('sms');
      assert.equal(referenced.getTotals(),(referenced.getSms() + referenced.getCall()).toFixed(2));
   });

   it('if the user make 4 calls and 4 sms(s)', function(){
      var referenced = settings();

      referenced.calculated('call');
      referenced.calculated('call');
      referenced.calculated('sms');
      referenced.calculated('sms');
      referenced.calculated('call');
      referenced.calculated('call');
      referenced.calculated('sms');
      referenced.calculated('sms');
      assert.equal(referenced.getTotals(),(referenced.getSms() + referenced.getCall()).toFixed(2));
   });
});
