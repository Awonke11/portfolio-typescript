import {motion} from "framer-motion"

const SecondSteps = () => {
    return (
      <div className='second-steps'>
        <motion.div 
            className='second-steps-component'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 1.5}}
            >
          <span className='second-steps-component-number'>3</span>
          <div className='second-steps-component-content'>
              <h4 className='second-steps-component-content-title'>Coding</h4>
              <p className='second-steps-component-content-description'>Create the website based on the finalized design of the product. The database I use is Google Firebase but this will depend on the clients requirements. While coding, I keep updating the customer about the progress to stay informed.</p>
          </div>
        </motion.div>
        <motion.div 
            className='second-steps-component'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 2}}
            >
          <span className='second-steps-component-number'>4</span>
          <div className='second-steps-component-content'>
              <h4 className='second-steps-component-content-title'>Testing</h4>
              <p className='second-steps-component-content-description'>Test the website with users that are exactly the target market of the client. Observe their interactions with the website through recording and if any problems they encounter I fix them. Then publish the webiste upon the client's request.</p>
          </div>
        </motion.div>
      </div>
    )
  }
  
  export default SecondSteps;
  