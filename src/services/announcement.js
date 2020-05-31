import api from '../api.js';

export const announcement = {
    get,
}

function get() {
    return api.get(`/announcement`)
        .then(response => {
            return response;
        })
        .catch(error => Promise.reject(error));
}