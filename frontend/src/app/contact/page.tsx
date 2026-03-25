"use client";

import React from "react";
import {
Mail,
Phone,
MapPin,
Send,
MessageCircle,
Calendar
} from "lucide-react";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Link from "next/link";

const ContactPage = () => {

return (

<section className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white py-24">
<Header/>
<div className="max-w-7xl mx-auto px-6">

{/* HEADER */}

<div className="text-center mb-20">

<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">

Contact
<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
 {" "}MediCare+
</span>

</h1>

<p className="text-gray-600 text-lg max-w-2xl mx-auto">
Questions about doctors, appointments or billing? Our team is ready to help you.
</p>

</div>

{/* GRID */}

<div className="grid lg:grid-cols-2 gap-16">

{/* FORM */}

<div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">

<h2 className="text-2xl font-semibold mb-8 text-gray-900">
Send Message
</h2>

<form className="space-y-6">

<div className="grid md:grid-cols-2 gap-5">

<input
placeholder="Full name"

className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
/>

<input
placeholder="Email address"

className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
/>

</div>

<input
placeholder="Subject"

className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
/>

<textarea

rows={6}

placeholder="Write your message..."

className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
/>

<button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:opacity-90 transition">

Send Message

<Send size={18}/>

</button>

</form>

{/* QUICK HELP */}

<div className="mt-10 pt-8 border-t border-gray-200">

<p className="text-gray-600 mb-4">
Need faster help?
</p>

<div className="flex gap-4">

<button className="flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-xl hover:bg-gray-50 transition">

<MessageCircle size={18}/>
Live Chat

</button>

<button className="flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-xl hover:bg-gray-50 transition">

<Calendar size={18}/>
Book Call

</button>

</div>

</div>

</div>

{/* CONTACT INFO */}

<div className="space-y-8">

{[
{
icon:Mail,
title:"Email Support",
value:"support@medicareplus.com"
},
{
icon:Phone,
title:"Phone",
value:"+1 (800) 123-4567"
},
{
icon:MapPin,
title:"Office",
value:"New York, USA"
}

].map((item,index)=>{

const Icon=item.icon;

return(

<div

key={index}

className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
>

<div className="flex items-center gap-5">

<div className="p-4 bg-indigo-100 rounded-xl">

<Icon className="text-indigo-600"/>

</div>

<div>

<h3 className="font-semibold text-gray-900 mb-1">
{item.title}
</h3>

<p className="text-gray-600">
{item.value}
</p>

</div>

</div>

</div>

);

})}

{/* MAP */}

<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">

<h3 className="font-semibold text-gray-900 mb-4">
Our Location
</h3>

<div className="w-full h-64 rounded-xl overflow-hidden">

<iframe

className="w-full h-full border-0"

src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"

loading="lazy"

/>

</div>

</div>

{/* CTA */}

<div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 rounded-3xl shadow-xl">

<h3 className="text-2xl font-bold mb-4">
Book a consultation today
</h3>

<p className="opacity-90 mb-6">
Connect with certified doctors within minutes.
</p>

<Link  href={'/'} className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition">

Find Doctors

</Link>

</div>

</div>

</div>

</div>
<Footer/>
</section>

);

};

export default ContactPage;