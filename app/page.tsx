'use client'
/* eslint-disable node/no-missing-import */
import { Provider } from 'react-redux'
import PersonalInfo from '@/components/PersonalInfo'
import YourPlan from '@/components/YourPlan'
import AddOns from '@/components/AddOns'
import StepMenu from '@/components/StepMenu'
import MenuContextProvider from '@/context/MenuContext'
import Summary from '@/components/Summary'
import Thanks from '@/components/Thanks'
import { store } from '@/redux/store'

export default function Home () {
  return (
    <Provider store={store}>
      <MenuContextProvider>
        <main className="lg:flex block lg:h-[640px] md:mx-auto p-4 items-start bg-white shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)] rounded-2xl">
          <StepMenu />
          <div className='h-full relative w-full lg:w-[480px]'>
            <PersonalInfo />
            <YourPlan />
            <AddOns />
            <Summary />
            <Thanks />
          </div>
        </main>
      </MenuContextProvider>
    </Provider>
  )
}
