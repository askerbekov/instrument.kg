import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import categoriesReducer from "./reducer/categoriesReducer";



const rootReducer = combineReducers({
  categoriesReducer: categoriesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['discoverReducer'],
  // blacklist: ['resultDiscoverReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)


export default store;
export const persistor = persistStore(store)



// const store = createStore(
//     combineReducers({
//       categoriesReducer : categoriesReducer
//     }),
//     composeWithDevTools(applyMiddleware(thunk))
// )
//
// export default store;