import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../assets/css/heroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-9.mp4' autoPlay loop muted />
      <h1>ยินดีต้อนรับ</h1>
      <h1>สู่</h1>
      <h1>KPS Automation</h1>
      <p>ศูนย์รวมสินค้า Automation</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ผลงาน
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          <p className='per'>รางวัล   </p>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;