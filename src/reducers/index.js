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

   
    case "FILTER":
      return {
        ...state,
        people: state.people.filter((items) => false),
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

    default:
      return state;
  }
};
export default reducer;
