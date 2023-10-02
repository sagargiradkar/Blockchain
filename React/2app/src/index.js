import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
function Ineuron()
{
  return (
    <div className='sagar'>
      <Blockchain/>
      <ReactJS/>
      <Blockchain/>
      <ReactJS/>
      <Blockchain/>
      <ReactJS/>
      <Blockchain/>
      <ReactJS/>
      <Blockchain/>
      <ReactJS/>
      <Blockchain/>
      <ReactJS/>
      <Blockchain/>
      <ReactJS/>
      <Blockchain/>
      <ReactJS/>
    </div>
  )


}
const Blockchain = () =>{
  return (
    <div>
      <h1>iNeuron Bengluru</h1>
      <h4>BlockChain + React is Deadly</h4>
    </div>
  )};

  const ReactJS = () => {
    return (<h1>Hello Welcome to the World Of React js Components</h1>)
  }

  

ReactDOM.render(<Ineuron/>,
document.getElementById('root'));