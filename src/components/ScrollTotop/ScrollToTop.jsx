import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTop() {
    const [isVisible , setIsVisible] = useState(false)

    useEffect(() =>{
        const toggleVisible = () =>{
            if(window.pageYOffset > 350){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }

        }
        window.addEventListener('scroll', toggleVisible)

        return () => {
            window.removeEventListener('scroll', toggleVisible)
        }

    },[])


    const scrollTotop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
  return (
    <>
    {isVisible &&(
            <button
            onClick={scrollTotop}
             className='fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md'>
                    <FontAwesomeIcon icon={faArrowUp} />
            </button>
    )}

    </>
  )
}

export default ScrollToTop