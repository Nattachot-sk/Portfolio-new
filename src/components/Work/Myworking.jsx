import React from 'react'
import "./Mywork.css"
import Card from '../Card/Card'
function Myworking() {
  return (
    <div className="w-full min-h-[1200px] h-auto flex justify-center items-center work-bg" id="mywork">
        <div className='w-[1400px] h-[850px]'>
          <h1 className='text-center'>Project</h1>
          <div>
            <Card />
          </div>
        </div>
    </div>
  )
}

export default Myworking