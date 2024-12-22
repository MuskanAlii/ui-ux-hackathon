import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <main  className="">

    {/* Hero Section */}
    <section>
    <div className='bg-[url("/images/hero-section.svg")] bg-no-repeat bg-center w-full min-h-screen bg-cover flex flex-col justify-center items-center lg:items-start lg:pl-[9vw] xl:pl-[15vw] '>
      <div className='flex flex-col items-center lg:items-start'>
        <h5 className={`${mont.className} font-bold text-[4vw] pb-[10vw] text-[#FFFFFF] md:text-[3vw]
          lg:text-[2.2vw] lg:pb-[2.5vw] xl:text-[1.2vw]`}>
          SUMMER 2020
        </h5>
        <h2 className={`${mont.className} font-bold text-[9.5vw] text-[#FFFFFF] tracking-wide leading-[13vw] 
          md:text-[7vw] md:leading-[9vw] lg:text-[5vw] xl:text-[3.7vw]`}>
        <span className="block lg:inline text-center ">NEW</span>
        <span className="block lg:inline"> COLLECTION</span>
        </h2>
        <h4 className={`${mont.className}font-normal text-[4.8vw] w-[70vw] text-center text-[#FAFAFA] tracking-wider leading-[8vw] pt-[8vw] sm:text-[4.3vw] sm:leading-[7vw] md:text-[3.6vw] md:leading-[5vw]
        md:w-[59vw] lg:text-[2.4vw] lg:pt-[2vw] lg:w-[50vw] lg:text-left lg:leading-[3.5vw] xl:text-[1.4vw] 
        xl:w-[27vw] xl:leading-[2.2vw] xl:tracking-wide` }>
          We know how large objects 
          will act, but things on a 
          small scale.
        </h4>
        <Button variant="destructive" className={`${mont.className} font-bold text-[#FFFFFF] bg-[#2DC071]
        px-[12vw] py-[6.5vw] text-[5vw] mt-[9vw] sm:px-[10vw] sm:text-[4.4vw] md:text-[3.5vw] md:px-[7vw] 
        md:py-[5vw] lg:text-[2.2vw] lg:px-[5vw] lg:py-[3.6vw] lg:mt-[3vw] xl:text-[1.6vw] xl:px-[3vw] xl:py-[2.3vw]`}>
          SHOP NOW 
        </Button>       
      </div>
    </div>
    </section>


    {/* Editors Pick Section */}

<section className="bg-[#FAFAFA]">
  {/* Heading Section */}
  <div className="pt-[15vw] flex flex-col items-center lg:pt-[8vw] xl:pt-[6vw]">
    <h3
      className={`${mont.className} font-bold text-[7vw] text-[#252B42] sm:text-[6vw] md:text-[5vw] lg:text-[2.7vw] xl:text-[1.7vw]`}
    >
      EDITOR&rsquo;S PICK
    </h3>
    <p
      className={`${mont.className} text-[#737373] text-[4.5vw] text-center w-[80%] pt-[3vw] sm:text-[3.7vw] md:text-[3vw]
       lg:text-[1.7vw] lg:pt-[1.5vw] xl:text-[1vw] font-semibold xl:pt-[0.6vw]`}
    >
      Problems trying to resolve the conflict between
    </p>
  </div>

  {/* Grid Section */}
  <div
    className="mt-[10vw] pb-[20vw] md:pb-[13vw] lg:pb-[6vw] w-[80%] m-auto grid grid-cols-1 gap-y-[3vw] 
     md:grid-cols-2 md:gap-x-[4vw] md:gap-y-0
     lg:grid-cols-4 lg:w-[75%] lg:mt-[5vw] lg:gap-x-[2vw] lg:gap-y-[1vw]
     xl:mt-[3.5vw]"
  >
    {/* Large Image 1: Full width on sm, 2 col span on lg */}
    <div
      className="bg-[url('/images/editors-pick-1.svg')] bg-cover bg-no-repeat bg-center h-[130vw] mb-[5vw]  
      md:h-[70vw] 
      lg:bg-[url('/images/editores-pick-1-lg.svg')] lg:col-span-2 lg:row-span-2 lg:h-[37vw] flex items-end md:justify-center lg:justify-start
      lg:mb-0
      "
    >
      <button className={`${mont.className}  w-[37vw] h-[10.5vw] text-[#252B42] bg-[#FFFFFF] font-bold text-[3.7vw]
       ml-[6vw] mb-[6vw] tracking-normal
       md:ml-0 md:mb-[4vw] md:w-[26vw] md:h-[9vw] md:text-[3.3vw]
       lg:text-[2vw] lg:w-[18vw] lg:h-[5.5vw] lg:ml-[2.5vw] lg:mb-[2.5vw]
       xl:text-[1.2vw] xl:w-[12vw] xl:h-[3.4vw] xl:ml-[2vw] xl:mb-[1.5vw]`}>
        MEN
      </button>
    </div>

    {/* Large Image 2: Single col span but row span 2 */}
    <div
      className="bg-[url('/images/editors-pick-2.svg')] bg-cover bg-center h-[130vw] mb-[5vw] md:h-[70vw] 
      lg:bg-[url('/images/editors-pick-2-lg.svg')] lg:col-span-1 lg:row-span-2 lg:h-[37vw] flex items-end md:justify-center 
      lg:mb-0
      xl:justify-start"
    >
       <button className={`${mont.className}  w-[32vw] h-[10.7vw] text-[#252B42] bg-[#FFFFFF] font-bold text-[3.7vw] ml-[13vw]
       mb-[4vw] tracking-normal
       md:ml-0 md:mb-[4vw] md:w-[27vw] md:h-[9vw] md:text-[3.2vw]
       lg:text-[1.7vw] lg:w-[13vw] lg:h-[5vw] lg:mb-[2.5vw] lg:font-extrabold
       xl:text-[1.1vw] xl:w-[10vw] xl:h-[3.4vw] xl:mb-[1.5vw] xl:ml-[1.3vw]`}>
        WOMEN
      </button>
    </div>

    {/* Small Image 3 */}
    <div
      className="bg-[url('/images/editors-pick-3.svg')] bg-cover bg-center h-[60vw] 
      md:h-[35vw]
      lg:bg-[url('/images/editors-pick-3-lg.svg')]  lg:col-span-1 lg:row-span-1 lg:h-[19vw] flex items-end md:justify-center
      xl:justify-start"
    >
      <button className={`${mont.className}  w-[40vw] h-[10.8vw] text-[#252B42] bg-[#FFFFFF] font-bold text-[3.7vw] ml-[4vw]
       mb-[6vw] tracking-normal
       md:ml-0 md:mb-[4vw] md:w-[28vw] md:h-[8vw] md:text-[2.6vw]
       lg:text-[1.7vw] lg:w-[15vw] lg:h-[5vw] lg:mb-[2vw] lg:ml-0 lg:font-extrabold
       xl:text-[1.1vw] xl:w-[12vw] xl:h-[3.4vw] xl:mb-[1.5vw] xl:ml-[1vw]`}>
      ACCESSORIES
      </button>
    </div>

    {/* Small Image 4 */}
    <div
      className="bg-[url('/images/editors-pick-4.svg')] bg-cover bg-center h-[60vw]
      md:h-[35vw] 
      lg:bg-[url('/images/editors-pick-4-lg.svg')]  lg:col-span-1 lg:row-span-1 lg:h-[17vw] flex items-end justify-center
      xl:justify-start"
    >
      <button className={`${mont.className}  w-[30vw] h-[10.8vw] text-[#252B42] bg-[#FFFFFF] font-bold text-[3.7vw] ml-[4vw]
       mb-[6vw] tracking-normal
       md:ml-0 md:mb-[4vw] md:text-[2.8vw] md:w-[21vw] md:h-[8vw]
       lg:text-[1.7vw] lg:w-[12vw] lg:h-[4.8vw] lg:mb-[2vw] lg:font-extrabold
       xl:text-[1.1vw] xl:w-[8vw] xl:h-[3.2vw] xl:mb-[1.5vw] xl:ml-[1.2vw]`}>
      KIDS
      </button>
    </div> 
  </div>
</section>  



      {/* BestSeller Products Section */}


<section className="bg-[#FFFFFF]">
      {/* Heading Section */}
  <div className="pt-[15vw] mb-[11vw] lg:mb-[5vw] flex flex-col items-center lg:pt-[8vw] xl:pt-[6vw]">
   <h4 className={`${mont.className} text-[#737373] text-[5vw] pb-[3.5vw] font-semibold sm:text-[4.6vw] md:text-[4vw] md:pb-[2.8vw]
    lg:text-[2.5vw] lg:pb-[2vw] xl:text-[1.5vw] xl:pb-[1vw]`}>
   Featured Products
   </h4>
    <h3
      className={`${mont.className} font-bold text-[7vw] text-[#252B42] sm:text-[6vw] md:text-[5vw] lg:text-[2.7vw] xl:text-[1.7vw]
       `}
    >
      <span className="block md:inline">BESTSELLER </span>
      <span className="block text-center md:inline">  PRODUCTS</span>
    </h3>
    <p
      className={`${mont.className} text-[#737373] text-[4.5vw] text-center w-[80%] pt-[3.5vw]  sm:text-[3.7vw] md:text-[3vw] md:pt-[2.8vw]
       lg:text-[1.7vw] lg:pt-[2vw] xl:text-[1vw] font-semibold xl:pt-[0.6vw]`}
    >
      Problems trying to resolve the conflict between
    </p>
  </div>

  {/* Grid Section */}

<div className="w-[80%] mx-auto grid grid-cols-1 md:gap-x-[3vw] md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 xl:w-[70%] xl:mt-[6vw]">

  {/* Product Card 1 */}

  <div>
    <div className="h-[130vw] relative md:h-[70vw] lg:h-[30vw]">
      <Image
        src="/images/product-cover-1.svg"
        alt="product-1"
        layout="fill"
        className="object-cover"
      />
    </div>

    <div className="flex flex-col items-center mb-[8vw]">
      <h5 className={` ${mont.className} font-bold text-[5vw] mt-[5vw] md:text-[3vw] lg:text-[1.9vw] lg:mt-[3vw] text-[#252B42] xl:text-[1.2vw] xl:mt-[1.8vw]`}>
        Graphic Design
      </h5>
      <p className={` ${mont.className}  text-[#737373] font-bold text-[4vw] mt-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-[1.5vw] xl:text-[1vw] xl:mt-[1vw]`}>
        English Department
      </p>
      <p className="mt-[2.5vw] lg:mt-[2vw] xl:mt-[1vw]">
        <span className="font-bold text-[#BDBDBD] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw]">$16.48</span>
        <span className="font-bold text-[#23856D] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw] ml-2">$6.48</span>
      </p>
      <div className="mt-[4vw] w-[29vw] md:w-[19vw] lg:w-[9vw] lg:mt-[1.7vw] xl:w-[6vw] xl:mt-[1vw]">
        <Image
          src="/images/product-colors.svg"
          alt="product-colors"
          width={2}
          height={2}
          layout="responsive"
        />
      </div>
    </div>
  </div>

  {/* Product Card 2 */}
  <div>
    <div className="h-[130vw] relative md:h-[70vw] lg:h-[30vw]">
      <Image
        src="/images/product-cover-2.svg"
        alt="product-2"
        layout="fill"
        className="object-cover"
      />
    </div>

    <div className="flex flex-col items-center mb-[8vw]">
      <h5 className={` ${mont.className} font-bold text-[5vw] mt-[5vw] md:text-[3vw] lg:text-[1.9vw] lg:mt-[3vw] text-[#252B42] xl:text-[1.2vw] xl:mt-[1.8vw]`}>
        Graphic Design
      </h5>
      <p className={` ${mont.className}  text-[#737373] font-bold text-[4vw] mt-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-[1.5vw] xl:text-[1vw] xl:mt-[1vw]`}>
        English Department
      </p>
      <p className="mt-[2.5vw] lg:mt-[2vw] xl:mt-[1vw]">
        <span className="font-bold text-[#BDBDBD] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw]">$16.48</span>
        <span className="font-bold text-[#23856D] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw] ml-2">$6.48</span>
      </p>
      <div className="mt-[4vw] w-[29vw] md:w-[19vw] lg:w-[9vw] lg:mt-[1.7vw] xl:w-[6vw] xl:mt-[1vw]">
        <Image
          src="/images/product-colors.svg"
          alt="product-colors"
          width={2}
          height={2}
          layout="responsive"
        />
      </div>
    </div>
  </div>



  {/* Product Card 3 */}

  <div>
    <div className="h-[130vw] relative md:h-[70vw] lg:h-[30vw]">
      <Image
        src="/images/product-cover-3.svg"
        alt="product-2"
        layout="fill"
        className="object-cover"
      />
    </div>

    <div className="flex flex-col items-center mb-[8vw]">
      <h5 className={` ${mont.className} font-bold text-[5vw] mt-[5vw] md:text-[3vw] lg:text-[1.9vw] lg:mt-[3vw] text-[#252B42] xl:text-[1.2vw] xl:mt-[1.8vw]`}>
        Graphic Design
      </h5>
      <p className={` ${mont.className}  text-[#737373] font-bold text-[4vw] mt-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-[1.5vw] xl:text-[1vw] xl:mt-[1vw]`}>
        English Department
      </p>
      <p className="mt-[2.5vw] lg:mt-[2vw] xl:mt-[1vw]">
        <span className="font-bold text-[#BDBDBD] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw]">$16.48</span>
        <span className="font-bold text-[#23856D] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw] ml-2">$6.48</span>
      </p>
      <div className="mt-[4vw] w-[29vw] md:w-[19vw] lg:w-[9vw] lg:mt-[1.7vw] xl:w-[6vw] xl:mt-[1vw]">
        <Image
          src="/images/product-colors.svg"
          alt="product-colors"
          width={2}
          height={2}
          layout="responsive"
        />
      </div>
    </div>
  </div>



  {/* Product Card 4 */}


  <div>
    <div className="h-[130vw] relative md:h-[70vw] lg:h-[30vw]">
      <Image
        src="/images/product-cover-4.svg"
        alt="product-2"
        layout="fill"
        className="object-cover"
      />
    </div>

    <div className="flex flex-col items-center mb-[8vw]">
      <h5 className={` ${mont.className} font-bold text-[5vw] mt-[5vw] md:text-[3vw] lg:text-[1.9vw] lg:mt-[3vw] text-[#252B42] xl:text-[1.2vw] xl:mt-[1.8vw]`}>
        Graphic Design
      </h5>
      <p className={` ${mont.className}  text-[#737373] font-bold text-[4vw] mt-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-[1.5vw] xl:text-[1vw] xl:mt-[1vw]`}>
        English Department
      </p>
      <p className="mt-[2.5vw] lg:mt-[2vw] xl:mt-[1vw]">
        <span className="font-bold text-[#BDBDBD] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw]">$16.48</span>
        <span className="font-bold text-[#23856D] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw] ml-2">$6.48</span>
      </p>
      <div className="mt-[4vw] w-[29vw] md:w-[19vw] lg:w-[9vw] lg:mt-[1.7vw] xl:w-[6vw] xl:mt-[1vw]">
        <Image
          src="/images/product-colors.svg"
          alt="product-colors"
          width={2}
          height={2}
          layout="responsive"
        />
      </div>
    </div>
  </div>




  {/* Product Card 5 */}  

  <div>
    <div className="h-[130vw] relative md:h-[70vw] lg:h-[30vw]">
      <Image
        src="/images/product-cover-5.svg"
        alt="product-2"
        layout="fill"
        className="object-cover"
      />
    </div>

    <div className="flex flex-col items-center mb-[8vw]">
      <h5 className={` ${mont.className} font-bold text-[5vw] mt-[5vw] md:text-[3vw] lg:text-[1.9vw] lg:mt-[3vw] text-[#252B42] xl:text-[1.2vw] xl:mt-[1.8vw]`}>
        Graphic Design
      </h5>
      <p className={` ${mont.className}  text-[#737373] font-bold text-[4vw] mt-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-[1.5vw] xl:text-[1vw] xl:mt-[1vw]`}>
        English Department
      </p>
      <p className="mt-[2.5vw] lg:mt-[2vw] xl:mt-[1vw]">
        <span className="font-bold text-[#BDBDBD] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw]">$16.48</span>
        <span className="font-bold text-[#23856D] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw] ml-2">$6.48</span>
      </p>
      <div className="mt-[4vw] w-[29vw] md:w-[19vw] lg:w-[9vw] lg:mt-[1.7vw] xl:w-[6vw] xl:mt-[1vw]">
        <Image
          src="/images/product-colors.svg"
          alt="product-colors"
          width={2}
          height={2}
          layout="responsive"
        />
      </div>
    </div>
  </div>




  {/* Product Card 6 */}      

  <div>
    <div className="h-[130vw] relative md:h-[70vw] lg:h-[30vw]">
      <Image
        src="/images/product-cover-6.svg"
        alt="product-2"
        layout="fill"
        className="object-cover"
      />
    </div>

    <div className="flex flex-col items-center mb-[8vw]">
      <h5 className={` ${mont.className} font-bold text-[5vw] mt-[5vw] md:text-[3vw] lg:text-[1.9vw] lg:mt-[3vw] text-[#252B42] xl:text-[1.2vw] xl:mt-[1.8vw]`}>
        Graphic Design
      </h5>
      <p className={` ${mont.className}  text-[#737373] font-bold text-[4vw] mt-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-[1.5vw] xl:text-[1vw] xl:mt-[1vw]`}>
        English Department
      </p>
      <p className="mt-[2.5vw] lg:mt-[2vw] xl:mt-[1vw]">
        <span className="font-bold text-[#BDBDBD] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw]">$16.48</span>
        <span className="font-bold text-[#23856D] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw] ml-2">$6.48</span>
      </p>
      <div className="mt-[4vw] w-[29vw] md:w-[19vw] lg:w-[9vw] lg:mt-[1.7vw] xl:w-[6vw] xl:mt-[1vw]">
        <Image
          src="/images/product-colors.svg"
          alt="product-colors"
          width={2}
          height={2}
          layout="responsive"
        />
      </div>
    </div>
  </div>




  {/* Product Card 7 */}

  <div>
    <div className="h-[130vw] relative md:h-[70vw] lg:h-[30vw]">
      <Image
        src="/images/product-cover-7.svg"
        alt="product-2"
        layout="fill"
        className="object-cover"
      />
    </div>

    <div className="flex flex-col items-center mb-[8vw]">
      <h5 className={` ${mont.className} font-bold text-[5vw] mt-[5vw] md:text-[3vw] lg:text-[1.9vw] lg:mt-[3vw] text-[#252B42] xl:text-[1.2vw] xl:mt-[1.8vw]`}>
        Graphic Design
      </h5>
      <p className={` ${mont.className}  text-[#737373] font-bold text-[4vw] mt-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-[1.5vw] xl:text-[1vw] xl:mt-[1vw]`}>
        English Department
      </p>
      <p className="mt-[2.5vw] lg:mt-[2vw] xl:mt-[1vw]">
        <span className="font-bold text-[#BDBDBD] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw]">$16.48</span>
        <span className="font-bold text-[#23856D] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw] ml-2">$6.48</span>
      </p>
      <div className="mt-[4vw] w-[29vw] md:w-[19vw] lg:w-[9vw] lg:mt-[1.7vw] xl:w-[6vw] xl:mt-[1vw]">
        <Image
          src="/images/product-colors.svg"
          alt="product-colors"
          width={2}
          height={2}
          layout="responsive"
        />
      </div>
    </div>
  </div>




  {/* Product Card 8 */}

  <div>
    <div className="h-[130vw] relative md:h-[70vw] lg:h-[30vw]">
      <Image
        src="/images/product-cover-8.svg"
        alt="product-2"
        layout="fill"
        className="object-cover"
      />
    </div>

    <div className="flex flex-col items-center mb-[8vw]">
      <h5 className={` ${mont.className} font-bold text-[5vw] mt-[5vw] md:text-[3vw] lg:text-[1.9vw] lg:mt-[3vw] text-[#252B42] xl:text-[1.2vw] xl:mt-[1.8vw]`}>
        Graphic Design
      </h5>
      <p className={` ${mont.className}  text-[#737373] font-bold text-[4vw] mt-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-[1.5vw] xl:text-[1vw] xl:mt-[1vw]`}>
        English Department
      </p>
      <p className="mt-[2.5vw] lg:mt-[2vw] xl:mt-[1vw]">
        <span className="font-bold text-[#BDBDBD] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw]">$16.48</span>
        <span className="font-bold text-[#23856D] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw] ml-2">$6.48</span>
      </p>
      <div className="mt-[4vw] w-[29vw] md:w-[19vw] lg:w-[9vw] lg:mt-[1.7vw] xl:w-[6vw] xl:mt-[1vw]">
        <Image
          src="/images/product-colors.svg"
          alt="product-colors"
          width={2}
          height={2}
          layout="responsive"
        />
      </div>
    </div>
  </div>

















</div>









































 
</section>




















































   </main>
   </>
  );
}
