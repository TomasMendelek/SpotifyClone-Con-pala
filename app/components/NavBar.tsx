import { Bell, User } from 'lucide-react'
import React from 'react'
import Search from './ui/search'

const NavBar = () => {
  return (
    <nav className="h-12 flex flex-row justify-between items-center m-2 text-white ">
        <span>Logo</span>
        <Search />
        <div className='w-fit flex flex-row gap-2 items-start'>
            <Bell size={32} className='bg-neutral-800 p-2 rounded-3xl'/>
            <User size={32} className='bg-neutral-800 p-2 rounded-3xl'/>
            

        </div>
    </nav>
  )
}

export default NavBar