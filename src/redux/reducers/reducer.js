const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const iteamindex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (iteamindex >= 0) {
        const updatedCarts = [...state.carts];
        updatedCarts[iteamindex].qnty += 1;
        return {
          ...state,
          carts: updatedCarts,
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    default:
      return state;

    case "RMV_ONE":
      const iteamindex_dec = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      if (state.carts[iteamindex_dec].qnty >= 1) {
        const dltitem = state.carts[iteamindex_dec].qnty -= 1;
        console.log([state.carts, dltitem]);
        return {
          ...state,
          carts: [...state.carts],
        };
      }else if(state.carts[iteamindex_dec].qnty ===1){
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
  }
};
