import React from 'react'
import Image from 'next/image';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { grey } from '@mui/material/colors';

const Card = () => {
  return (
    <div className='flex flex-col px-3 py-1 bg-white border-2 shadow-xl w-full rounded-lg space-y-2'>
        <div className='flex items-center justify-between'>
            <h3 className='text-gray-500'>CAM-10</h3>
            <Image src="/profile-1.png" alt="profile" width={20} height={20} className='rounded-full'/>
        </div>
        <div className='flex  gap-2'>
            <CircleOutlinedIcon/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque et optio!</p>
        </div>
        <div className='flex item-center justify-between gap-3'>
            <div className='flex gap-2 mr-5 border-2 px-3 rounded-lg'>
                <CircleIcon sx={{color: grey[500]}}/>
                <h4>Feature Request</h4>
            </div>
        </div>
    </div>
  )
}

export default Card