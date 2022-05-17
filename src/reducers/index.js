const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVEMENTS":
      return {
        ...state,
        movements: [...state.movements, action.payload],
      };
    case "SET_ADDRESSESSEES":
      return {
        ...state,
        addressees: [...state.addressees, action.payload],
      };
      case "SET_COPYMOV":
        return {
          ...state,
          copyMovements: [...state.copyMovements, action.payload],
        };
      case "SET_COPYADD":
        return {
          ...state,
          copyAddressees: [...state.copyAddressees, action.payload],
        };

   
    case "FILTER_MOVEMENTS":
      return {
        ...state,
        movements: state.movements.filter((items) => false),
      };
      case "FILTER_ADDRESSESSEES":
        return {
          ...state,
          addressees: state.addressees.filter((items) => false),
        };
    case "SET_BACK":
      return {
        ...state,
        back: action.payload,
      };
      case "SET_MODAL":
        return {
          ...state,
          showModal: action.payload,
        };
    case "SET_LOGED":
      return {
        ...state,
        loged: action.payload,
      };
      
    case 'DELETE_ADDRESSEE':
      return {
          ...state,
          addressees: state.addressees.filter(
              (items) => items.id !== action.payload,
          ),
      };

    default:
      return state;
  }
};
export default reducer;
