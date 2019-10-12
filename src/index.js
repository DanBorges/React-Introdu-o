import React from 'react'
import ReactDom from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente'

// const elemento = document.getElementById('root')
// ReactDom.render(<h1>Olá React JSX</h1>, elemento)

const elemento = document.getElementById('root')
// ReactDom.render(
//     <PrimeiroComponente/>, 
//     elemento)

ReactDom.render(    
    <PrimeiroComponente
        nome="Daniel"
        numero={45}
    />, 
    elemento)