const { makeRequest } = require('./makeRequest')

function post(data) {
  return makeRequest({
      url: `${process.env.REACT_APP_API_URL}mail`,
      method: 'POST',
      data
    })
}

export default { post };
