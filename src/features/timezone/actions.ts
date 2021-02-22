export const fetchAsync = async (zoneName) => {
  const url = `/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=${zoneName}`
  const res = await fetch(url)
  const { zones } = await res.json()
  return zones
}
