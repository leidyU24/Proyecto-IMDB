import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
const carta = [{ key: '1q', title: 'mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi vel quae quod consequatur neque non soluta qui perspiciatis itaque eligendi aspernatur hic necessitatibus repellendus blanditiis recusandae, aliquam facilis alias.' },
{ key: '1w', title: 'mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi vel quae quod consequatur neque non soluta qui perspiciatis itaque eligendi aspernatur hic necessitatibus repellendus blanditiis recusandae, aliquam facilis alias.' },
{ key: '1e', title: 'mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi vel quae quod consequatur neque non soluta qui perspiciatis itaque eligendi aspernatur hic necessitatibus repellendus blanditiis recusandae, aliquam facilis alias.' },
{ key: '1r', title: 'mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi vel quae quod consequatur neque non soluta qui perspiciatis itaque eligendi aspernatur hic necessitatibus repellendus blanditiis recusandae, aliquam facilis alias.' },
{ key: '1g', title: 'mi carta', subtitle: 'subtitulo de mi carta', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quasi vel quae quod consequatur neque non soluta qui perspiciatis itaque eligendi aspernatur hic necessitatibus repellendus blanditiis recusandae, aliquam facilis alias.' },
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Veterinaria-fullstack-proyect</h1>
    
    </>
  )
}

export default App
