//SPDX-License-Identifier:MIT

pragma solidity ^0.8.6;

contract structure{
    struct Book{
        string title;
        string author;
        uint bookId;
        uint price;

    }

// define a struct - name of the struct variable to represent the struct
    Book book;

    function setBook() public {
        book = Book("Blockchain for begineers","Ineuron",4,10100);
    }

    function getBookId() public view returns(uint){
        return book.bookId;
    }

    // function getBookName() public view returns(string){
    //     return book.title;
    // }


}