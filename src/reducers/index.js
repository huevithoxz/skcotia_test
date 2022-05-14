const reducer = (state,action) => {
    switch(action.type) {
        case 'SET_PEOPLE': 
    return {
        ...state,
        people:[...state.people, action.payload],
    };
    case 'SET_TABLE': 
    return {
        ...state,
        tableList:[...state.tableList, action.payload],
    };
 
    case 'DELETE_USER':
            return {
                ...state,
                people: state.people.filter(
                    (items) => items.id !== action.payload,
                ),
            };
            case 'FILTER':
                return {
                    ...state,
                    people: state.people.filter(
                        (items) => false,
                    ),
                };
                case 'SET_BACK':
                    return {
                        ...state,
                        back: action.payload
                    };
                    
                  
    default : 
    return state;
    }
    
}
export default reducer