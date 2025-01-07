//About Us Page

import LogoRow from "@/components/LogoRow/LogoRow"
import { Button } from "@/components/ui/button"

import Image from "next/image"
export default function About() {

  const cards = [
    {
      title: "Username",
      profession: "Profession",
      image: "/images/about-card-1.svg",
      icon: "/images/social-media.svg",
      id: 1
    },
    {
      title: "Username",
      profession: "Profession",
      image: "/images/about-card-2.svg",
      icon: "/images/social-media.svg",
      id: 2
    },
    {
      title: "Username",
      profession: "Profession",
      image: "/images/about-card-3.svg",
      icon: "/images/social-media.svg",
      id: 3
    },]

  return (
    <>
    {/* Hero Section */}
    
    <section className="bg-white mt-[15vw] lg:flex  lg:items-center lg:gap-0 lg:mt-0 xl:px-[6vw]">
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start lg:flex-1 lg:ml-[6vw] lg:text-left  ">
        <h5 className="text-[3.2vw] font-bold text-[#252B42] tracking-wide md:text-[2.5vw] lg:text-[1.3vw]
        xl:text-[1.1vw] xl:tracking-normal xl:font-extrabold">
          ABOUT COMPANY
        </h5>
        <h1 className="text-[8.5vw] font-bold text-[#252B42] mt-[4vw] md:text-[7vw] lg:text-[5vw] lg:mt-[3vw]
        xl:text-[4vw] xl:mt-[2vw]">
          ABOUT US
        </h1>
        <p className="text-[#737373] text-[3.5vw] font-medium text-center w-[60%] mt-[5vw] md:text-[3vw] lg:text-[1.6vw] lg:text-left
        lg:w-[70%] lg:mt-[2.5vw] xl:text-[1.3vw] xl:font-semibold">
            We know how large 
            objects will act, but things 
            on a small scale just do 
            not act that way.
        </p>
        <button className="mt-[6vw] mb-[18vw] text-[2.7vw] px-[6vw] py-[3vw] 
        bg-[#23A6F0] text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400
        md:text-[2.4vw] md:px-[5vw] md:py-[2.3vw] md:mb-[15vw]
        lg:text-[1.4vw] lg:px-[3.3vw] lg:py-[1.6vw] lg:mt-[4vw] lg:mb-0
        xl:text-[1vw] xl:font-bold xl:py-[1.2vw]
        ">
         
          Get Quote Now
        </button>
      </div>

      {/* Image Section */}
      <div className="relative lg:flex-1 lg:flex lg:justify-end">
        <div className="relative w-full h-[90vw] md:h-[80vw] lg:h-[60vw] xl:h-[50vw]">
          <Image
            src="/images/about-hero-image.svg" 
            alt="Shopping Woman"
            layout="fill"
            objectFit="contain"
          />
        </div>
       
      </div>
    </section>

    {/* Hero Text Section */}

    <section className="flex flex-col items-center gap-10 mt-[20vw] mb-[10vw] lg:flex-row lg:justify-between lg:gap-20 
    lg:mt-[1vw] lg:px-[6vw] xl:px-[12vw] lg:mb-0">
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start lg:flex-1">
        <h5 className="text-[#E74040] text-[3.5vw] font-semibold tracking-wide md:text-[3vw]
        lg:text-[1.6vw] xl:text-[1vw]">
          Problems trying
        </h5>
        <h1 className="text-[#252B42] text-center text-[5.5vw] font-bold mt-[7vw] w-[65%] leading-[7vw] md:text-[4.5vw] md:w-[75%]
        lg:text-left lg:text-[2.4vw] lg:w-full lg:leading-tight lg:mt-[3.5vw] xl:text-[2vw] xl:mt-[2vw] 2xl:w-[90%]" >
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h1>
      </div>

      {/* Right Content */}
      <div className="lg:flex-1 w-[80%] mt-[2vw]">
        <p className="text-[#737373] font-semibold text-[3.5vw] leading-relaxed text-center md:text-[3vw]
        lg:text-left lg:text-[1.5vw] lg:w-full lg:leading-normal xl:text-[1vw]">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
        </p>
      </div>
    </section>

    {/* Achievements Section */}

  <section className="py-[10vw] md:py-[5vw] lg:py-[9vw] bg-white">
  {/* Stats Section */}
  <div className="container mx-auto px-6 grid grid-cols-1 gap-y-[8vw] text-center md:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 xl:px-[10vw]
  2xl:px-0">
    {/* Stat 1 */}
    <div>
      <h2 className="text-[#252B42] text-[10vw] font-bold md:text-[7vw] lg:text-[5vw] xl:text-[4vw]">15K</h2>
      <p className="text-[#737373] mt-[0.5vw] font-bold text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] xl:mt-0">
        Happy Customers
      </p>
    </div>
    {/* Stat 2 */}
    <div>
      <h2 className="text-[#252B42] text-[10vw] font-bold md:text-[7vw] lg:text-[5vw] xl:text-[4vw]">150K</h2>
      <p className="text-[#737373] mt-[0.5vw] font-bold text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] xl:mt-0">
        Monthly Visitors
      </p>
    </div>
    {/* Stat 3 */}
    <div>
      <h2 className="text-[#252B42] text-[10vw] font-bold md:text-[7vw] lg:text-[5vw] xl:text-[4vw]">15</h2>
      <p className="text-[#737373] mt-[0.5vw] font-bold text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] xl:mt-0">
        Countries Worldwide
      </p>
    </div>
    {/* Stat 4 */}
    <div>
      <h2 className="text-[#252B42] text-[10vw] font-bold md:text-[7vw] lg:text-[5vw] xl:text-[4vw]">100+</h2>
      <p className="text-[#737373] mt-[0.5vw] font-bold text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] xl:mt-0">
        Top Partners
      </p>
    </div>
  </div>
</section>

    {/* video card section  */}

    <section className="px-[10vw] py-[10vw] lg:py-[7vw] xl:px-[15vw] xl:py-[5vw] 2xl:py-[3vw]">
      <div>
        <Image
        src="images/video-card.svg"
        alt="video"
        width={300}
        height={300}
        layout="responsive"
        objectFit="cover"
        className="w-full h-auto object-cover"
        />
      </div>
    </section>


    {/* cards section  */}
<section>
       {/* Heading Section */}
   <div className="pt-[15vw] mb-[16vw] md:pt-[10vw] lg:mb-[5vw] flex flex-col items-center lg:pt-[8vw] xl:pt-[6vw]">
    <h3
      className=" font-bold text-[9vw] text-[#252B42] sm:text-[8vw] md:text-[5.5vw] lg:text-[3.5vw] xl:text-[3vw]
       "
    >
      <span className="block md:inline">Meet Our</span>
      <span className="block text-center md:inline"> Team</span>
    </h3>
    <p
      className=" text-[#737373] text-[4vw] text-center w-[80%] pt-[3.5vw]  sm:text-[3.6vw] md:text-[2.8vw] md:pt-[3.5vw]
      lg:w-[60%] lg:text-[1.7vw] lg:pt-[2vw] xl:text-[1vw] xl:w-[35%] font-semibold xl:pt-[0.6vw]"
    >
            Problems trying to resolve the conflict between the two major realms of Classical physics: 
            Newtonian mechanics  
    </p>
  </div>

    {/* cards  */}

  <div className="px-[7vw] py-[5vw] md:py-0 grid grid-cols-1 gap-[8vw] md:gap-[4vw] md:grid-cols-2 lg:grid-cols-3 lg:gap-[3vw] lg:py-[5vw] xl:gap-[2vw] xl:px-[12vw]">
      {cards.map((cards, index) => (
        <div key={index}>
          {/* Product Image */}
          <div className="h-[65vw] relative md:h-[30vw] lg:h-[20vw] xl:h-[17vw]
            ">
            <Image
              src={cards.image}
              alt={cards.title}
              layout="fill"
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col items-center mb-[8vw] lg:mb-[5vw]">
            <h5 className="font-bold text-[5vw] mt-[5vw] md:text-[3vw] lg:text-[1.9vw] lg:mt-[3vw] text-[#252B42] xl:text-[1.2vw] xl:mt-[1.8vw]">
              {cards.title}
            </h5>
            <p className="text-[#737373] font-bold text-[4vw] mt-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-[1.5vw] xl:text-[1vw] xl:mt-[1vw]">
              {cards.profession}
            </p>
            <div className="mt-[4vw] w-[29vw] md:w-[19vw] lg:w-[9vw] lg:mt-[1.7vw] xl:w-[8vw] xl:mt-[1vw]
              ">
              <Image
                src={cards.icon}
                alt="product-colors"
                width={2}
                height={2}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      ))}
    </div>


  </section>

  {/* LogoRow Section  */}

  <section>
               {/* Heading Section */}
   <div className="bg-[#FAFAFA] pt-[15vw] md:pt-[10vw] lg:pb-[3vw] flex flex-col items-center lg:pt-[8vw] xl:pt-[6vw] xl:pb-[2vw]">
    <h3
      className=" font-bold text-[9vw] text-[#252B42] sm:text-[8vw] md:text-[5.5vw] lg:text-[3.5vw] xl:text-[3vw]">
      <span className="block md:inline text-center">Big</span>
      <span className="block text-center md:inline"> Companies</span>
      <span className="block text-center lg:inline"> Are Here</span>
      
    </h3>
    <p
      className=" text-[#737373] text-[4vw] text-center w-[80%] pt-[3.5vw]  sm:text-[3.6vw] md:text-[2.8vw] md:pt-[3.5vw]
      lg:w-[60%] lg:text-[1.7vw] lg:pt-[2vw] xl:text-[1vw] xl:w-[35%] font-semibold xl:pt-[1vw]"
    >
            Problems trying to resolve the conflict between the two major realms of Classical physics: 
            Newtonian mechanics  
    </p>
  </div>
  <LogoRow />
  </section>

  {/* Work with us  */}

  {/* <section className="flex flex-col md:flex-row my-[10vw] items-center justify-between bg-blue-500 text-white"> */}
      {/* Left Content */}
      {/* <div className="md:w-1/2 text-center md:text-left space-y-4 ">
        <h4 className="text-sm uppercase tracking-wide font-semibold">Work With Us</h4>
        <h1 className="text-3xl md:text-5xl font-bold">Now Let&#8217;s grow Yours</h1>
        <p className="text-base md:text-lg leading-relaxed">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-500 font-medium rounded-md shadow hover:bg-gray-200 transition">
          Button
        </button>
      </div> */}

      {/* Right Image */}
      {/* <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
        <Image
          src="/images/about-work-with-image.svg"
          alt="Model"
          width
          className="max-w-full h-auto object-contain"
        />
      </div> */}
    {/* </section> */}

    <section className="flex flex-col lg:flex-row items-center justify-between pt-[20vw] bg-[#2A7CC7] text-white
    md:pt-[17vw] lg:pt-0 xl:mb-[5vw]">
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-[5vw] xl:pl-[12vw]">
        <h4 className="text-[#FFFFFF] text-[3.5vw] uppercase tracking-wide font-semibold
        md:text-[3vw] lg:text-[1.4vw] xl:text-[1vw]">
          Work With Us
        </h4>
        <h1 className="text-[#FFFFFF] text-[9vw] mt-[4vw] md:text-[8vw] font-bold leading-tight lg:text-[3.5vw] lg:mt-[2vw]
        xl:text-[2.5vw]">
         <span className="block lg:inline"> Now Let&#8217;s </span>
         <span className="block lg:inline"> grow Yours</span> 
        </h1>
        <p className="text-[#FFFFFF] text-[3.3vw] w-[64%] md:text-[3vw] leading-relaxed mt-[5vw] font-medium
        lg:text-[1.5vw] lg:w-[90%] lg:mt-[2vw] xl:text-[1vw] xl:w-[75%] xl:mt-[1.5vw]">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
        </p>
        <button className="px-[9vw] py-[3vw] bg-[#2A7CC7] border-2 border-white text-white font-semibold 
        rounded-md shadow hover:bg-gray-200 hover:text-[#2A7CC7] transition mt-[6vw] text-[3.3vw] mb-[20vw]
        md:text-[3vw] md:mb-[17vw] lg:mb-0 lg:text-[1.5vw] lg:py-[1.5vw] lg:px-[5vw] lg:mt-[3vw]
        xl:text-[1vw] xl:py-[1vw] xl:px-[3vw] xl:mt-[1.5vw]">
          Button
        </button>
      </div>

      {/* Right Image */}
      <div className="w-[100vw] md:mt-0 flex justify-center lg:w-[80vw] xl:w-[60vw]">
        <Image
           src="/images/about-work-with-image.svg"
          alt="Model"
          width={400}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>


    </>
  )
}
