import productReducer from './ProductReducer'
import driversReducer from './DriversReducer'
import ProgressBarReducer from './ProgressBarReducer';
import ProfileReducer from './ProfileReducer';
import categoryReducer from './CategoryReducer';
import blogReducer from './BlogReducer';
import orderReducer from './OrderReducer';
import aboutusReducer from './AboutusReducer';
import deliveryReducer from './DeliveryReducer';
import cartReducer from './CartReducers';
import shopReducer from './ShopReducer';
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
const rootReducer = combineReducers({
    productReducer,
    driversReducer,
    ProgressBarReducer,
    ProfileReducer,
    categoryReducer,
    blogReducer,
    orderReducer,
    aboutusReducer,
    deliveryReducer,
    cartReducer,
    shopReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;