import Image from "next/image"
export default function Team() {
  const cards = [
    {
      title: "Username",
      profession: "Profession",
      image: "/images/team-1.svg",
      icon: "/images/social-media.svg",
      id: 1
    },
    {
      title: "Username",
      profession: "Profession",
      image: "/images/team-2.svg",
      icon: "/images/social-media.svg",
      id: 2
    },
    {
      title: "Username",
      profession: "Profession",
      image: "/images/team-3.svg",
      icon: "/images/social-media.svg",
      id: 3
    },
    {
      title: "Username",
      profession: "Profession",
      image: "/images/about-card-3.svg",
      icon: "/images/social-media.svg",
      id: 4
    },
    {
      title: "Username",
      profession: "Profession",
      image: "/images/team-5.svg",
      icon: "/images/social-media.svg",
      id: 5
    },
    {
      title: "Username",
      profession: "Profession",
      image: "/images/about-card-1.svg",
      icon: "/images/social-media.svg",
      id: 6
    },
    {
      title: "Username",
      profession: "Profession",
      image: "/images/about-card-2.svg",
      icon: "/images/social-media.svg",
      id: 7
    },
    {
      title: "Username",
      profession: "Profession",
      image: "/images/team-8.svg",
      icon: "/images/social-media.svg",
      id: 8
    },
    {
      title: "Username",
      profession: "Profession",
      image: "/images/team-9.svg",
      icon: "/images/social-media.svg",
      id: 9
    },
  ]
  return (
    <>
    {/* heading section  */}
 <section className="flex flex-col items-center justify-center  bg-[#FFFFFF] mt-[10vw] mb-[12vw] lg:mt-[7vw] lg:mb-[7vw]
     xl:mt-[5vw] xl:mb-[4vw]">
    
    <h4 className="text-[3.5vw] font-bold text-[#737373] tracking-wider md:text-[2.8vw] lg:text-[1.8vw] xl:text-[1.2vw]">
    WHAT WE DO
    </h4>
    
    {/* Main Heading  */}
    <h1 className="text-[8vw] text-[#252B42] font-bold mt-[4vw] md:text-[6.5vw] lg:text-[5vw] lg:mt-[2vw] xl:text-[4vw]">
    <span className="block text-center lg:inline">Innovation </span>
    <span className="block lg:inline">tailored for you</span>
    </h1>
    
    {/* Breadcrumb  */}
    <div className="flex items-center mt-[5vw] text-[3.7vw] font-bold md:text-[3vw] lg:text-[1.6vw] lg:mt-[3vw] xl:text-[1.1vw]">
    <span className="text-[#252B42] pr-[2vw] lg:pr-[0.8vw]">
      Home
    </span>
          &gt;  
    <span className="text-[#737373] pl-[2vw] lg:pl-[0.8vw]">
      Team
    </span>
    </div>
  </section>
    
    {/* image section  */}

    <section>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:p-0 lg:gap-2">
    {/* Large Image */}
    <div className="relative w-full h-[130vw] col-span-2  lg:col-span-2 lg:row-span-2 lg:h-[47vw] xl:h-[47vw]">
      <Image
        src="/images/team-hero-section-1.svg"
        alt="Large Hero Image"
        layout="fill"
        objectFit="cover"
       
      />
    </div>

    {/* Small Images */}
    <div className="relative w-full h-[60vw] lg:h-[23vw] xl:h-[23vw]">
      <Image
        src="/images/team-hero-section-2.svg"
        alt="Small Hero Image 1"
        layout="fill"
        objectFit="cover"
        
      />
    </div>
    <div className="relative w-full h-[60vw] lg:h-[23vw] xl:h-[23vw]">
      <Image
        src="/images/team-hero-section-3.svg"
        alt="Small Hero Image 2"
        layout="fill"
        objectFit="cover"
       
      />
    </div>
    <div className="relative w-full h-[60vw] lg:h-[23vw] xl:h-[23vw]">
      <Image
        src="/images/team-hero-section-4.svg"
        alt="Small Hero Image 3"
        layout="fill"
        objectFit="cover"
      
      />
    </div>
    <div className="relative w-full h-[60vw] lg:h-[23vw] xl:h-[23vw]">
      <Image
        src="/images/team-hero-section-5.svg"
        alt="Small Hero Image 4"
        layout="fill"
        objectFit="cover"
       
      />
    </div>
  </div>
</section>

{/* Team Section */}

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
  </div>

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

     {/* free trial  */}
  
      <section className="flex flex-col items-center justify-center  bg-[#FFFFFF] pt-[10vw] pb-[12vw] xl:pb-[8vw] lg:pt-[6vw] xl:pt-[9.15vw] ">
        {/* Heading */}
        <h1 className="text-[8vw]  text-[#252B42] font-bold md:text-[6.5vw] lg:text-[4.5vw] xl:text-[3vw]">
        <span className="block lg:inline text-center">Start your</span> 
        <span className="block lg:inline"> 14 days free trial</span>
        </h1>
        
        {/* Description */}
        <p className="text-[3.7vw] font-semibold text-[#737373] text-center mt-[3vw] w-[75%] md:text-[2.7vw] lg:text-[1.9vw] lg:mt-[1vw]
        lg:w-[55%] xl:text-[1vw] xl:w-[35%] xl:mt-[o.5vw]">
     Met minim Mollie non desert Alamo est sit cliquey dolor 
     do met sent. RELIT official consequent.
        </p>
  
        <button className="bg-[#23A6F0] text-white mt-[8vw] rounded-md py-[3vw] px-[10vw] text-[3.3vw]
           font-bold hover:bg-blue-600 transition
           md:text-[2.5vw] md:py-[2vw] md:px-[7vw]
           lg:py-[1.5vw] lg:px-[3.5vw] lg:mt-[2.70vw] lg:text-[1.4vw]
           xl:py-[1.2vw] xl:px-[3vw] xl:mt-[2.70vw] xl:text-[1vw]">
           Try it free now
          </button>
  
          <div className="w-[55vw] mt-[6vw] md:w-[40vw] lg:w-[20vw] lg:mt-[3vw] xl:w-[18vw] xl:mt-[2vw]">
            <Image 
            src="/images/pricing-social-icons.svg"
            alt="Vector"
            width={30}
            height={30}
            layout="responsive"
            />
          </div>    
      </section>
   </>
     
  )
}
