import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/Logo.png'
import { useInView } from 'react-intersection-observer';
import penguin from '../assets/images/mini-penguin.png'
import { binary } from '../helpers/binary'

function Head() {
    const [nums, setNums] = useState() 

    useEffect(() => {
        setNums(binary(penguin, 'penguin'))
    }, [])

    const [ refHead, inViewHead ] = useInView({
        threshold: 1,
        triggerOnce: true
    });
  return (
    <>
        <div className='home d-flex flex-column justify-content-between'>
            {/* TOP */}
            <div className='binary top d-flex align-items-center'>
            {
                (nums && nums.length > 0 ) && 
                nums.map((i, index) => {
                if(typeof(i) === 'string'){
                    return <img key={index} src={i} alt='penguin' id='penguin' />
                }else{
                    return i
                }
                })
            }
            </div>
            {/* HEAD */}
            <div ref={refHead} className="head d-flex justify-content-center align-items-center">
            <div className={(inViewHead === true) ? "image mx-5 d-flex justify-content-end hidden-head-logo show-head-logo" : "image mx-5 d-flex justify-content-center hidden-head-logo"}>
                <img src={Logo} alt="LOGO" id="head-logo" />
            </div>

            <div id="border" className={(inViewHead === true) ? "hidden-head-border show-head-border" : "hidden-head-border "}></div>
            
            <div id='text' className={(inViewHead === true) ? "mx-5 hidden-head-text show-head-text" : "mx-5 hidden-head-text"}>
                <h1 id='head-heading' className='mb-4'>
                Galactic Nebula
                </h1>
                <p id='head-paragraph' >
                Welcome to the future of meme coins - Galactic Nebula! Embark on an interstellar journey with us as we redefine the essence of blending humor, community, and cryptocurrency into one galactic adventure. The era of alt coins has arrived, and we firmly believe that with our innovative project and the unwavering support of our community, we can create the safest and most monumental venture in the crypto universe. Your participation is crucial; together, we can navigate the vast possibilities of Galactic Nebula. Every transaction propels us further into the cosmos of digital currency, marking our collective journey towards becoming the next big sensation in the crypto world. Are you ready to join forces and become a vital part of this thrilling voyage?
                </p>
            </div>
            </div>
            {/* BOTTOM */}
            <div className='bottom binary d-flex align-items-center'>
                {
                    (nums && nums.length > 0 ) && 
                    nums.map((i, index) => {
                    if(typeof(i) === 'string'){
                        return <img key={index} src={i} alt='penguin' id='penguin' />
                    }else{
                        return i
                    }
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Head