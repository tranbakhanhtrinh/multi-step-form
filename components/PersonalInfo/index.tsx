'use client'
/* eslint-disable node/no-missing-import */
import React from 'react'
import Form from '../Form'
import { useMenuContext } from '@/context/MenuContext'
import { StepName } from '@/types/stepTypes'

const PersonalInfo = () => {
  const { stepName } = useMenuContext()
  return (
    <>
      {stepName === StepName.INFO &&
        <>
          <h1 className='font-bold text-denim text-[32px]'>Personal info</h1>
          <p className='font-medium text-grey text-base mb-9'>
            Please provide your name, email address, and phone number.
          </p>
          <Form />
        </>
      }
    </>

  )
}

export default PersonalInfo
