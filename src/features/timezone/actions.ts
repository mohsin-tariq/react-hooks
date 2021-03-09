export const fetchAsync = async (zoneName) => {
  const url = `/list-time-zone?key=<apikey>&format=json&zone=${zoneName}`  //mention your api key here
  const res = await fetch(url)
  const { zones } = await res.json()
  return zones
}
