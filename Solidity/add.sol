//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

// 
// abstract contract CalcTemplate 
// {
//     function op() public returns(uint); // abstract functions which are oln

//     function getValue() public pure returns (uint)
//     {
//         return 1;
//     }
// }

interface CalcTemplate 
{
    function op() external  returns(uint); // abstract 

}

contract Add is CalcTemplate
{
    uint public num1;
    uint public num2;

    function op() public view override  returns (uint)
    {
        return num1 + num2;
    }
}