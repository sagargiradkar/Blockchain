//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract eventLog{
    // ebent declaration index
    //upto 3 parameters can be indexed
    //events helps you to filter logs on the blockchain

    event Log(address indexed sender,string message);
    event Event2();

    function testEventWorking() public {
        emit Log(msg.sender, "Blockchain is owesome");
        emit Log(msg.sender,"User created successfully !!!");
        emit Event2();
    }
}