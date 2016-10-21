contract('SampleContract', function(accounts) {
  it("should initiate", function() {

    var codeS = CodeStorage.deployed();
    SampleContract.new(codeS.address, "testUrl").then(function(sampleC) {
      return sampleC.store().then(function() {
        codeS.getSourceByAddress.call(sampleC.address).then(function(sourceUrl) {
          assert.strictEqual(sourceUrl, "testUrl", "should set sourceUrl");
        });
      });
    });
  });
});
