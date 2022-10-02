import React from "react";


const MostraVoltas = ({voltas}) => {
  return (
    <p>10<br/>Voltas: {voltas}</p>
  )

}
const MostraTempo = ({tempo}) => {
  return (
    <p>Tempo médio de voltas: {tempo}</p>
  )

}

const Button = ({text}) => <button>{text}</button>

function App() {
  return (
    <div className='App'>
      <h1>Contador-voltas</h1>
      <MostraVoltas voltas='45'/>
      
      <Button text='+'/>
      <Button text='-'/>
     <MostraTempo tempo='1:30'/>
     <Button text='Iniciar'/>
     <Button text='Reiniciar'/>
    </div>
  )
}

export default App;
