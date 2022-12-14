import { ReactNode } from 'react'
import { NavbarMini } from './Navbar'

export default function Layout({ children }: {
  children: ReactNode,
}) {
  return (
    <>
      <div className='flex flex-row justify-start'>
        <div className='flex-none'>
          <NavbarMini />
        </div>
        <div className='grow'>
          {children}
        </div>
      </div>
    </>
  )
}
