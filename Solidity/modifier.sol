//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract AZ
{
    uint public num;
    constructor(uint _num){
        num = _num;
    }

    modifier check(uint _num){
         if(_num >= 5){
            _;
         }
    }
    function update(uint _num) public {
       
        num = num + _num;
    }
}



