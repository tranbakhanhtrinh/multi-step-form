/* eslint-disable no-unused-vars */
export type Step = {
  step: string,
  name: string,
} & {
  setIsActive?: (...arg: any) => void,
  isActive?: boolean
}

export enum StepName {
  INFO = 'Your info',
  PLAN = 'Select plan',
  ADDONS = 'Add-ons',
  SUMMARY ='Summary',
  THANK = 'Thank'
}
