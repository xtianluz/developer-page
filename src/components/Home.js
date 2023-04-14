import React from 'react'
import profilePic from "../assets/android-profile.png"
export const Home = () => {
  return (
    <div
        name="home"
        className="flex-start w-full h-screen bg-gradient-to-b from-black to-gray-800 justify-center items-center pt-36"
    >
      <div className="grid place-items-center place-content-center">
        <div>
            <img src={profilePic} alt='android-profile' className="w-96"/>
        </div>
        <div className="">
          <div className="text-3xl font-medium text-white">
            ChristianL
          </div>
          <div className="text-xl font-light text-white">
            Android Developer
          </div>
        </div>
      </div>
    </div>
  )
}
