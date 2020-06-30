import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'asd123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('Shuld clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'qwerty123' }, action);
    expect(state).toEqual({});
});