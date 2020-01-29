import { makeRequest } from './makeRequest'


function login({ password, email }) {
    return makeRequest({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}auth/login`,
      data: { password, email }
    })
}

function register({ name, password, email }) {
  return makeRequest({
    method: 'POST',
    url: `${process.env.REACT_APP_API_URL}auth/register`,
    data: { name, password, email }
  })
}

export default {
  login,
  register
}
