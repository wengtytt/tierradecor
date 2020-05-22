import { initStore } from './store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
        slides: [
            {
                img: 'Banner_1.jpg',
            },
            {
                img: 'Banner_2.jpg',
            },
            {
                img: 'Banner_3.jpg',
            },
            {
                img: 'Banner_4.jpg',
            },
            {
                img: 'Banner_5.jpg',
            },
        ],
    });
};

export default configureStore;
