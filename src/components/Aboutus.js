import React from 'react'
import '../assets/style/style.css'
import Logo from '../assets/images/Logo.png'
import { useInView } from 'react-intersection-observer';

function Aboutus() {
    const [ refAboutUSSt, inViewAboutUSST ] = useInView({
        threshold: .5,
    });
    const [ refAboutUSNd, inViewAboutUSNd ] = useInView({
        threshold: .5,
    });
    const [ refAboutUSRd, inViewAboutUSRd ] = useInView({
        threshold: .5,
    });
    const [ refAboutUSTitle, inViewAboutUSTitle ] = useInView({
        threshold: 1,
        triggerOnce: true
    });
  return (
    <>
        <div id='about-us' style={{backgroundColor: '#121212', width: "100%"}}>
            <div ref={refAboutUSTitle} className={`about-us-title ${(inViewAboutUSTitle === true) ? 'about-us-title-anim' : ''}`}>
                <h1 id='about-us-heading' className='text-center'>About Us</h1>
            </div>
            <div className='boxes d-flex flex-column align-items-center mb-0 pb-5'>
                <div ref={refAboutUSSt} className='d-flex justify-content-center box'>
                    <div className={`st mb-4 d-flex align-items-center p-5 border border-2 border-white ${inViewAboutUSST ? 'show-box' : ''}`}>
                        <div className='w-50'>
                            <h1 className='mb-2'>-About Our Coin-</h1>
                            <p className='mb-0 about-us-paragraph'>
                                Dive deep into the essence of Galactic Nebula, a meme coin that emerges at the intersection of cosmic creativity and the pioneering spirit of digital innovation. <br /><br /> We are a collective of believers in the transformative power of cryptocurrencies, embarking once again on an ambitious journey. <br /> <br /> Our previous projects have not only succeeded but soared, underscoring our longstanding presence and reputable track record in the crypto universe. <br /><br /> Known for launching impactful ventures, we're setting our sights even higher with Galactic Nebula.
                            </p>
                        </div>
                        <div className='w-50 d-flex justify-content-center'>
                            <img src={Logo} alt='penguin'  />
                        </div>
                    </div>
                </div>
                <div ref={refAboutUSNd} className='d-flex justify-content-center box'>
                    <div className={`nd my-4 d-flex align-items-center p-5 border border-2 border-white ${inViewAboutUSNd ? 'show-box' : ''}`}>
                        <div className='w-50 d-flex justify-content-center'>
                            <img src={Logo} alt='penguin'  />
                        </div>
                        <div className='w-50'>
                            <h1 className='mb-2 text-end'>-The Mission-</h1>
                            <p className='mb-0 about-us-paragraph text-end'>
                                Our mission is rooted in more than just the creation of another digital asset; we aim to forge a vibrant community of enthusiasts who share our passion for space, humor, and the revolutionary potential of cryptocurrencies. <br /><br /> The genesis of Galactic Nebula is our way of giving back to the community that has been our cornerstone. In a gesture of our commitment and belief in this project's potential, we are locking away 5% of the coins. <br /><br /> This act symbolizes our trust in Galactic Nebula's future and our dedication to ensuring its growth and sustainability.
                            </p>
                        </div>
                    </div>
                </div>
                <div ref={refAboutUSRd} className='d-flex justify-content-center box'>
                    <div className={`rd my-4 d-flex align-items-center p-5 border border-2 border-white ${inViewAboutUSRd ? 'show-box' : ''}`}>
                        <div className='w-50'>
                            <h1 className='mb-2'>-Join Us Now-</h1>
                            <p className='mb-0 about-us-paragraph'>
                                Join us on this exhilarating voyage through the digital galaxy, where each of us plays a pivotal role in the narrative of success and community empowerment. <br /><br /> Galactic Nebula isn't just another project; it's a testament to our belief in the endless possibilities of crypto and our commitment to contributing positively to the community that supports us.
                            </p>
                        </div>
                        <div className='w-50 d-flex justify-content-center'>
                            <img src={Logo} alt='penguin'  />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Aboutus