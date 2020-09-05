import UserReducer from "./User/user.reducer"
import {combineReducers} from "redux"
import userReducer from "./User/user.reducer"
import CartReducer from "./Cart/Cart.reducer"
import {persistReducer} from "redux-persist"
import storage from  'redux-persist/lib/storage'
import directoryReducer from "./directory/directory.reducer"
import shopReducer from "./shop/shop.reducer"
const persistConfig ={
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer=combineReducers({
    user:userReducer,
    cart:CartReducer,
    directory:directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer)