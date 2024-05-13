import { configureStore } from "@reduxjs/toolkit";
import pedidoReducer from "../reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// export default store = createStore(pedidoReducer, applyMiddleware(thunk));

export default configureStore({
    reducer: pedidoReducer,
});
