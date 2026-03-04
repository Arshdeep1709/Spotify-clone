import React from 'react'
import { songsData, assets } from '../assets/assets'

const Player = () => {
    return (
        <div className='h-[10%] p-2 px-4 flex bg-black text-white justify-between items-center'>
            <div className='hidden lg:flex items-center gap-4'>
                <img src={songsData[0].image} alt="logo" className='w-12' />
                <div className=''>
                    <p className=''>{songsData[0].name}</p>
                    <p className=''>{songsData[0].desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className='flex items-center flex-col gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img src={assets.shuffle_icon} alt="logo" className='w-4 cursor-pointer' />
                    <img src={assets.prev_icon} alt="logo" className='w-4 cursor-pointer' />
                    <img src={assets.play_icon} alt="logo" className='w-4 cursor-pointer' />
                    <img src={assets.next_icon} alt="logo" className='w-4 cursor-pointer' />
                    <img src={assets.loop_icon} alt="logo" className='w-4 cursor-pointer' />
                </div>
                <div className='flex items-center gap-5'>
                    <p>1:20</p>
                    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr className='w-0 h-1 border-none bg-green-800 rounded-full' />
                    </div>
                    <p>3:23</p>
                </div>

            </div>


        </div>
    )
}

export default Player