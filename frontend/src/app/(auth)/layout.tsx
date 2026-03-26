"use client"
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
   const user = {
    type: "patient",
    name: "satyam",
    profileImage: "/placeholder.png",
    email: "satyam@gmail.com",
  };

  const isAuthenticated = false;

  useEffect(()=>{
    if(isAuthenticated && user ){
 const redirectPath= isAuthenticated && user?.type ==='doctor'?'doctor/dashboard':'patient/dashboard';
 redirect(redirectPath);
    }
  
  },[isAuthenticated,user])

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">

      {/* LEFT SIDE */}
      <div className="
      w-full 
      lg:w-1/2 
      flex 
      items-center 
      justify-center 
      px-6 
      py-10
      sm:px-10
      lg:px-16
      xl:px-24
      bg-white
      ">

        <div className="w-full max-w-md">

          <div className="
          bg-white
          rounded-2xl
          border border-gray-100
          shadow-sm
          p-8
          sm:p-10
          ">

            {children}

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="
      hidden 
      lg:flex 
      lg:w-1/2 
      relative 
      overflow-hidden
      items-center
      justify-center
      ">

        {/* Gradient */}
        <div className="
        absolute 
        inset-0 
        bg-gradient-to-br 
        from-blue-600 
        via-indigo-600 
        to-cyan-500
        "/>

        {/* Soft lighting */}
        <div className="absolute inset-0">

          <div className="
          absolute 
          top-[15%] 
          left-[10%] 
          w-[420px] 
          h-[420px] 
          bg-white/15 
          rounded-full 
          blur-3xl
          "/>

          <div className="
          absolute 
          bottom-[10%] 
          right-[10%] 
          w-[380px] 
          h-[380px] 
          bg-cyan-300/20 
          rounded-full 
          blur-3xl
          "/>

        </div>

        {/* Content container */}
        <div className="
        relative 
        z-10 
        max-w-xl 
        px-12
        xl:px-16
        text-white
        ">

          {/* Brand */}
          <div className="
          flex 
          items-center 
          gap-4 
          mb-12
          ">

            <div className="
            w-14 
            h-14 
            rounded-2xl 
            bg-white/15
            backdrop-blur-lg
            border border-white/30
            flex 
            items-center 
            justify-center
            ">

              +
            </div>

            <h2 className="text-2xl font-semibold tracking-tight">
              MediCare+
            </h2>

          </div>

          {/* Heading */}
          <h1 className="
          text-4xl
          xl:text-5xl
          font-bold
          leading-tight
          mb-8
          ">

            Healthcare
            <br/>

            <span className="text-blue-200">
              simplified
            </span>

          </h1>

          {/* Description */}
          <p className="
          text-blue-100
          text-base
          xl:text-lg
          leading-relaxed
          mb-12
          max-w-lg
          ">

            Consult doctors, manage appointments and
            store health records securely in one
            modern healthcare platform.

          </p>

          {/* Features */}
          <div className="space-y-6">

            <Feature text="Instant doctor consultation"/>

            <Feature text="Easy appointment booking"/>

            <Feature text="Secure medical records"/>

          </div>

        </div>

      </div>

    </div>
  );
};

function Feature({text}:{text:string}){

return(

<div className="
flex 
items-center 
gap-4
text-blue-100
">

<div className="
w-6 
h-6 
rounded-md 
bg-white/20
flex 
items-center 
justify-center
text-sm
">

✓

</div>

<p className="text-sm xl:text-base">
{text}
</p>

</div>

)

}

export default Layout;