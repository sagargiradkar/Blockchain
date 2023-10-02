//SPDX-License-Identifier:MIT

pragma solidity ^0.8.6;

contract enum1 {
    enumFreshJuice{small.medium,large};
    FreshJuice choice;
    FreshJuice constant default = FreshJuice.medium;


    function setLarge() public{
        choice = FreshJuice.large;
    }

    function getChoice() public view returns (FreshJuice){
        return choice;
    }

    function getDefault() public view returns(uint){
        return uint(defaultChoice);
    }
}