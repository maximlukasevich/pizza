import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import {currentAdminReducer} from './CurrentAdmin/reducer';
import {pizzaReducer} from './Pizza/reducer';
import {shoppingCartReducer} from './ShoppingCart/reducer';
import {customerReducer} from './Customer/reducer';

const rootReducer = combineReducers({
  currentAdmin: currentAdminReducer,
  pizza: pizzaReducer,
  cart: shoppingCartReducer,
  customer: customerReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'customer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, compose(applyMiddleware(thunk)))
let persistor = persistStore(store);

export { store, persistor }