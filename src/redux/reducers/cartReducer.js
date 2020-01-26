import cartConstants from '../constants/cartConstants';

export default function(state={ items: [] }, action) {
  switch(action.type) {
    case cartConstants.ADD: {
      if (!state.items.includes(action._id)) {
        return { items: [ ...state.items, action._id ] }; // array of IDs
      } else {
        return state;
      }
    }
    case cartConstants.DELETE: {
      if (state.items.includes(action._id)) {
        const newItems = [ ...state.items ];
        newItems.pop(action._id);
        return { items: newItems };
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
}
