"use client"
import { useUser } from '@/app/provider'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Settings() {
  const { user } = useUser()
  console.log(user)

  return (
    <div>
      <div className='bg-white shadow-md rounded-xl border border-gray-100 p-5 mt-10 mx-100'>
           <div className='flex items-center gap-3 ml-4 '>
               {user?.picture ? (
                    <div className="relative w-15 h-15 rounded-full overflow-hidden mt-3">
                        <Image
                        src={user.picture}
                        alt='avatar'
                        fill
                        className='object-cover'
                        />
                    </div>
                    ) : (
                    <p>No image available</p>
                    )}
                <div className=''>
                    <h2 className='font-bold'>{user?.name}</h2>
                    <h2 className='text-xs'>{user?.email}</h2>
                </div>

           </div>
           <div className=' m-5'>
            <Button className='text-black font-medium px-33 border border-gray-200 bg-gray-100 hover:bg-white'>Log Out</Button>
           </div>
       </div>
    </div>
  )
}

export default Settings
