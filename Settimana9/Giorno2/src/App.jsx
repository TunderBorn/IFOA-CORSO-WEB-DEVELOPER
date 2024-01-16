import { useState } from 'react'
import './App.css'
import Button from '../Components/Button'
import Image from '../Components/ImageComponent'


function App() {
  const url1 = 'https://i1.sndcdn.com/avatars-000541332042-jv9fwp-t500x500.jpg';
  const url2 = 'https://ih1.redbubble.net/image.846505062.7003/raf,360x360,075,t,fafafa:ca443f4786.jpg'
  return (
    <>
      <div>
        <Image linkino={url1} tag='foto del mio stato mentale attuale'/>
        <Image linkino={url2} tag='foto del mio stato mentale attuale #2'/>
      </div>
      <h1>I miei neuroni che cercano di far funzionare React</h1>
      <div className="card">
        <Button testo='prova'/>
        <Button testo='prova 2'/>
        <Button testo='prova 3'/>
        
      </div>
      
    </>
  )
}

export default App
