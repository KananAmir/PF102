"use client"
import React from 'react'

function Error({error}) {
  return (
    <div>{error.message}</div>
  )
}

export default Error