import { initStore } from './store';

const configureStore = () => {
    const actions = {
        AUTHENTICATION_LOG_IN: (curState, user) => {
            return {
                authentication: {
                    loggedIn: true,
                    user: user,
                }
            }
        },
        AUTHENTICATION_LOG_OUT: (curState) => {
            return {
                authentication: {
                    loggedIn: false,
                    user: null,
                }
            }
        }
    };

    initStore(actions, {
        authentication: {
            loggedIn: false,
            user: null,
        }
    })
}

export default configureStore
