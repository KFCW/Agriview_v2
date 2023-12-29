interface CartItem {
    id: number;
    quantity?: number;
  }
  
  interface InitialState {
    cart: CartItem[];
  }
  
  interface Action {
    type: string;
    payload: {
      id?: number;
      quantity?: number;
    };
  }
  
  const INITIAL_STATE: InitialState = {
    cart: [],
  };
  
  
  export default function cardReducer(
    state: InitialState = INITIAL_STATE,
    action: Action
  ): InitialState {
    let indexItemAdd: number;
  
    switch (action.type) {
      case "ADDITEM": {
        if (action.payload.id === undefined) {
          return state; 
        }
  
        indexItemAdd = state.cart.findIndex((obj) => obj.id === action.payload.id);
  
        if (indexItemAdd !== -1) {
          const updateQuantity = {
            ...state.cart[indexItemAdd],
            quantity: (state.cart[indexItemAdd].quantity || 0) + (action.payload.quantity || 0),
          };
  
          const newArr = [...state.cart];
          newArr.splice(indexItemAdd, 1, updateQuantity);
  
          return {
            ...state,
            cart: newArr,
          };
        } else {
          const newArr = [...state.cart];
          newArr.push(action.payload as CartItem);
  
          return {
            ...state,
            cart: newArr,
          };
        }
      }
  
      case "UPDATEITEM": {
        if (action.payload.id === undefined) {
          return state; 
        }
  
        const indexItemUpdate = state.cart.findIndex((obj) => obj.id === action.payload.id);
        const newArrUpdate = [...state.cart];
        newArrUpdate.splice(indexItemUpdate, 1, action.payload as CartItem);
        return {
          cart: newArrUpdate,
        };
      }
  
      default:
        return state;
    }
  }
  