//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract A{
    function doSomethings() external  {
        //revert();
    }
}

contract B{
    A a = new A();
    string public status = "Not Available";
    function go() public {
        try a.doSomethings(){
            status = "Success";
        }
        catch {
            status = "Fail";
        }
        a.doSomethings();
    }
}