import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Zones, setTimeZone } from '../../features/timezone'

interface Props {
  zoneDetail: Zones
  fetchData: any
  setZoneDetail: React.Dispatch<React.SetStateAction<Zones>>
}

const TimezoneDetails = ({
  zoneDetail,
  fetchData,
  setZoneDetail,
}: Props): JSX.Element => {
  const dispatch = useDispatch()
  const { countryCode, countryName, zoneName, timestamp } = zoneDetail

  useEffect(() => {
    const interValId = setInterval(() => {
      fetchData(zoneName).then((json) => {
        setZoneDetail(json[0])
      })
    }, 5000)
    return () => clearInterval(interValId) // Clear Interval on unmount
  }, [dispatch, fetchData, zoneName, setZoneDetail])

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-text">Country Code: {countryCode}</h5>
        <h5 className="card-text">Country Name: {countryName}</h5>
        <h5 className="card-text">Zone Name: {zoneName}</h5>
        <p className="card-title">
          Date Time: {setTimeZone(timestamp).toString()}
        </p>
      </div>
    </div>
  )
}
export default TimezoneDetails
