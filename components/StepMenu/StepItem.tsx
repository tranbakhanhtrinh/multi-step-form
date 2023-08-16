/* eslint-disable node/no-missing-import */
import { Step } from '@/types/stepTypes'
import React from 'react'

const StepItem = ({ step, name, isActive, setIsActive }: Step): React.JSX.Element => {
  const clickStepHandler = () => {
    if (setIsActive && isActive) {
      setIsActive(name)
    }
  }
  return (
    <div className="flex items-center justify-start uppercase gap-4 lg:mb-8 lg:last:mb-0 parent-step" onClick={clickStepHandler}>
      <div className={`rounded-full border border-solid  w-[33px] h-[33px] text-center leading-[33px] text-[14px] font-bold transition ease-in-out duration-300 step ${isActive ? 'border-sky-blue text-denim bg-sky-blue' : 'border-white text-white bg-transparent'}`}>{step}</div>
      <div>
        <span className='text-light-blue text-[12px] lg:block hidden'>step {step}</span>
        <span className='text-[14px] font-bold text-white lg:block hidden'>{name}</span>
      </div>
    </div>
  )
}

export default StepItem
