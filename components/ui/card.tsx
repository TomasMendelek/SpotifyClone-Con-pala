import { Playlist } from '@/lib/data'
import Image from 'next/image';
import React from 'react'

interface BibliotecaCardProps{
    playlist: Playlist;
}

const BibliotecaCard: React.FC<BibliotecaCardProps> =  ({ playlist }) => {
  return (
    <div className='flex flex-col items-center p-4 rounded-lg shadow-lg'>
        <Image src={playlist.cover} alt={playlist.title} height={40} width={40} className=" aspect-square object-cover" />
        <div>
            <h2>{playlist.title}</h2>
            <p></p>
        </div>
    </div>
  )
}

export default BibliotecaCard