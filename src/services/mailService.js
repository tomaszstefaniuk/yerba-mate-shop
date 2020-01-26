function post({ name, email, subject, message }) {
  return fetch(
    `${process.env.REACT_APP_API_URL}mail`,
    {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message })
    }
  )
  .then(res => res.json());
}

export default { post };
