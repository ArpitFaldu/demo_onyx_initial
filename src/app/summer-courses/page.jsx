"use client"

import Link from "next/link"

export default function SummerPrograms() {
  const programs = [
    {
      title: "Intense Summer SAT/ACT Unlimited Prep (16 Weeks)",
      description:
        "A comprehensive 4-month (16-week) program designed for students aiming to maximize their SAT/ACT scores while preparing for upcoming AP courses or virtual summer coursework. Includes unlimited hours of extra help for personalized support.",
      duration: "June – September",
      cost: "$4,200",
      features: [
        "Unlimited live-online instruction",
        "Full-length practice tests",
        "Personalized study plans",
        "Access to AP Head Start classes or virtual course support",
        "Covers math, reading, writing, and test-taking strategies",
      ],
      image: "/images/academic-tutoring-2.webp",
    },
    {
      title: "SAT/ACT Crash Course (8 Weeks)",
      description:
        "An intensive 8-week fast-track course for students preparing for August, September, or October SAT/ACT test dates. Multiple batches available to align with exam schedules.",
      duration: "8 weeks (batches for August, September, October)",
      cost: "Contact us for pricing",
      features: [
        "Focused live-online instruction",
        "6–8 full-length practice tests",
        "Targeted strategies for math, reading, and writing",
        "Personalized feedback",
        "Class Frequency: 2–3 classes per week, designed for rapid skill improvement",
      ],
      image: "/images/academic-tutoring-3.webp",
    },
    {
      title: "Complete AP Prep Course (16 Weeks)",
      description:
        "A 4-month (16-week) program that completes an entire AP course from June to September, preparing students for rigorous AP exams in subjects like Calculus, Chemistry, Physics, Biology, or Computer Science.",
      duration: "June – September",
      cost: "Contact us for pricing",
      features: [
        "Comprehensive coverage of AP curriculum",
        "Practice exams",
        "Problem-solving workshops",
        "Ideal for students seeking college credit or advanced placement",
        "Class Frequency: 2 classes per week",
      ],
      image: "/images/methodology-4.jpg",
    },
    {
      title: "Intense Summer SAT/ACT Only (16 Weeks)",
      description:
        "A focused 4-month (16-week) program dedicated exclusively to SAT/ACT preparation, perfect for students targeting high scores without additional coursework support.",
      duration: "June – September",
      cost: "$3,200",
      features: [
        "Live-online instruction",
        "9+ full-length practice tests",
        "Personalized study plans",
        "Strategies for math, reading, writing, and test-taking efficiency",
        "Focus: Intensive preparation for SAT/ACT, with access to video lessons and practice questions",
      ],
      image: "/images/coherence-learning-best-tutoring3.jpg",
    },
    {
      title: "AP Courses Head Start (8 Weeks)",
      description:
        "A 2-month program to give students a head start on AP courses for the upcoming school year, covering key concepts and study strategies in subjects like Math, Science, or Computer Science.",
      duration: "July – August",
      cost: "Contact us for pricing",
      features: [
        "General overview of AP course content",
        "Foundational skills",
        "Preparation for rigorous coursework",
        "Class Frequency: Once a week",
      ],
      image: "/images/summer.jpg",
    },
    {
      title: "AOS/AET/TJ Prep Summer Program (5 Months)",
      description:
        "An accelerated summer program for 7th graders preparing for the Academies of Loudoun (AOS/AET) and TJHSST entrance exams, with a focus on lifelong problem-solving and writing skills.",
      duration: "June – November",
      cost: "Contact us for pricing",
      features: [
        "Quick review of algebra and English fundamentals",
        "Advanced problem-solving",
        "Mock tests",
        "TJ-specific SIS and Problem-Solving Essay practice",
        "Covers Phases 2 and 3, with optional Phase 4 for TJ aspirants",
        "Class Frequency: Twice a week",
      ],
      image: "/images/four-schoolkids-classroom.webp",
    },
    {
      title: "College Essays and Prep (8 Weeks)",
      description:
        "A specialized program for 11th and 12th graders to craft compelling college essays and navigate the holistic admissions process, starting with essay drafting and application planning.",
      duration: "July – August",
      cost: "Contact us for pricing",
      features: [
        "Small-group coaching for essay brainstorming, drafting, and revisions",
        "Guidance on college selection, activities sections, and application strategies",
        "Focus on storytelling and authenticity",
        "Outcome: 100% of students gain admission to at least one of their choice colleges",
      ],
      image: "/images/pexels-karolina-grabowska-7692559.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden animate-in zoom-in-105 duration-300">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-in zoom-in-105 duration-300"
          style={{
            backgroundImage: "url('/images/summer-bg.png')",
            filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-black/80 animate-in fade-in duration-300" />
      </div>

      {/* Welcome Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-in slide-in-from-left-8 duration-300">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Summer Prep Programs</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At Coherence Learning, our summer programs are designed to empower students with the skills and
                  confidence needed to excel in competitive exams, advanced coursework, and college admissions. From
                  SAT/ACT preparation to AP course head starts, AOS/AET/TJHSST entrance exam prep, and college essay
                  coaching, our programs focus on building critical thinking, problem-solving, and communication skills
                  that last a lifetime.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With flexible options and expert instructors, we cater to diverse student needs, ensuring measurable
                  progress and readiness for future challenges.
                </p>
              </div>
              <div className="flex justify-center animate-in slide-in-from-right-8 duration-300">
                <img
                  src="/images/summer-1.webp"
                  alt="Summer Prep Overview"
                  className="rounded-lg shadow-2xl max-w-full h-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Updates Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 animate-in slide-in-from-top-8 duration-300">
              Program Updates
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-left-8 duration-300">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Redesigned Curriculum</h3>
                <p className="text-gray-600 mb-4">
                  We've completely redesigned the curriculum for elementary and middle school programs, focusing on:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-500 mr-2 animate-bounce">✓</span>
                    <span>Enhanced critical thinking and problem-solving skills</span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-500 mr-2 animate-bounce">✓</span>
                    <span>Integrated STEM approach with real-world applications</span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-500 mr-2 animate-bounce">✓</span>
                    <span>Personalized learning paths based on student strengths</span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-500 mr-2 animate-bounce">✓</span>
                    <span>Advanced preparation for competitive high school admissions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-right-8 duration-300">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Expert Instructors & Small Classes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-500 mr-2 animate-bounce">✓</span>
                    <div>
                      <p className="font-semibold">Smaller Enrichment group class size</p>
                      <p className="text-gray-600">Limited to 1-6 students for maximum attention</p>
                    </div>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-500 mr-2 animate-bounce">✓</span>
                    <div>
                      <p className="font-semibold">Reduced subject tutoring class size</p>
                      <p className="text-gray-600">1:3 or 1:4 teacher-student ratio for optimal learning</p>
                    </div>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-500 mr-2 animate-bounce">✓</span>
                    <div>
                      <p className="font-semibold">Highly qualified instructors</p>
                      <p className="text-gray-600">
                        All department heads hold doctorates in relevant subjects with 12+ years of experience helping
                        students succeed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Summer Prep Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 animate-in slide-in-from-top-8 duration-300">
              Why Summer Prep?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-left-8 duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Better Focus & Retention</h3>
                <p className="text-gray-600">
                  Free from regular school distractions, students can focus deeply on skill-building and academic
                  preparation.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-bottom-8 duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Reduce School-Year Stress</h3>
                <p className="text-gray-600">
                  Utilize summer to build skills early and get ahead, reducing pressure during the busy academic year.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-right-8 duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Competitive Edge</h3>
                <p className="text-gray-600">
                  Gain an advantage on competitive exams (SAT/ACT, AOS/AET, TJHSST) and college applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Summer Prep Programs Section */}
      <div className="py-16 bg-[#f1c338]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 animate-in slide-in-from-top-8 duration-300">
              Our Summer Prep Programs
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-in slide-in-from-bottom-8 duration-300">
              Explore our comprehensive summer offerings, tailored to prepare students for standardized tests, advanced
              academics, competitive entrance exams, and college applications.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white/90 rounded-lg shadow-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in zoom-in-95 duration-300"
                >
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-60 object-cover object-center transform transition-all duration-300 hover:scale-110"
                  />
                  <div className="p-6 flex flex-col flex-grow h-140">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <span className="font-semibold text-gray-700 mr-2">Duration:</span>
                        <span className="text-gray-600">{program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-700 mr-2">Cost:</span>
                        <span className="text-gray-600 font-bold text-yellow-600 animate-pulse">{program.cost}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start transform transition-all duration-300 hover:translate-x-2"
                          >
                            <span className="text-green-500 mr-2 animate-bounce">•</span>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6">
                      <Link
                        href="/contact-us"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center transition-all transform hover:scale-105 hover:shadow-2xl"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Coherence Learning Section */}
      <div className="py-16 bg-[#0f3963]/95">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-10 animate-in slide-in-from-top-8 duration-300">
              Why Choose Coherence Learning?
            </h2>
            <p className="text-lg text-center text-white mb-12 max-w-3xl mx-auto animate-in slide-in-from-bottom-8 duration-300">
              Our summer programs are designed to empower students with skills that extend beyond test scores and
              applications.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/90 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-left-8 duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Success</h3>
                <p className="text-gray-600">
                  Over 50% of AOS/AET/TJ year-long students gain admission, and 100% of college prep students are
                  accepted to a choice college.
                </p>
              </div>
              <div className="bg-white/90 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-bottom-8 duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Instructors</h3>
                <p className="text-gray-600">
                  All department heads hold doctorates in relevant subjects with tailored curricula for each program.
                </p>
              </div>
              <div className="bg-white/90 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-right-8 duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Lifelong Skills</h3>
                <p className="text-gray-600">
                  Focus on critical thinking, problem-solving, and effective communication that extends beyond test
                  scores.
                </p>
              </div>
              <div className="bg-white/90 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-left-8 duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Multiple intake options and small-group settings for personalized attention to fit your summer plans.
                </p>
              </div>
              <div className="bg-white/90 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-bottom-8 duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Holistic Approach</h3>
                <p className="text-gray-600">
                  Guiding students from middle school to senior year with a comprehensive college admissions strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white animate-in zoom-in-95 duration-300">
            <h2 className="text-4xl font-bold mb-6 animate-in slide-in-from-top-8 duration-300">
              Ready to Elevate Your Summer?
            </h2>
            <p className="text-xl mb-8 animate-in slide-in-from-bottom-8 duration-300">
              Enroll in one of our summer prep programs today and give your child the tools to succeed in exams,
              academics, and college admissions!
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-2xl animate-in slide-in-from-bottom-8 duration-300"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
