"use client";

import React, { useState } from "react";
import { faqs } from "@/lib/constant";
import { ChevronDown, Search, HelpCircle, Plus, Minus } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const categories = ["All", "Pricing", "Insurance", "Doctors", "General"];

const FAQSection = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openAll = () => {
    setActiveIndex(-1);
  };

  const closeAll = () => {
    setActiveIndex(null);
  };

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white">
      {/* background glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-indigo-200 blur-[120px] opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* HEADER */}

        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <HelpCircle className="w-9 h-9 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything about consultations, pricing, doctors and platform usage.
          </p>
        </div>

        {/* SEARCH */}

        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-5 top-4 text-gray-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your question..."
              className="w-full pl-14 pr-6 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>
        </div>

        {/* CONTROLS */}

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={openAll}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            <Plus size={18} />
            Open All
          </button>

          <button
            onClick={closeAll}
            className="flex items-center gap-2 px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            <Minus size={18} />
            Close All
          </button>
        </div>

        {/* FAQ */}

        <div className="space-y-6">
          {filteredFAQs.map((faq, index) => {
            const isOpen = activeIndex === index || activeIndex === -1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 hover:from-indigo-400 hover:via-purple-400 hover:to-indigo-400 transition"
              >
                <div className="bg-white rounded-2xl">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-7 text-left"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                      {faq.question}
                    </h3>

                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown className="text-indigo-600" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-7 pb-7 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SUPPORT CARD */}

        
      </div>
    </section>
  );
};

export default FAQSection;
