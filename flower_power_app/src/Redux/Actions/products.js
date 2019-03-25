export const GET_PRODUCTS = '[products] Get all products';
export const UPDATE_PRODUCTS = '[products] Update all products in state';
export const FETCH_PRODUCTS_SUCCESS = '[products] Get all products was successful';
export const FETCH_PRODUCTS_ERROR = '[products] Get all products encountered an error';
export const FETCH_PRODUCT_SUCCESS = '[product] Get product id was successful';
export const FETCH_PRODUCT_SAVE_EDIT_SUCCESS = '[product] Edit was successful';
export const GET_PRODUCT_BY_ID = '[product] Update product by id in state';
export const DELETE_PRODUCT = '[product] Delete product';
export const SAVE_EDIT_PRODUCT = '[product] Save edit product';
export const SET_SAVE_EDIT_PRODUCT = '[product] Set save edit product';
export const RESET_PRODUCT = '[product] Reset product';
export const SAVE_PRODUCT = '[product] Save product';
export const SET_NAME_PRODUCT = '[product] Set name product';
export const SET_DESCRIPTION_PRODUCT = '[product] Set description product';
export const SET_PRICE_PRODUCT = '[product] Set price product';
export const SET_PHOTO_URL_PRODUCT = '[product] Set photo url product';
export const SET_NAME_ADD_PRODUCT = '[product] Set name add product';
export const SET_DESCRIPTION_ADD_PRODUCT = '[product] Set description add product';
export const SET_PRICE_ADD_PRODUCT = '[product] Set price add product';
export const SET_PHOTO_URL_ADD_PRODUCT = '[product] Set photo url add product';
export const SAVE_PRODUCT_SUCCESS = '[product] Save was successful'
export const RESET_PRODUCT_SUCCESS = '[product] Reset product was successful'



export const getProducts = () => ({
    type: GET_PRODUCTS,
});

export const updateProducts = (products) => ({
    type: UPDATE_PRODUCTS,
    payload: products
});

export const getProductById = (product) => ({
    type: GET_PRODUCT_BY_ID,
    payload: product,
})

export const saveProductEdit = (editproduct) => ({
    type: SAVE_EDIT_PRODUCT,
    payload: editproduct,
})

export const setSaveProduct = ( history ) => ({
    type: SET_SAVE_EDIT_PRODUCT,
    history: history,
})

export const resetProduct = () => ({
    type: RESET_PRODUCT,
})

export const setNameProduct = (name) => ({
    type: SET_NAME_PRODUCT,
    payload: name,
})

export const setDescriptionProduct = (description) => ({
    type: SET_DESCRIPTION_PRODUCT,
    payload: description,
})

export const setPriceProduct = (price) => ({
    type: SET_PRICE_PRODUCT,
    payload: price,
})

export const setPhotoUrlProduct = (photoUrl) => ({
    type: SET_PHOTO_URL_PRODUCT,
    payload: photoUrl,
})

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
})

export const saveProduct=(product, history) =>({
    type: SAVE_PRODUCT,
    payload: product,
    history: history
})

export const setNameAddProduct = (name) => ({
    type: SET_NAME_ADD_PRODUCT,
    payload: name,
})

export const setDescriptionAddProduct = (description) => ({
    type: SET_DESCRIPTION_ADD_PRODUCT,
    payload: description,
})

export const setPriceAddProduct = (price) => ({
    type: SET_PRICE_ADD_PRODUCT,
    payload: price,
})

export const setPhotoUrlAddProduct = (photoUrl) => ({
    type: SET_PHOTO_URL_ADD_PRODUCT,
    payload: photoUrl,
})



