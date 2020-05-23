import { initStore } from './store';

const configureStore = () => {
    const actions = {
        FETCH_BLOGS: (state, blogs) => {
            return {
                blogs: blogs,
                blogsLoaded: true,
            };
        },
    };

    initStore(actions, {
        blogs: [],
        blogsLoaded: false,
    });
};

export default configureStore;
