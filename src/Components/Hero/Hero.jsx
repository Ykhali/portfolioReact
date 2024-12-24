import React, {useState} from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  const [showResume, setShowResume] = useState(false);

  const ResumeClick = () => {
    setShowResume(true); // Show the iframe when the button is clicked
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Youssef Khalid,</span> frontend developer based in morocco</h1>
        <p>I'm a frontend developer from Casablanca, Ma with 1 month experience in a tech companie named Mediazain</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div onClick={ResumeClick} className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero