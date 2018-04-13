describe('Radio Button bill widget', function(){
   it('test the widget if it gives correct total', function(){
      var reference = radioFact();
      reference.calculate('call');

      assert.equal(reference.getTotal2(), 2.75);
   });
});
