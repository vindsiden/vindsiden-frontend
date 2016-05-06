export default function(initialState, handlers) {
    return function(state = initialState, action) {
        return (handlers[action.type] || (state => state))(state, action);
    }
}