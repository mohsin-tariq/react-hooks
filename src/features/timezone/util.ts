export const setTimeZone = (arg) => {
  const timeStamp = Number(arg)
  const date = new Date(timeStamp * 1000)
  return date
}
