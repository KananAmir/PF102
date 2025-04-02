import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'About',
  description: 'About page',
}

function AboutPage() {
  return (
    <div>AboutPage

      <hr />
      <Image src={"/next-logo.webp"} width={500} height={500}/>
    </div>
  )
}

export default AboutPage