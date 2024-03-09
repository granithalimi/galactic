import React from 'react'
import '../assets/style/style.css'
import { useInView } from 'react-intersection-observer';
import missionPic from '../assets/images/vision-and-mission-pic.jpg'

function VisionAndMission() {
    const [refVAndMPic, inViewVAndMPic] = useInView({
        threshold: .5,
        triggerOnce: true
    })

    const [refVAndMText, inViewVAndMText] = useInView({
        threshold: .5,
        triggerOnce: true
    })
  return (
    <>
        <div id='vision-and-mission' className='d-flex flex-column align-items-center py-5'>
            <div ref={refVAndMPic} className='mission-image'>
                <img src={missionPic} alt='Picture' id='mission-img' className={`hidden-mission ${(inViewVAndMPic == true) ? 'show-mission' : ''}`} />
            </div>
            <div className='mission-text' ref={refVAndMText}>
                <div className='paragraph'>
                    <p className={`text-center hidden-mission ${(inViewVAndMText == true) ? 'show-mission' : ''}`}>To revolutionize the crypto space with the luminescence of Galactic Nebula, aspiring to become the guiding star for enthusiasts who cherish a mix of entertainment, unity, and financial evolution. With grand ambitions for this project, we are committed to proving that together, we can craft not just the biggest meme in the crypto universe but a symbol of what collective belief and action can achieve.</p>
                    <p className={`text-center hidden-mission ${(inViewVAndMText == true) ? 'show-mission-2' : ''}`}>To forge a digital currency that transcends the conventional, offering not only a secure and innovative asset but also an inclusive community bonded by shared humor and a passion for exploration. By locking away 5% of our coins, we demonstrate our unwavering faith in Galactic Nebula and our dedication to giving back to the community that powers our journey. This project is a testament to our belief in the transformative power of cryptocurrency and our commitment to creating a legacy of greatness, achievable only with your support. Join us as we navigate this vast, uncharted galaxy, where the possibilities are as infinite as the stars.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default VisionAndMission