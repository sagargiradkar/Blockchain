//SPDX-License-Identifier:MIT

pragma solidity ^0.8.18;

contract gas1{
    uint public i = 0;

    function returnForever() public {
        while(true){
            i = i + 1;//infinte loop

        }
    }
}

