//SPDX-License-Identifier:MIT

pragma solidity ^0.8.18;

// view function declares that no states will be changed 
// pure function declare no state will be changed or read

contract ViewPure{
    uint x = 1;

    function add(uint y) public view returns (uint){

        // We are able to read the value of x
       // x = x + 4;
        uint c = x + y;
        return c;
    }

    function addx(uint i,uint j) public pure returns(uint){
        uint d = i + j;
        return d;
    }


}

// Depoly using 0x5B3342343453abcd34 - this account stores byte code of contract
// call the function using 0xAb866868668abcdef