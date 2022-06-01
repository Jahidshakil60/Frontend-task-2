import React from 'react'
import styled from 'styled-components';
import {HashLink as Link} from 'react-router-hash-link'
// import {Link} from "react-router-dom"


function Nav() {
  return (
    <StyledNav>
        <h1 className='logo'><a>Stock Exchange</a></h1>
        <ul>
            <li><Link to = '#home' smooth >Home</Link></li>
            <li><Link to = '#home' smooth  >Products & Serveice</Link></li>
            <li><Link to = '#home' smooth >Become a Client</Link></li>
            <li><Link to = '#home' smooth>About Us</Link></li>
       
        </ul>
         <div className='btn-container'>
              <botton className='btn '>LOGIN</botton>
              <button className='btn  btn-2 '>SIGN UP</button>
          </div>
    </StyledNav>
  )
}


const StyledNav= styled.nav`
  min-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a{
      color: white;
      text-decoration: none;
    
  }
  ul{
      display: flex;
      list-style: none;
  }
  .logo{
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
      cursor: pointer;
  }
  li{
      margin-left: 3rem;
      
      a{
        font-size: 0.8rem;
        cursor: pointer;
      }
  }


  .btn-container{
        height: 2.5rem;
        width: 9rem;
        background: white;
        box-shadow: 1px 3px 5px #888888;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0rem 1.2rem;
        border-radius: 20px;
        
        .btn{
            font-size: 0.7rem;
            cursor: pointer;
        }
        .btn-2{
            height: 1.8rem;
            width: 5rem;
            border: none ;
            background: #FF6F00;
            border-radius: 12px;
            box-shadow: 5px 10px 10px #888888;
        }
        
    }
`;

export default Nav