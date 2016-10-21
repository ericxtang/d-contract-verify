pragma solidity ^0.4.2;

contract CodeStorage {

  mapping (address => string) contractMap;

  modifier onlyContract(address _addr) {
    if (_addr != msg.sender) {
      throw;
    }
    _;
  }

  function getSourceByAddress(address _addr) constant returns (string sourceUrl) {
    return contractMap[_addr];
  }

  function storeSourceByAddress(address _addr, string _sourceUrl) onlyContract(_addr) returns (bool) {
    contractMap[_addr] = _sourceUrl;
  }


}