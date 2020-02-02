import cartConstants from '../constants/cartConstants';

function add(item) {
  return {
    type: cartConstants.ADD,
    item
  };
}

function del(_id) {
  return {
    type: cartConstants.DELETE,
    _id
  };
}

export default { add, del };
