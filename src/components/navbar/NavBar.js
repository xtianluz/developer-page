import { Link } from 'react-scroll';
import React, { useState } from 'react';
import DropDown from './DropDown';

export const NavBar = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    handleClick()
    setDropdown(false)
  };

  const onPrivacyClick = () => {
    setDropdown(!dropdown);
}

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'projects'
        },
    ]
  return (
    <div className="flex justify-center items-center w-full h-20 text-white bg-black px-6 fixed">
        <ul className="flex">
            {
                links.map(({id, link}) => (
                    <li key={id} 
                    className="px-6 cursor-pointer text-gray-400 hover:scale-105 duration-200 hover:text-white capitalize"
                    >
                        <Link to={link} 
                        smooth duration={500} 
                        onClick={closeMobileMenu}>
                        {link}
                        </Link>
                    </li>
                ))
            }
            <li key={3}
                onClick={closeMobileMenu}
            >
                <Link
                className="px-6 cursor-pointer text-gray-400 hover:scale-105 duration-200 hover:text-white capitalize"
                onClick={onPrivacyClick}
                >
                Privacy Policy
                </Link>
                {dropdown && <DropDown />}
            </li>
        </ul>
    </div>
  )
}
