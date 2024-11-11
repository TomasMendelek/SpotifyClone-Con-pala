import { Box, Home, SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-row items-center gap-2'>
        
            <span className='bg-neutral-800 p-2 rounded-3xl'>
                <Home />
            </span>


            <div className='w-fit p-2 flex flex-row  bg-neutral-800 rounded-3xl gap-24'>
                <div className='flex gap-2'>
                    <SearchIcon />
                    <input type='text' className= 'text-neutral-300 bg-transparent ring-0' placeholder='¿Que quieres Reporducir?'></input>
                </div>
                <div className='border-l border-neutral-400 pl-2 '>
                    <Box />
                </div>
            </div>

    </div>
  )
}

export default Search