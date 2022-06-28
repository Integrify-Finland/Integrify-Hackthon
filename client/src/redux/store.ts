import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit"
import {companyReducer} from "../reducers/reducer"

const store = configureStore({
    reducer: {
        companyReducer
    }
})

export type RootState = ReturnType<typeof store.getState> //app state
export type AppDispatch = typeof store.dispatch
export default store

// import rootReducer from './reducers'
// import { AppState } from '../types'

// export default function configureStore(initialState = initState) {
//   const middlewares = [thunk]
//   let composedEnhancers = compose

//   if (process.env.NODE_ENV === 'development') {
//     if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//       composedEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     }
//   }

//   const store = createStore(
//     rootReducer(),
//     initialState,
//     composedEnhancers(compose(applyMiddleware(...middlewares)))
//   )

//   if ((module as any).hot) {
//     ;(module as any).hot.accept('./reducers', () => {
//       const nextReducer = require('./reducers').default
//       store.replaceReducer(nextReducer)
//     })
//   }

//   return store
// }
