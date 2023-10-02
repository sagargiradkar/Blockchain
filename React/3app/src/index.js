import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Ineuron(){
  return (
    <div className='sagar'>
      <h1 className='s'>Books List is</h1>
      <Image />
      <Title/>
      <Author/>
      <Title/>
      <Author/>
      <Title/>
      <Author/>
      <Title/>
      <Author/>
      <Title/>
      <Author/>
      <Title/>
      <Author/>
      <Title/>
      <Author/>
    </div>
  )
}

const Image = () =>{
  return (
    <div>
    <img className='i' src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Teaser1_2/J23_T2_PC_Rec_Header_V2.jpg'></img>
    </div>)
}
const Title = () =>{
  return (<h2>Master the bitcoin and blockchain</h2>)
}

const Author = () => {
  return (
    <h2>
      Anatomy, Marvin, Darveen
    </h2>
  )
}

ReactDOM.render(<Ineuron/>,
document.getElementById('root'));