'use client'
import React, { Dispatch, SetStateAction, createContext, useState } from 'react'

export const MenuContext = createContext<{ stepName: string, setStepName: Dispatch<SetStateAction<string>> }>({
  stepName: '',
  setStepName: () => { }
})

const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [stepName, setStepName] = useState<string>('Your info')
  return (
    <MenuContext.Provider value={{ stepName, setStepName }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContextProvider
