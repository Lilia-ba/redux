const initialState = {
    userList: []
}
/**
   *action
   *{type,payload}
   *type = da ayn gortcogutyuna anunn  e ivori mijocow petq e katary arjeqi weragrum **/
 


export default function userReducer(state = initialState, action) {
     switch (action.type) {
        case 'ADD_USER': {
            state.userList = [...state.userList, action.payload]
        return {...state}
        }
        default: {
            return state
        }
     }
}