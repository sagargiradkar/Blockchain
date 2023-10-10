//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract ArrayDemo{
    uint[] public nums = [5,6,7,8,9,10];
    uint[4] public fixedNums;

    function getValues() public view returns (uint[] memory){
        return nums;
    }

    // function getValues1() public view returns (uint[4] memory){
    //     return nums;
    // }

    function getLength() public view returns (uint){
        return nums.length;
    }
    function addNum(uint num) public {
        nums.push(num);
    }
    function removeNum() public {
        nums.pop();
    }

    function removeAtIndex(uint index) public {
        delete nums[index];
    }}
