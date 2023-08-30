/* eslint-disable node/no-missing-import */
import { FC } from 'react'
import Input, { Props } from '@/components/Input'

export type FormComponent = {
  key: string;
  id: string;
  label: string;
  type?: string;
  name?: string;
  placeholder: string;
  disabled?: boolean;
  Component: FC<Props>;
  validation?: {}
};

export const formConfig: FormComponent[] = [
  {
    key: 'username',
    id: 'username',
    label: 'Name',
    type: 'text',
    placeholder: 'e.g. Stephen King',
    validation: {
      required: {
        value: true,
        message: 'Username is required'
      }
    },
    Component: Input
  },
  {
    key: 'email',
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
    validation: {
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: 'Invalid email format'
      },
      required: {
        value: true,
        message: 'Email is required'
      }
    },
    Component: Input
  },
  {
    key: 'phone',
    id: 'phone',
    label: 'Phone Number',
    type: 'tel',
    name: 'phone',
    placeholder: 'e.g. +1 234 567 890',
    validation: {
      pattern: {
        value: /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
        message: 'Invalid phone number format'
      },
      required: {
        value: true,
        message: 'Phone number is required'
      }
    },
    Component: Input
  }
]
