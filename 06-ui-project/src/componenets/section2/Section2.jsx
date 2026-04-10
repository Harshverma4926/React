import React from 'react'
import Silk from '../../Back/Silk';
import Top from './Top';
import FloatingLines from './FloatingLines';
import Card from './Card';
import Section2content from './Section2content';

const Section2 = () => {
  return (
    <div className='h-screen relative w-full'>
      <div style={{ width: '100%', position: 'relative' }}>
  <FloatingLines 
    enabledWaves={["top","middle","bottom"]}
    // Array - specify line count per wave; Number - same count for all waves
    lineCount={5}
    // Array - specify line distance per wave; Number - same distance for all waves
    lineDistance={5}
    bendRadius={5}
    bendStrength={-0.5}
    interactive={true}
    parallax={true}
  />
</div>
<Top/>
<Section2content/>
    </div>
  )
}

export default Section2
