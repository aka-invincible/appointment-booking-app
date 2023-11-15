import React, {useEffect, useRef} from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import {BiMenu} from 'react-icons/bi'

const navLinks = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]

// ... (other imports and constants)

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll',() => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
      {
        headerRef.current.classList.add('stick__header')
      }
      else{
        headerRef.current.classList.remove('stick__header')
      }
    })
  }

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })
  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/*-----logo----- */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* ------menu------ */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>
                      {link.display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* ---------nav right--------- */}
          <div className="flex items-center gap-4">
            <div className='hidden'>
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img className='w-full rounded-full' src={userImg} alt="" />
                </figure>
              </Link>
            </div>
            <Link to='/login'>
              <button className='bg-primaryColor px-6 py-2 h-[44px] text-white font-[600] flex items-center justify-center rounded-[50px]'>Login</button>
              {/* <button className='bg-primaryColor px-2 py-[0.05rem] h-[44px] text-white font-[200] flex items-center justify-center rounded-[50px]'>Login</button> */}
            </Link>
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'></BiMenu>
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header
