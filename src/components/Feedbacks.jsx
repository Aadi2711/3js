import React from 'react'
import {motion} from 'framer-motion'

import {styles} from '../style'
import {SectionWrapper} from '../hoc'
import { fadeIn,textVariant } from '../utils/motion'

import {testimonials} from '../constants'

const FeedbackCard=({index, testimonial,name,designation,company,image})=>{
  return(
    <motion.div
    variants={fadeIn("","spring",index*0.2,0.3)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p>{testimonial}</p>
    </motion.div>
  )
}


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText} >More from us</p>
          <h1 className={styles.sectionHeadText}>Extra</h1>

        </motion.div>
      </div>
      <div className={`${styles.paddingX} mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial,index)=>(
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")