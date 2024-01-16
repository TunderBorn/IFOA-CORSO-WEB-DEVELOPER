const Button = (props) => {
  const stilizzazione= {
    border: '3px solid yellow',
    marginLeft: '5px'}
    

  return (
    <button style= {stilizzazione} > 
   {props.testo}
  </button>
  )
}

export default Button