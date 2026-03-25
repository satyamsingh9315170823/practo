"use client"

import React from "react";
import { testimonials } from "@/lib/constant";
import { Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {

const duplicated = [...testimonials,...testimonials]

  return (

<section className="py-24 bg-white overflow-hidden">

<div className="max-w-7xl mx-auto px-6 lg:px-16">

{/* heading */}

<div className="text-center mb-16">

<h2 className="text-3xl md:text-5xl font-bold text-gray-900">
Loved by patients everywhere
</h2>

<p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
4.9 average rating from thousands of consultations across our platform
</p>

{/* trust score */}

<div className="flex justify-center items-center gap-3 mt-6">

<div className="flex">

{[...Array(5)].map((_,i)=>(

<Star
key={i}
className="w-5 h-5 text-yellow-400 fill-yellow-400"
/>

))}

</div>

<span className="font-semibold text-gray-800">
4.9/5
</span>

<span className="text-gray-500">
(12,000+ reviews)
</span>

</div>

</div>


{/* slider */}

<div className="relative">

<motion.div

animate={{
x:["0%","-50%"]
}}

transition={{
duration:25,
repeat:Infinity,
ease:"linear"
}}

className="flex gap-8 w-max hover:[animation-play-state:paused]"
>

{duplicated.map((item,index)=>(

<div

key={index}

className="group w-[340px] p-[1px] rounded-3xl bg-gradient-to-br from-purple-200 via-blue-200 to-purple-200"
>

<div className="h-full p-8 rounded-3xl bg-white">

{/* stars */}

<div className="flex mb-5">

{[...Array(item.rating)].map((_,i)=>(

<Star
key={i}
className="w-5 h-5 text-yellow-400 fill-yellow-400"
/>

))}

</div>


{/* text */}

<p className="text-gray-600 leading-relaxed mb-8">
"{item.text}"
</p>


{/* author */}

<div className="flex items-center gap-4">

<div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
{item.author.charAt(0)}
</div>

<div>

<div className="flex items-center gap-2">

<h4 className="font-semibold text-gray-900">
{item.author}
</h4>

<BadgeCheck className="w-4 h-4 text-blue-500"/>

</div>

<p className="text-sm text-gray-500">
{item.location}
</p>

</div>

</div>

</div>

</div>

))}

</motion.div>

</div>

</div>

</section>

  );

};

export default TestimonialsSection;