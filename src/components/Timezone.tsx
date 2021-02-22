import { useEffect, useCallback, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes, selectors } from '../features/timezone'
import { Zones } from '../features/timezone/types'
import DropDownComponent from './DropDownComponent'
import TimezoneDetail from './TimezoneDetail'

const Timezone = (): JSX.Element => {
  const dispatch = useDispatch()
  const zoneList: Zones[] = useSelector(selectors.getTimeZones)
  const [selector, setSelector] = useState(selectors.getSelector(zoneList[0]))

  const fetApiCallBack = useCallback(async (zoneName) => {
    const url = `/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=${zoneName}`
    const res = await fetch(url)
    const { zones } = await res.json()
    return zones
  }, [])

  useEffect(() => {
    console.log('initial useEffect')
    fetApiCallBack('Europe/*').then((json) => {
      setSelector(selectors.getSelector(json[0]))
      dispatch({
        type: actionTypes.FETCH_TIMEZONES,
        payload: json,
      })
    })
  }, [dispatch, fetApiCallBack])

  const getZoneDetail = (): Zones =>
    zoneList.filter((item) => selectors.getSelector(item) === selector)[0]

  const memoizedZoneList = useMemo(() => {
    console.log('useMemo')
    return zoneList
  }, [zoneList.length]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!zoneList || zoneList.length === 0) {
    return <div>Loading...</div>
  }

  console.log('', zoneList)
  return (
    <>
      <DropDownComponent
        zoneList={memoizedZoneList}
        setSelecter={setSelector}
      />
      <TimezoneDetail zoneDetail={getZoneDetail()} fetchData={fetApiCallBack} />
    </>
  )
}
export default Timezone
