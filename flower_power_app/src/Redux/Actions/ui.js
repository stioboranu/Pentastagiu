export const SHOW_LOADER = '[ui] Show spinner';
export const HIDE_LOADER = '[ui] Hide spinner';
export const PRODUCT_EDIT_STARTED = '[ui] Start product edit';
export const PRODUCT_EDIT_FINISHED = '[ui] Finish product edit';
export const PRODUCT_ADD_STARTED = '[ui] Start add edit';
export const PRODUCT_ADD_FINISHED = '[ui] Finish add edit';

export const showLoader = () => ({
    type: SHOW_LOADER
});

export const hideLoader = () => ({
    type: HIDE_LOADER
});

export const startEditProduct = (id) => ({
    type: PRODUCT_EDIT_STARTED,
    payload: id
});

export const finishEditProduct = () => ({
    type: PRODUCT_EDIT_FINISHED
});

export const startAddProduct = () => ({
    type: PRODUCT_ADD_STARTED,
});

export const finishAddProduct = () => ({
    type: PRODUCT_ADD_FINISHED
});