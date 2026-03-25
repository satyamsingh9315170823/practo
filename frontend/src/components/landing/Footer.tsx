"use client";

import React from "react";
import Link from "next/link";
import { footerSections } from "@/lib/constant";

import {
Stethoscope,
Twitter,
Linkedin,
Github,
Mail,
ArrowRight
} from "lucide-react";

const Footer = () => {

return (

<footer className="relative bg-gradient-to-b from-white via-indigo-50/30 to-white border-t border-gray-200 overflow-hidden">

{/* background glow */}

<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[300px] bg-indigo-200 blur-[120px] opacity-30"/>

<div className="relative max-w-7xl mx-auto px-6 py-20">

{/* TOP CTA */}

<div className="mb-20">

<div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 md:p-14 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">

<div>

<h3 className="text-2xl md:text-3xl font-bold mb-3">
Start your healthcare journey today
</h3>

<p className="opacity-90 max-w-xl">
Book appointments, consult doctors and manage your health digitally.
</p>

</div>

<button className="flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition shadow">

Get Started

<ArrowRight size={18}/>

</button>

</div>

</div>

{/* MAIN GRID */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

{/* BRAND */}

<div className="lg:col-span-2">

<div className="flex items-center gap-3 mb-6">

<div className="w-11 h-11 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow">

<Stethoscope className="text-white"/>

</div>

<h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent">
MediCare+
</h3>

</div>

<p className="text-gray-600 max-w-md leading-relaxed mb-8">

MediCare+ helps patients connect with certified doctors,
book consultations instantly and manage healthcare securely.

</p>

{/* Newsletter */}

<div className="mb-8">

<p className="font-semibold text-gray-900 mb-3">
Subscribe to updates
</p>

<div className="flex">

<input
placeholder="Enter your email"

className="w-full px-4 py-3 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
/>

<button className="bg-indigo-600 text-white px-6 rounded-r-xl hover:bg-indigo-700 transition">

Subscribe

</button>

</div>

</div>

{/* Social */}

<div className="flex gap-4">

{[
Twitter,
Linkedin,
Github,
Mail

].map((Icon,index)=>(
  
<div

key={index}

className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-md transition cursor-pointer"
>

<Icon className="w-5 h-5 text-gray-600"/>

</div>

))}

</div>

</div>

{/* LINKS */}

{footerSections.map((section,index)=>(

<div key={index}>

<h4 className="font-semibold text-gray-900 mb-6">
{section.title}
</h4>

<ul className="space-y-4">

{section.links.map((link,i)=>(

<li key={i}>

<Link

href={link.href}

className="text-gray-600 hover:text-indigo-600 hover:translate-x-1 inline-block transition duration-200"
>

{link.text}

</Link>

</li>

))}

</ul>

</div>

))}

</div>

{/* BOTTOM BAR */}

<div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-5">

<p className="text-gray-500 text-sm">

© {new Date().getFullYear()} MediCare+. All rights reserved.

</p>

<div className="flex gap-8 text-sm text-gray-500">

<Link href="/privacy" className="hover:text-indigo-600 transition">
Privacy Policy
</Link>

<Link href="/terms" className="hover:text-indigo-600 transition">
Terms
</Link>

<Link href="/contact" className="hover:text-indigo-600 transition">
Contact
</Link>

</div>

</div>

</div>

</footer>

);

};

export default Footer;