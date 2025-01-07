import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF]">
      <div className=" py-[10vw] px-[7vw] md:px-[8vw] lg:px-[7vw] xl:px-[11vw] xl:py-0">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  border-b border-gray-200 ">
          <h1 className="text-[6vw] font-bold text-[#252B42] md:text-[4.6vw] lg:text-[3.5vw] xl:text-[1.8vw] xl:mb-[4vw]">
            Bandage
          </h1>
          <div className="w-[28vw] my-[6vw] md:w-[22vw] md:mb-[8vw] lg:w-[17vw] xl:w-[9vw] xl:mb-[4vw] xl:mt-[0]">
          <Image
          src="/images/social-media.svg"
          alt="social media"
          width={10}
          height={10}
          layout="responsive"
          />
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* Column 1 */}
          <div >
            <h3 className="text-[4vw] font-bold text-[#252B42] my-[4vw] md:text-[3vw] md:mt-[6vw] 
            lg:text-[2.4vw] lg:mt-[5vw] lg:mb-[2.5vw] xl:text-[1.3vw] xl:mb-[1.5vw] ">Company Info</h3>
            <ul className="space-y-[2.5vw] text-[3vw] font-bold text-[#737373] md:text-[2.4vw]
             lg:text-[1.7vw] lg:space-y-[1vw] xl:text-[1vw] ">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="lg:pl-[3vw] xl:pl-0">
            <h3 className="text-[4vw] font-bold text-[#252B42]  my-[4vw] md:text-[3vw] md:mt-[6vw]
             lg:text-[2.4vw] lg:mt-[5vw] lg:mb-[2.5vw] xl:text-[1.3vw] xl:mb-[1.5vw]">Legal</h3>
            <ul className="space-y-[2.5vw] text-[3vw]  font-bold text-[#737373] md:text-[2.4vw]
             lg:text-[1.7vw] lg:space-y-[1vw] xl:text-[1vw]">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:pl-[3vw] xl:pl-0">
            <h3 className="text-[4vw] font-bold text-[#252B42] my-[4vw] md:text-[3vw] md:mt-[6vw]
             lg:text-[2.4vw] lg:mt-[5vw] lg:mb-[2.5vw] xl:text-[1.3vw] xl:mb-[1.5vw]">Features</h3>
            <ul className="space-y-[2.5vw] text-[3vw]  font-bold text-[#737373] md:text-[2.4vw] 
            lg:text-[1.7vw] lg:space-y-[1vw] xl:text-[1vw]">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="lg:pl-[4vw] xl:pl-0">
            <h3 className="text-[4vw] font-bold text-[#252B42] my-[4vw] md:text-[3vw] md:mt-[6vw]
             lg:text-[2.4vw] lg:mt-[5vw] lg:mb-[2.5vw] xl:text-[1.3vw] xl:mb-[1.5vw]">Resources</h3>
            <ul className="space-y-[2.5vw] text-[3vw]  font-bold text-[#737373] md:text-[2.4vw] 
            lg:text-[1.7vw] lg:space-y-[1vw] xl:text-[1vw]">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-1">
            <h3 className="text-[4vw] font-bold text-[#252B42] my-[4vw] md:text-[3vw] md:mt-[6vw]
             lg:text-[2.4vw] lg:mb-[2vw] xl:text-[1.3vw] xl:mb-[1.5vw] xl:mt-[5vw]">Get In Touch</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#F9F9F9] rounded-l-lg  w-full h-[10vw] text-[3vw] px-[3vw] py-[2vw]
                 text-[#737373] font-semibold border border-[#E6E6E6]
                  focus:outline-none focus:ring-2 focus:ring-blue-400 md:h-[8vw] md:text-[2.1vw]
                  lg:h-[6vw] xl:h-[3.3vw] xl:py-[0] xl:text-[0.8vw] xl:px-[1vw]"
              />
              <button
                type="submit"
                className="bg-[#23A6F0] text-[3vw] text-white h-[10vw] rounded-r-lg font-semibold
                 px-[4vw] py-[2vw]  hover:bg-blue-600 transition
                 md:h-[8vw] md:text-[2.1vw] lg:h-[6vw] lg:pt-[1.5vw] xl:h-[3.3vw] xl:py-[0] xl:px-[1vw] xl:text-[0.8vw]"
              >
                Subscribe
              </button>
            </form>

            <p className="text-[2.7vw] font-semibold text-[#737373] mt-[2vw] md:text-[2vw] md:mt-[1vw] lg:text-[1.3vw]
            xl:text-[0.8vw] xl:mt-[0.5vw] ">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

        {/* Bottom Section */}
        <div className="bg-[#FAFAFA] text-center text-[#737373] font-bold text-[3vw] mt-[2vw] py-[8vw] leading-[5vw] 
        md:text-[2.3vw] md:leading-[4vw] md:mt-0 md:py-[5vw] lg:text-[1.7vw] xl:text-[1vw] xl:text-left
         xl:px-[11vw] xl:py-[0.5vw] xl:mt-[4vw]" >
          <span className="block lg:inline">Made With Love By</span>
         <span className="block lg:inline"> Finland All Right Reserved</span>
        </div>
    </footer>
  );
}

