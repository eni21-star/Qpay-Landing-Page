import React, { useEffect } from 'react';

const Countdown = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {

      document.body.removeChild(script);
    };
  }, []);

  const disableOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="bg-customOrange md:min-h-96 md:flex md:flex-col md:justify-center md:items-center relative bg-[url('/src/assets/frame43.png')] bg-no-repeat pb-10 bg-cover bg-center">
      {/* <h1 className="text-white md:text-3xl text-xl text-center font-bold mb-2 md:mt-7 pt-8">We are working to bring my thrift as soon as possible</h1> */}
      {/* <p className="text-white text-xs mb-">While you wait, join the waitlist. My Thrift will launch in:</p> */}
      
      {/* Countdown Timer */}
      <div className="flex md:w-8/12 text-2xl translate-y-5 justify-center ">
        <a href="https://logwork.com/countdown-gpmd" 
           className="countdown-timer "
           data-timezone="Africa/Lagos" 
           data-textcolor="#ffffff"
           data-date="2027-04-01 00:00" 
           data-background="#f99575"
           data-digitscolor="#ffffff"
           data-unitscolor="#fafafa"
           onClick={disableOnClick} >
          Join the waitlist. QPay will launch in:
        </a>
      </div>
    </div>
  );
};

export default Countdown;
