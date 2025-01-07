import Image from "next/image";

const LogoRow = () => {
    const logos = [
      "/images/hooli.svg",
      "/images/lyft.svg",
      "/images/feather.svg",
      "/images/strip.svg",
      "/images/aws.svg",
      "/images/reddit.svg",
    ];
  
    return (
    <div className="bg-[#FAFAFA] flex flex-col items-center justify-center">
    <div className=" grid grid-col justify-center items-center gap-[10vw] w-[35vw] py-[20vw] md:w-[60vw] md:grid-cols-2 md:py-[13vw] lg:grid-cols-6
    lg:py-0 lg:gap-[5vw] lg:w-[80vw] xl:w-[70vw]">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="w-full h-[30vw] sm:h-[25vw] lg:h-[17vw] xl:h-[13vw]"
          />
        ))}
      </div>
      </div>
    );
  };
  
  export default LogoRow;
  