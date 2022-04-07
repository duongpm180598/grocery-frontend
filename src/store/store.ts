import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )
// sagaMiddleware.run(null);

// const action = type => store.dispatch({type})