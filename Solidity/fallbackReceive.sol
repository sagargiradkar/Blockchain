//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract FallbackReceive
{
    string public called = " ";
    uint public amount = 0;
    bytes public data ;

    receive() external payable 
    { 
        called = "receive";
        amount = msg.value;
    }

    fallback() external payable 
    {
        called = "fallback";
        amount = msg.value;
        data = msg.data;
    }
}

constant B{

}