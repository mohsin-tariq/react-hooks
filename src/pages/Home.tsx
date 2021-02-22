import React from 'react'
import Timezone from '../components/Timezone'

export const Home = (): JSX.Element => {
  console.log('home page is called')
  return (
    <>
      <h1>Time Zone Component</h1>
      <Timezone />
    </>
  )
}
