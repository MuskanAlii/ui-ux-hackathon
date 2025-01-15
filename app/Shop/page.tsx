import React from "react";
import Image from "next/image";
import LogoRow from "@/components/LogoRow/LogoRow";

export default function Shop(){
  const items = [
    { id: 1, title: "Cloths", count: "5 Items", image: "/images/media-bg-cover-1.svg" },
    { id: 2, title: "Cloths", count: "5 Items", image: "/images/media-bg-cover-2.svg" },
    { id: 3, title: "Cloths", count: "5 Items", image: "/images/media-bg-cover-3.svg" },
    { id: 4, title: "Cloths", count: "5 Items", image: "/images/media-bg-cover-4.svg" },
    { id: 5, title: "Cloths", count: "5 Items", image: "/images/media-bg-cover-5.svg" },
  ];

  const products = [
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-1.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-2.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-3.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-4.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-5.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-6.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-7.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-8.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-9.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-10.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-11.svg",
      colors: "/images/product-colors.svg",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      image: "/images/shop-card-12.svg",
      colors: "/images/product-colors.svg",
    },
  ];
  return (
    <>
    <div className="px-[10vw] bg-[#FAFAFA] md:px-[5vw] lg:px-[3vw] xl:px-[8vw]">
      <div className="flex flex-col items-center gap-[10vw] lg:flex-row lg:gap-0 lg:justify-between lg:py-[3vw] xl:py-[2.2vw]">
      {/* Title */}
      <h1 className="text-[7vw] text-[#252B42] font-bold sm:text-[6vw] md:text-[5vw] md:pt-[5vw] lg:pt-0
      lg:text-[3vw] lg:pl-[3vw] xl:text-[2vw]
      ">Shop</h1>

      {/* Breadcrumb */}
      <div className="text-[4vw] font-bold mb-[10vw] sm:text-[3.5vw] md:text-[2.9vw] lg:pt-0 lg:mb-0
      lg:text-[1.5vw] lg:pr-[3vw] xl:text-[1vw]">
        <span className="text-[#252B42] pr-[2vw] lg:pr-[0.8vw]">Home</span>
          &gt;  
        <span className="text-[#737373] pl-[2vw] lg:pl-[0.8vw]">Shop</span>
      </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[4vw] pb-[10vw] md:gap-[3vw] lg:gap-[1.5vw] lg:pb-[5vw]">
        {items.map((item) => (
          <div
            key={item.id}
            className={`relative bg-gray-200 overflow-hidden rounded-lg group hover:shadow-lg w-[80vw] md:w-[43vw]
              lg:w-[18vw] lg:ml-0 xl:w-[16vw]                           
              ${item.id === 5 ? "md:ml-[23vw]" : ""}
              `}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="w-full h-auto object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center
             opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <h2 className="text-white text-xl font-bold">{item.title}</h2>
              <p className="text-gray-200">{item.count}</p>
            </div>
          </div>
        ))}
      </div>
  </div>
      {/* Filters Section */}
      <div className="mt-[10vw] flex flex-col justify-between items-center bg-[#FFFFFF] mb-[10vw] gap-[6vw] md:gap-[5vw] md:mt-[7vw]
      lg:mt-[2.5vw] lg:mb-[2.5vw] lg:flex-row  lg:pl-[4vw] xl:pl-[10vw] ">
        <h6 className="text-[3.5vw] font-bold text-[#737373] md:text-[2.8vw] lg:text-[1.5vw] xl:text-[1vw]">Showing all 12 results</h6>

          {/* Views */}
          <div className="flex items-center gap-[4vw] md:gap-[3vw] lg:gap-[1.5vw]">
            <h6 className="text-[3.3vw] text-[#737373] font-bold md:text-[2.8vw] lg:text-[1.5vw] xl:text-[1vw]">Views:</h6>
            <div className="w-[12vw] md:w-[8vw] lg:w-[4vw] xl:w-[3vw] cursor-pointer">
              <Image
              src="images/btn-sm-24.svg"
              alt="button"
              width={20}
              height={20}
              className="w-full h-auto object-cover"
              />             
              
            </div>
            <div className="w-[12vw] md:w-[8vw] lg:w-[4vw] xl:w-[3vw] cursor-pointer">
              <Image
              src="images/btn-sm-2.svg"
              alt="button"
              width={20}
              height={20}
              className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Sorting */}
          <div className=" lg:pr-[4vw] xl:pr-[9vw]">
          <select className=" w-[23vw] h-[10vw] text-[2.8vw] text-[#737373] bg-gray-100 rounded-md border border-gray-200 cursor-pointer
          md:text-[2.4vw] md:w-[21vw] md:h-[9vw] lg:w-[12vw] lg:h-[5vw] lg:p-0 lg:text-[1.5vw] text-center xl:text-[1.1vw]
          xl:w-[10vw] xl:h-[3.8vw]">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

          {/* Filter Button */}
          <button className=" w-[18vw] h-[10vw] text-[2.9vw] bg-[#23A6F0] text-white font-bold rounded-md hover:bg-blue-600 ml-[4vw]
           md:text-[2.4vw] md:w-[16vw] md:h-[9vw] md:ml-[2.5vw] lg:w-[9vw] lg:h-[5vw] lg:p-0 lg:text-[1.5vw] text-center
           lg:ml-[1vw] xl:text-[1.1vw] xl:h-[3.8vw] xl:w-[7vw]">
            Filter
          </button>
          </div>
        </div>

      {/* logorow section */}

      <LogoRow />
     
     {/* card section */}

     <div className="px-[7vw] py-[10vw] grid grid-cols-1 gap-[8vw] md:grid-cols-2 lg:grid-cols-4 lg:gap-[3vw] lg:py-[5vw] xl:gap-[2vw] xl:px-[10vw]">
      {products.map((product, index) => (
        <div key={index}>
          {/* Product Image */}
          <div className="h-[130vw] relative md:h-[70vw] lg:h-[30vw]">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col items-center mb-[8vw] lg:mb-[5vw]">
            <h5 className="font-bold text-[5vw] mt-[5vw] md:text-[3vw] lg:text-[1.9vw] lg:mt-[3vw] text-[#252B42] xl:text-[1.2vw] xl:mt-[1.8vw]">
              {product.title}
            </h5>
            <p className="text-[#737373] font-bold text-[4vw] mt-[2.5vw] md:text-[2.5vw] lg:text-[1.5vw] lg:mt-[1.5vw] xl:text-[1vw] xl:mt-[1vw]">
              {product.department}
            </p>
            <p className="mt-[2.5vw] lg:mt-[2vw] xl:mt-[1vw]">
              <span className="font-bold text-[#BDBDBD] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw]">
                {product.originalPrice}
              </span>
              <span className="font-bold text-[#23856D] text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1.1vw] ml-2">
                {product.discountedPrice}
              </span>
            </p>
            <div className="mt-[4vw] w-[29vw] md:w-[19vw] lg:w-[9vw] lg:mt-[1.7vw] xl:w-[6vw] xl:mt-[1vw]">
              <Image
                src={product.colors}
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

{/* Pagination Buttons */}

    <div className="flex justify-center items-center gap-2 p-4 mb-4 xl:mb-8">
  {/* First Button */}
  <button className="px-4 py-2 text-sm font-bold text-gray-400 cursor-not-allowed">
    First
  </button>

  {/* Page Numbers */}
  <button className="px-4 py-2 text-sm font-bold border rounded text-blue-500 hover:bg-blue-100">
    1
  </button>
  <button className="px-4 py-2 text-sm font-bold border rounded bg-blue-500 text-white">
    2
  </button>
  <button className="px-4 py-2 text-sm font-bold border rounded text-blue-500 hover:bg-blue-100">
    3
  </button>

  {/* Next Button */}
  <button className="px-4 py-2 text-sm font-bold text-blue-500 hover:text-blue-700">
    Next
  </button>
</div>
 
</>
  );
};



