'use client'
/* eslint-disable node/no-missing-import */
import React from 'react'
import SummaryTable from './SummaryTable'
import { useMenuContext } from '@/context/MenuContext'
import { StepName } from '@/types/stepTypes'
import Button from '@/components/Button'
import { useAppSelector } from '@/redux/hooks'

const Summary = () => {
  const { stepName, setStepName } = useMenuContext()
  const { data: plan } = useAppSelector(state => state.plan)
  const { data: addons } = useAppSelector(state => state.addons)
  return (
    <>
      {stepName === StepName.SUMMARY && <>
        <h1 className='font-bold text-denim text-[32px]'>Finishing up</h1>
        <p className='font-medium text-grey text-base mb-9'>
          Double-check everything looks OK before confirming.
        </p>
        <SummaryTable plan={plan.plan} price={plan.price} addonsArr={addons} />
        <div className='flex justify-between items-center bottom-0 lg:absolute fixed bottom-0 right-0 p-4 lg:p-0 bg-white w-full'>
          <Button type='button' className='text-grey font-medium text-base' onClick={() => setStepName(StepName.ADDONS)}>Go Back</Button>
          <Button type="submit" className="bg-purple rounded-md py-4 px-6 text-white font-medium" onClick={() => setStepName(StepName.THANK)}>
            Confirm
          </Button>
        </div>
      </>}
    </>
  )
}

export default Summary
