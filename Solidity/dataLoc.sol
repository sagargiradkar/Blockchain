//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract DataLocal{
    string AccountName = "Ineuron";
    string AccountName1 = "Ineuron";
    string AccountName2 = "Ineuron";
    string AccountName3 = "Ineuron";
    string AccountName4 = "Ineuron";
    string AccountName5 = "Ineuron";
    string AccountName6 = "Ineuron";
    string AccountName7 = "Ineuron";
    string AccountName8 = "Ineuron";

    function displayAccName()public view returns(string memory){
        string storage newVariable;
         string storage newVariable1;
          string storage newVariable2;
           string storage newVariable3;
            string storage newVariable4;
             string storage newVariable5;
              string storage newVariable6;
               string storage newVariable7;
        return AccountName;

    }
}