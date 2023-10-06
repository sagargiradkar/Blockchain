//SPDX-License-Identifier:MIT

pragma solidity ^0.8.6;

contract loops{

    // array in Solidity
    // Solidity does not allow print statement by default

    uint [] data;
    uint8 j = 0;
    function loop1() public returns(uint[] memory){
        while(j<20){
            j++;
            data.push(j);
        }
        return  data;
    }
}