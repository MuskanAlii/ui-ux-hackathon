import Image from 'next/image'
export default function Contact() {
  return (
    <>
     <section className="bg-white mt-[15vw] lg:flex  lg:items-center lg:gap-0 lg:mt-0 xl:px-[6vw]">
          {/* Text Section */}
          <div className="flex flex-col items-center  lg:items-start lg:flex-1 lg:ml-[6vw] lg:text-left lg:mt-[10vw] xl:mt-[8vw]">
            <h5 className="text-[3.2vw] font-bold text-[#252B42] tracking-wide md:text-[2.5vw] lg:text-[1.3vw]
            xl:text-[1.1vw] xl:tracking-normal xl:font-extrabold">
             CONTACT US
            </h5>
            <h1 className="text-[8.5vw] font-bold text-[#252B42] mt-[4vw] md:text-[7vw] lg:text-[5vw] lg:mt-[3vw]
            xl:text-[4vw] xl:mt-[2vw]">
             <span className='block'>Get in touch</span>
              <span className='block text-center lg:text-left'>today!</span> 
            </h1>
            <p className="text-[#737373] text-[3.5vw] font-medium text-center w-[60%] mt-[5vw] md:text-[3vw] lg:text-[1.6vw] lg:text-left
            lg:w-[70%] lg:mt-[2.5vw] xl:text-[1.3vw] xl:font-semibold">
              We know how large objects will act&apos; but things on a small scale just do 
               not act that way.
            </p>
           <h3 className='font-bold text-[#252B42] text-[4vw] mt-[6vw] xl:text-[1.76vw] lg:text-[1.76vw] lg:mt-[2.56vw] xl:mt-[2.56vw]'>Phone ; +451 215 215 </h3>
           <h3 className='font-bold text-[#252B42] text-[4vw] mt-[4vw] xl:text-[1.76vw] lg:text-[1.76vw] lg:mt-[1.46vw] xl:mt-[1.46vw]'>Fax : +451 215 215 </h3>

             <div className="w-[50vw] mt-[6vw] mb-[8vw] md:w-[40vw] lg:w-[18vw] lg:mt-[2.5vw] xl:w-[17vw] xl:mt-[2vw]">
                     <Image 
                     src="/images/pricing-social-icons.svg"
                     alt="Vector"
                     width={30}
                     height={30}
                     layout="responsive"
                     />
                   </div>
          </div>
    
          {/* Image Section */}
          <div className="relative lg:flex-1 lg:flex lg:justify-end">
            <div className="relative w-full h-[125vw] md:h-[110vw] lg:h-[65vw] xl:h-[56vw]">
              <Image
                src="/images/contact-hero-image.svg" 
                alt="Shopping Woman"
                layout="fill"
                objectFit="contain"
              />
            </div>
           
          </div>
        </section>

{/* Contact card Section */}

<section >
      {/* heading section  */}
 <section className="flex flex-col items-center justify-center  bg-[#FFFFFF] mt-[10vw] mb-[12vw] lg:mt-[7vw] lg:mb-[7vw]
     xl:mt-[5vw] xl:mb-[4vw]">
    
    <h4 className="text-[3.5vw] font-bold text-[#252B42] tracking-wider md:text-[2.8vw] lg:text-[1.8vw] xl:text-[1.2vw]">
    VISIT OUR OFFICE
    </h4>
    
    {/* Main Heading  */}
    <h1 className="text-[8vw] text-[#252B42] font-bold mt-[4vw] md:text-[6.5vw] lg:text-[3.9vw] lg:mt-[2vw] xl:text-[3vw]">
    <span className="block text-center lg:inline">We help small </span>
    <span className="block lg:inline text-center"> businesses </span>
    <span className="block text-center"> with big ideas</span>
    </h1>
</section>


<section className=" flex flex-col items-center lg:flex-row lg:justify-center gap-[5vw] lg:gap-[1vw] xl:gap-[1vw]">
  {/* Column 1 */}
  <div className="bg-white flex flex-col items-center text-center gap-[2vw] lg:gap-0 
  lg:w-[24.01vw] lg:h-[25.11vw] w-[80vw] pb-[15vw] pt-[10vw] md:pt-[5vw] md:pb-[6vw] md:w-[65vw] xl:pt-[5vw]
  xl:h-[25.11vw] xl:w-[25vw]">
    <div className="w-[15vw] h-[15vw] flex items-center justify-center md:w-[13vw] md:h-[13vw]
    lg:w-[5.27vw] lg:h-[2.4vw]
    xl:w-[5.27vw] xl:h-[3.4vw]">
      <Image
        src="/images/phone-icon.svg"
        alt="Phone Icon"
        width={50}
        height={50}
        layout="responsive"
      />
    </div>
    <p className="text-[#252B42] font-bold text-[3.5vw] mt-[4vw] md:text-[2.5vw] md:mt-[2vw] lg:text-[1.02vw] xl:text-[1.02vw]
    lg:mt-[2.5vw] xl:mt-[2.1vw]">
    georgia.young@example.com<br />
    georgia.young@ple.com
    </p>

    <h5 className='text-[#252B42] font-bold text-[3.9vw] mt-[3vw] md:text-[3.2vw] md:mt-[1vw] 
    lg:text-[1.17vw] lg:mt-[1.10vw]
    xl:text-[1.17vw] xl:mt-[1.10vw]'>
      Get Support
    </h5>
    <button className="bg-transparent border-2 font-bold border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white
     mt-[2vw] py-[2vw] px-[4vw] rounded-full text-[3vw] md:text-[2vw] md:mt-[1vw]
      lg:text-[1.2vw] lg:py-[1vw] lg:px-[2.5vw]
     xl:text-[1.02vw] xl:py-[1vw] xl:px-[2.5vw]">
    Submit Request
    </button>
  </div>

  {/* Column 2 */}
  <div className="bg-[#252B42] flex flex-col items-center text-center gap-[2vw] lg:gap-0  w-[80vw] pb-[15vw] pt-[10vw] 
   md:pt-[8vw] md:pb-[10vw] md:w-[65vw]
    lg:h-[28vw] lg:w-[25vw] lg:pt-[5vw]
    xl:h-[28vw] xl:w-[24.01vw] xl:pt-[6.07vw] ">
    <div className="w-[13vw] h-[13vw] flex items-center justify-center md:w-[11vw] md:h-[11vw]
    lg:w-[3.73vw] lg:h-[4vw]
    xl:w-[3.73vw] xl:h-[4vw]">
      <Image
        src="/images/location-icon.svg"
        alt="Phone Icon"
        width={50}
        height={50}
        layout="responsive"
      />
    </div>
    <p className="text-white font-bold text-[3.5vw] mt-[11vw] md:text-[2.5vw] md:mt-[4vw] 
    lg:text-[1.02vw] lg:mt-[2vw]
     xl:text-[1.02vw] xl:mt-[1.50vw]">
    georgia.young@example.com<br />
    georgia.young@ple.com
    </p>
      <h5 className='font-bold text-white text-[3.9vw] mt-[3vw] md:text-[3.2vw] md:mt-[1vw] 
      lg:text-[1.17vw] lg:mt-[1.10vw]
      xl:text-[1.17vw] xl:mt-[1.10vw]'>
        Get Support
      </h5>
    <button className="bg-transparent border-2 font-bold border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white
     mt-[2vw] py-[2vw] px-[4vw] rounded-full text-[3vw] md:text-[2vw] md:mt-[1vw] 
     lg:text-[1.2vw] lg:py-[1vw] lg:px-[2.5vw]
     xl:text-[1.02vw] xl:py-[1vw] xl:px-[2.5vw]">
    Submit Request
    </button>
  </div> 

  {/* Column 3 */}
  <div className="bg-white flex flex-col items-center text-center gap-[2vw] lg:gap-0 w-[80vw] pb-[15vw] pt-[10vw]
   md:pt-[5vw] md:pb-[8vw] md:w-[65vw]
    lg:h-[25.11vw] lg:w-[25vw] lg:pt-[5vw]
    xl:h-[25.11vw] xl:w-[24.01vw] xl:pt-[5vw]">
    <div className="w-[15vw] h-[15vw] flex items-center justify-center md:w-[13vw] md:h-[13vw]
    lg:w-[5.27vw] lg:h-[2vw]
    xl:w-[5.27vw] xl:h-[2vw]">
      <Image
        src="/images/email-icon.svg"
        alt="Phone Icon"
        width={50}
        height={50}
        layout="responsive"
      />
    </div>
    <p className=" font-bold text-[3.5vw] mt-[11vw] md:text-[2.5vw] md:mt-[1.5vw] 
    lg:text-[1.02vw] lg:mt-[2.5vw] 
    xl:text-[1.02vw] xl:mt-[2.5vw]">
    georgia.young@example.com<br />
    georgia.young@ple.com
    </p>
      <h5 className='text-[#252B42] font-bold  text-[3.9vw] mt-[3vw] md:text-[3.2vw] md:mt-[1vw]
       lg:text-[1.17vw] lg:mt-[1.10vw]
       xl:text-[1.17vw] xl:mt-[1.10vw]'>
        Get Support
      </h5>
    <button className="bg-transparent border-2 font-bold border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white
    mt-[2vw] py-[2vw] px-[4vw] rounded-full text-[3vw] md:text-[2vw]  md:mt-[1vw] 
    lg:text-[1.2vw] lg:py-[1vw] lg:px-[2.5vw]
     xl:text-[1.02vw] xl:py-[1vw] xl:px-[2.5vw]">
    Submit Request
    </button>
  </div> 
</section>

</section>


    {/* lets talk section  */}

      <section className="flex flex-col items-center justify-center  bg-[#FFFFFF] pt-[10vw] pb-[15vw] 
      md:pb-[6vw] xl:pb-[8vw] lg:pt-[9vw] lg:pb-[1vw]  xl:pt-[9.15vw] ">
            {/* Heading */}
            <h4 className="text-[3.2vw] font-bold text-[#252B42] md:text-[2.8vw] lg:text-[1.5vw] xl:text-[1.2vw]">
            WE Can&apos;t WAIT TO MEET YOU
            </h4>
            <h1 className="text-[11vw] mt-[4vw] text-[#252B42] font-bold md:text-[6.5vw] lg:mt-[2vw] lg:text-[4.7vw] xl:text-[4vw]
            xl:mt-[1vw]">
            Let&#8217;s Talk
            </h1>
            
            <button className="bg-[#23A6F0] text-white mt-[6vw] rounded-md py-[3vw] px-[10vw] text-[3.3vw]
               font-bold hover:bg-blue-600 transition
               md:text-[2.5vw] md:py-[2vw] md:px-[7vw]
               lg:py-[1.5vw] lg:px-[3.5vw] lg:mt-[2vw] lg:text-[1.4vw]
               xl:py-[1.2vw] xl:px-[3vw] xl:mt-[1vw] xl:text-[1vw]">
               Try it free now
              </button>
          </section>

    </>
  )
}
