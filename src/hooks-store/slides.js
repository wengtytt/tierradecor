import { initStore } from './store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
        slides: [
            {
                img: 'Slide1.jpg',
                alt: '',
            },
            {
                img: 'Slide2.jpg',
                alt: '',
            },
            {
                img: 'Slide3.jpg',
                alt: '',
            },
            {
                img: 'Slide4.jpg',
                alt: '',
            },
            {
                img: 'Slide5.jpg',
                alt: '',
            },
            {
                img: 'Slide6.jpg',
                alt: '',
            }
        ],
    });
};

export default configureStore;
