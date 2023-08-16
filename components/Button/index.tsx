import React, { MouseEventHandler, ReactNode } from 'react'

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ type, onClick, children, className, disabled, ...buttonProps }) => {
  return (
    <button type={type} onClick={onClick} className={` ${className ?? ''}`} disabled={disabled} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
