const initialState = {
    increment: 10,

}

const incrementReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case "INCREMENT": return { ...state, increment :state.increment + 1}
        default: return state;
    }

}

export default incrementReducer;