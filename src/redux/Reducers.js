const initialValuesProducts = {
    products: []
}
const initialValuesUser = {
    userDetail: {
        id: "ashish@gmail.com",
        password: "ashishgmail",
        cart: []
    },
}


export function userReducer(state = initialValuesUser, action) {
    switch (action.type) {
        case "GET_USER_DETAIL":
            return {
                userDetail: { id: action.payload.id, password: action.payload.password, cart: action.payload.cart }
            }
        case "ADD_TO_CARD":
            return {
                state: { ...state.userDetail, cart: [...state.cart, action.payload] }
            }
        default:
            return state
    }
}

export function productReducer(state = initialValuesProducts, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                products: action.payload
            }
        default:
            return state
    }
}