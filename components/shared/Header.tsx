'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const handleToggleChange = () => {
        setToggle(!toggle);
    }
    return (
        <header className='w-full border-b-2 bg-white'>
            <div className='p-5 flex items-center justify-between'>
                <div className='ml-3 border-2 border-gray-300 flex items-center gap-5 shadow-xl p-1 rounded-lg cursor-pointer' onClick={handleToggleChange}>
                    <Image src="/settings.svg" alt='settings' width={13} height={13} />
                    <p>Display</p>
                    {
                        toggle ? (<Image src="/down-arrow.svg" alt='up-arrow' width={13} height={13} />)
                            :
                            (<Image src="/up-arrow.svg" alt='up-arrow' width={13} height={13} />)
                    }
                </div>
                {toggle && (
                    <div className="absolute top-full left-0 bg-gray-500 shadow-lg rounded-md mt-2 p-3">
                        Content to be displayed on toggle
                    </div>
                )}
                <div>
                    <DarkModeIcon />
                </div>
            </div>
            {
                toggle && (
                    <section className='absolute bg-white flex flex-col gap-4 border-2 shadow-lg rounded-md overflow-hidden left-0 top-16 ml-8 px-12 py-5'>
                        <div className='flex gap-10 items-center justify-between'>
                            <h3 className='text-gray-500'>Grouping</h3>
                            <select value="" className='bg-white border-2 px-2 border-gray-400 rounded-lg'>
                                <option value="status">Status</option>
                                <option value="user">User</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>
                        <div className='flex gap-10 items-center justify-between'>
                            <h3 className='text-gray-500'>Ordering</h3>
                            <select value="" className='bg-white border-2 px-2 border-gray-400 rounded-lg '>
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </section>
                )
            }
        </header>

    )
}

export default Header