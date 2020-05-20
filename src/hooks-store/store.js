import { useState, useEffect } from 'react';

// Notice: Do the following to avoid conflicts!
// - All state name shoud be {filename}
// - All actions name should be {FILENAME}_{ACTION_NAME}

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
    const setState = useState(globalState)[1];

    const dispatch = (action, payload) => {
        const newState = actions[action](globalState, payload);

        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
        }
    };

    useEffect(() => {
        if (shouldListen) listeners.push(setState);

        return () => {
            if (shouldListen) {
                listeners = listeners.filter(li => li !== setState);
            }
        };
    }, [setState, shouldListen]);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }
    actions = { ...actions, ...userActions };
};
