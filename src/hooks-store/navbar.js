import { initStore } from './store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
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
                label: 'Services',
                path: '/services',
            },
            {
                label: 'Projects',
                path: '/commercial-renovation',
            },
            {
                label: 'Blog',
                path: '/contractors',
            },
            {
                label: 'Contact',
                path: '/landing/interior-renovation/',
            },
            {
                label: 'Shop',
                path: '',
                external: true,
            },
        ],
    });
};

export default configureStore;
