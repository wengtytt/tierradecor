import { initStore } from './store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
        mobileNav: false,
        navs: [
            {
                label: 'HOME',
                path: '/',
            },
            {
                label: 'ABOUT',
                path: '/about',
            },
            {
                label: 'Meet the team',
                path: '/team',
            },
            {
                label: 'Inspiration',
                path: '/inspiration',
            },
            {
                label: 'Blog',
                path: '/blog',
            },
            {
                label: 'Contact',
                path: '/contact',
            },
            {
                label: 'Shop',
                path: 'http://shop.tierradecor.com/',
                external: true,
            },
        ],
    });
};

export default configureStore;
