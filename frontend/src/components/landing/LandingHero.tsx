import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { healthcareCategories } from "@/lib/constant";
import { useRouter } from "next/navigation";

const LandingHero = () => {
  const isAuthenticated=false;
  const router= useRouter();
  const handleBookConsultation=()=>{
    if(isAuthenticated){
      router.push('doctor-list')
    }else{
      router.push('/signup/patient')
    }
  }
  const handleCategoryClick = (categoryTitle: string) => {
if(isAuthenticated){
  router.push(`doctor-list?category=${categoryTitle}`)
}else{
  router.push('/signup/patient')
}
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-20 px-5 sm:px-8 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      {/* background */}

      <div className="absolute top-[-150px] left-[-150px] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* LEFT */}

        <div className="text-center lg:text-left">
          <h1
            className="font-bold text-gray-900 leading-tight mb-6

text-[34px]
sm:text-[44px]
md:text-[54px]
lg:text-[64px]"
          >
            Modern healthcare
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              made simple
            </span>
          </h1>

          <p
            className="text-gray-600 mb-10 leading-relaxed

text-[16px]
sm:text-[17px]
md:text-[18px]

max-w-xl
mx-auto
lg:mx-0"
          >
            Connect with verified doctors, schedule visits, and manage your
            health journey digitally.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-12">
            <Button onClick={handleBookConsultation}
              size="lg"
              className="h-[52px] sm:h-[56px] lg:h-[60px]

px-8 sm:px-10

text-[15px] sm:text-[16px] lg:text-lg

font-semibold

bg-gradient-to-r from-blue-600 to-indigo-600

hover:from-blue-700 hover:to-indigo-700

shadow-lg hover:shadow-xl

rounded-xl

transition"
            >
              Book Appointment
            </Button>

            <Link href="/login/doctor">
              <Button
                size="lg"
                variant="outline"
                className="h-[52px] sm:h-[56px] lg:h-[60px]

px-8 sm:px-10

text-[15px] sm:text-[16px] lg:text-lg

font-semibold

border-2 border-gray-300

hover:border-blue-500

hover:bg-blue-50

rounded-xl

transition"
              >
                Doctor Login
              </Button>
            </Link>
          </div>

          {/* CATEGORIES */}

          <div
            className="grid

grid-cols-3
sm:grid-cols-4
md:grid-cols-5
lg:grid-cols-5

gap-3 sm:gap-4 lg:gap-5

max-w-[520px]

mx-auto
lg:mx-0"
          >
            {healthcareCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.title)}
                className="group

aspect-square

flex flex-col items-center justify-center

bg-white/70 backdrop-blur-lg

border border-white/60

rounded-xl sm:rounded-2xl

shadow-sm hover:shadow-lg

hover:-translate-y-1

transition duration-300"
              >
                <div
                  className={`

w-9 h-9
sm:w-10 sm:h-10
lg:w-11 lg:h-11

${category.color}

rounded-lg sm:rounded-xl

flex items-center justify-center

mb-2

shadow

group-hover:scale-110

transition

`}
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={category.icon} />
                  </svg>
                </div>

                <span className="text-[10px] sm:text-[11px] font-semibold text-gray-700 text-center px-1">
                  {category.title}
                </span>
              </button>
            ))}
          </div>

          {/* TRUST */}

          <div
            className="flex flex-wrap justify-center lg:justify-start

gap-6 sm:gap-8

mt-12

text-gray-600

text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />

              <span>500+ Doctors</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />

              <span>24/7 Care</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />

              <span>50K+ Patients</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative hidden lg:flex justify-center">
          <div className="relative w-full max-w-[480px]">
            <div className="bg-white p-5 lg:p-7 rounded-3xl shadow-2xl border">
              <img
                src="/doctor.png"
                alt="doctor"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            {/* floating cards */}

            <div className="absolute -left-10 xl:-left-16 top-10 bg-white p-4 rounded-xl shadow-lg border text-sm">
              <p className="text-gray-500">Appointments</p>

              <p className="font-bold text-blue-600">1,284</p>
            </div>

            <div className="absolute -right-10 xl:-right-14 bottom-10 bg-white p-4 rounded-xl shadow-lg border text-sm">
              <p className="text-gray-500">Rating</p>

              <p className="font-bold text-indigo-600">4.9 ★</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
