import {combineReducers} from "redux"
import {createStore, applyMiddleware} from "redux";
import reposReducer from "./reposReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    repos: reposReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
//export const persistor = persistStore(store)