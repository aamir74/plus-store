const wishlistReducer = (state, action) => {
    switch (action.type) {
        case "GET_WISHLIST_ITEMS":
            return { ...state, wishlist: action.payload };
        case "ADD_TO_WISHLIST":
            return { ...state, wishlist: action.payload };
        case "REMOVE_FROM_WISHLIST":
            return { ...state, wishlist: action.payload };
        case "UPDATE_WISHLIST":
            return { ...state, wishlist: action.payload };
        case "EMPTY_WISHLIST":
            return { ...state, wishlist: [] };
        default:
            return state;
    }
}

export { wishlistReducer };