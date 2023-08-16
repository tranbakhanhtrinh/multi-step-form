import React, { ChangeEventHandler, FocusEventHandler } from 'react'

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

const Input: React.FC<Props> = ({ id, label, onChange, onFocus, onBlur, error, type, checked, placeholder, ...inputProps }) => {
  return (
    <>
      {type !== 'checkbox'
        ? (
          <>
            <label className='font-normal mb-2' htmlFor={id}>{label}</label>
            <input type={type} id={id} onChange={onChange} onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} {...inputProps} className='w-full rounded-md border border-borderColor pl-4 py-3' />
          </>)
        : (
          <>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} onChange={onChange} checked={checked} {...inputProps} />
          </>)}
      {error
        ? (<div className='' >{error}</div>)
        : (type !== 'checkbox' && <div style={{ height: 24 }}></div>)}
    </>
  )
}

export default Input
