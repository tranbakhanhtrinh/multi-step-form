/* eslint-disable node/no-missing-import */
import { personalInfoSlice } from '@/redux/slices/persionalSlice'
import { planSlice } from '@/redux/slices/planSlice'
import { addOnsSlice } from '@/redux/slices/addOnsSlice'

export const { setInfo } = personalInfoSlice.actions
export const { setPlan } = planSlice.actions
export const { setAddONS } = addOnsSlice.actions
