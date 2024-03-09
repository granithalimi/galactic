import React from 'react'
import "../assets/style/style.css"
import miniLogo from '../assets/images/Logo2-transparent.png'
import { useInView } from 'react-intersection-observer'

function Roadmap() {
    const [refRoadMap, inViewRoadMap] = useInView({
        threshold: .5,
        triggerOnce: true
    })
  return (
    <>
        <div id='road-map' className='pb-5'>
            <div className='title'>
                <h1 className='text-center road-map-title'>-Roadmap-</h1>  
            </div>
            <div ref={refRoadMap} className='cards d-flex justify-content-center mb-5'>
                <div className={`cardd border border-white mx-5 hidden-cards ${(inViewRoadMap === true) ? 'show-cards' : ''}`}>
                    <div className='card-image d-flex justify-content-center py-4'>
                        <img src={miniLogo} alt='Mini-Logo' />
                    </div>
                    <div className='card-paragraph px-2'>
                        <p className='text-center'>Launch <span>Galactic Nebula</span> and grow the largest crypto community.</p>
                    </div>
                </div>
                <div className={`cardd snd border border-white mx-5 hidden-cards ${(inViewRoadMap === true) ? 'show-cards' : ''}`}>
                    <div className='card-image d-flex justify-content-center py-4'>
                        <img src={miniLogo} alt='Mini-Logo' />
                    </div>
                    <div className='card-paragraph px-2'>
                        <p className='text-center'>Forge partnerships with top creators to elevate our project.</p>
                    </div>
                </div>
                <div className={`cardd trd border border-white mx-5 hidden-cards ${(inViewRoadMap === true) ? 'show-cards' : ''}`}>
                    <div className='card-image d-flex justify-content-center py-4'>
                        <img src={miniLogo} alt='Mini-Logo' />
                    </div>
                    <div className='card-paragraph px-2'>
                        <p className='text-center'>Achieve the status of the number <span>1 Meme Coin</span> in the market.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Roadmap