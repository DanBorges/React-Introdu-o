import React from 'react'
import {filhosComProps} from '../utils/utils'

export default props => 
    <div>
        <h1>Familia</h1>
        {/* {props.children} */}

        {/* {React.cloneElement(props.children,
            {sobrenome: props.sobrenome})} */}

        {/* {React.cloneElement(props.children,
            {...props})} */}

        {/* {React.Children.map(props.children, filho =>{
            return React.cloneElement(filho, {...props})
        })} */}

        {filhosComProps(props)}

    </div>