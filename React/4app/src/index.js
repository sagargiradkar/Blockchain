import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Book()
{
    return (
      <section>
        <Title/>
        <Author/>
        <Image/>
      </section>
    );
}

const Title = () => <h2>Blockchain Tecknology:Concept and application</h2>;

const Author = () => <h2>Kumar Saurabh and Ashutosh Saxena</h2>;

const Image = () => {
  <img src='https://www.amazon.in/Blockchain-Technology-IM-Kumar-Saurabh/dp/8126557664/ref=sr_1_4?crid=1WTYJOBDLT2RX&keywords=blockchain+book&qid=1696234664&sprefix=blockchain+boo%2Caps%2C433&sr=8-4'></img>
}

ReactDOM.render()