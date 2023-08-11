import React from 'react'
import { Container } from 'react-bootstrap'

import Navbar from '../Navbar'

import Hero from './Hero'
import Videos from './Videos'
import Rules from './Rules'
import Duelists from './Duelists'

import Footer from "./Footer"
function Home() {
  return (
    <div>
      <Navbar />

      <Container fluid>
        <section id='home'>
          <Hero />
        </section>

        <section id='videos'>
          <Videos />
        </section>

        <section id='rules'>
          <Rules />
        </section>

        <section id='duelists'>
          <Duelists />
        </section>

        <Footer />
      </Container>
    </div>
  )
}

export default Home
