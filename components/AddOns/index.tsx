/* eslint-disable node/no-missing-import */
'use client'
import { addOnsArr } from '@/constants/addOns'
import React, { useContext, useEffect } from 'react'
import AddOnsCard from './AddOnsCard'
import Button from '../Button'
import { MenuContext } from '@/context/MenuContext'
import { StepName } from '@/types/stepTypes'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setAddONS } from '@/redux/actions/'

const AddOns = () => {
  const { stepName, setStepName } = useContext(MenuContext)
  const dispatch = useAppDispatch()
  const addon = useAppSelector(state => state.addons.data)
  const checkedHandler = (title: string) => {
    const updatedCheck = addon.map((addon) => {
      return addon.title === title ? { ...addon, checked: !addon.checked } : addon
    })
    dispatch(setAddONS(updatedCheck))
  }
  const nextStep = () => {
    setStepName(StepName.SUMMARY)
  }
  useEffect(() => {
    dispatch(setAddONS(addOnsArr))
  }, [])
  return (
    <>
      {stepName === StepName.ADDONS && <>
        <h1 className='font-bold text-denim text-[32px]'>Pick add-ons</h1>
        <p className='font-medium text-grey text-base mb-9'>
          Add-ons help enhance your gaming experience.
        </p>
        {
          addon.map(({ title, subTitle, price, checked }) => (
            <AddOnsCard key={title} title={title} subTitle={subTitle} price={price} isChecked={checked} checkedHandler={() => checkedHandler(title)} changeHandler={() => checkedHandler(title)} />
          ))
        }

        <div className='flex justify-between items-center bottom-0 lg:absolute fixed bottom-0 right-0 p-4 lg:p-0 bg-white w-full'>
          <Button type='button' className='text-grey font-medium text-base' onClick={() => setStepName(StepName.PLAN)}>Go Back</Button>
          <Button type="submit" className="bg-denim rounded-md py-4 px-6 text-white font-medium" onClick={nextStep}>
            Next Step
          </Button>
        </div>
      </>}
    </>
  )
}

export default AddOns
