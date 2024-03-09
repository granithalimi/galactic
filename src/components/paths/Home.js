import Aboutus from '../Aboutus';
import Head from '../Head';
import Roadmap from '../Roadmap';
import VisionAndMission from '../VisionAndMission';

function Home() {
  return (
    <>
      {/* HEAD */}
      <Head />
      {/* VISIONANDMISSION */}
      <VisionAndMission />
      {/* G.N */}
      {/* ABOUTUS */}
      <Aboutus />
      {/* ROADMAP */}
      <Roadmap />


      <div style={{backgroundColor: 'red', width: "100%", height: "50vh"}} id='end'>
        <a href="#header">hello</a>
      </div>
    </>
  )
}

export default Home