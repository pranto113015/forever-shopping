import Title from './../components/Title';
import { assets } from './../assets/assets';
import NewsletterBox from './../components/NewsletterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title  text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about_img" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis unde harum nemo velit nesciunt libero, optio corrupti voluptatibus dolore sequi ipsum excepturi ullam veritatis laboriosam iusto maxime impedit tenetur.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis unde harum nemo velit nesciunt libero, optio corrupti voluptatibus dolore sequi ipsum excepturi ullam veritatis laboriosam iusto maxime impedit tenetur.</p>


          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur recusandae magnam fugit sint quasi totam nobis quidem blanditiis suscipit.</p>
        </div>

      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>  

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Asssurance:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, corporis.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, corporis.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, corporis.</p>
          </div>

      </div>


    <NewsletterBox/>

    </div>
  )
}

export default About
