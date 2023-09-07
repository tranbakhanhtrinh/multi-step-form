'use client'
/* eslint-disable node/no-missing-import */
import React, { useState } from 'react'
import PlanCard from './PlanCard'
import { monthlyPlans } from '@/constants/plans'
import ToggleSwitch from '../ToggleSwitch'
import Button from '../Button'
import { useMenuContext } from '@/context/MenuContext'
import { useAppDispatch } from '@/redux/hooks'
import { setPlan } from '@/redux/actions'
import { StepName } from '@/types/stepTypes'

const YourPlan = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<string>('Arcade')
  const { stepName, setStepName } = useMenuContext()
  const dispatch = useAppDispatch()
  const switchHandler = () => {
    setIsYearly(pre => !pre)
  }
  const activeHandler = (planName: string, price: string) => {
    const backSlashIndex = price.indexOf('/')
    const transformedPrice = price.substring(1, backSlashIndex)
    dispatch(setPlan({ plan: `${planName} (${isYearly ? 'Yearly' : 'Monthly'})`, price: +transformedPrice }))
    setIsActive(planName)
  }
  const nextStep = () => {
    setStepName(StepName.ADDONS)
  }
  return (
    <>
      {stepName === StepName.PLAN && <>
        <h1 className='font-bold text-denim text-[32px]'>Select your plan</h1>
        <p className='font-medium text-grey text-base mb-9'>
          You have the option of monthly or yearly billing.
        </p>
        <div className="lg:flex justify-between mb-8">
          {
            monthlyPlans.map(({ src, planName, price, yearPrice }) => {
              return (
                <PlanCard key={planName} src={src} planName={planName} price={!isYearly ? price : yearPrice} isYearly={isYearly} isActive={isActive === planName} activeHandler={() => activeHandler(planName, !isYearly ? price : yearPrice)} setInitialPlan={(plan, price) => dispatch(setPlan({ plan, price }))} />
              )
            })
          }
        </div>
        <div className='flex justify-center items-center gap-4 bg-very-light-grey rounded-lg py-3.5'>
          <p className={`${isYearly ? 'text-grey' : 'text-denim'} font-bold text-[14px]`}>Monthly</p>
          <ToggleSwitch isSwitched={isYearly} switchHandler={switchHandler} />
          <p className={`${isYearly ? 'text-denim' : 'text-grey'} font-bold text-[14px]`}>Yearly</p>
        </div>
        <div className='flex justify-between items-center bottom-0 lg:absolute fixed bottom-0 right-0 p-4 lg:p-0 bg-white w-full'>
          <Button type='button' className='text-grey font-medium text-base' onClick={() => setStepName(StepName.INFO)}>Go Back</Button>
          <Button type="submit" className="bg-denim rounded-md py-4 px-6 text-white font-medium" onClick={nextStep}>
            Next Step
          </Button>
        </div>
      </>}
    </>
  )
}

export default YourPlan
