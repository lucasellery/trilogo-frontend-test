import { createStore, combineReducers } from 'redux'
import calcReducer from './Calculator/Calculator.reducer'
import ticketsReducer from './Tickets/Tickets.reducer'

const rootReducer = combineReducers({
  calculator: calcReducer,
  tickets: ticketsReducer
})

const store = createStore(rootReducer)

export default store
