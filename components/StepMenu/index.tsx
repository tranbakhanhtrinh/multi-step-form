/* eslint-disable node/no-missing-import */
'use client'
import React from 'react'
import { steps } from '@/constants/step'
import StepComponent from './StepItem'
import { useMenuContext } from '@/context/MenuContext'
import { StepName } from '@/types/stepTypes'

const StepMenu = () => {
  const { stepName, setStepName } = useMenuContext()

  const listStep = () => {
    return (
      steps.map((step) => (<StepComponent key={step.name} step={step.step} name={step.name} isActive={stepName === step.name} setIsActive={() => { setStepName(step.name as StepName) }} />))
    )
  }
  return (
    <div className='flex lg:block justify-center lg:bg-[url("/assets/oval.png")] bg-[url("/assets/oval-mb.png")] lg:w-72 w-full bg-no-repeat bg-cover bg-center lg:pt-16 lg:pt-8 lg:pl-8 lg:h-full h-[172px] lg:mr-8'>
      {listStep()}
    </div>
  )
}

export default StepMenu
