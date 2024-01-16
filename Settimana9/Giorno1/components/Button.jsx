import { useEffect, useState } from "react"


const Button = (props, changePageTitle) => { //props come parametro x passare proprietà
    const [count, setCount] = useState(props.count)//[conteggio, f() cambio stato] = useState(valore di partenza). poi passeremo la f() all'onlick con il parametro di partenza ()count e l'incremento
   
   const sendTitle = () => {
    props.changePageTitle('piripiripi');
   }

   useEffect(() => {
    sendTitle();
   }, []);
   
    return (
        <button style= {{border: '3px solid red'}} onClick ={()=>setCount((count)=> count +1)}> 
        il conteggio è {count} 
      </button>
    )
}

export default Button