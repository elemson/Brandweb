import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const intitialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  intitialState,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSTION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSTION__()
  )
);

export default store;
