import React,{useState,useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  NavContainer,
  NavLogo,
  Nav,
  MobileIcon,
  NavItems,
  NavMenu,
  NavLinks,
  NavBtnLink,
  NavBtn,
} from './NavberElements';

import { IconContext } from 'react-icons/lib';




export default function Navbar({ toggle }) {
  const [scrollNav,setScrollNav]=useState(false)
  const changeNav=()=>{
 
    if(window.scrollY>=80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
   window.addEventListener('scroll',function(){
     changeNav()
   })
  }, [])



  const toggleHome=()=>{
    scroll.scrollToTop()
  }
  return (
    <>
    <IconContext.Provider value={{color:"#fff"}}>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to='/' onClick={toggleHome}>dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              >About</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='discover'
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              >Discover</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='services'
              
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              >Services</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to='signup'
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              
              >Sign Up</NavLinks>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
}
