import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Zones } from '../features/timezone/types'
import { actionTypes } from '../features/timezone'

interface Props {
  zoneDetail: Zones
  fetchData: any
}

const TimezoneDetails = ({ zoneDetail, fetchData }: Props): JSX.Element => {
  const {
    countryCode,
    countryName,
    zoneName,
    gmtOffset,
    timestamp,
  } = zoneDetail
  const dispatch = useDispatch()
  useEffect(() => {
    const interValId = setInterval(() => {
      fetchData(zoneName).then((json) => {
        dispatch({
          type: actionTypes.UPDATE_TIMEZONE_DETAIL,
          payload: json,
        })
      })
    }, 5000)
    return () => clearInterval(interValId) // Clear Interval on unmount
  }, [dispatch, fetchData, zoneName])
  console.log('List Item Component is called')
  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">
          {countryCode},{countryName}, {zoneName}
        </h5>
        <p className="card-text">{gmtOffset}</p>
        <p className="card-text">{timestamp}</p>
      </div>
    </div>
  )
}
export default memo(TimezoneDetails)
