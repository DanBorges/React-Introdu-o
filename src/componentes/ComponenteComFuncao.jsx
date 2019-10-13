import React from 'react'

export default props => {
    const aprovados = ['Paula', 'Ana', 'Gabrie', 'Magno'];

    const getAprovados = itens =>{
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            { getAprovados(aprovados) }
        </ul>
    )
}