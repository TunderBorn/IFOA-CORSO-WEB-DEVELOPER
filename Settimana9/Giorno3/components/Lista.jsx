import { useState } from 'react'
import {Card, Button} from 'react-bootstrap';
import Buttons from './Buttons';
// import { useEffect } from 'react';

const Lista = () => {
    const [list, setList] = useState([]);
    const [ricerca, setRicerca] = useState('');

    function search(event) {
      let value = event.target.value.toLowerCase();
      console.log(value);
      const actualState = list;
      const result = actualState.filter((book) => {
        return book.title.toLowerCase().includes(value) 
      })

      setList(result)
    }

    return (
        <>
  <input type="text"  onChange={search} />

       <Buttons setList={setList}/>

<div className='d-flex justify-content-between flex-wrap'>
    {list.map ((book) =>
        <Card style={{ width: '18rem' }} key={book.asin}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.asin + '-' + book.price + '€'}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
        )}
        </div>
        </>
    ) 
};

export default Lista;