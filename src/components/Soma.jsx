import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
const Soma = props =>{

    const {min, max} = props

    return(
        <Card title='Soma Dos Numeros' blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{max + min}</strong>
                </span>
            </div>
            
        </Card>
    )
}
const mapStateToProps = state =>{
    return{
        min: state.numeros.min,
        max: state.numeros.max

    }
}

export default connect(mapStateToProps)(Soma)