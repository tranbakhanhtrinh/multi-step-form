'use client'
/* eslint-disable node/no-missing-import */
import React, { useContext, useEffect } from 'react'
import Button from '../Button'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setInfo } from '@/redux/actions'
import { MenuContext } from '@/context/MenuContext'
import { StepName } from '@/types/stepTypes'
import { formConfig } from '@/constants/formConfig'

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
  useEffect(() => {
    setValue('username', username)
    setValue('email', email)
    setValue('phone', phone)
  }, [email, phone, username, stepName])
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {formConfig.map(({ type, id, label, placeholder, validation, Component }) =>
          <Component key={id} type={type} id={id} label={label} placeholder={placeholder} error={errors?.[id]?.message as string} {...register(id, validation)} />
        )}
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
