export const fetchAsync = async (zoneName) => {
  const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=${zoneName}`
  const res = await fetch(url)
  const { zones } = await res.json()
  return zones
}
