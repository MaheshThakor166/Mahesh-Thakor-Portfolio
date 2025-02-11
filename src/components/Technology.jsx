import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { GiDatabase } from 'react-icons/gi'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from 'framer-motion'

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
})
const Technology = () => {
  return (
    <>
      <div className="pb-24">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconsVariants(2)}
          >
            <RiReactjsLine className="text-7xl  text-cyan-400" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconsVariants(3)}
            className="pb-4"
          >
            <TbBrandNextjs className="text-7xl" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconsVariants(5)}
            className="pb-4"
          >
            <SiMongodb className="text-7xl text-cyan-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconsVariants(2)}
            className="pb-4"
          >
            <BiLogoPostgresql className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconsVariants(6)}
            className="pb-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconsVariants(2.5)}
            className="pb-4"
          >
            <DiRedis className="text-7xl text-red-500" />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Technology
