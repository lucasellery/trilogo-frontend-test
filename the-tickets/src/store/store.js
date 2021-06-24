import { createStore, combineReducers } from 'redux'
import calcReducer from './Calculator/Calculator.reducer'

const rootReducer = combineReducers({
  calculator: calcReducer
})

const store = createStore(rootReducer)

export default store
