//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract Sendin{
    function sendEtherTransfer( address payable _to) public payable {
        // this is not reccommended
        _to.transfer(msg.value);
    }
    function SendEtherSend(address payable  _to) public payable {
        bool sent = _to.send(msg.value);
        require(sent,"Failed To Send Ether");
    }
    function SendEtherCall(address payable _to) public payable {
        (bool sent,) = _to.call{gas:10000,value:msg.value}("");
        require(sent,"Failed to send ether");
    }
}