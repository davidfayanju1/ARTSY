import React from 'react'
import Creator from '../components/home/Creator';
import Featured from '../components/home/Featured';
import Hero from '../components/home/Hero';
import Upcoming from '../components/home/Upcoming';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Upcoming />
      <Creator />
    </div>
  )
}

export default Home;