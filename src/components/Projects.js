import React from 'react'
import expensesLogo from "../assets/expenses-only-logo.png"

const Projects = () => {

  return (
    <div
        name="projects"
        className="flex w-full h-screen bg-gradient-to-b from-black to-gray-800 justify-center items-center"
    >
        <div className="grid grid-cols-1 place-content-center">
            <a href="https://play.google.com/store/apps/details?id=com.expenses.expensesonly" target="_blank" rel="noopener noreferrer">
            <div>
                <img src={expensesLogo} alt='profile-pic' className="rounded-md w-28"/>
            </div>
            <div className="grid place-content-center font-medium text-white text-sm pt-1 place">
                Expenses Only
            </div>
            </a>
        </div>

    </div>
  )
}

export default Projects