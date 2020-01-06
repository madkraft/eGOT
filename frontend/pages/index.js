import React, { useState } from 'react'
import Head from 'next/head'
import MountainRanges from '../components/MountainRanges'

const Home = () => {
  return <div>
    <Head>
      <title>Home</title>
      <link href="/static/style.css" rel="stylesheet" />
    </Head>

    <MountainRanges/>
    
  </div>
}

export default Home
