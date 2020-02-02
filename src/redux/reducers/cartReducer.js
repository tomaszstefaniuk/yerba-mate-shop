import cartConstants from '../constants/cartConstants';

export default function(state={ items: [] }, action) {
  switch(action.type) {
    case cartConstants.ADD: {
      if (!state.items.includes(action.item._id)) {
        return { items: [ ...state.items, action.item ] }; // array of IDs
      } else {
        return state;
      }
    }
    case cartConstants.DELETE: {
        return { items: state.items.filter(i => i._id !== action.item._id) };

    }
    default: {
      return state;
    }
  }
}
