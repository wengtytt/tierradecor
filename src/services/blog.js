import api from '../api.js';

export const blog = {
    get,
    getInfo,
};

function get(search, page, size, before) {
    var url = `/blog/live`;
    if (!search && size) {
        url += `?size=${size}`;
        if (before) {
            url += `&before=${before}`;
        }
    } else if (search && size && page) {
        url += `?search=${search}&size=${size}&page=${page}`;
    }
    return api
        .get(url)
        .then((response) => {
            return response;
        })
        .catch((error) => Promise.reject(error));
}

function getInfo(blog_id) {
    const url = `/blog/${blog_id}/live/content`;
    // return blogs;
    return api
        .get(url)
        .then((response) => {
            return response;
        })
        .catch((error) => Promise.reject(error));
}
