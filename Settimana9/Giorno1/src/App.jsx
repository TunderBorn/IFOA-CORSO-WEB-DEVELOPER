
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../components/button'
import ButtonClass from '../components/ButtonClass'
import CardCustom from '../components/CardCustom'
import { useEffect } from 'react'
import './App.css'

function App() {
  let newTitle = 'React Base App';

  const retrievePageTitle = (data) => {
    newTitle = data;
  }

  useEffect(() => {
    document.title = newTitle;
  }, [newTitle]);

  const initialCounter = 5;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <Button count={initialCounter} changePageTitle={retrievePageTitle}/>
       <ButtonClass count={initialCounter}/>
      <CardCustom/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
