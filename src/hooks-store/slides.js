import { initStore } from './store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
        slides: [
            {
                img: 'Banner_1.jpg',
                alt: '',
            },
            {
                img: 'Banner_2.jpg',
                alt: '',
            },
            {
                img: 'Banner_3.jpg',
                alt: '',
            },
            {
                img: 'Banner_4.jpg',
                alt: '',
            },
            {
                img: 'Banner_5.jpg',
                alt: '',
            },
        ],
    });
};

export default configureStore;
