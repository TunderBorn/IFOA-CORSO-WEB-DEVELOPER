import Button from 'react-bootstrap/Button';
import FantasyBooks from '../JSON/fantasy.json'
import HistoryBooks from '../JSON/history.json'
import HorrorBooks from '../JSON/horror.json'
import RomanceBooks from '../JSON/romance.json'
import SciFiBooks from '../JSON/scifi.json'
import { useState } from 'react';

const Buttons = ({setList}) => {
    return (
<div className='text-center m-3 p-3 '>
            <Button variant='info' className='mx-2' onClick={()=> setList(FantasyBooks)}>Fantasy</Button>
            <Button variant='warning' className='mx-2' onClick={()=> setList(HistoryBooks)}>History</Button>
            <Button variant='dark' className='mx-2'  onClick={()=> setList(HorrorBooks)}>Horror</Button>
            <Button variant='danger' className='mx-2'  onClick={()=> setList(RomanceBooks)}>Romance</Button>
            <Button variant='secondary' className='mx-2'  onClick={()=> setList(SciFiBooks)}>Sci-Fi</Button>
        </div>
    )
}
 export default Buttons