import React ,{useState, useEffect} from "react";


const MostraVoltas = ({voltas}) => {
  return (
    <p>Voltas: {voltas}</p>
  )

}
const MostraTempo = (props) => {
  const tempo = props.tempo
  const minutos = Math.round(tempo / 60)
  const segundos = tempo % 60
  const minutosStr = minutos < 10 ? '0' + minutos : minutos
  const segundosStr = segundos < 10 ? '0'+ segundos : segundos
  return (
    <p>{`${minutosStr}:${segundosStr}`}<br/>Tempo médio de voltas</p>
  )

}

//put event onClick as a props before send to component
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

function App() {
// current state, change state  =  start state
const [numVoltas, setNumVoltas] = useState(0)
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
const reset = () => {
  setNumVoltas(0)
  setTempo(0)
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
      {numVoltas > 0 &&
      <MostraTempo tempo={Math.round(tempo/numVoltas)}/>
      }
      <Button  text='Iniciar' onClick={toggleRunning}/>
      <Button text='Reiniciar'onClick={reset}/>
    </div>
  )
}

export default App;
