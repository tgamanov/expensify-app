import {
    createStore
} from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({
    incrementBy = 1
} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({
    decrementBy = 1
} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({
    count
}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducer
// 1. Pure functions
// 2. Never change state or action
const countReducer = (state = {
    count: 0
}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }

            case 'RESET':
                return {
                    count: 0
                };
            default:
                return state;
    }
}

const store = createStore(countReducer);

const unsubsribe = store.subscribe(() => {
    console.log('store.subscribe():', store.getState());
});

store.dispatch(incrementCount({
    incrementBy: 7
}));
store.dispatch(incrementCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({
    decrementBy: 8
}));

store.dispatch(setCount({
    count: 77
}))
store.dispatch(resetCount());

// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// })
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });


// unsubsribe();


// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });