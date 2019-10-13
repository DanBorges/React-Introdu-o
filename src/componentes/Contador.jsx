import React , {Component} from 'react'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        // this.props.numero++;
        this.setState({numero: this.state.numero + 1})
        console.log(this)
    }
    menosUm = () => {
        this.setState({numero: this.state.numero -1})
        console.log(this)

    }

    alteraNumero = diferenca => {
        this.setState({
            numero: this.state.numero+ diferenca
        })
    }

    render() {
        return (
        <div>
            <div>Número : {this.state.numero}</div>
            <button onClick={this.maisUm}>inc</button>
            <button onClick={this.menosUm}>dec</button>

            <button onClick={() => this.alteraNumero(+10)}>mais 10</button>
            <button onClick={()=>this.alteraNumero(-10)}>menos 10</button>

        </div>
        )
    }
}