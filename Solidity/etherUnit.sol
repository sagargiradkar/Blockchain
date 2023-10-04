//SPDX-License-Identifier:MIT

pragma solidity ^0.8.18;

contract EtherUnits{
    //wei keyword is used for Ether units
    uint public OneWei = 1 wei;
    bool public isOneWei = 1 wei ==1;

    uint public oneEther = 0.0003 ether;

    // divided in 2 parts 
    // first part - assign the evalueted expression to their variable
    bool public isOneEther = 1 ether == 1;
}