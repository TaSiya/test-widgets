describe('Radio Button bill widget', function(){
   it('If the user made or selected the call radio button 9 times and made 1 sms', function(){
      var reference = radioFact();
      reference.calculate('call');
      reference.calculate('call');
      reference.calculate('call');
      reference.calculate('call');
      reference.calculate('call');
      reference.calculate('call');
      reference.calculate('call');
      reference.calculate('call');
      reference.calculate('call');
      reference.calculate('sms');
      assert.equal(reference.getTotal2(), 25.50);
   });

   it('If the user made or selected the call radio button 4 times and made 2 sms', function(){
      var reference = radioFact();
      reference.calculate('call');
      reference.calculate('call');
      reference.calculate('call');
      reference.calculate('sms');
      reference.calculate('sms');
      assert.equal(reference.getTotal2(), 9.75);
   });
});
