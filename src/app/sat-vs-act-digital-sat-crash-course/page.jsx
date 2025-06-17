"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Users, BookOpen, Target } from "lucide-react"

export default function CombinedTestPrepPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  const bounceIn = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    viewport: { once: true },
    transition: {
      duration: 0.6,
      type: "spring",
      bounce: 0.4,
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pb-4 h-[500px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/sat.webp")',
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              SAT/ACT <span className="text-yellow-400">Test Prep</span>
            </h1>
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed max-w-4xl">
              Comprehensive SAT/ACT preparation programs designed to maximize your test performance and college
              admission success
            </p>
            <div className="flex flex-row gap-3 sm:gap-4">
              <Link
                href="/contact-us"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105 rounded-md inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Enroll Today
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-4">
        <p className="text-sm text-gray-600">Home &gt; SAT ACT Year Long Prep</p>
      </div>

      {/* Main SAT/ACT Year-Long Prep Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">
              Comprehensive SAT/ACT <span className="text-blue-800">Year-Long Prep</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Side - Image */}
            <motion.div
              {...bounceIn}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.15]"
            >
              <div className="relative h-[480px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all mt-14 duration-300">
                <Image src="/images/sat.webp" alt="Students studying" fill style={{ objectFit: "cover" }} />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              {...bounceIn}
              className="bg-blue-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Year-Long SAT Prep Course</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our year-long SAT prep course offers a steady, thorough approach for students who want to build skills over time. With a flexible yet structured schedule, it balances schoolwork and test prep. The curriculum intensifies in summer to maximize readiness before the official SAT.
              </p>

              <h4 className="text-xl font-bold text-gray-800 mb-4">Why Choose Our Program?</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-gray-700">
                    <strong>Structured Yet Flexible:</strong> Ideal for students seeking a medium-paced option.
                    </p>
                </div>
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-gray-700">
                    <strong>Data-Driven Performance Tracking:</strong> Monthly assessments break down learning styles
                    and focus areas.
                    </p>
                </div>
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-gray-700">
                    <strong>Proven Track Record:</strong> Designed to build confidence and help students achieve top
                    SAT/ACT scores.
                    </p>
                </div>
                </div>

              <div className="mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Enroll Today
                </button>
              </div>
            </motion.div>
          </div>

          {/* Key Benefits and Three-Phase Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Key Benefits */}
            <motion.div {...bounceIn} className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Key Benefits:</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "Balanced Learning",
                    desc: "Allows time to review all essential concepts thoroughly.",
                  },
                  {
                    title: "Extensive Practice",
                    desc: "Homework assignments reinforce learning and skill mastery.",
                  },
                  {
                    title: "Weakness Identification",
                    desc: "Pinpoint areas of improvement for targeted study.",
                  },
                  {
                    title: "Balanced Schedule",
                    desc: "Aligns with school commitments while gradually intensifying.",
                  },
                  {
                    title: "Summer Focus",
                    desc: "Increases intensity when students have more time to practice.",
                  },
                  {
                    title: "Proven Methodology",
                    desc: "Based on years of experience and extensive student feedback.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      bounce: 0.4,
                    }}
                    viewport={{ once: true }}
                    className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                  >
                    <h4 className="font-bold text-blue-800 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Three-Phase Approach */}
            <motion.div
              {...bounceIn}
              className="bg-yellow-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Three-Phase Prep Approach:</h3>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-blue-800 mb-2">1. Foundation Building:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Covers all SAT reading, writing, and math concepts</li>
                    <li>• Emphasizes commonly tested topics, faster solving methods, and key formulas</li>
                    <li>• Encourages note-taking and completion of at least one full practice book</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-blue-800 mb-2">2. Stress Testing & Weakness Identification:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Includes timed sectional and full-length practice tests</li>
                    <li>• Gradually increases test difficulty while reducing time constraints</li>
                    <li>• Helps identify specific areas that need improvement</li>
                    <li>• Encourages score tracking and weak topic analysis</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-blue-800 mb-2">3. Full Tests, Review & Strengthening:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reviews weak areas identified in Phase 2</li>
                    <li>• Provides personalized practice assignments for targeted learning</li>
                    <li>• Includes 10+ full-length practice tests and review sessions</li>
                    <li>• Utilizes data-driven analysis to optimize learning and test-taking strategies</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Phases Visual Section */}
      <section className="py-16 relative overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage: 'url("/images/plant.webp")',
            }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our unique methodology of preparing the students in three phases:
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 - Purple */}
            <motion.div
              {...bounceIn}
              className="bg-purple-600 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] min-h-[300px]"
            >
              <h3 className="text-2xl font-bold text-center mb-2">Phase 1:</h3>
              <h4 className="text-lg font-bold text-center mb-4">Complete curriculum discussion.</h4>
              <p className="leading-relaxed">
                This phase provides detailed discussion of all reading, writing concepts, and math concepts. We focus on
                the most commonly tested concepts, faster solving methods, useful formulas and tricks. We encourage
                taking notes and we solve at least one practice book.
              </p>
            </motion.div>

            {/* Phase 2 - Red */}
            <motion.div
              {...bounceIn}
              className="bg-red-600 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] min-h-[300px]"
            >
              <h3 className="text-2xl font-bold text-center mb-2">Phase 2:</h3>
              <h4 className="text-lg font-bold text-center mb-4">Stress test and identifying weaknesses.</h4>
              <p className="leading-relaxed">
                The students are given timed partial and sectional tests. As the progress moves into this course, the
                tests are gradually made harder and the time is reduced to challenge the students more. This process is
                very effective in identifying the areas of weakness. We emphasize on maintaining the records of score
                and weak topics.
              </p>
            </motion.div>

            {/* Phase 3 - Blue */}
            <motion.div
              {...bounceIn}
              className="bg-blue-600 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] min-h-[300px]"
            >
              <h3 className="text-2xl font-bold text-center mb-2">Phase 3:</h3>
              <h4 className="text-lg font-bold text-center mb-4">Full tests, review, and strengthening.</h4>
              <p className="leading-relaxed">
                We review the topics identified in Phase two and assign more personalized practices to individual
                students catering to their needs. This is followed by full tests and review sessions. Students will
                complete the full Practice proctored tests.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-8 space-y-2">
            <p className="text-white/90 italic">
              Monthly practice tests are turned into data to understand learning styles and types of questions that work
              best. Focus within classroom.
            </p>
            <p className="text-white/90 italic">Our Subject areas have been discontinued.</p>
            <p className="text-white/90 italic">
              Please schedule a meeting to understand our staff and discuss a personalized plan that suits your child's
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Program Options & Enrollment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Program Options & <span className="text-blue-800">Enrollment</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 2 Months Fast Track */}
            <motion.div
              {...bounceIn}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] border-t-4 border-blue-500"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">2 Months Fast Track</h3>
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-2">March 19th, Targeting June 25</p>
                <p className="text-sm text-gray-500">(25 sessions per week)</p>
                <p className="text-gray-600 mb-2 mt-2">April 3rd, Targeting June 25</p>
                <p className="text-sm text-gray-500">(2 sessions per week)</p>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Enroll Now
              </button>
            </motion.div>

            {/* 4 Months Unlimited */}
            <motion.div
              {...bounceIn}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] border-t-4 border-gray-400"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">4 Months Unlimited</h3>
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-2">June 17th, Targeting October 25</p>
                <p className="text-sm text-gray-500">(Summer Weekday Sessions)</p>
              </div>
              <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Enroll Now
              </button>
            </motion.div>

            {/* Year-long Program */}
            <motion.div
              {...bounceIn}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] border-t-4 border-green-500 md:col-span-2 lg:col-span-1"
            >
              <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full inline-block mb-4">
                RECOMMENDED
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-4 text-center">Year-long Program</h3>
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-2">September 7th - Targeting Fall 2025</p>
                <p className="text-sm text-gray-500">(Sept 25-May 24: 1-2 sessions per week)</p>
                <p className="text-sm text-gray-500">(June 25 to Aug 25: 2 sessions per week)</p>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Enroll Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital SAT Fast Track Course Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Digital SAT <span className="text-yellow-400">Fast Track Course</span>
            </h2>
            <h3 className="text-xl text-gray-600 mb-6">Polish Your Skills, Ace the Test</h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Get ready for the Digital SAT with Coherence Learning's new Crash Course—a 16-session program starting
              every 2 months before the SAT. Designed for students who already know the basics, this course sharpens
              your skills and boosts your test performance.
            </p>
          </motion.div>

          {/* Upper section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Side - Image */}
            <motion.div
              {...bounceIn}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.10]"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all mt-11  duration-300">
                <Image
                  src="/images/race-start.webp"
                  alt="Student preparing for SAT"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>

            {/* Right Side - What's Included & What You'll Get */}
            <div className="space-y-8">
              <motion.div
                {...bounceIn}
                className="bg-blue-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                  What's Included
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>16 Sessions, 2 Hours Each:</strong> 32 hours total
                  </p>
                  <p className="text-gray-700">
                    <strong>Sessions 1-5:</strong> Quick review of key Math and English concepts.
                  </p>
                  <p className="text-gray-700">
                    <strong>Weeks 2-8:</strong> 10 full Digital SAT practice tests, test discussions, and targeted
                    revision of missed questions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...bounceIn}
                className="bg-yellow-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-200 pb-2">
                  What You'll Get
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Test Strategies:</strong> Solve different SAT question types efficiently.
                  </p>
                  <p className="text-gray-700">
                    <strong>Technique Mastery:</strong> Use your knowledge with tricks and tools like Desmos.
                  </p>
                  <p className="text-gray-700">
                    <strong>Practice:</strong> 10 full tests with feedback to polish skills.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Middle section - Details and Other Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              {/* Who It's For */}
              <motion.div
                {...bounceIn}
                className="bg-green-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">Who It's For</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">• Students scoring 1300 or higher on the PSAT or SAT.</p>
                  <p className="text-gray-700">
                    • Not for: Beginners below 1100 aiming for 1450+. This isn't about teaching concepts from
                    scratch—it's about refining what you know.
                  </p>
                </div>
              </motion.div>

              {/* Perfect If You */}
              <motion.div
                {...bounceIn}
                className="bg-purple-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">
                  Perfect If You:
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">• Understand most SAT content but need to master the digital format.</p>
                  <p className="text-gray-700">
                    • Want to improve problem-solving, learn tricks, and use Desmos effectively.
                  </p>
                  <p className="text-gray-700">• Seek speed and accuracy under timed conditions.</p>
                </div>
              </motion.div>
            </div>

            {/* Details Section */}
            <motion.div
              {...bounceIn}
              className="bg-gray-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Details</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Start Date*:</strong> Every two Months before the SAT
                </p>
                <p className="text-gray-700">
                  <strong>Class Size:</strong> Every two Months before the SAT
                </p>
                <p className="text-gray-700">
                  <strong>Duration:</strong> 2 hour Classes (1 hour math, 1 hour English)
                </p>
                <p className="text-gray-700">
                  <strong>Schedule*:</strong> One Weeknight, One Weekend Morning)
                </p>
                <p className="text-gray-700">
                  <strong>Format:</strong> In-person/Online/Hybrid
                </p>
                <p className="text-gray-700 text-lg font-semibold">
                  <strong>Cost:</strong> $1700
                </p>
                <div className="bg-yellow-100 p-3 rounded-lg mt-4">
                  <p className="text-sm text-gray-600 italic">Early Bird Discount (Enroll Before May 10th): $100</p>
                  <p className="text-sm text-gray-600 italic">
                    * Specific to the cohort. Multiple classes may run parallel
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Why Coherence Learning and Score Improvement */}
            <div className="space-y-8">
              <motion.div
                {...bounceIn}
                className="bg-blue-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                  Why Coherence Learning?
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">• Expert tutors focused on the Digital SAT.</p>
                  <p className="text-gray-700">• Intensive, tailored prep for high-achievers.</p>
                </div>
              </motion.div>

              <motion.div
                {...bounceIn}
                className="bg-green-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
                  Score Improvement
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">• Gains are subjective—depends on your starting point and effort.</p>
                  <p className="text-gray-700">
                    • Ideal for students in the 1100-1300 range looking to climb higher. Those near 1450 may see smaller
                    jumps due to the 1600 max.
                  </p>
                </div>
              </motion.div>

              <div className="text-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <motion.div
              {...bounceIn}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image src="/images/race-win.webp" alt="Athletes training" fill style={{ objectFit: "cover" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">
              Proven <span className="text-blue-800">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                number: "95%+",
                label: "Success Rate",
                desc: "Students improve their scores significantly",
              },
              {
                icon: Users,
                number: "1:8",
                label: "Class Ratio",
                desc: "Small classes for personalized attention",
              },
              {
                icon: BookOpen,
                number: "10+",
                label: "Practice Tests",
                desc: "Full-length tests with detailed review",
              },
              {
                icon: Target,
                number: "200+",
                label: "Point Increase",
                desc: "Average score improvement for our students",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.4,
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
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Achieve Your <span className="text-yellow-400">Best Score?</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join thousands of students who have achieved their target scores with our comprehensive test prep
              programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 transform transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Start Your Prep Journey
              </Link>
              <Link
                href="/contact-us"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 transform transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
