import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`md:py-4 py-3 md:px-6 px-3 bg-dimWhite font-poppins font-medium md:text-[18px] text-[12px] text-darkBlue2 outline-none ${styles} rounded-[10px] hover:bg-gray hover:text-white`}>
      Get Started
    </button>
  )
}

export default Button