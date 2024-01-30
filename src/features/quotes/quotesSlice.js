// Action Creators
// TODO: Create action creators as defined in tests

export function addQuote(quote) {
    return { type: "quotes/add", payload: quote };
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
    switch (action.type) {
        case "quotes/add":
            return [...state, action.payload];
        default:
            return state;
    }
}
