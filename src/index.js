import React from 'react'
import ReactDom from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente'

import {CompA, CompB} from './componentes/DoisComponentes'

import FamiliaSilva from './componentes/FamiliaSilva'

import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'
import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')
// ReactDom.render(<h1>Olá React JSX</h1>, elemento)

// const elemento = document.getElementById('root')
// // ReactDom.render(
// //     <PrimeiroComponente/>, 
// //     elemento)

// ReactDom.render(    
//     <PrimeiroComponente
//         nome="Daniel"
//         numero={45}
//     />, 
//     elemento)

// ReactDom.render(
//     <div>
//         <CompA valor= "oi eu sou o A"/>
//         <CompB valor="Aqui é o B"/>
//     </div>
//     , elemento
// )

// ReactDom.render(
//     <div>
//         <FamiliaSilva></FamiliaSilva>
//     </div>
//     , elemento

// ReactDom.render(
//     <div>
//         <Familia>
//             <Membro nome="Daniela" sobrenome="Marques"></Membro>
//             <Membro nome="Danuza" sobrenome="Marques"></Membro>
//         </Familia>
//         <Familia>
//             <Membro nome="Fernando" sobrenome="Pereira"></Membro>
//             <Membro nome="Gabriel" sobrenome="Pereira"></Membro>
//         </Familia>
//     </div>
//     , elemento
// )

// ReactDom.render(
//     <div>
//         <Familia sobrenome="Lemes">
//             <Membro nome="Daniela"></Membro>
//             <Membro nome="Carlos"></Membro>
//         </Familia>
//     </div>
//     , elemento
// )

// ReactDom.render(
//     <div>
//         <Familia sobrenome="Lemes">
//             <Membro nome="Daniela"></Membro>
//             <Membro nome="Carlos"></Membro>
//         </Familia>
//     </div>
//     , elemento
// )

// ReactDom.render(
//     <div>
//         <ComponenteComFuncao></ComponenteComFuncao>
//     </div>
//     , elemento
// )

// ReactDom.render(
//     <div>
//         <ComponenteClasse valor="Eu sou um componente de Calsse"></ComponenteClasse>
//     </div>
//     , elemento
// )

ReactDom.render(
    <div>
        <Contador numeroInicial={5} ></Contador>
    </div>
    , elemento
)