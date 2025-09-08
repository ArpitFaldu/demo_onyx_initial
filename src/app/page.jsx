"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  ChevronLeft,
  Users,
  Target,
  Award,
  Monitor,
  Brain,
  Shield,
  Zap,
  Globe,
  MessageCircle,
  CheckCircle,
  Star,
  Play,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"

  // ==================== HERO SECTION COMPONENT ====================
  const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isChanging, setIsChanging] = useState(false)

    const slides = [
      {
        welcomeText: "Welcome to Onyx EduTech",
        src: "/1.jpg",
        title: "Wondering how to land your",
        subtitle: "dream job?",
        description: "Because the Right Role Deserves the Right Skill — For Every Student, Every Time.",
        buttons: (
          <div className="w-fit flex flex-col sm:flex-row items-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 transform shadow-lg">
              <Link href="#community" className="flex items-center gap-2">
                Join Our Community 
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 transform shadow-lg bg-transparent"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Register as Student
              </Link>
            </Button>
          </div>
        ),
      },
      {
        welcomeText: "Skills Over Marksheets",
        src: "/2.jpg",
        title: "Build Your Career on",
        subtitle: "Skills, Not Just Degrees",
        description: "Turning Potential into Placements, and Campuses into Career Launchpads.",
      },
      {
        welcomeText: "Learning Community",
        src: "/3.jpg",
        title: "Join Our Learning",
        subtitle: "Community",
        description: "Empowering Institutions to Deliver What Recruiters Seek, and Students Aspire",
      },
      {
        welcomeText: "Learning Community",
        src: "/4.jpg",
        title: "Join Our Learning",
        subtitle: "Community",
        description: " Not Just Jobs — Building Careers That Truly Fit.",
      },
    ]

    const getAnimationVariants = (direction) => {
      const baseTransition = { type: "spring", stiffness: 100, damping: 20 }

      switch (direction) {
        case "left":
          return {
            initial: { opacity: 0, x: -100 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -100 },
            transition: baseTransition,
          }
        case "right":
          return {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 100 },
            transition: baseTransition,
          }
        case "top":
          return {
            initial: { opacity: 0, y: -100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -100 },
            transition: baseTransition,
          }
        case "bottom":
          return {
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 100 },
            transition: baseTransition,
          }
        default:
          return {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.6 },
          }
      }
    }

    useEffect(() => {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }, 8000)
      return () => clearInterval(timer)
    }, [activeIndex])

    const handleSlideChange = (index) => {
      if (index !== activeIndex) {
        setIsChanging(true)
        setActiveIndex(index)
        setTimeout(() => setIsChanging(false), 1500)
      }
    }

    const goToPrevious = () => {
      const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1
      handleSlideChange(newIndex)
    }

    const goToNext = () => {
      const newIndex = (activeIndex + 1) % slides.length
      handleSlideChange(newIndex)
    }

    return (
      <section className="relative w-full h-screen min-h-screen overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 z-10"></div>

        <div className="relative w-full h-full z-20">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1500 ease-in-out ${
                index === activeIndex
                  ? "opacity-100 translate-x-0"
                  : index < activeIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              }`}
            >
              <div className="absolute inset-0 bg-blue-900/50 z-5" />
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                className="brightness-100 z-0"
                priority={index === 0}
                onError={(e) => {
                  // Hide broken images to show gradient background
                  e.currentTarget.style.display = "none"
                }}
              />
              <div className="absolute inset-0 z-20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-30">
                <AnimatePresence mode="wait">
                  {index === activeIndex && !isChanging && (
                    <>
                      <motion.p
                        key={`welcome-${index}`}
                        className="text-lg md:text-xl font-medium mb-8 tracking-wide uppercase text-orange-200"
                        {...getAnimationVariants("top")}
                        transition={{ delay: 0.1 }}
                      >
                        {slide.welcomeText}
                      </motion.p>

                      <motion.h1
                        key={`title-${index}`}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-white"
                        {...getAnimationVariants("left")}
                        transition={{ delay: 0.2 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.h2
                        key={`subtitle-${index}`}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-orange-400 mb-6"
                        {...getAnimationVariants("right")}
                        transition={{ delay: 0.4 }}
                      >
                        {slide.subtitle}
                      </motion.h2>

                      <motion.p
                        key={`description-${index}`}
                        className="text-xl md:text-2xl mb-8 max-w-4xl leading-relaxed text-white"
                        {...getAnimationVariants("bottom")}
                        transition={{ delay: 0.5 }}
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        key={`buttons-${index}`}
                        className="mt-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        {slide.buttons || (
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-md">
                            <Link href="#community">
                              Join Our Community
                            </Link>
                          </Button>
                        )}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-40"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-orange-500 scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    )
  }

// ==================== ABOUT SECTION COMPONENT ====================
const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">How About You Get to Know Us First?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Before we start your career journey, meet Onyx EduTech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Video Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-900 to-orange-500 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">COO's Message</h3>
                  <p className="text-lg">Mission, Vision & Journey</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              <h3 className="text-3xl font-bold text-blue-900">Transforming Dreamers into Professionals</h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                At Onyx EduTech, we believe your career should be built on skills, not just marksheets. Join our
                learning community where knowledge meets opportunities.
              </p>
              <p className="text-lg leading-relaxed">
                We're not here to burn holes in your pocket. Our industry-aligned curriculum is designed to make
                dreamers into entrepreneurs, innovators, and job-ready professionals.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-blue-900">
                  <Award className="w-5 h-5" />
                  DPIIT Recognized
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-900">
                  <Award className="w-5 h-5" />
                  AICTE Approved
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-900">
                  <Award className="w-5 h-5" />
                  NSDC Certified
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-12">Team @ Onyx</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <motion.div
                key={member}
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-900 to-orange-500">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <h4 className="font-semibold text-blue-900">Team Member {member}</h4>
                <p className="text-sm text-gray-600">Position</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ==================== HOW YOU'LL LEARN SECTION ====================
const HowYoullLearnSection = () => {
  const learningModes = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Learn Anything Online",
      description: "Access courses anytime, anywhere with our comprehensive online platform",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Personalized Learning",
      description: "AI-powered learning paths tailored to your pace and style",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Based Tutoring",
      description: "Get instant help and guidance from our AI tutoring system",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Skill-Based Assessments",
      description: "Regular evaluations to track your progress and knowledge",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Support Ticket System",
      description: "24/7 support for all your learning queries and doubts",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Live Chat with Experts",
      description: "Connect directly with industry professionals and mentors",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">How You'll Learn @ Onyx</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience innovative learning methods designed for the modern student
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningModes.map((mode, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-900 to-orange-500 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{mode.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">{mode.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{mode.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== COURSES SECTION ====================
const CoursesSection = () => {
  const courses = [
    { icon: <Monitor className="w-12 h-12" />, title: "Technology", color: "from-blue-500 to-blue-600" },
    { icon: <Target className="w-12 h-12" />, title: "Business", color: "from-green-500 to-green-600" },
    { icon: <Brain className="w-12 h-12" />, title: "AI & ML", color: "from-purple-500 to-purple-600" },
    { icon: <Shield className="w-12 h-12" />, title: "Cybersecurity", color: "from-red-500 to-red-600" },
    { icon: <Zap className="w-12 h-12" />, title: "Marketing", color: "from-orange-500 to-orange-600" },
    { icon: <Globe className="w-12 h-12" />, title: "Web Development", color: "from-teal-500 to-teal-600" },
  ]

  return (
    <section id="courses" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-aligned curriculum designed to make you job-ready
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1600] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...courses, ...courses, ...courses].map((course, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer flex-shrink-0"
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`w-48 h-48 bg-gradient-to-br ${course.color} rounded-xl flex flex-col items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{course.icon}</div>
                  <h3 className="text-xl font-bold text-center">{course.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==================== WHY US SECTION ====================
const WhyUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Dream Big. Build Bold.</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-orange-300 mb-8">Become Career Ready.</h3>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            We're not here to burn holes in your pocket. Our industry-aligned curriculum is designed to make dreamers
            into entrepreneurs, innovators, and job-ready professionals. Recognized by DPIIT (Start-up India), AICTE,
            and NSDC – credibility meets creativity.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: <Award className="w-8 h-8" />, text: "DPIIT Recognized" },
              { icon: <CheckCircle className="w-8 h-8" />, text: "AICTE Approved" },
              { icon: <Star className="w-8 h-8" />, text: "NSDC Certified" },
              { icon: <Users className="w-8 h-8" />, text: "IBM Partnership" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-orange-300">{item.icon}</div>
                <span className="text-white font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl font-semibold rounded-full">
            <Link href="/why-us">
              Learn More About Us
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// ==================== PRICING SECTION ====================
const PricingSection = () => {
  const [selectedTab, setSelectedTab] = useState("individuals")

  const individualPlans = [
    {
      name: "Self Learn",
      price: "₹5,000",
      features: ["Recorded Sessions", "Support Ticket Q&A", "Assessments + Certificate"],
    },
    {
      name: "Mentor Learn",
      price: "₹7,500",
      popular: true,
      features: ["Mentor-Led Sessions", "Live Q&A", "Mock Quizzes & Gamification", "Multi-Certificates"],
    },
    {
      name: "Advanced Learn",
      price: "₹10,000",
      features: [
        "All of Mentor+",
        "Real Projects",
        "Internship Opportunity",
        "1:1 Placement Guidance",
        "Masterclasses + Entrepreneurship",
      ],
    },
  ]

  const institutionPlans = [
    {
      name: "Offline Program",
      price: "₹15,000/student",
      subtitle: "(30 batch minimum)",
      features: [
        "Industry-Relevant Skills",
        "Flexible Learning Models",
        "Co-branded Certification (IBM + Onyx)",
        "AI Tools + LMS Integration",
        "Faculty Collaboration",
        "Student Engagement (webinars, community)",
        "Enhanced Placement Readiness",
      ],
    },
    {
      name: "Online Program",
      price: "₹7,500/student",
      subtitle: "(30 batch minimum)",
      popular: true,
      features: [
        "Industry-Relevant Skills",
        "Flexible Learning Models",
        "Co-branded Certification (IBM + Onyx)",
        "AI Tools + LMS Integration",
        "Faculty Collaboration",
        "Student Engagement (webinars, community)",
        "Enhanced Placement Readiness",
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your learning journey
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setSelectedTab("individuals")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedTab === "individuals" ? "bg-blue-900 text-white shadow-lg" : "text-blue-900 hover:bg-blue-50"
              }`}
            >
              Individuals
            </button>
            <button
              onClick={() => setSelectedTab("institutions")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedTab === "institutions" ? "bg-blue-900 text-white shadow-lg" : "text-blue-900 hover:bg-blue-50"
              }`}
            >
              Academic Institutions
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedTab === "individuals" ? individualPlans : institutionPlans).map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${
                plan.popular ? "ring-2 ring-orange-500 scale-105" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-orange-500 mb-2">{plan.price}</div>
                {plan.subtitle && <p className="text-gray-600 text-sm">{plan.subtitle}</p>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-blue-900 hover:bg-blue-800 text-white"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==================== TESTIMONIALS SECTION ====================
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Zareena",
      role: "UI/UX Designer at Kinichi",
      content:
        "Interning at Onyx Edutech was an enriching experience where I enhanced my UI/UX design skills through real-world projects. Collaborating with a supportive team and receiving constructive feedback improved my design thinking, user research, and prototyping abilities — boosting my confidence and marking a key milestone in my journey as a UI/UX designer.",
      rating: 5,
      linkedin: "#",
    },
    {
      name: "Deepshika",
      role: "Backend Developer at Zelis",
      content:
        "Interning at Onyx Edutech was an enriching experience where I strengthened my backend development skills, especially in Node.js. Through real-world projects, a collaborative team, and constructive feedback, I gained practical expertise, improved problem-solving abilities, and boosted my confidence—making it a key milestone in my growth as a backend developer.",
      rating: 5,
      linkedin: "#",
    },
    {
      name: "Nilohitha",
      role: "Software Engineer at Deloitte",
      content:
        "Interning at Onyx Edutech was an enriching experience where I honed my backend skills. A supportive team and constructive feedback fueled my technical and professional growth, boosting my confidence and industry readiness. It was a pivotal step in my journey as a software engineer.",
      rating: 5,
      linkedin: "#",
    },
    {
      name: "Rithika",
      role: "Full-stack Developer at TCS",
      content:
        "Interning at Onyx Edutech was a valuable experience that strengthened my full-stack development skills, with a strong focus on backend technologies. Collaborating on real-world projects alongside a supportive team and receiving constructive feedback significantly boosted my technical expertise, confidence, and industry readiness—marking a key milestone in my professional growth.",
      rating: 5,
      linkedin: "#",
    },
    {
      name: "Srikar",
      role: "Salesforce Developer at KPMG",
      content:
        "Interning at Onyx Edutech was a valuable experience where I enhanced my backend development skills, especially in Salesforce. Working on real-world projects with a supportive team and receiving constructive feedback boosted my technical growth, confidence, and industry readiness. It was a key step in my professional development journey.",
      rating: 5,
      linkedin: "#",
    },
    {
      name: "Srujan",
      role: "Backend Developer at Edwisely",
      content:
        "Interning at Onyx Edutech was a great experience. I enhanced my backend development skills, especially in Node.js, by working on real-world projects. The supportive team and constructive feedback helped me grow technically and professionally. It was a valuable learning opportunity that boosted my confidence and industry readiness.",
      rating: 5,
      linkedin: "#",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Student Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who transformed their careers with Onyx EduTech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-orange-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <Link href={testimonial.linkedin} className="text-blue-600 text-sm hover:underline">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


// ==================== COMMUNITY SECTION ====================
const CommunitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Onyx Community</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Join thousands of learners, share knowledge, and grow together in our vibrant community
          </p>

          {/* Video Placeholder */}
          <div className="relative w-full max-w-4xl mx-auto h-[400px] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Community Highlights</h3>
                <p className="text-lg">See our community in action</p>
              </div>
            </div>
          </div>

          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-semibold rounded-full">
            <Link href="/community">
              Join the Onyx Community – Learn, Share, Grow
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// ==================== BLOGS SECTION ====================
const BlogsSection = () => {
  const blogs = [
    {
      title: "Future of AI in Education",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we learn and teach.",
      image: "/ai-education-technology.jpg",
      date: "Dec 15, 2024",
      category: "Technology",
    },
    {
      title: "Career Transition Guide",
      excerpt: "Essential tips for successfully transitioning to a tech career from any background.",
      image: "/career-transition-professional.jpg",
      date: "Dec 12, 2024",
      category: "Career",
    },
    {
      title: "Industry Skills Demand 2025",
      excerpt: "Top skills that will be in high demand in the coming year and how to acquire them.",
      image: "/skills-demand-industry-trends.jpg",
      date: "Dec 10, 2024",
      category: "Industry",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of technology and education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{blog.excerpt}</p>
                <div className="flex items-center text-orange-600 font-medium group-hover:gap-2 transition-all duration-300">
                  Read More{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 font-semibold rounded-lg">
            <Link href="/blogs">
              View All Blogs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// ==================== CONTACT SECTION ====================
const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Query"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold rounded-lg w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <span className="text-white">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <span className="text-white">info@onyxedutech.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <span className="text-white">Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {["FAQs", "Support", "Partnerships", "Careers"].map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="text-white/80 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-white/10 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-60" />
                <p className="text-sm opacity-80">Google Maps Integration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==================== MAIN HOMEPAGE COMPONENT ====================
export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="how-youll-learn">
        <HowYoullLearnSection />
      </div>
      <div id="courses">
        <CoursesSection />
      </div>
      <div id="why-us">
        <WhyUsSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <TestimonialsSection />
      <div id="community">
        <CommunitySection />
      </div>
      <div id="blogs">
        <BlogsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  )
}
