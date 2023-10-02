//SPDX-License-Identifier:MIT

pragma solidity ^0.8.6;

contract Primitive_type{
    bool public bool = true;
    uint8 public u8 = 4;
    int8 public i8 = 4;
    uint16 public U16 = 200;
    uint public u256 = 1000000000; // uint - default is 256 bits

    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    address public addr = ; // 20bytes or 160 bits size length
}