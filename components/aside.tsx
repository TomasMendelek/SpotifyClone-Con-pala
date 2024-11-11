import { Button } from '@/components/ui/button'
import { Library, LucideArrowRight, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Aside = () => {
  return (
    <div className='col-span-1 bg-neutral-900 text-white items-center rounded-md py-4 px-2'>
        <div className ='flex flex-row justify-between items-center text-center'>
            <Link href="/" className='flex gap-2 '>
                <Library className= 'space-x-2'/>
                <h3 className='font-bold '>Tu Biblioteca</h3>
            </Link>
            <div className='flex gap-2'>
                <Button variant="ghost" className='p-2 h-fit'> <Plus /></Button>
                <Button variant="ghost" className='p-2 h-fit'> <LucideArrowRight /></Button>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Aside