/* eslint-disable node/no-missing-import */
import React, { MouseEventHandler, ChangeEventHandler } from 'react'
import Input from '.././Input'
// import { FunctionHandler } from '@/types/functionHandlerType'

type Props = {
  title: string
  subTitle: string
  price: number
  isChecked: boolean
  checkedHandler: MouseEventHandler<HTMLDivElement>
  changeHandler: ChangeEventHandler<HTMLInputElement>
}

const AddOnsCard: React.FC<Props> = ({ title, subTitle, price, isChecked, checkedHandler, changeHandler }) => {
  // const clickHandler = () => {
  //   checkedHandler()
  // }
  return (
    <div className={`flex justify-between items-center rounded-lg border ${isChecked ? 'border-purple' : 'border-borderColor'} hover:border-purple bg-very-light-grey lg:gap-32 transition ease-in-out duration-500 lg:px-6 px-4 py-5 mb-4`} onClick={checkedHandler}>
      <div className="flex items-center">
        <Input type='checkbox' checked={isChecked} className={`w-5 h-5 lg:mr-6 mr-4 relative bg-purple-700 appearance-none border border-borderColor rounded-md checked:bg-purple transition ease-in-out duration-500 after:content-[''] after:w-[6px] after:h-[11px] after:bg-transparent after:border-b-2 after:border-r-2 after:border-white after:absolute after:rotate-45 after:top-[1.5px] after:left-[6px]`} onChange={changeHandler} />
        <div>
          <p className='text-denim font-medium text-base'>{title}</p>
          <p className='text-grey text-[14px]'>{subTitle}</p>
        </div>
      </div>
      <p className='text-purple text-[14px]'>
        +${price}/mo
      </p>
    </div>
  )
}

export default AddOnsCard
