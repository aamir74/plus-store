const addressReducer = (state, action) => {
  switch (action.type) {
    case "GET_ADDRESSES":
      return { ...state };
    case "ADD_ADDRESS":
      return { ...state, address: [...state.address, action.payload] };
    case "REMOVE_ADDRESS":
      const filterAddresses = state.address.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, address: filterAddresses };
    case "UPDATE_ADDRESS":
      const addresses = [...state];
      const addressIndex = addresses.address.findIndex(
        (item) => item.id === action.payload.id
      );
      addresses[addressIndex] = action.payload;
      return { ...addresses };
    case "EMPTY_ADDRESS":
      return { ...state, address: [] };
    default:
      return state;
  }
};

export { addressReducer };
