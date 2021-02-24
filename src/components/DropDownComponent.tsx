import { memo } from 'react'
import { Zones } from '../features/timezone/types'
import { selectors } from '../features/timezone'

interface Props {
  zoneList: Zones[]
  setZoneDetail: React.Dispatch<React.SetStateAction<Zones>>
}

const DropDownComponent = ({ zoneList, setZoneDetail }: Props): JSX.Element => {
  const handleOnChange = (e) => {
    setZoneDetail(
      zoneList.filter(
        (item) => selectors.getSelector(item) === e.target.value
      )[0]
    )
  }
  return (
    <select onChange={(e) => handleOnChange(e)}>
      {zoneList.map((item) => (
        <option key={item.zoneName}>{selectors.getSelector(item)}</option>
      ))}
    </select>
  )
}

export default memo(DropDownComponent)
