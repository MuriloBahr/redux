import { legacy_createStore as createStore, combineReducers }from 'redux'

import numberReducers from './reducers/numberReducers'
import namesReducers from './reducers/namesReducers'

const reducers = combineReducers({
    numeros: numberReducers,
    nomes: namesReducers
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig