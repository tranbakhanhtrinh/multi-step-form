'use client'
/* eslint-disable node/no-missing-import */
import React, { useContext, useEffect } from 'react'
import Button from '../Button'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setInfo } from '@/redux/actions'
import { MenuContext } from '@/context/MenuContext'
import { StepName } from '@/types/stepTypes'

const Form: React.FC = () => {
  const { register, handleSubmit, formState, setValue } = useForm()
  const dispatch = useAppDispatch()
  const { username, email, phone } = useAppSelector(state => state.personalInfo.data)
  const { stepName, setStepName } = useContext(MenuContext)
  const { errors } = formState
  const onSubmit = (data: any) => {
    if (errors !== null || errors !== undefined) {
      dispatch(setInfo(data))
      setStepName(StepName.PLAN)
    }
  }
  const commonClass = `w-full rounded-md border border-borderColor pl-4 py-3 mb-6 transition ease-in-out duration-300 focus:outline-none focus:border-purple `
  useEffect(() => {
    setValue('username', username)
    setValue('email', email)
    setValue('phone', phone)
  }, [email, phone, username, stepName])
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='flex items-center justify-between'>
          <label className='font-normal text-denim' htmlFor='username'>Name</label>
          <p className='text-red-errors text-[14px] font-bold'>{errors?.username?.message as any}</p>
        </div>
        <input type='text' id='username' {...register('username', {
          required: {
            value: true,
            message: 'Username is required'
          }
        })} placeholder='e.g. Stephen King' className={commonClass.concat(errors?.username?.message ? 'border-red-errors focus:border-red-errors ' : 'border-borderColor')} />

        <div className='flex items-center justify-between'>
          <label className='font-normal text-denim' htmlFor='email'>Email Address</label>
          <p className='text-red-errors text-[14px] font-bold'>{errors?.email?.message as any}</p>
        </div>
        <input type='email' id='email' {...register('email', {
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Invalid email format'
          },
          required: {
            value: true,
            message: 'Email is required'
          }
        })} placeholder='e.g. stephenking@lorem.com' className={commonClass.concat(errors?.email?.message ? 'border-red-errors focus:border-red-errors ' : 'border-borderColor')} />

        <div className='flex items-center justify-between'>
          <label className='font-normal text-denim' htmlFor='phone'>Phone Number</label>
          <p className='text-red-errors text-[14px] font-bold'>{errors?.phone?.message as any}</p>
        </div>
        <input type='tel' id='phone' {...register('phone', {
          pattern: {
            value: /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
            message: 'Invalid phone number format'
          },
          required: {
            value: true,
            message: 'Phone number is required'
          }
        })} placeholder='e.g. +1 234 567 890' className={commonClass.concat(errors?.phone?.message ? 'border-red-errors focus:border-red-errors ' : 'border-borderColor')} />
        <div className='lg:absolute fixed bottom-0 right-0 p-4 lg:p-0 bg-white w-full'>
          <Button type="submit" className="bg-denim rounded-md py-4 px-6 text-white font-medium block me-0 ms-auto">
            Next Step
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
