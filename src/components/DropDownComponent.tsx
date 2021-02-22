import { memo } from 'react'
import { Zones } from '../features/timezone/types'
import { selectors } from '../features/timezone'

interface Props {
  zoneList: Zones[]
  setSelecter: any
}

const DropDownComponent = ({ zoneList, setSelecter }: Props): JSX.Element => {
  const handleOnchage = (e) => {
    console.log('key:', e.target.value)
    setSelecter(e.target.value)
  }
  console.log('DropDown Component is called')
  return (
    <select onChange={(e) => handleOnchage(e)}>
      {zoneList.map((item) => (
        <option key={item.zoneName}>{selectors.getSelector(item)}</option>
      ))}
    </select>
  )
}

export default memo(DropDownComponent)
