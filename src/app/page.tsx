'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [temperatures, setTemperatures] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('http://localhost:3000/info').then(res => res.data).then(body => setTemperatures(body.values))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='flex flex-col ml-10'> {temperatures.map((temperature, index) => <p className='text-lime-400' key={index}>{temperature}</p>)} </div>
  )
}
