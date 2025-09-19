import React from 'react'
import { motion } from 'framer-motion'
import to_do from "../../assets/image/tobdo.jpg"

const Contect_us = () => {
  return (
    <>
      <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            
            {/* النصوص */}
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Stay organized, stay productive
                </p>
                <p className="mt-6 text-lg/8 text-gray-300">
                  Manage your tasks, set reminders, and track your progress with a simple To-Do List app. 
                  Focus on what matters and get things done.
                </p>

                {/* زرارين مع انيميشن */}
                <div className="mt-10 flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-md bg-indigo-500 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-600"
                  >
                    Create Free Account
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-md bg-gray-800 px-4 py-2 text-white font-semibold shadow hover:bg-gray-700"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </div>

            {/* صورة */}
            <img
              src={to_do}
              alt="To-Do App screenshot"
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />

          </div>
        </div>
      </div>
    </>
  )
}

export default Contect_us
