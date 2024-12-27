import React from 'react'
import '../src/Footer.css'
import img1 from './assets/Vector.png'
import img2 from './assets/Vector (1).png'
import img3 from './assets/iconamoon_email@2x.png'

const Footer = () => {
  return (
    <div className='footer'>
        <section className='connect'>
            <h1>Connect</h1>
            <div className="logos">
            <a href='https://www.instagram.com/njiko_co?igsh=bXhiOTM0a2Z6bHB1' className="list mt-5">
                <img src={img1} alt="" />
                <h6 className='at'>@Njiko_co</h6>
            </a>
            <a href='tel:+2348092354153' className="list mt-5">
                <img src={img2} alt="" />
                <h6 className='number'>+234 8092354153</h6>
            </a>
            <a href='mailto:Kedu@njiko.co' className="list mt-5">
                <img src={img3} alt="" />
                <h6 className='mail'>Kedu@njiko.co</h6>
            </a>
            </div>
           


        </section>
        <section className='second-footer'>
            <div className="dont-flex">
            <a href='/' className='mt-5'>About Njiko</a>
            <a href='/' className='mt-5'>Projects</a>
            </div>
        
        </section>
            
    </div>
  )
}

export default Footer