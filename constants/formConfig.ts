/* eslint-disable node/no-missing-import */
import { FC } from 'react'
import Input, { Props } from '@/components/Input'

export type FormComponent = {
  key: string;
  id: string;
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  disabled: boolean;
  Component: FC<Props>;
  validation?: {
    required?: boolean;
    isNumeric?: boolean;
  };
  rows?: string;
};

export const formConfig: FormComponent[] = [
  {
    key: 'username',
    id: 'username',
    label: 'Name',
    type: 'text',
    name: 'username',
    placeholder: 'e.g. Stephen King',
    disabled: false,
    Component: Input
  },
  {
    key: 'email',
    id: 'email',
    label: 'Email Address',
    type: 'email',
    name: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
    disabled: false,
    Component: Input
  },
  {
    key: 'phone',
    id: 'phone',
    label: 'Phone Number',
    type: 'tel',
    name: 'phone',
    placeholder: 'e.g. +1 234 567 890',
    disabled: false,
    Component: Input
  }
]
