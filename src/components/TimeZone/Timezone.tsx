import { useEffect, useState, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionTypes, selectors, fetchAsync } from '../../features/timezone'
import { Zones } from '../../features/timezone/types'
import SelectComponent from './SelectComponent'
import TimezoneDetail from './TimezoneDetail'

const Timezone = (): JSX.Element => {
  const dispatch = useDispatch()
  const zoneList: Zones[] = useSelector(selectors.getTimeZones)
  const [zoneDetail, setZoneDetail] = useState(zoneList[0])

  const apiCallBack = useCallback(fetchAsync, [])
  const setZoneDetailCb = useCallback(setZoneDetail, [setZoneDetail])

  useEffect(() => {
    if (zoneList.length === 0) {
      apiCallBack('Europe/*').then((json) => {
        setZoneDetail(json[0])
        dispatch({
          type: actionTypes.FETCH_TIMEZONES,
          payload: json,
        })
      })
    }
  }, [dispatch, apiCallBack, zoneList.length])

  const memoizedZoneList = useMemo(() => {
    return zoneList
  }, [zoneList])

  if ((zoneDetail && !zoneList) || zoneList.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <SelectComponent
        zoneList={memoizedZoneList}
        setZoneDetail={setZoneDetailCb}
      />
      <TimezoneDetail
        zoneDetail={zoneDetail}
        fetchData={apiCallBack}
        setZoneDetail={setZoneDetailCb}
      />
    </>
  )
}
export default Timezone
