"use client"

import React from 'react'

const Error = ({error, reset}) => {
    console.log(error);
    
  return (
    <div>{error.message}</div>
  )
}

export default Error