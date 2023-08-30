import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react'

type IInputProps = {
  invalid?: boolean;
};
export interface Props extends IInputProps {
  id?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  error?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  value?: string | number;
  checked?: boolean;
  defaultChecked?: boolean
  className?: string;
  placeholder?: string
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(({ id, label, error, type, checked, placeholder, ...inputProps }, ref) => {
  return (
    <>
      {type !== 'checkbox'
        ? (
          <>
            <div className='flex items-center justify-between'>
              <label className='font-normal text-denim' htmlFor={id}>{label}</label>
              <p className='text-red-errors text-[14px] font-bold'>{error}</p>
            </div>
            <input ref={ref} type={type} id={id} placeholder={placeholder} {...inputProps} className={`w-full rounded-md border border-borderColor pl-4 py-3 mb-6 transition ease-in-out duration-300 focus:outline-none focus:border-purple ${error ? 'border-red-errors focus:border-red-errors ' : 'border-borderColor'}`} />
          </>)
        : (
          <>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} checked={checked} {...inputProps} />
          </>)}
    </>
  )
})

Input.displayName = 'Input'

export default Input
