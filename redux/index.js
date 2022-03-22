import { combineReducers } from 'redux'
import { reducer as cart } from './cart'
import { reducer as categories } from './category'
import { reducer as boxes } from './box'

const rootReducer = combineReducers({
  cart,
  categories,
  boxes
})

export default rootReducer;
