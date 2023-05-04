const initialState = {
    productsList: []
}

export default function  productReducer (state = initialState, action) {
    switch (action.type) {
     case 'ADD_USER1': {
        state.productsList = [...state.productsList, action.payload]
    return {...state}
    }
    default: {
        return state
    }
    
 // {
      //  default: {
         //   return state
      //  }
    }
}