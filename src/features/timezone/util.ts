export const setTimeZone = (arg) => {
  const timeStamp = Number(arg)
  const date = new Date(timeStamp * 1000)
  const hours = date.getHours()
  const minutes = `0${date.getMinutes()}`
  const seconds = `0${date.getSeconds()}`
  const formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
  return `${date},${formattedTime}`
}
