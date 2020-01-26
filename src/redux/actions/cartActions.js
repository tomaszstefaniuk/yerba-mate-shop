import cartConstants from '../constants/cartConstants';

function add(_id) {
  return {
    type: cartConstants.ADD,
    _id
  };
}

function del(_id) {
  return {
    type: cartConstants.DELETE,
    _id
  };
}

export default { add, del };
