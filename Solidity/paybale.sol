//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract Payable {
    address payable public owner;


    //paybable constructor ca receive ether
    constructor() payable {
        owner = payable (msg.sender);
    }

    //This function can receive ether
    function deposit() public payable{}


    //this cannot accept ethers
    function nonPayble() public{}

    function withdraw() public {
        uint amount = address(this).balance;
        (bool success,) = owner.call{value:amount}("amount withdraw from smart contract");
        require(success,"Failed to receive ether");

    }

    function transfer(address payable _to,uint amount) public {
    }
}