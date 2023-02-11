import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/log.png')} width={250} height={100} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
        
          <Link to='section-1' activeStyle spy={true} smooth={true} style={{color: '#fff', display: 'flex',
        alignItems:'center', textDecoration:'none', padding:'0 1rem', height:'100%', cursor:'pointer', onMouseOver:"this.style.color='#0F0'" ,
        onMouseOut:"this.style.color='#00F'"}}>
            About
          </Link>
          <NavLink to='/products' activeStyle>
            Products
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/register' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
