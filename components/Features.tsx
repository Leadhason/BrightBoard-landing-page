'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, BarChart, MessageSquare, Shield } from 'lucide-react'
import { Button } from './ui/button'

const features = [
  {
    icon: Book,
    title: "Smart Curriculum Management",
    description: "AI-powered curriculum planning and real-time progress tracking across all subjects and grades.",
    color: "bg-[#FF5C35]"
  },
  {
    icon: BarChart,
    title: "Advanced Analytics Dashboard",
    description: "Real-time performance metrics and predictive analytics for data-driven decision making.",
    color: "bg-[#FF5C35]"
  },
  {
    icon: MessageSquare,
    title: "Unified Communication Hub",
    description: "Seamless multi-channel communication platform connecting teachers, students, and parents.",
    color: "bg-[#FF5C35]"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "State-of-the-art encryption and compliance measures to protect sensitive educational data.",
    color: "bg-[#FF5C35]"
  }
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-16 px-10">
      <div className="text-center container mx-auto px-4">
      <h4 className="text-pink-500 font-medium mb-4 text-center">Features</h4>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Powerful features for modern education
        </h2>
        <p className="text-normal text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Experience the future of education administration with our cutting-edge features designed to streamline operations and enhance learning outcomes.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  activeFeature === index 
                    ? 'bg-gray-50 shadow-lg border border-gray-100' 
                    : 'hover:bg-gray-50 hover:shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4 p-3">
                  <div className="p-3 rounded-lg bg-[#FF5C35]/10">
                    {React.createElement(feature.icon, { 
                      className: "h-6 w-6 text-[#FF5C35]" 
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md"
            >
              <div className="flex p-8 -mt-10 rounded-2xl bg-white items-center shadow-xl h-[500px] border">
                <div className="p-2 justify-center">
                  <div className="p-4 rounded-xl bg-[#FF5C35]/10 inline-block mb-6">
                    {React.createElement(features[activeFeature].icon, { 
                      className: "h-8 w-8 text-[#FF5C35]" 
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{features[activeFeature].title}</h3>
                  <p className="text-normal text-gray-600 mb-6">{features[activeFeature].description}</p>
                  <Button className="bg-[#0F1729] text-white px-6 py-2 rounded-lg hover:bg-[#0F1729]/90 transition-colors">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

