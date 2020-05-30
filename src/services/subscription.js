import api from '../api.js';

export const subscription = {
    subscribe,
    newSubscriber,
    sendSubscribeEmail,
}

function subscribe(name, email, message) {
    return Promise.all([newSubscriber(name, email, message), sendSubscribeEmail(name, email, message)])
        .then(response => {
            console.log("Subscribed!");
        })
        .catch(error => Promise.reject(error));
}

function newSubscriber(name, email, message) {
    return api.post(`/subscriber`, { name, email, message })
        .then(response => {
            return response;
        })
        .catch(error => Promise.reject(error));
}

function sendSubscribeEmail(name, email, message) {
    return api.post(`/email/subscribe`, { name, email, message })
        .then(response => {
            return response;
        })
        .catch(error => Promise.reject(error));
}