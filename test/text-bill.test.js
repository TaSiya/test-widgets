describe('Text bill widget', function(){
   it('Testing the given value will result in certain value', function(){
      var factRef = factory();
      factRef.calculations("call");
      assert.equal(factRef.getter(),2.75);
   });
});
