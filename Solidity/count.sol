//SPDX-License-Identifier:MIT

pragma solidity ^0.8.3;

contract Counter{
    uint public count; 

    function get() public view returns (uint){
        return count;
    }
    
    function inc() public{
        count++;
    } 
         //unsigned int(0- )
    function dec() public {
        count--;
    }
}