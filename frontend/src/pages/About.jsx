import React from 'react'
import Tittle from '../components/Tittle';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
        
        <div className='text-2xl text-center pt-8 border-t'>
              <Tittle text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
              <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
              <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                     <p> forever literally means "eternally," so when you promise, "I'll love you forever." you mean it. You can also use forever in a less literal, more exaggerated way: "It is taking forever for the bus to get here," or to mean "without stopping," as when you comment that the rain can't continue forever.</p>
                     <p>Your forever person wants you to be involved in his life. This doesn't mean he doesn't value his independence, but it does mean he makes space for you to be a part of his life. 8. He doesn't make you wonder. You don't have to question his actions or motives because he's a person you can trust with confidence.</p>
                     <b className='text-gray-800'>Our Mission</b>
                     <p>"I'll love you forever." you mean it. You can also use forever in a less literal, more exaggerated way: "It is taking forever for the bus to get here," or to mean "without stopping," as when you comment that the rain can't continue forever.</p>
                     
              </div>
        </div>

        <div className='text-xl my-4'>
              <Tittle text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                     <b>Quality Assurance</b>
                     <p className='text-gray-600'>The phrase "full of life" originated in the English language and has been used for a long time. This idiom is used to describe individuals who are lively, energetic, and enthusiastic.</p>  
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                     <b>Convenience</b>
                     <p className='text-gray-600'>a quality or situation that makes something easy or useful for someone by reducing the amount of work or time required to do something.</p>  
                </div>

                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                     <b>Exceptional Customer Service</b>
                     <p className='text-gray-600'>the unconditional commitment to giving the highest level of product or service to every person, regardless of the circumstances. </p>  
                </div>
        </div>

        <NewsletterBox />
    </div>
  )
}

export default About;