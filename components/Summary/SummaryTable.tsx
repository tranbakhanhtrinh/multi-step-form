import React from 'react'

type Props = {
  plan: string
  price: number
  addonsArr: any[]
}

const SummaryTable: React.FC<Props> = ({ plan, price, addonsArr }) => {
  const addOnsChecked = addonsArr.filter(item => item.checked === true)
  const addOnsTotalPrice = addOnsChecked.reduce((acc, item) => (acc += item.price), 0)
  return (
    <div>
      <div className='bg-very-light-grey p-6 mb-6'>
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className='text-denim font-medium text-base'>{plan}</p>
            <p className='text-[14px] text-grey underline'>Change</p>
          </div>
          <strong className='font-bold text-denim'>
            ${price}/mo
          </strong>
        </div>
        <hr className='bg-grey border-t-grey mb-6' />
        {addOnsChecked.map(ao => (
          <div key={ao.title} className="flex items-center justify-between mb-6">
            <p className='text-grey text-[14px]'>{ao.title}</p>
            <p className='text-denim text-[14px]'>+${ao.price}/mo</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mb-6 pl-6">
        <p className='text-grey text-[14px]'>Total (per {plan.includes('Monthly') ? 'month' : 'year'})</p>
        <p className='font-bold text-purple text-xl'>+${addOnsTotalPrice + price}/mo</p>
      </div>
    </div>
  )
}

export default SummaryTable
