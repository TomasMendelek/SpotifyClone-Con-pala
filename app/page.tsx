import React from 'react'
import NavBar from '../components/NavBar'
import Aside from '../components/aside'

const Page = () => {
  return (
    <div className='flex flex-col px-4 bg-neutral-950'>
      <NavBar />
      <main className='h-screen bg-black grid grid-cols-5'>
        <Aside />
        <section className='bg-green-600  w-full col-span-4'>b</section>
      </main>
      <footer className=' h-12'></footer>
    </div>
  )
}

export default Page