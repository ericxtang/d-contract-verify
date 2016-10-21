pragma solidity ^0.4.2;

import "CodeStorage.sol";

contract SampleContract {
  address csAddr;
  string sourceUrl;

  function SampleContract(address _csAddr, string _sourceUrl) {
    csAddr = _csAddr;
    sourceUrl = _sourceUrl;
  }

  function store() returns (bool) {
    CodeStorage(csAddr).storeSourceByAddress(this, sourceUrl);
  }
}
