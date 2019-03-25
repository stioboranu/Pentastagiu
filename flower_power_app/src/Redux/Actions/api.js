export const API_REQUEST = '[api] Api Request';

export const apiRequest = (url, method, body, onSuccess, onError, extra) => ({
    type: API_REQUEST,
    meta: {
        url, method, body, onSuccess, onError, extra
    }
})
