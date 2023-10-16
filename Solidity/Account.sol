//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract aCCOUNT{
    mapping (address => uint) balance;

    function addBalance(uint amt) public {
        balance[msg.sender] +=amt;
    }

    function getBalance() public view returns (uint){
        return balance[msg.sender];
    }

    function transfer(address to ,uint amount) public {
        if(balance[msg.sender] < amount){
            revert("You dont have enough balance");
        }

        require(balance[msg.sender]>amount);
        balance[msg.sender] -= amount;
        balance[to] +=amount;

    }
    }