import React from 'react'
import "./Mywork.css"
import Card from '../Card/Card'
function Myworking() {
  return (
    <div className="w-full min-h-[1200px] h-auto flex justify-center items-center work-bg " id="mywork">
        <div className='sm:w-[1400px] sm:h-[850px] mb-5'>
          <h1 className='text-center font-bold text-[24px] mt-10 sm:mt-0'>Project</h1>
          <div>
            <Card />
          </div>
        </div>
    </div>
  )
}

export default Myworking