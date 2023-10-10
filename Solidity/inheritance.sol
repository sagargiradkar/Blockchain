//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract computer{
    function show() public pure returns (string memory){

        return "8gb , M1 , 512gb ";
    }
}


contract Laptop is computer {

}