import React from 'react'

const Footer = ({ space_above }) => {
  return (
    <div className={` relative flex top-[${space_above}px] w-fit pb-6 mx-auto mt-6`}>
        <p className='love'>Made with ❤️ by <span className='font-bold italic'>Sohel Khan</span></p>
    </div>
  )
}

export default Footer;