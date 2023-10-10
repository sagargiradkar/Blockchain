//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract Function{

    //function to return multiple values
    function returnMultiple() public pure returns(uint,bool,uint){
        return (5,false,10);
    }
    
    function returnNamed() public pure returns (uint x ,bool b,int y ){
        return (1,true,-5);
    }

    function AssignValues() public pure returns(uint x ,bool b,int y){
        x = 30;
        b = false;
        y = -50;

        return (x,b,y);
    }

    function destructuring() public pure returns(uint,bool,uint,uint,uint){
        (uint i,bool b,uint j) = returnMultiple();
        (uint x,uint m ,uint y) = (10,15,20);
        return (i,b,j,x,m);
    }

    
}

contract secondFunction{
    function SecondFunctionContract(uint x, uint y , uint z,address a, bool b,string memory c) 
    public pure returns(uint){}

    function callFunction() external  view returns(address){
         return (msg.sender);
    } 
}

contract thirdFunction{
    function ThirdFuncContractfunction(uint x, uint y , uint z,address a, bool b,string memory c) 
    public pure returns(uint){
        return (10);
    }

    function callFunction() external view returns(uint){
        return ThirdFuncContractfunction({a: address(0),b:true, c:"hello",x:1,y:2,z:3});
    }
}