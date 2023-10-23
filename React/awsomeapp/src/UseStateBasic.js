import './index.css';
import React ,{ useState} from 'react';

const UseStateBasic = () =>{
    let title = 'react is best';
    const changeRes = () =>{
        console.log(useState);
        // title = 'react is easy';
        // console.log(title);
    }
    return (
        <>
    <h2>Learning React Advance{title}</h2>
    <button className='btn' onClick={changeRes}>Change</button>
    </>
    );
}

export default UseStateBasic;                                                                          