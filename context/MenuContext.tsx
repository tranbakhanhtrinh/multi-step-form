/* eslint-disable node/no-missing-import */
'use client'
import { StepName } from '@/types/stepTypes'
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

type MenuContextProviderProps = {
  children: React.ReactNode
}

type Menu = StepName.ADDONS | StepName.INFO | StepName.PLAN | StepName.SUMMARY | StepName.THANK

type MenuContextType = {
  stepName: Menu,
  setStepName: Dispatch<SetStateAction<Menu>>
}

export const MenuContext = createContext<MenuContextType | null>(null)

const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [stepName, setStepName] = useState<Menu>(StepName.INFO)
  return (
    <MenuContext.Provider value={{ stepName, setStepName }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContextProvider

export const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuContextProvider')
  }
  return context
}
