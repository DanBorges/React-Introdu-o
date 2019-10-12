import React from 'react';

// export default function() {
//     return <h1>Primeiro Componenete React JSX</h1>
// }

// export default () => <h1>Primeiro Componenete React JSX Arrow function</h1>

let legal = true;

export default (props) =>
    <div>
        <h1>{props.nome}</h1>
        <h2>{props.numero}</h2>
        <p>legal? {legal ? 'sim' : 'nao'}</p>
    </div>
