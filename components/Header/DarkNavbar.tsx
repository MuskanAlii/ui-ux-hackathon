import { Montserrat } from "next/font/google"

const mont = Montserrat({subsets : ['latin']})

 export default function DarkNavbar() {
  return (
  <>
    <div className=" lg:w-full lg:h-[58px] lg:bg-[#252B42] lg:text-[#FFFFFF] lg:flex  lg:justify-between lg:items-center">

      {/* phone number section */}

     <div className="hidden lg:flex lg:ml-7 lg:gap-4">

      <div className="lg:flex lg:gap-1 lg:items-center">

      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_4932)">
      <path d="M3.65447 1.32829C3.59544 1.25236 3.52092 1.18985 3.43587 1.14492C3.35082 1.09999 3.25719 1.07368 3.16119 1.06772C3.06519 1.06176 2.96902 1.07629 2.87907 1.11036C2.78912 1.14442 2.70744 1.19724 2.63947 1.26529L1.60547 2.30029C1.12247 2.78429 0.944471 3.4693 1.15547 4.0703C2.03121 6.55788 3.45577 8.81639 5.32347 10.6783C7.1854 12.546 9.4439 13.9705 11.9315 14.8463C12.5325 15.0573 13.2175 14.8793 13.7015 14.3963L14.7355 13.3623C14.8035 13.2943 14.8563 13.2127 14.8904 13.1227C14.9245 13.0327 14.939 12.9366 14.933 12.8406C14.9271 12.7446 14.9008 12.6509 14.8558 12.5659C14.8109 12.4808 14.7484 12.4063 14.6725 12.3473L12.3655 10.5533C12.2843 10.4904 12.19 10.4467 12.0895 10.4256C11.989 10.4044 11.8851 10.4064 11.7855 10.4313L9.59547 10.9783C9.30315 11.0514 8.99689 11.0475 8.70652 10.967C8.41614 10.8866 8.15154 10.7324 7.93847 10.5193L5.48247 8.06229C5.26924 7.84933 5.1148 7.58478 5.03418 7.29439C4.95357 7.00401 4.94954 6.6977 5.02247 6.4053L5.57047 4.2153C5.59538 4.11569 5.59734 4.01173 5.57621 3.91126C5.55507 3.81079 5.51139 3.71642 5.44847 3.63529L3.65447 1.32829ZM1.88447 0.511295C2.05947 0.336244 2.2697 0.200425 2.50121 0.112856C2.73272 0.0252871 2.98021 -0.0120282 3.22725 0.00338804C3.47429 0.0188043 3.71522 0.0865995 3.93405 0.202272C4.15288 0.317944 4.3446 0.478846 4.49647 0.674295L6.29047 2.98029C6.61947 3.4033 6.73547 3.9543 6.60547 4.4743L6.05847 6.6643C6.03019 6.77772 6.03172 6.89654 6.06291 7.0092C6.0941 7.12187 6.15388 7.22456 6.23647 7.3073L8.69347 9.76429C8.77631 9.84705 8.87916 9.90694 8.99202 9.93813C9.10488 9.96933 9.22389 9.97076 9.33747 9.9423L11.5265 9.3953C11.7831 9.33113 12.0509 9.32615 12.3098 9.38072C12.5686 9.43529 12.8116 9.54799 13.0205 9.71029L15.3265 11.5043C16.1555 12.1493 16.2315 13.3743 15.4895 14.1153L14.4555 15.1493C13.7155 15.8893 12.6095 16.2143 11.5785 15.8513C8.93965 14.9228 6.54374 13.4121 4.56847 11.4313C2.58776 9.45631 1.07708 7.06075 0.148471 4.4223C-0.213529 3.3923 0.111471 2.2853 0.851471 1.54529L1.88547 0.511295H1.88447Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_1_4932">
      <rect width="16.0005" height="16.0004" fill="white"/>
      </clipPath>
      </defs>
      </svg>

      <h6 className={`${mont.className} lg:text-[14px] lg:font-bold`}>
      (225) 555-0118
      </h6>
      </div>


      {/* email section */}

      <div className="lg:flex lg:items-center lg:gap-1 ">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_4936)">
      <path d="M-0.499512 4C-0.499512 3.46957 -0.288798 2.96086 0.0862747 2.58579C0.461347 2.21071 0.970055 2 1.50049 2H13.5005C14.0309 2 14.5396 2.21071 14.9147 2.58579C15.2898 2.96086 15.5005 3.46957 15.5005 4V12C15.5005 12.5304 15.2898 13.0391 14.9147 13.4142C14.5396 13.7893 14.0309 14 13.5005 14H1.50049C0.970055 14 0.461347 13.7893 0.0862747 13.4142C-0.288798 13.0391 -0.499512 12.5304 -0.499512 12V4ZM1.50049 3C1.23527 3 0.980918 3.10536 0.793381 3.29289C0.605845 3.48043 0.500488 3.73478 0.500488 4V4.217L7.50049 8.417L14.5005 4.217V4C14.5005 3.73478 14.3951 3.48043 14.2076 3.29289C14.0201 3.10536 13.7657 3 13.5005 3H1.50049ZM14.5005 5.383L9.74249 8.238L14.5005 11.114V5.384V5.383ZM14.4665 12.261L8.77149 8.82L7.50049 9.583L6.22849 8.82L0.534488 12.26C0.591686 12.4724 0.717337 12.6601 0.891976 12.7938C1.06662 12.9276 1.2805 13.0001 1.50049 13H13.5005C13.7203 13.0001 13.9341 12.9278 14.1088 12.7942C14.2834 12.6607 14.4091 12.4732 14.4665 12.261ZM0.500488 11.114L5.25849 8.238L0.500488 5.383V11.113V11.114Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_1_4936">
      <rect width="16" height="16" fill="white" transform="translate(0.000488281)"/>
      </clipPath>
      </defs>
      </svg>

      <h6 className={`${mont.className} lg:text-[14px] lg:font-bold`}>
      michelle.rivera@example.com
      </h6>
      </div>

      </div>
      {/* center section */}

      <div className="hidden lg:flex">

        <h6 className={`${mont.className} lg:text-[14px] lg:font-bold`}>
        Follow Us  and get a chance to win 80% off
        </h6>
    
      </div>

      {/* follow us section */}

      <div className="hidden lg:flex lg:gap-[10px] lg:mr-[2.5vw] ">
        <h6 className={`${mont.className} lg:text-[14px] lg:font-bold`}>
        Follow Us  :
        </h6>

        {/* icons div */}
         
        <div className="lg:flex lg:items-center lg:gap-[10px]">
          
        {/* insta icon */}

        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0C5.829 0 5.556 0.01 4.703 0.048C3.85 0.088 3.269 0.222 2.76 0.42C2.22609 0.620819 1.74249 0.935826 1.343 1.343C0.936076 1.7427 0.621107 2.22624 0.42 2.76C0.222 3.268 0.087 3.85 0.048 4.7C0.01 5.555 0 5.827 0 8.001C0 10.173 0.01 10.445 0.048 11.298C0.088 12.15 0.222 12.731 0.42 13.24C0.625 13.766 0.898 14.212 1.343 14.657C1.787 15.102 2.233 15.376 2.759 15.58C3.269 15.778 3.849 15.913 4.701 15.952C5.555 15.99 5.827 16 8 16C10.173 16 10.444 15.99 11.298 15.952C12.149 15.912 12.732 15.778 13.241 15.58C13.7746 15.3791 14.2578 15.0641 14.657 14.657C15.102 14.212 15.375 13.766 15.58 13.24C15.777 12.731 15.912 12.15 15.952 11.298C15.99 10.445 16 10.173 16 8C16 5.827 15.99 5.555 15.952 4.701C15.912 3.85 15.777 3.268 15.58 2.76C15.3789 2.22623 15.0639 1.74268 14.657 1.343C14.2576 0.935676 13.774 0.620645 13.24 0.42C12.73 0.222 12.148 0.087 11.297 0.048C10.443 0.01 10.172 0 7.998 0H8.001H8ZM7.283 1.442H8.001C10.137 1.442 10.39 1.449 11.233 1.488C12.013 1.523 12.437 1.654 12.719 1.763C13.092 1.908 13.359 2.082 13.639 2.362C13.919 2.642 14.092 2.908 14.237 3.282C14.347 3.563 14.477 3.987 14.512 4.767C14.551 5.61 14.559 5.863 14.559 7.998C14.559 10.133 14.551 10.387 14.512 11.23C14.477 12.01 14.346 12.433 14.237 12.715C14.1087 13.0624 13.904 13.3764 13.638 13.634C13.358 13.914 13.092 14.087 12.718 14.232C12.438 14.342 12.014 14.472 11.233 14.508C10.39 14.546 10.137 14.555 8.001 14.555C5.865 14.555 5.611 14.546 4.768 14.508C3.988 14.472 3.565 14.342 3.283 14.232C2.9355 14.1039 2.62113 13.8996 2.363 13.634C2.09675 13.376 1.89172 13.0617 1.763 12.714C1.654 12.433 1.523 12.009 1.488 11.229C1.45 10.386 1.442 10.133 1.442 7.996C1.442 5.86 1.45 5.608 1.488 4.765C1.524 3.985 1.654 3.561 1.764 3.279C1.909 2.906 2.083 2.639 2.363 2.359C2.643 2.079 2.909 1.906 3.283 1.761C3.565 1.651 3.988 1.521 4.768 1.485C5.506 1.451 5.792 1.441 7.283 1.44V1.442ZM12.271 2.77C12.1449 2.77 12.0201 2.79483 11.9036 2.84308C11.7872 2.89132 11.6813 2.96203 11.5922 3.05118C11.503 3.14032 11.4323 3.24615 11.3841 3.36262C11.3358 3.4791 11.311 3.60393 11.311 3.73C11.311 3.85607 11.3358 3.9809 11.3841 4.09738C11.4323 4.21385 11.503 4.31968 11.5922 4.40882C11.6813 4.49797 11.7872 4.56868 11.9036 4.61692C12.0201 4.66517 12.1449 4.69 12.271 4.69C12.5256 4.69 12.7698 4.58886 12.9498 4.40882C13.1299 4.22879 13.231 3.98461 13.231 3.73C13.231 3.47539 13.1299 3.23121 12.9498 3.05118C12.7698 2.87114 12.5256 2.77 12.271 2.77ZM8.001 3.892C7.45607 3.8835 6.91489 3.98349 6.40898 4.18614C5.90306 4.3888 5.44251 4.69007 5.05415 5.07242C4.66579 5.45478 4.35736 5.91057 4.14684 6.41326C3.93632 6.91595 3.8279 7.4555 3.8279 8.0005C3.8279 8.5455 3.93632 9.08505 4.14684 9.58774C4.35736 10.0904 4.66579 10.5462 5.05415 10.9286C5.44251 11.3109 5.90306 11.6122 6.40898 11.8149C6.91489 12.0175 7.45607 12.1175 8.001 12.109C9.07954 12.0922 10.1082 11.6519 10.865 10.8833C11.6217 10.1146 12.0459 9.07917 12.0459 8.0005C12.0459 6.92183 11.6217 5.88641 10.865 5.11775C10.1082 4.34909 9.07954 3.90883 8.001 3.892ZM8.001 5.333C8.70833 5.333 9.38669 5.61399 9.88685 6.11415C10.387 6.61431 10.668 7.29267 10.668 8C10.668 8.70733 10.387 9.38569 9.88685 9.88585C9.38669 10.386 8.70833 10.667 8.001 10.667C7.29367 10.667 6.61531 10.386 6.11515 9.88585C5.61499 9.38569 5.334 8.70733 5.334 8C5.334 7.29267 5.61499 6.61431 6.11515 6.11415C6.61531 5.61399 7.29367 5.333 8.001 5.333Z" fill="white"/>
        </svg>

        {/* youtube icon */}

        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_4948)">
        <path d="M9.051 1.99902H9.14C9.962 2.00202 14.127 2.03202 15.25 2.33402C15.5895 2.42619 15.8989 2.60585 16.1472 2.85503C16.3955 3.10422 16.574 3.41421 16.665 3.75402C16.766 4.13402 16.837 4.63702 16.885 5.15602L16.895 5.26002L16.917 5.52002L16.925 5.62402C16.99 6.53802 16.998 7.39402 16.999 7.58102V7.65602C16.998 7.85002 16.989 8.76402 16.917 9.71602L16.909 9.82102L16.9 9.92502C16.85 10.497 16.776 11.065 16.665 11.483C16.5743 11.823 16.3958 12.1331 16.1475 12.3823C15.8991 12.6316 15.5896 12.8111 15.25 12.903C14.09 13.215 9.681 13.237 9.07 13.238H8.928C8.619 13.238 7.341 13.232 6.001 13.186L5.831 13.18L5.744 13.176L5.573 13.169L5.402 13.162C4.292 13.113 3.235 13.034 2.748 12.902C2.40849 12.8102 2.09907 12.6308 1.85072 12.3818C1.60238 12.1327 1.42385 11.8228 1.333 11.483C1.222 11.066 1.148 10.497 1.098 9.92502L1.09 9.82002L1.082 9.71602C1.03265 9.03842 1.0053 8.3594 1 7.68002L1 7.55702C1.002 7.34202 1.01 6.59902 1.064 5.77902L1.071 5.67602L1.074 5.62402L1.082 5.52002L1.104 5.26002L1.114 5.15602C1.162 4.63702 1.233 4.13302 1.334 3.75402C1.42469 3.41407 1.60316 3.10393 1.85151 2.85471C2.09986 2.60548 2.40937 2.42592 2.749 2.33402C3.236 2.20402 4.293 2.12402 5.403 2.07402L5.573 2.06702L5.745 2.06102L5.831 2.05802L6.002 2.05102C6.95371 2.0204 7.90581 2.0034 8.858 2.00002H9.051V1.99902ZM7.4 5.20902V10.027L11.557 7.61902L7.4 5.20902Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_4948">
        <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
        </clipPath>
        </defs>
        </svg>

        {/* facebook icon */}

        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_4951)">
        <path d="M16.002 8.05C16.002 3.604 12.42 0 8.002 0C3.582 0.001 0 3.604 0 8.051C0 12.068 2.926 15.398 6.75 16.002V10.377H4.72V8.051H6.752V6.276C6.752 4.259 7.947 3.145 9.774 3.145C10.65 3.145 11.565 3.302 11.565 3.302V5.282H10.556C9.563 5.282 9.253 5.903 9.253 6.54V8.05H11.471L11.117 10.376H9.252V16.001C13.076 15.397 16.002 12.067 16.002 8.05Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_4951">
        <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
        </clipPath>
        </defs>
        </svg>

        {/* twitter icon */}

        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_4954)">
        <path d="M5.026 14.0007C11.064 14.0007 14.367 8.99769 14.367 4.66669C14.367 4.52669 14.367 4.38469 14.361 4.24469C15.0041 3.77918 15.5591 3.20284 16 2.54269C15.3993 2.80754 14.7628 2.9821 14.111 3.06069C14.7975 2.65033 15.3117 2.00466 15.558 1.24369C14.913 1.62582 14.207 1.89407 13.471 2.03669C12.9762 1.50972 12.3214 1.16061 11.6081 1.04345C10.8948 0.92629 10.1627 1.04761 9.52534 1.38863C8.88796 1.72965 8.38081 2.27132 8.08245 2.92975C7.78409 3.58818 7.71118 4.32663 7.875 5.03069C6.56974 4.96524 5.29282 4.62616 4.12704 4.03544C2.96127 3.44471 1.93268 2.61554 1.108 1.60169C0.68934 2.32478 0.561574 3.18009 0.750646 3.99396C0.939718 4.80782 1.43145 5.51922 2.126 5.98369C1.60554 5.96601 1.09652 5.82625 0.64 5.57569V5.62069C0.640897 6.37817 0.903307 7.11211 1.38287 7.69845C1.86244 8.28479 2.52975 8.68757 3.272 8.83869C2.99026 8.91631 2.69923 8.955 2.407 8.95369C2.20098 8.95432 1.99538 8.93523 1.793 8.89669C2.00279 9.54875 2.41127 10.1189 2.96125 10.5272C3.51122 10.9355 4.17513 11.1615 4.86 11.1737C3.69656 12.0875 2.2594 12.5831 0.78 12.5807C0.519321 12.5818 0.258823 12.5668 0 12.5357C1.50151 13.493 3.2453 14.0012 5.026 14.0007Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_4954">
        <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
        </clipPath>
        </defs>
        </svg>


        </div>
      </div>































    </div>
  </>
   
 )
 }



