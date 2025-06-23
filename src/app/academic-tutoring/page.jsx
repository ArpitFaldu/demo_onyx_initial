"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Users, BookOpen, Target, Clock, Star } from "lucide-react"

export default function AcademicCollegeComplete() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  const subjects = [
    {
      title: "AP Subject Tutoring And Exam Prep:",
      contents: [
        "AP Biology",
        "AP Calculus AB and BC",
        "AP Chemistry",
        "AP Language",
        "AP Physics",
        "AP U.S. History",
        "AP Statistics",
        "AP Computer Science",
        "AP World History",
        "Multi-variable Calculus (Post-AP)",
      ],
      href: "/academic-tutoring",
      color: "blue",
    },
    {
      title: "General Academic Tutoring:",
      contents: [
        "High School math: Algebra, Geometry, Trig, Calculus",
        "High School Science: Bio, Chem, Physics/Earth Science",
        "World History",
        "U.S. History",
        "Literary Analysis and Theory",
        "U.S. Government",
        "English Composition",
      ],
      href: "/academic-tutoring",
      color: "yellow",
    },
    {
      title: "University Level Subjects:",
      contents: [
        "Calculus I (AB)",
        "Calculus 2 (BC)",
        "Calculus 3 (Multi-var)",
        "General Chemistry I",
        "General Chemistry 2",
        "Organic Chemistry I",
        "Organic Chemistry 2",
        "Physics I",
        "Physics 2",
      ],
      href: "/academic-tutoring",
      color: "blue",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* ACADEMIC TUTORING SECTION */}

      {/* Academic Tutoring Hero Section */}
      <section className="relative pb-4 h-[500px] flex items-center justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/academic-tutoring-bg.webp?height=500&width=1200")',
            // filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto mt-22">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Academic <span className="text-yellow-400">Tutoring</span>
            </h1>
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed max-w-4xl">
              Learn, practice, organize, and excel.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4">
              <Link
                href="/signup"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105 rounded-md inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Sign Up
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
        <p className="text-sm text-gray-600">Home &gt; Academic Tutoring</p>
      </div>

      {/* Teaching Practices Section */}
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
              Our Program Is Based On The Following Good <span className="text-blue-800">Teaching Practices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our tutoring philosophy is that each work with students one-on-one or in small groups to provide
              personalized instruction and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Active Learning",
                desc: "Our tutors encourage students to participate in discussion, problem-solving, and hands-on activities.",
              },
              {
                icon: Clock,
                title: "Feedback",
                desc: "Our tutors provide students with regular feedback on their progress to track improvement.",
              },
              {
                icon: Star,
                title: "Goal Setting",
                desc: "Our tutors help students set realistic goals and develop plans to achieve them.",
              },
              {
                icon: Award,
                title: "Motivation",
                desc: "Our tutors are committed to helping students stay motivated and engaged in learning.",
              },
            ].map((practice, index) => (
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
                    <practice.icon className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <div className="text-lg font-semibold mb-2 text-gray-800">{practice.title}</div>
                <div className="text-sm text-gray-600">{practice.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Tutoring Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="flex justify-center">
              <Image
                src="/images/academic-tutoring-1.webp?height=300&width=500"
                alt="Individual tutoring session"
                width={500}
                height={300}
                className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Individual <span className="text-blue-800">Tutoring</span>
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                 A good SAT score alone won't secure college admission - students need a high GPA (4.0+) by excelling in academic subjects. Each student requires a different teaching approach, whether for consistent retention, intermittent practice, or starting fresh. We focus on deep subject understanding rather than just completing assignments.
                </p>
                <p>
                  Our tutoring differs from school instruction through 1:1 focus on individual needs. We explain detailed concepts on common topics while providing personalized attention for specific questions. Students complete homework beforehand and ask about challenging areas, receiving extra practice to strengthen foundations and prepare for school assessments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summer Bridge Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="flex justify-center order-2 lg:order-1">
              <Image
                src="/images/academic-tutoring-2.webp?height=400&width=500"
                alt="Summer bridge programs"
                width={500}
                height={400}
                className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              />
            </motion.div>

            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Summer Bridge <span className="text-blue-800">Programs and Enrichment courses</span> (Jun - Aug)
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Coherence Learning offers summer bridge programs to help students transition from one academic level to
                the next and prepare for the upcoming year.
              </p>

              {/* Program Benefits */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Program Benefits:</h3>
                <div className="space-y-3">
                  {[
                    "Strengthen foundation in specific subjects",
                    "Build confidence through advance preparation",
                    "Get a head start on fall subjects",
                    "Comprehensive resources and materials provided",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post-Pandemic Challenges */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Addressing Post-Pandemic Challenges:</h3>
                <div className="space-y-3">
                  {[
                    "Help overcome learning gaps from virtual schooling",
                    "Improve organizational skills and work habits",
                    "Build confidence to ask questions and engage",
                    "Create smooth transitions between academic levels",
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                These enrichment courses precisely address gaps of weakness and help students get back on track,
                creating a bridge between the previous year and the next for a smooth transition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bridging Program Details */}
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
              Bridging <span className="text-blue-800">Program</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="flex justify-center">
              <Image
                src="/images/academic-tutoring-3.webp?height=300&width=500"
                alt="Bridging program"
                width={500}
                height={300}
                className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <div className="bg-yellow-50 p-8 rounded-xl shadow-xl border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Duration: 3 Months</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-700">
                    <strong>Pre-Honors Class:</strong> $275/month
                  </p>
                  <p className="text-gray-700">
                    <strong>AP Class:</strong> $275/month
                  </p>
                </div>
                <Link
                  href="/contact-us"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 inline-block shadow-lg hover:shadow-xl"
                >
                  Click here
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subject Categories Section */}
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
              Academic <span className="text-blue-800">Subjects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The tutoring is offered on the following subjects:
            </p>
          </motion.div>

           <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden flex flex-col h-full"
          >
            {/* Header */}
            <div className={`py-6 px-6 text-center ${subject.color === "blue" ? "bg-blue-600" : "bg-yellow-600"}`}>
              <h3 className="text-lg font-bold text-white underline">{subject.title}</h3>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex-grow">
                {subject.contents.map((content, contentIndex) => (
                  <div key={contentIndex} className="flex items-start gap-3 mb-3">
                    <CheckCircle
                      className={`h-5 w-5 mt-1 flex-shrink-0 ${subject.color === "blue" ? "text-blue-600" : "text-yellow-600"}`}
                    />
                    <span className="text-gray-700 text-sm">{content}</span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4 mt-auto">
                <Link href="/contact-us">
                  <button
                    className={`px-8 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-white ${
                      subject.color === "blue" ? "bg-blue-600 hover:bg-blue-700" : "bg-yellow-600 hover:bg-yellow-700"
                    }`}
                  >
                    Click Here
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-600">Please check the schedule for the time and day options for the subject.</p>
          </motion.div>
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
              Ready to Begin Your <span className="text-yellow-400">Academic & College Journey?</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join our comprehensive program combining academic excellence with strategic college planning. From
              tutoring to admissions, we guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 transform transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Enroll Now
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
