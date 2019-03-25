import { SHOW_LOADER, 
    HIDE_LOADER, 
    PRODUCT_EDIT_STARTED, 
    PRODUCT_EDIT_FINISHED, 
    PRODUCT_ADD_STARTED, 
    PRODUCT_ADD_FINISHED } from "../Actions/ui";


export function uiReducer(state = {
    showSpinner: false,
    productEdit: false,
    productAdd: false,
    shoppingCart: [],
}, action) {

    switch(action.type) {
        case SHOW_LOADER:
            return {...state, showSpinner: true};
        case HIDE_LOADER:
            return {...state, showSpinner: false};  
        case PRODUCT_EDIT_STARTED:
            return {...state, productEdit: true, productAdd: false};     
        case PRODUCT_EDIT_FINISHED:
            return {...state, productEdit: false};
        case PRODUCT_ADD_STARTED:
            return {...state, productAdd: true, productEdit: false};
        case PRODUCT_ADD_FINISHED:
            return {...state, productAdd: false};
        default: 
            return state;
    }
}