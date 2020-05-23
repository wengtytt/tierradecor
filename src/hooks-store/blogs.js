import { initStore } from './store';

const configureStore = () => {
    const actions = {
        FETCH_BLOGS: (state, blogs) => {
            return {
                blogs: blogs,
                blogsLoaded: true,
                searchPage: state.searchPage + 1,
            };
        },
        APPEND_BLOGS: (state, blogs) => {
            const newBlogs = [...state.blogs, ...blogs];

            return {
                blogs: newBlogs,
                blogsLoaded: true,
                searchPage: state.searchPage + 1,
            };
        },
    };

    initStore(actions, {
        blogs: [],
        blogsLoaded: false,
        searchPage: 1,
    });
};

export default configureStore;
