// To Do Module => Controller Global Access
(function() {
    // Creation
    const customRedux = (function() {
        function createStore(reducer) {
            let state;
            let listeners = [];
            const getState = () => state;
            const dispatch = (action) => {
                state = reducer(state, action);
                // Call For Each listener
                listeners.forEach((listener) => {
                    listener();
                });
            };
            const subscribe = (listener) => {
                // Register Listner
                listeners.push(listener);
            };

            dispatch({});

            return {
                getState,
                dispatch,
                subscribe
            };
        }
        return {
            createStore
        };
    })();

    // Registeration
    if (!window.customRedux) {
        window.$redux = window.customRedux = customRedux;
    }
})();