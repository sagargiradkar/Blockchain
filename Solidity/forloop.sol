//SPDX-License-Identifier:MIT

pragma solidity ^0.8.6;

contract forloop{
    uint [] data;
    function forLoop() public returns (uint[] memory){
        for(uint i=1 ; i<=15 ;i++){
            data.push(i);
        }
        return data;
    }
}