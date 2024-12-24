import { createStore } from "redux";
import reducers from './reducers'

//now while creating the store, the store takes couple of arguments
// 1. the first argument is the reducer
// 2. the second argument is to be any middleware (redux thunk / saga)
// 3. the third argument is to be the state

// now we integrate the redux devtools extension - this is a browser extension that helps us to debug the redux store
// by this, we'll be able to view all out states whenver we fire any action via useDispatch
// {} -> represents the state
const store = createStore(reducers, {} , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;