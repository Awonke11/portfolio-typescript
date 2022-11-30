import {motion} from "framer-motion"

const FirstSteps = () => {
  return (
    <div className='first-steps'>
      <motion.div 
        className='first-steps-component'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        >
        <div className='first-steps-component-number'>1</div>
        <div className='first-steps-component-content'>
            <h4 className='first-steps-component-content-title'>Consultation</h4>
            <p className='first-steps-component-content-description'>First consult with the client to understand the product I am going to build. Takes notes of the idea and help them take communicate better about their idea, so that I can get more information.</p>
        </div>
      </motion.div>
      <motion.div 
        className='first-steps-component'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 1}}
        >
        <span className='first-steps-component-number'>2</span>
        <div className='first-steps-component-content'>
            <h4 className='first-steps-component-content-title'>Design</h4>
            <p className='first-steps-component-content-description'>Based on understanding what the client wants, I create the design of the product (website). While designing I keep in touch with the client to ensure that I am moving in the right direction with designing.</p>
        </div>
      </motion.div>
    </div>
  )
}

export default FirstSteps
