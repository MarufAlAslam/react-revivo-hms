import React from 'react'
import Sidebar from './sidebar'
import Main from './main'

const OnBoarding = () => {
    const [currentID, setCurrentID] = React.useState(1)
    return (
        <div className='onboarding'>
            <div className='flex justify-between items-start'>
                <div className='w-[20%] min-h-screen onboarding-sidebar px-[28px] pt-[45px]'>
                    <Sidebar currentID={currentID}/>
                </div>
                <div className='w-full'>
                    <Main currentID = {currentID} setCurrentID={setCurrentID}/>
                </div>
            </div>
        </div>
    )
}

export default OnBoarding