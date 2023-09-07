/* eslint-disable node/no-missing-import */
import { useMenuContext } from '@/context/MenuContext'
import { StepName } from '@/types/stepTypes'
import Image from 'next/image'
import React from 'react'

const Thanks = () => {
  const { stepName } = useMenuContext()
  return (
    <>
      {stepName === StepName.THANK && <div className='h-full flex flex-col justify-center'>
        <Image src="/assets/check.svg" alt='Check icon' width={80} height={80} className='mb-8 block mx-auto' />
        <h1 className='font-bold text-denim text-[32px] text-center'>Thank you!</h1>
        <p className='text-grey text-base text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>}
    </>
  )
}

export default Thanks
