import React ,{useState, useEffect} from "react";


const MostraVoltas = ({voltas}) => {
  return (
    <p>Voltas: {voltas}</p>
  )

}
const MostraTempo = ({tempo}) => {
  return (
    <p>Tempo médio de voltas: {tempo}</p>
  )

}

//put event onClick as a props before send to component
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

function App() {
// current state, change state  =  start state
const [numVoltas, setNumVoltas] = useState(10)
const [running, setRunning] = useState(false)
const [tempo, setTempo] = useState(0)

useEffect(() => {
  let timer = null
  if (running) {
  timer = setInterval(() => {
   setTempo(old => old + 1)
  },1000)
  }
  return () =>{
    if (timer) {
      clearInterval(timer)
    }
  }
}, [running])

const toggleRunning = () => {
  setRunning(!running)
}
  
  const increment = () => {
    setNumVoltas(numVoltas + 1)
    console.log('increment')
  }
  const decrement = () => {
    setNumVoltas(numVoltas - 1)
    console.log('decrement')
  }
  return (
    <div className='App'>
      <h1>Contador-voltas</h1>
      <MostraVoltas voltas={numVoltas}/>
      
      <Button text='+' onClick={increment}/>
      <Button text='-' onClick={decrement}/>
     <MostraTempo tempo={tempo}/>
     <Button  text='Iniciar' onClick={toggleRunning}/>
     <Button text='Reiniciar'/>
    </div>
  )
}

export default App;
