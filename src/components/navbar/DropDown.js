import React from 'react'
import { useState } from 'react';

const DropDown = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const menuItems = [
        {
            id: 1,
            name: 'Expenses Only',
            link: 'https://xtianluz.github.io/developer-page/expensesonlypp.html',
        },
    ]

  return (
    <>
      <ul
        onClick={handleClick}
        className="absolute"
      >
        {menuItems.map((item, index) => {
          return (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
                <li key={index}
                className="pl-6 px-6 cursor-pointer
                text-gray-400 hover:scale-105 
                duration-200 hover:text-white 
                bg-gradient-to-b from-gray-800 to-transparent rounded-md
                " 
                >
                {item.name}
                </li>
            </a>
          );
        })}
      </ul>
    </>
  )
}

export default DropDown