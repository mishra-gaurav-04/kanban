import React from 'react'
import Card from '@/components/shared/Card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {grey} from '@mui/material/colors';

const page = () => {
    return (
        <section className='bg-gray-200 py-10'>
            <div className='wrapper'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <CheckCircleIcon sx={{color : grey[500]}}/>
                            <h3>Backlog</h3>
                            <p className='text-gray-500'>2</p>
                        </div>
                        <div>
                            <AddOutlinedIcon sx={{color : grey[500]}}/>
                            <MoreHorizOutlinedIcon sx={{color : grey[500]}}/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <Card/>
                        <Card/>
                    </div>
                </div> 
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <CheckCircleIcon sx={{color : grey[500]}}/>
                            <h3>Backlog</h3>
                            <p className='text-gray-500'>2</p>
                        </div>
                        <div>
                            <AddOutlinedIcon sx={{color : grey[500]}}/>
                            <MoreHorizOutlinedIcon sx={{color : grey[500]}}/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <Card/>
                        <Card/>
                    </div>
                </div>          
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <CheckCircleIcon sx={{color : grey[500]}}/>
                            <h3>Backlog</h3>
                            <p className='text-gray-500'>2</p>
                        </div>
                        <div>
                            <AddOutlinedIcon sx={{color : grey[500]}}/>
                            <MoreHorizOutlinedIcon sx={{color : grey[500]}}/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <Card/>
                        <Card/>
                    </div>
                </div> 
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <CheckCircleIcon sx={{color : grey[500]}}/>
                            <h3>Backlog</h3>
                            <p className='text-gray-500'>2</p>
                        </div>
                        <div>
                            <AddOutlinedIcon sx={{color : grey[500]}}/>
                            <MoreHorizOutlinedIcon sx={{color : grey[500]}}/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <Card/>
                        <Card/>
                    </div>
                </div> 
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <CheckCircleIcon sx={{color : grey[500]}}/>
                            <h3>Backlog</h3>
                            <p className='text-gray-500'>2</p>
                        </div>
                        <div>
                            <AddOutlinedIcon sx={{color : grey[500]}}/>
                            <MoreHorizOutlinedIcon sx={{color : grey[500]}}/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <Card/>
                        <Card/>
                    </div>
                </div> 
            </div>
            

        </section>
    )
}

export default page