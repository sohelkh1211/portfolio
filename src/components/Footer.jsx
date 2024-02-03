import React from 'react'
import { Box } from '@mui/material';
import { space } from 'postcss/lib/list';
import styled from '@emotion/styled';

const Footer = ({ space_above }) => {

  return (
    <div style={{ top: space_above }} className={`relative flex w-fit pb-6 mx-auto mt-6`}>
      <p className='love font-bold'>Made with ❤️ by <span className='font-bold italic underline'>Sohel Khan</span></p>
    </div>
  )
}

export default Footer;