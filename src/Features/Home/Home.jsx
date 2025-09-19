import React from 'react'
import Navbar_Home from '../../Components/Navbar_Home/Navbar_Home'
import Hero from '../../Components/Hero/Hero'
import Feature_Section from '../../Components/Feature_Section/Feature_Section'
import Contect_us from '../../Components/contect_us/contect_us'
import Footer from '../../Components/Footer/Footer'
import { motion } from 'framer-motion'
import About_us from '../../Components/About_us/About_us'

const Home = () => {
  return (
    <>
      <Navbar_Home />

      <motion.div
      id="home"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Hero />
      </motion.div>

      <motion.div
      id='feature'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Feature_Section />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contect_us />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
         <motion.div
      id='Aboutus'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <About_us />
      </motion.div>
        <Footer />
      </motion.div>
    </>
  )
}

export default Home
