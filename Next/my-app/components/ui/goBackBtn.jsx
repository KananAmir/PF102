"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const GoBackBtn = () => {
    const router = useRouter()

  return (
    <button onClick={()=>{router.back()}}>go back</button>
  )
}

export default GoBackBtn