'use client'
/* eslint-disable node/no-missing-import */
import Image from 'next/image'
import React, { MouseEventHandler, useEffect } from 'react'
import { motion } from 'framer-motion'

type Props = {
  src: string;
  planName: string;
  price: string;
  isYearly?: boolean;
  isActive?: boolean;
  activeHandler: MouseEventHandler<HTMLDivElement>
  setInitialPlan: (planName: string, price: number) => void
}

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
}

const PlanCard: React.FC<Props> = ({ src, planName, price, isYearly, isActive, activeHandler, setInitialPlan }) => {
  useEffect(() => {
    if (isActive) {
      const backSlashIndex = price.indexOf('/')
      const transformedPrice = parseInt(price.substring(1, backSlashIndex))
      setInitialPlan(`${planName} (${isYearly ? 'Yearly' : 'Monthly'})`, transformedPrice)
    }
  }, [planName, price, isActive])
  return (
    <div className={`py-5 pl-4 rounded-lg border ${isActive ? 'border-purple' : 'border-borderColor'}  hover:border-purple bg-very-light-grey lg:w-[138px] transition ease-in-out duration-500 w-full flex items-start lg:block gap-4 lg:gap-0 mb-4 lg:mb-0`} onClick={activeHandler}>
      <Image src={src} alt={planName} width={40} height={40} className='lg:mb-10' />
      <div className=''>
        <b className='text-base font-medium text-denim'>{planName}</b>
        <p className='text-grey text-[14px] block'>{price}</p>
        <motion.p variants={variants} animate={isYearly ? 'open' : 'closed'} transition={{ duration: 0.5 }} className='text-denim text-[12px]'>2 months free</motion.p>
      </div>
    </div>
  )
}

export default PlanCard
