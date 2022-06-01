import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram , BsLinkedin } from "react-icons/bs";
import styled from 'styled-components';

function Footer() {
  return (
    <FooterStyle>
        <div className="main-container">
            <div className="main">
            <h2>Stock Exchange</h2>
            <p>Motijheel,Dhaka-1206</p>
            <div>
                <h3>Follow us on :</h3>
                <div className="social">

                <FaFacebook />
                <BsInstagram />
                <BsLinkedin />
                </div>

            </div>
            </div>

            <div className="container2">
                <h4>Tarms & Conditions</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, alias. Quibusdam esse excepturi iste placeat quia dolor similique, sint in. Magni qui quis earum provident sint neque harum reiciendis impedit.</p>
            </div>
          
        </div>

    </FooterStyle>
  )
}

export default Footer

const FooterStyle= styled.div`
height: 27vh;
padding: 2rem 3rem;
background: #555252;
color: white;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

.main-container{
    display: flex;
    justify-content: space-between;
}
.social{
    display: flex;
    gap: 2rem;
   
}

.container2{
    width: 20rem;
}

`;