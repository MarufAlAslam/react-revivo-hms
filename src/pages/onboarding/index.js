import React from 'react'
import Sidebar from './sidebar'

const OnBoarding = () => {
    return (
        <div className='onboarding'>
            <div className='flex justify-between items-start'>
                <div className='w-[20%] min-h-screen onboarding-sidebar px-[28px] pt-[45px]'>
                    <Sidebar/>
                </div>
                <div className='w-full'></div>
            </div>
        </div>
    )
}

export default OnBoarding