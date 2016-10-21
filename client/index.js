var Web3 = require("web3")
var solc = require("solc");

// var sampleContractAddr = "0xa55ebd6fa73dfe023edcdbd694811fefd932a0d4";
// var sampleContractAbi = 

var web3 = new Web3();

var codeStorageAddr = "0x7dce64739b499f1fca8c412bbc8de3113269975c";
var codeStorageAbi = [{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"getSourceByAddress","outputs":[{"name":"sourceUrl","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_sourceUrl","type":"string"}],"name":"storeSourceByAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}];
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.defaultAccount = web3.eth.accounts[0];


var codeStorageContract = web3.eth.contract(codeStorageAbi).at(codeStorageAddr);
var contractAddr = "0xd349bbb14d651e473e4b82b0be21e5de86ff8b92";

// console.log(codeStorageContract.getSourceByAddress);

function storeSource() {

}

function getSource() {
  // console.log(web3.eth.getBalance(contractAddr));
  codeStorageContract.getSourceByAddress.call(contractAddr).then(function(sourceUrl) {
    console.log("getSource");
    console.log(sourceUrl);

  });

}

getSource();
