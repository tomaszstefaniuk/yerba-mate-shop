import userConstants from '../constants/userConstants';

function add(user) {
  return {
    type: userConstants.ADD,
    user
  };
}

function update(user) {
  return {
    type: userConstants.UPDATE,
    user
  };
}

function del(user) {
  return {
    type: userConstants.DELETE,
    user
  };
}

export default { add, del, update };
