import { API_REQUEST } from "../Actions/api";

export const api = ({dispatch}) => next => action => {
    if(action.type === API_REQUEST) {
        const {method, url, body = {}, onSuccess, onError, extra} = action.meta;
        const data = body ? JSON.stringify(body.body) : null;
        const headers = {'Content-Type': 'application/json'};

        fetch(url, { method, body: data, headers} )
            .then(response => response.json())
            .then(data => dispatch({type: onSuccess, payload: data, extra: extra}))
            .catch(error => dispatch({type: onError, payload: error}));
    }
    return next(action);
}
