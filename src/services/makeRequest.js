import axios from 'axios'

export const makeRequest = async req => {
  const { data: { status, message }, data } = await axios.request(req)
  if (!status) throw new Error(message)
  return data
}
