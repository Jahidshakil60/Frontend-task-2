import React from 'react'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import img7 from '../img/img7.png'
import img9 from '../img/img9.png'

import styled from 'styled-components'

function Home() {
  return (
    <HomeStyle>
        <div className="aboutus" id='home'>
            <div className="title">
              <h3>About Us</h3>
              <h3>Product & Serveice</h3>
              <h3>Become a Client</h3>
              <h3>Downloads</h3>
            </div>
            <div className="container">
            <div className="about-container">
                <img src={img5} alt="" />
                <div className="text">
                    <ul>
                        <li>Capital Profile</li>
                        <li>Mission & Vision</li>
                        <li>Board of Director</li>
                        <li>Management Exwcutive</li>
                        <li>circulation</li>
                        <li>Career opportunity</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>

            <div className="product-container">
                <img src={img6} alt="" />
                <div className="text">
                    <h5 >Issue Management</h5>
                    <ul>
                        <h4>Coppertech industry ltd.</h4>
                        <li className='list'>Capital Profile</li>
                        <li className='list'>Mission & Vision</li>
                        <h4>Oiemax Electrode ltd</h4>
                        <li className='list'>Board of Director</li>
                        <li className='list'>Management Exwcutive</li>
                        <li className='list'>circulation</li>
                        <li className='list'>Career opportunity</li>
                        
                    </ul>
                </div>
            </div>
            <div className="client-container">
                <img src={img7} alt="" />
                <div className="text">
                  
                    <ul>
                    
                        <li className='list'>Bangladeshi Individuals</li>
                        <li className='list'>Bangladeshi Institutions</li>
                        <li className='list'>Foreign Investors</li>
                        <li className='list'>NRBs</li>
                        <li className='list'>Daily Market Commentary</li>
                        
                        
                    </ul>
                </div>
            </div>

            <div className="client-container">
                <img src={img9} alt="" />
                <div className="text">
                   <h4>Forms</h4>
                   <ul>
                       <li>All Forms</li>
                   </ul>

                   <h4>Notice/Circular</h4>
                   <ul>
                       <li>BSEC</li>
                   </ul>
                   
                </div>
            </div>
            </div>

        </div>
    </HomeStyle>
  )
}

export default Home

const HomeStyle = styled.div`
 color: white;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 margin:1rem 2rem 0 2rem;
 height: 80vh;

 .container{
     display: flex;
     gap: 10rem;
 }


   .title{
       display: flex;
       justify-content: space-around;
   }

  .about-container{
      display: flex;
      flex-direction: column;
     
  }
  img{
          height: 9rem;
          width: 11rem;
      }

  .text{
      font-size: 1rem;
      font-weight: lighter;
      li{
          cursor: pointer;
      }
  }

  .product-container{
      h5{
          margin-left: 2rem;
          cursor: pointer;
      }

      ul{
          background: #c7c773;
          color: black;
          
      }
      .list{
          font-size: 0.8rem;
          margin-left: 1.5rem;
      }
  }


`;