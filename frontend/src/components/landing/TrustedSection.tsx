"use client";

import React from "react";
import { trustLogos } from "@/lib/constant";
import { motion } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";

const TrustedSection = () => {

return (

<section className="relative py-24 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden">

{/* background glow */}

<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-200 opacity-30 blur-[120px]"/>

<div className="relative max-w-7xl mx-auto px-6">

{/* Header */}

<div className="text-center mb-16">

<div className="flex justify-center mb-5">

<div className="p-4 rounded-2xl bg-indigo-100">

<ShieldCheck className="w-8 h-8 text-indigo-600"/>

</div>

</div>

<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5">

Trusted by
<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
 {" "}industry leaders
</span>

</h2>

<p className="text-gray-600 max-w-2xl mx-auto">
Recognized by global media and healthcare organizations.
</p>

</div>

{/* Logo cloud */}

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

{trustLogos.map((logo,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:20}}

animate={{opacity:1,y:0}}

transition={{delay:index*.05}}

className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-200 hover:from-indigo-400 hover:via-purple-400 hover:to-indigo-400 transition duration-300"
>

<div className="bg-white rounded-2xl h-20 flex items-center justify-center shadow-sm group-hover:shadow-xl transition">

<span className="text-gray-400 font-semibold tracking-wide text-sm md:text-base group-hover:text-gray-900 transition">

{logo}

</span>

</div>

</motion.div>

))}

</div>

{/* Bottom stats */}

<div className="flex flex-wrap justify-center gap-10 mt-20 text-center">

<div>

<p className="text-3xl font-bold text-gray-900">
12K+
</p>

<p className="text-gray-500">
Patients treated
</p>

</div>

<div>

<p className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">

4.9

<Star className="w-5 h-5 text-yellow-400 fill-yellow-400"/>

</p>

<p className="text-gray-500">
Average rating
</p>

</div>

<div>

<p className="text-3xl font-bold text-gray-900">
50+
</p>

<p className="text-gray-500">
Expert doctors
</p>

</div>

</div>

</div>

</section>

);

};

export default TrustedSection;