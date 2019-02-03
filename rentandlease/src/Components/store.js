import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import UserReducer from "../Reducers/UserReducer";
import RoomsReducer from "../Reducers/RoomsReducer";

const rootReducer = combineReducers({
  rooms: RoomsReducer,
  user: UserReducer,
  form: formReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
