import productReducer from './ProductReducer'
import driversReducer from './DriversReducer'
import ProgressBarReducer from './ProgressBarReducer';
import ProfileReducer from './ProfileReducer';
import categoryReducer from './CategoryReducer';
import userReducer from './UserReducers';
import blogReducer from './BlogReducer';
import orderReducer from './OrderReducer';
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
const rootReducer = combineReducers({
    productReducer,
    driversReducer,
    ProgressBarReducer,
    ProfileReducer,
    categoryReducer,
    userReducer,
    blogReducer,
    orderReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;