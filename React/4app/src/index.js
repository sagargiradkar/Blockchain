import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BookList = {
  Image : "./download.jpeg",
  Title : "Blockchain Technology : Concept and application",
  Author : "Kumar Saurabh and Ashutosh Saxena"
}

const BookList1 = {
  Image : "./download.jpeg",
  Title : "Blockchain Technology : Concept and application",
  Author : "Kumar Saurabh and Ashutosh Saxena"
}

const BookList2 = {
  Image : "./download.jpeg",
  Title : "Blockchain Technology : Concept and application",
  Author : "Kumar Saurabh and Ashutosh Saxena"
}

const BookList3 = {
  Image : "./download.jpeg",
  Title : "Blockchain Technology : Concept and application",
  Author : "Kumar Saurabh and Ashutosh Saxena"
}

const BookList4 = {
  Image : "./download.jpeg",
  Title : "Blockchain Technology : Concept and application",
  Author : "Kumar Saurabh and Ashutosh Saxena"
}

function Books()
{
    return (
      <section className='booksList'>
        <Image 
        img = {BookList.Image}
        title = {BookList.Title}
        Author = {BookList.Author}>
          <p>Sagar Is Full Stack BlockChain Devloper</p>
        </Image>

<Image 
        img = {BookList1.Image}
        title = {BookList1.Title}
        Author = {BookList1.Author}></Image>

<Image 
        img = {BookList2.Image}
        title = {BookList2.Title}
        Author = {BookList2.Author}></Image>

<Image 
        img = {BookList3.Image}
        title = {BookList3.Title}
        Author = {BookList3.Author}></Image>
<Image 
        img = {BookList4.Image}
        title = {BookList4.Title}
        Author = {BookList4.Author}></Image>
      </section>
    );
}

const Image = (props) => 
{
  return (
  <article className='book'>
    <img src={props.img} alt='bookimage'></img>
    <h1>{props.title}</h1>
    <h2>{props.Author}</h2>
    <h1>{props.children}</h1>
  </article>
  )
}

ReactDOM.render(<Books/>,
document.getElementById('root'))