import React, { ChangeEventHandler } from 'react'

type Props = {
  isSwitched: boolean;
  switchHandler: ChangeEventHandler<HTMLInputElement>
}

const ToggleSwitch: React.FC<Props> = ({ isSwitched, switchHandler }) => {
  return (
    <label className="switch">
      <input type="checkbox" className='switchInput' checked={isSwitched} onChange={switchHandler} />
      <span className="slider round"></span>
    </label>
  )
}

export default ToggleSwitch
