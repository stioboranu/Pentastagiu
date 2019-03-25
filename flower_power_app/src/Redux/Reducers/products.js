import { UPDATE_PRODUCTS, 
    GET_PRODUCT_BY_ID, 
    RESET_PRODUCT, 
    SET_NAME_PRODUCT,
    SET_DESCRIPTION_PRODUCT,
    SET_PRICE_PRODUCT,
    SET_PHOTO_URL_PRODUCT, 
    SET_NAME_ADD_PRODUCT, 
    SET_DESCRIPTION_ADD_PRODUCT, 
    SET_PRICE_ADD_PRODUCT, 
    SET_PHOTO_URL_ADD_PRODUCT, 
    } from "../Actions/products";

const initialState = {
    products: [],
    product: {},
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {...state, products: action.payload};
        case GET_PRODUCT_BY_ID:
            return {...state, product: action.payload};
        case RESET_PRODUCT:
            return {...state, product: {}};
        case SET_NAME_PRODUCT:
            return {...state, product: {...state.product, name: action.payload}};
        case SET_DESCRIPTION_PRODUCT:
            return {...state, product: {...state.product, description: action.payload}};
        case SET_PRICE_PRODUCT:
            return {...state, product: {...state.product, unitPrice: action.payload}};
        case SET_PHOTO_URL_PRODUCT:
            return {...state, product: {...state.product, photoUrl: action.payload}};
        case SET_NAME_ADD_PRODUCT:
            return {...state, product: {...state.product, name: action.payload}};
        case SET_DESCRIPTION_ADD_PRODUCT:
            return {...state, product: {...state.product, description: action.payload}};    
        case SET_PRICE_ADD_PRODUCT:
            return {...state, product: {...state.product, unitPrice: action.payload}};    
        case SET_PHOTO_URL_ADD_PRODUCT:
            return {...state, product: {...state.product, photoUrl: action.payload}};
        default:
            return state;
    }
}