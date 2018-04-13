describe('Text bill widget', function(){
   it('If the user entered call and sms once each and press the add button. The total will be R3.50', function(){
      var factRef = factory();
      factRef.calculations("call");
      factRef.calculations("sms");
      assert.equal(factRef.getter(),3.50);
   });

   it('If the user press the add button 3 times for call and 3 for sms. The total will be R10.50', function(){
      var factRef = factory();
      factRef.calculations("call");
      factRef.calculations("sms");
      factRef.calculations("call");
      factRef.calculations("sms");
      factRef.calculations("call");
      factRef.calculations("sms");
      assert.equal(factRef.getter(),10.50);
   });
});
