'use client'

import { motion } from 'framer-motion'

export default function HomeFooter() {
  return (
    <div className="overflow-hidden relative pb-36 w-full ">
      <div className="absolute inset-0 z-10 bg-gradient-to-r via-transparent " />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: 'linear', duration: 20 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span
              className="px-4 text-7xl font-bold text-transparent sm:text-8xl md:text-9xl"
              style={{
                WebkitTextStroke: '1px rgb(156 163 175)', // tailwind gray-400
              }}
            >
              9Dimension & 9Dimension
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
