"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { ComingSoonFeature } from "@/components/ui/coming-soon-feature"

export default function SATvsACTPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Matching About Us Design */}
      <section className="relative pb-4 h-[400px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/methodology-3.png")',
            filter: "blur(2px)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto mt-22">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-yellow-500/20 text-yellow-400 shadow-md mb-4 mt-4 font-semibold px-3 py-1 rounded-full text-sm">
              Choose Your Path
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              SAT <span className="text-yellow-400">vs</span> ACT
            </h1>
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed max-w-4xl">
              Understanding the key differences to make the right choice for your college admissions journey
            </p>
            <div className="flex flex-row gap-3 sm:gap-4">
              <Link
                href="/sign-up"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105 rounded-md inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <ComingSoonFeature>GET STARTED</ComingSoonFeature>
              </Link>
              <Link
                href="/contact-us"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105 rounded-md inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-4">
        <p className="text-sm text-gray-600">Home &gt; SAT vs ACT</p>
      </div>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-1 rounded-xl shadow-lg">
                <Image
                  src="/3.png"
                  alt="Map showing SAT vs ACT popularity by state"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg transform transition-all duration-300 hover:scale-105 shadow-md"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Based on 2023 data: Blue = SAT, Red = ACT Preference
              </p>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Understanding the SAT & ACT in 2025</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As both tests transition to digital formats, your choice between SAT and ACT can significantly impact
                your college application strategy. While both are widely accepted, they differ in format, content, and
                difficulty.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Similarities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Digital Formats:</strong> Both available digitally by Spring 2025
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>College Acceptance:</strong> Equally recognized by U.S. colleges
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Content Focus:</strong> Both test reading, grammar, and math
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>No Guessing Penalty:</strong> Answer all questions on both tests
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Side-by-Side <span className="text-blue-800">Comparison</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                <thead>
                  <tr className="bg-[#0f3963]">
                    <th className="px-4 py-3 text-left text-white shadow-sm">Feature</th>
                    <th className="px-4 py-3 text-left text-white shadow-sm">Digital SAT</th>
                    <th className="px-4 py-3 text-left text-white shadow-sm">Digital ACT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-bold text-gray-800 shadow-sm">Sections</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">Reading & Writing, Math</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">English, Math, Reading, Optional Science</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-bold text-gray-800 shadow-sm">Test Length</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">~2 hours 14 minutes</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">~2 hours 5 minutes (core sections)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-bold text-gray-800 shadow-sm">Science Section</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">Integrated into Reading/Math</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">Separate Science section (now optional)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-bold text-gray-800 shadow-sm">Math Calculator</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">Built-in Desmos calculator</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">Built-in calculator for Math section</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-bold text-gray-800 shadow-sm">Scoring</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">400-1600</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">1-36 (composite score)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-bold text-gray-800 shadow-sm">Timing Per Question</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">More time per question</td>
                    <td className="px-4 py-3 text-gray-700 shadow-sm">Faster-paced</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Should Take Which Test */}
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
              Which Test is <span className="text-blue-800">Right for You?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SAT Section */}
            <motion.div
              {...fadeIn}
              className="bg-white p-8 rounded-xl shadow-xl relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02]"
            >
              <div className="absolute top-0 right-0 w-32 h-32">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 -rotate-45 translate-x-16 -translate-y-16"></div>
                <div className="absolute top-3 right-3 text-xs font-bold text-black rotate-45">SAT</div>
              </div>

            <div className="flex flex-col md:flex-row justify-center items-start gap-6 mb-6 px-4">
              <div className="bg-yellow-100 rounded-lg shadow-md p-3 w-full max-w-sm">
                <div className="w-full h-80 overflow-hidden rounded">
                <Image
                    src="/4.webp"
                    alt="SAT test"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-105"
                />
                </div>
                </div>
                </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose the SAT if you:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">
                    Prefer <strong>more time per question</strong> to analyze and think critically
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">
                    Are <strong>strong in algebra</strong> and problem-solving
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">
                    Do not want to worry about a <strong>Science</strong> section
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">
                    Are applying to <strong>Ivy League</strong> or East/West Coast schools
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* ACT Section */}
            <motion.div
              {...fadeIn}
              className="bg-white p-8 rounded-xl shadow-xl relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02]"
            >
              <div className="absolute top-0 right-0 w-32 h-32">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 -rotate-45 translate-x-16 -translate-y-16"></div>
                <div className="absolute top-3 right-3 text-xs font-bold text-white rotate-45">ACT</div>
              </div>

             <div className="flex flex-col md:flex-row justify-center items-start gap-6 mb-6 px-4">
                <div className="bg-yellow-100 rounded-lg shadow-md p-3 w-full max-w-sm">
                <div className="w-full h-80 overflow-hidden rounded">
                <Image
                    src="/5.webp"
                    alt="ACT test"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-110"
                />
                </div>
            </div>
             </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose the ACT if you:</h3>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    Can <strong>work quickly under time pressure</strong> and answer more questions rapidly
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">Prefer straightforward questions over complex reasoning-based ones</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    Have strong <strong>data analysis and scientific reasoning skills</strong>
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    Are considering <strong>Midwestern or Southern universities</strong>
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Tests Matter */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Why These Tests Matter</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Stand Out</p>
                    <p className="text-gray-700">High scores impress colleges and boost merit aid chances</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Prove Readiness</p>
                    <p className="text-gray-700">Highlight your critical thinking and problem-solving skills</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mt-1 shadow-sm">
                    <CheckCircle className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Your Edge</p>
                    <p className="text-gray-700">
                      Even in test-optional environments, strong scores can differentiate your application
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-800">The Digital Transition</h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Both tests are evolving to meet modern educational needs. The SAT is now fully digital, while the ACT
                will offer digital options starting Spring 2025.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]">
                  <p className="font-bold mb-1 text-gray-800">Digital SAT (Already Available)</p>
                  <p className="text-gray-700 text-sm">
                    Fully online, adaptive format with more time per question (1 min 11 sec) and integrated calculator
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]">
                  <p className="font-bold mb-1 text-gray-800">Digital ACT (Coming 2025)</p>
                  <p className="text-gray-700 text-sm">
                    Paper or digital options with faster pace (42 sec/question in English) and optional Science section
                  </p>
                </div>
              </div>
            </motion.div>
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
              Not Sure Which Test to <span className="text-yellow-400">Take?</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Our diagnostic approach pinpoints your strengths. We craft custom plans for both tests to help you decide
              which format suits you best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 transform transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <ComingSoonFeature>Take a Practice Test</ComingSoonFeature>
              </Link>
              <Link
                href="/contact-us"
                className="bg-transparent text-white hover:bg-white hover:text-blue-900 px-8 py-3 transform transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <ComingSoonFeature>Schedule a Consultation</ComingSoonFeature>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
