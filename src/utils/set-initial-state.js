const setInitialState = (key, fallback) => {
  const data = localStorage.getItem(key)
  return data
    ? JSON.parse(data)
    : fallback
}

export default setInitialState