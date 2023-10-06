//SPDX-License-Identifier:MIT

pragma solidity ^0.8.6;

contract learnMap{
    // mapping of address to uint
    // Mapping is a user defined data structure
    mapping (address => uint)public myMap1;

    function get(address _addr) public view returns (uint){
        return myMap1[_addr];
    }

    function set(address _addr,uint _i) public {
        // square bracket data is key

        myMap1[_addr] = _i;
    }

}