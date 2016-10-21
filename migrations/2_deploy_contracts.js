module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.autolink();
  // deployer.deploy(MetaCoin);
  deployer.deploy(CodeStorage).then(function() {
    deployer.deploy(SampleContract, CodeStorage.address, "https://gist.githubusercontent.com/ericxtang/d3e91bdad83b550dc26365cbfcc17369/raw/f8ab62f4e34f21b05642781a0ee357f66668e860/SampleContract.sol").then(function() {
      SampleContract.deployed().store();
    });
  });
};
