import {
  GET_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  updateProducts,
  getProductById,
  DELETE_PRODUCT,
  SET_SAVE_EDIT_PRODUCT,
  FETCH_PRODUCT_SAVE_EDIT_SUCCESS,
  resetProduct,
  getProducts,
  SAVE_PRODUCT,
  SAVE_PRODUCT_SUCCESS,
} from "../Actions/products";
import {
  apiRequest
} from "../Actions/api";
import {
  showLoader,
  hideLoader,
  PRODUCT_EDIT_STARTED,
  finishEditProduct,
} from "../Actions/ui";

export const getProductsFlow = ({
  dispatch
}) => next => action => {
  next(action);

  if (action.type === GET_PRODUCTS) {
    dispatch(
      apiRequest(
        "/products",
        "GET",
        null,
        FETCH_PRODUCTS_SUCCESS,
        FETCH_PRODUCTS_ERROR
      )
    );
    dispatch(showLoader());
  }
};

export const deleteProductById = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === DELETE_PRODUCT) {
    dispatch(
      apiRequest(
        `/products/${action.payload}`,
        "DELETE",
        null,
        GET_PRODUCTS,
        FETCH_PRODUCTS_ERROR
      )
    );
    dispatch(showLoader());
  }
};

export const productById = ({
  dispatch
}) => next => action => {
  next(action);

  if (action.type === PRODUCT_EDIT_STARTED) {
    dispatch(showLoader());
    dispatch(
      apiRequest(
        `/products/${action.payload}`,
        "GET",
        null,
        FETCH_PRODUCT_SUCCESS,
        FETCH_PRODUCTS_ERROR
      )
    );
    dispatch(showLoader());
  }
};
export const processProductsCollection = ({
  dispatch
}) => next => action => {
  next(action);

  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    dispatch(updateProducts(action.payload));
    dispatch(hideLoader());
  }
}
export const processProductCollection = ({
  dispatch
}) => next => action => {
  next(action);

  if (action.type === FETCH_PRODUCT_SUCCESS) {
    dispatch(getProductById(action.payload));
    dispatch(hideLoader());
  }
}

export const saveProductById = ({
  dispatch,
  getState
}) => next => action => {
  next(action);

  if (action.type === SET_SAVE_EDIT_PRODUCT) {
    const state = getState();
    dispatch(showLoader());
    dispatch(
      apiRequest(
        "/products",
        "PUT", {
          body: {
            product: state.products.product
          }
        },
        FETCH_PRODUCT_SAVE_EDIT_SUCCESS,
        FETCH_PRODUCTS_ERROR,
        action.history,
      )
    );
  }
};


export const saveProduct = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === SAVE_PRODUCT) {
    dispatch(showLoader());
    dispatch(
      apiRequest(
        "/products",
        "POST",
        { body: { product: action.payload } },
        SAVE_PRODUCT_SUCCESS,
        FETCH_PRODUCTS_ERROR,
        action.history
      )
    );
  }
};

export const saveProductSuccess = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === SAVE_PRODUCT_SUCCESS) {
      action.extra && action.extra.push('/');
      dispatch(getProducts());
  }
};


export const processSaveEditProductCollection = ({
  dispatch
}) => next => action => {
  next(action);

  if (action.type === FETCH_PRODUCT_SAVE_EDIT_SUCCESS) {
    dispatch(hideLoader());
    dispatch(finishEditProduct());
    action.extra && action.extra.push('/');
    dispatch(getProducts())
    dispatch(resetProduct());
  }
}
export const productsMdl = [
  getProductsFlow,
  processProductsCollection,
  productById,
  processProductCollection,
  saveProductById,
  saveProductSuccess,
  processSaveEditProductCollection,
  deleteProductById,
  saveProduct,
];