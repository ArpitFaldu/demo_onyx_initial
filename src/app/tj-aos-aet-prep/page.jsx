"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Users, BookOpen } from "lucide-react"
import { ComingSoonFeature } from "@/components/ui/coming-soon-feature"

export default function TestPrepPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Matching About Us Design */}
      <section className="relative pb-4 h-[500px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/6.jpg")',
            filter: "blur(2px)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto mt-22">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-yellow-500/20 text-yellow-400 shadow-md mb-4 font-semibold px-3 py-1 rounded-full text-sm">
              Elite Academy Preparation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              TJ & Academy <span className="text-yellow-400">Prep</span>
            </h1>
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed max-w-4xl">
              Comprehensive preparation for 8th graders aspiring for Academy of Science, Academy of Engineering &
              Technology, and TJHSST admission
            </p>
            <div className="flex flex-row gap-3 sm:gap-4">
              <Link
                href="/contact-us"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105 rounded-md inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <ComingSoonFeature>Start Your Journey</ComingSoonFeature>
              </Link>
              <Link
                href="/about"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105 rounded-md inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-4">
        <p className="text-sm text-gray-600">Home &gt; Test Prep</p>
      </div>

      {/* Success Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Proven <span className="text-blue-800">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                number: "50%+",
                label: "Success Rate",
                desc: "Year-long students admitted to elite academies",
              },
              {
                icon: Users,
                number: "1:6",
                label: "Class Ratio",
                desc: "Maximum students per class for personalized attention",
              },
              {
                icon: BookOpen,
                number: "4",
                label: "Phases",
                desc: "Comprehensive curriculum from 7th grade to admission",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02]"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yellow-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                    <stat.icon className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-2 text-gray-800">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AOS/AET Prep */}
            <motion.div
              {...fadeIn}
              className="bg-blue-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Image
                    src="/7.jpg"
                    alt="Students in classroom"
                    width={900}
                    height={450}
                    className="rounded transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 w-120 h-90 shadow-sm hover:shadow-md"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Academy Programs (AOS/AET) Prep</h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Our AOS/AET Prep Program begins in 7th grade to prepare students for entrance exams in October/November
                of 8th grade. We focus on enhancing problem-solving skills and reading/writing abilities that are
                critical for success in these competitive programs.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Starts in 7th grade for comprehensive preparation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Focuses on foundational problem-solving skills</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">
                    Prepares for Academy of Science and Academy of Engineering & Technology
                  </p>
                </div>
              </div>
            </motion.div>

            {/* TJHSST Prep */}
            <motion.div
              {...fadeIn}
              className="bg-yellow-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Image
                    src="/8.jpg"
                    alt="Students working on computers"
                    width={900}
                    height={450}
                    className="rounded transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 w-120 h-90 shadow-sm hover:shadow-md"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Thomas Jefferson High School (TJHSST) Prep</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our TJ Prep Program includes all AOS/AET preparation plus an exclusive Phase 4 focusing on TJ-specific
                components like the Student Information Sheet (SIS) and Problem-Solving Essay.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mt-1" />
                  <p className="text-gray-700">Includes all 3 phases of AOS/AET prep plus Phase 4</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mt-1" />
                  <p className="text-gray-700">TJ-specific SIS and Problem-Solving Essay preparation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mt-1" />
                  <p className="text-gray-700">Assessment in February of 8th grade</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phases of Preparation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Four Phases of <span className="text-blue-800">Preparation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive program spans from September of 7th grade to admission, with structured phases building
              essential skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phase 1 */}
            <motion.div
              {...fadeIn}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                  1
                </div>
                <h3 className="text-xl font-bold text-blue-800">Foundational Skills</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">September - February</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Building strong foundations in algebra and English with comprehensive instruction in grammar, writing
                styles, and problem-solving techniques.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">Advanced algebra concepts and functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">Grammar rules and writing styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">Reading comprehension strategies</span>
                </li>
              </ul>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              {...fadeIn}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                  2
                </div>
                <h3 className="text-xl font-bold text-blue-800">Advanced Problem Solving</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">March - August</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Focus on advanced skills, arithmetic, out-of-the-box thinking, and STEM-focused preparation with
                introduction to TJ-specific components.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">Critical thinking and logical reasoning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">STEM thinking skills development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">Introduction to SIS and Problem-Solving Essays</span>
                </li>
              </ul>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              {...fadeIn}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                  3
                </div>
                <h3 className="text-xl font-bold text-blue-800">Mock Testing & Reviews</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">September - November</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Rigorous mock testing and targeted revisions to prepare for real test environments with focus on AOS/AET
                exams.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">6-8 mock tests replicating exam format</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">Time management and test-taking strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">Detailed feedback and weakness analysis</span>
                </li>
              </ul>
            </motion.div>

            {/* Phase 4 */}
            <motion.div
              {...fadeIn}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] relative"
            >
              <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg shadow-md">
                TJ ONLY
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                  4
                </div>
                <h3 className="text-xl font-bold text-blue-800">TJ-Specific Preparation</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">November - January</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Exclusive to TJ aspirants, focusing on unique components of TJHSST admissions process.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">Intensive SIS short-answer practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">Problem-Solving Essay training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span className="text-gray-700">Holistic evaluation criteria alignment</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Program */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Why Choose <span className="text-blue-800">Our Program?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Proven Track Record",
                desc: "Over 50% success rate for year-long students",
              },
              {
                title: "Flexible Intakes",
                desc: "Accommodate different skill levels and schedules",
              },
              {
                title: "Comprehensive Curriculum",
                desc: "Math, English, and critical thinking skills",
              },
              {
                title: "Experienced Instructors",
                desc: "Structured approach ensuring measurable progress",
              },
              {
                title: "Lifelong Skills",
                desc: "Benefits extend beyond entrance exams",
              },
              {
                title: "Small Class Sizes",
                desc: "Personalized attention for every student",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02]"
              >
                <h4 className="text-lg font-bold mb-3 text-blue-800">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0f3963]/95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Begin Your <span className="text-yellow-400">Preparation?</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join our comprehensive prep program and give yourself the best chance of success in gaining admission to
              these prestigious programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 transform transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <ComingSoonFeature>Enroll Now</ComingSoonFeature>
              </Link>
              <Link
                href="/contact-us"
                className="bg-transparent text-white hover:bg-white hover:text-blue-900 px-8 py-3 transform transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <ComingSoonFeature>Schedule Consultation</ComingSoonFeature>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
