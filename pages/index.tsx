import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CardSlider from '../components/CardSlider'
import Slider from '../components/Slider'

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Slider/> */}
      <main>
        <CardSlider/>
      </main>
    </div>
  )
}

export default Home
