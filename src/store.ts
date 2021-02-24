import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { TimezoneReducer } from './features/timezone'

/* Create root reducer, containing all features of the application */
export const rootReducer = combineReducers({
  zone: TimezoneReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
