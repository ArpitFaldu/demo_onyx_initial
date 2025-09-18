"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
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
  Cpu,
  Coffee,
  DollarSign,
  BarChart3,
  Bug,
  Cloud,
  Code,
  Database,
  Layers,
  Smartphone,
  Settings,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"


// ==================== HERO SECTION COMPONENT ====================
const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  const slides = [
    {
      welcomeText: "Welcome to Onyx EduTech",
      src: "/Gemini_Generated_Image_c36412c36412c364.png",
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
      src: "/college-bg.webp",
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
      src: "/Gemini_Generated_Image_887ug2887ug2887u.png",
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
            <div className="absolute inset-0 z-5" />
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-40 z-0"
              priority={index === 0}
              onError={(e) => {
                // Hide broken images to show gradient background
                e.currentTarget.style.display = "none"
              }}
            />
            <div className="absolute inset-0 z-20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8 z-30">
              <AnimatePresence mode="wait">
                {index === activeIndex && !isChanging && (
                  <>
                    <motion.p
                      key={`welcome-${index}`}
                      className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4 sm:mb-6 lg:mb-8 tracking-wide uppercase text-orange-200"
                      {...getAnimationVariants("top")}
                      transition={{ delay: 0.1 }}
                    >
                      {slide.welcomeText}
                    </motion.p>

                    <motion.h1
                      key={`title-${index}`}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2 sm:mb-3 lg:mb-4 text-white"
                      {...getAnimationVariants("left")}
                      transition={{ delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.h2
                      key={`subtitle-${index}`}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-orange-400 mb-3 sm:mb-4 lg:mb-6"
                      {...getAnimationVariants("right")}
                      transition={{ delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.h2>

                    <motion.p
                      key={`description-${index}`}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-4xl leading-relaxed text-white px-2"
                      {...getAnimationVariants("bottom")}
                      transition={{ delay: 0.5 }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      key={`buttons-${index}`}
                      className="mt-4 sm:mt-6 lg:mt-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {slide.buttons || (
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md">
                          <Link href="#community">Join Our Community</Link>
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

      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-40"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            How About You Get to Know Us First?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Before we start your career journey, meet Onyx EduTech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <motion.div
      className="relative order-2 lg:order-1"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-blue-900 to-orange-500 rounded-lg overflow-hidden shadow-2xl">
        <video className="absolute inset-0 w-full h-full object-cover" controls poster="/coo-message-thumbnail.jpg">
          <source src="/COO_Message.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        {/* Overlay with title - shows when video is not playing */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white px-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">COO's Message</h3>
            <p className="text-sm sm:text-base lg:text-lg">Mission, Vision & Journey</p>
          </div>
        </div>
      </div>
    </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-xs sm:text-sm font-medium">
                <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                Our Mission
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900">
                Transforming Dreamers into Professionals
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4 text-gray-700">
              <p className="text-base sm:text-lg leading-relaxed">
                At Onyx EduTech, we believe your career should be built on skills, not just marksheets. Join our
                learning community where knowledge meets opportunities.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                We're not here to burn holes in your pocket. Our industry-aligned curriculum is designed to make
                dreamers into entrepreneurs, innovators, and job-ready professionals.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-3 sm:pt-4">
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-blue-900">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  DPIIT Recognized
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-blue-900">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  AICTE Approved
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-blue-900">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  NSDC Certified
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const teamMembers = [
  {
    id: 1,
    name: "Pydimarry Jayasurya",
    position: "The North Star | CEO",
    image: "/Pydimarry_Jayasurya.jpg",
    linkedin: "https://www.linkedin.com/in/pydimarry-jayasurya-ba5bb52b0/",
  },
  {
    id: 2,
    name: "Dheeraj Koyyada",
    position: "The Hustle Architect | COO",
    image: "/Dheeraj_Koyyada.jpeg",
    linkedin: "https://www.linkedin.com/in/dheeraj-koyyada/",
  },
  {
    id: 3,
    name: "Phani Kumar",
    position: "The Integrator  | CAO",
    image: "/Phani_Kumar.jpg",
    linkedin: "https://www.linkedin.com/in/phani-kumar-82b6b1286/",
  },
  {
    id: 4,
    name: "Khagendra Tiwari",
    position: "The Rain Maker | Global Sales Head",
    image: "/Khagendra_Tiwari.jpeg",
    linkedin: "https://www.linkedin.com/in/khagendratiwari/",
  },
  {
    id: 5,
    name: "Debasrita Das",
    position: "The Heartbeat | Human Resources Manager",
    image: "/Debasrita_Das.jpeg",
    linkedin: "https://www.linkedin.com/in/debasrita-das-164882191/",
  },
]

const People=()=> {
  return (
    <div className="min-h-200px bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12">Team @ Onyx</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                onClick={() => window.open(member.linkedin, "_blank")}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-blue-400 rounded-full transition-all duration-300"></div>
                </div>
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-blue-900 text-sm sm:text-base group-hover:text-blue-700 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {member.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
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
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            How You'll Learn @ Onyx
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience innovative learning methods designed for the modern student
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-900 to-orange-500 rounded-full mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{mode.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4 text-center">{mode.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">{mode.description}</p>
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
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const availableCourses = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Artificial Intelligence",
      color: "from-purple-500 to-purple-600",
      description: "Learn how machines can think, predict, and make decisions like humans.",
      status: "Available Now",
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Machine Learning",
      color: "from-blue-500 to-blue-600",
      description: "Master algorithms that enable systems to learn from data and improve over time.",
      status: "Available Now",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cyber Security",
      color: "from-red-500 to-red-600",
      description: "Protect networks, systems, and data from modern digital threats.",
      status: "Available Now",
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Java",
      color: "from-orange-500 to-orange-600",
      description:
        "Build robust, platform-independent applications with one of the most popular programming languages.",
      status: "Available Now",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Salesforce",
      color: "from-cyan-500 to-cyan-600",
      description: "Get hands-on with the world's #1 CRM platform for business automation and customer success.",
      status: "Available Now",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Finance",
      color: "from-green-500 to-green-600",
      description: "Understand money, markets, and investment essentials for smart financial decision-making.",
      status: "Available Now",
    },
  ]

  const comingSoonCourses = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      color: "from-teal-500 to-teal-600",
      description: "Design and build interactive, user-friendly websites and web apps.",
      status: "Coming Soon",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data Science",
      color: "from-indigo-500 to-indigo-600",
      description: "Turn raw data into insights and business value with analytics and visualization.",
      status: "Coming Soon",
    },
    {
      icon: <Bug className="w-12 h-12" />,
      title: "Ethical Hacking",
      color: "from-gray-500 to-gray-600",
      description: "Learn to think like a hacker to defend systems and strengthen security.",
      status: "Coming Soon",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Computing",
      color: "from-sky-500 to-sky-600",
      description: "Explore scalable computing power, storage, and apps on the cloud.",
      status: "Coming Soon",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Python",
      color: "from-yellow-500 to-yellow-600",
      description: "Code smarter and faster with one of the most versatile programming languages.",
      status: "Coming Soon",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "MySQL",
      color: "from-blue-600 to-blue-700",
      description: "Manage and organize data effectively with one of the most widely used databases.",
      status: "Coming Soon",
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: ".NET",
      color: "from-purple-600 to-purple-700",
      description: "Create powerful applications with Microsoft's trusted development framework.",
      status: "Coming Soon",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "DSA",
      color: "from-red-600 to-red-700",
      description: "Build the backbone of coding by mastering logic and efficiency.",
      status: "Coming Soon",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Android Development",
      color: "from-green-600 to-green-700",
      description: "Build apps for the world's most widely used mobile OS.",
      status: "Coming Soon",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Human Resources",
      color: "from-pink-500 to-pink-600",
      description: "Gain the skills to manage people, talent, and organizational growth.",
      status: "Coming Soon",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Marketing",
      color: "from-orange-600 to-orange-700",
      description: "Understand consumer behavior and craft strategies to grow brands.",
      status: "Coming Soon",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      color: "from-emerald-500 to-emerald-600",
      description: "Master SEO, social media, ads, and analytics to dominate the digital space.",
      status: "Coming Soon",
    },
  ]

  const allCourses = [...availableCourses, ...comingSoonCourses]

  return (
    <section id="courses" className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Our Courses
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Industry-aligned curriculum designed to make you job-ready
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-8"
            animate={{ x: [0, -2400] }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...allCourses, ...allCourses, ...allCourses].map((course, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer flex-shrink-0"
                style={{ perspective: "1000px" }}
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="relative w-40 h-40 sm:w-48 sm:h-48 transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={`absolute inset-0 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br ${course.color} rounded-xl flex flex-col items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                    }}
                  >
                    <div className="mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-center px-2">{course.title}</h3>
                    <div
                      className={`mt-2 px-2 py-1 rounded-full text-xs font-semibold ${
                        course.status === "Available Now"
                          ? "bg-green-500 bg-opacity-20 text-green-100"
                          : "bg-yellow-500 bg-opacity-20 text-yellow-100"
                      }`}
                    >
                      {course.status}
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br ${course.color} rounded-xl flex flex-col items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-shadow duration-300 p-3 sm:p-4`}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-sm sm:text-lg font-bold text-center mb-2 sm:mb-3">{course.title}</h3>
                    <p className="text-xs sm:text-sm text-center leading-relaxed opacity-90">{course.description}</p>
                  </div>
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
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
            Dream Big. Build Bold.
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-orange-300 mb-4 sm:mb-6 lg:mb-8">
            Become Career Ready.
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12 px-4">
            We're not here to burn holes in your pocket. Our industry-aligned curriculum is designed to make dreamers
            into entrepreneurs, innovators, and job-ready professionals. Recognized by DPIIT (Start-up India), AICTE,
            and NSDC – credibility meets creativity.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {[
              { icon: <Award className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />, text: "DPIIT Recognized" },
              { icon: <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />, text: "AICTE Approved" },
              { icon: <Star className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />, text: "NSDC Certified" },
              { icon: <Users className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />, text: "IBM Partnership" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-orange-300">{item.icon}</div>
                <span className="text-white font-medium text-sm sm:text-base">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-semibold rounded-full">
            <Link href="/why-us">Learn More About Us</Link>
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
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">Pricing</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Choose the perfect plan for your learning journey
          </p>

          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setSelectedTab("individuals")}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                selectedTab === "individuals" ? "bg-blue-900 text-white shadow-lg" : "text-blue-900 hover:bg-blue-50"
              }`}
            >
              Individuals
            </button>
            <button
              onClick={() => setSelectedTab("institutions")}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                selectedTab === "institutions" ? "bg-blue-900 text-white shadow-lg" : "text-blue-900 hover:bg-blue-50"
              }`}
            >
              Academic Institutions
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(selectedTab === "individuals" ? individualPlans : institutionPlans).map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 ${
                plan.popular ? "ring-2 ring-orange-500 scale-105" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-2">{plan.price}</div>
                {plan.subtitle && <p className="text-gray-600 text-xs sm:text-sm">{plan.subtitle}</p>}
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-2 sm:py-3 font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base ${
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

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-12 md:py-16 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6">Student Success Stories</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our students who transformed their careers with Onyx EduTech
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute -left-10 md:-left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-200 group z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-blue-900 group-hover:text-blue-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-10 md:-right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-200 group z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-blue-900 group-hover:text-blue-700" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl mx-2 sm:mx-4 md:mx-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-lg min-h-[350px] flex flex-col justify-between"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base font-medium">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-900 to-orange-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-base md:text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm md:text-base mb-1">{testimonials[currentIndex].role}</p>
                    <Link href={testimonials[currentIndex].linkedin} className="text-blue-600 text-sm hover:underline">
                      LinkedIn Profile
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-blue-900 w-8 md:w-6" : "bg-gray-300 hover:bg-gray-400 w-3 md:w-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== COMMUNITY SECTION ====================
const CommunitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = ["/5.jpg", "/6.jpg", "/14.jpg", "/15.jpg", "/16.jpg", "/17.jpg"]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const goToPrevious = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
  }

  const goToNext = () => {
    setActiveIndex((activeIndex + 1) % images.length)
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
            Onyx Community
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4">
            Join thousands of learners, share knowledge, and grow together in our vibrant community
          </p>

          <div className="relative w-full max-w-4xl mx-auto h-[250px] sm:h-[300px] lg:h-[400px] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden mb-8 sm:mb-10 lg:mb-12">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <Image
                  src={src || "/12.jpg"}
                  alt={`Community image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
              </div>
            ))}

            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </button>

            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-semibold rounded-full">
            <Link href="/community">Join the Onyx Community – Learn, Share, Grow</Link>
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
      image: "/8.jpg",
      date: "Dec 15, 2024",
      category: "Technology",
    },
    {
      title: "Career Transition Guide",
      excerpt: "Essential tips for successfully transitioning to a tech career from any background.",
      image: "/11.jpg",
      date: "Dec 12, 2024",
      category: "Career",
    },
    {
      title: "Industry Skills Demand 2025",
      excerpt: "Top skills that will be in high demand in the coming year and how to acquire them.",
      image: "/13.jpg",
      date: "Dec 10, 2024",
      category: "Industry",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Stay updated with the latest trends, tips, and insights from the world of technology and education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-gray-500 mb-2">{blog.date}</div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{blog.excerpt}</p>
                <div className="flex items-center text-orange-600 font-medium group-hover:gap-2 transition-all duration-300 text-sm sm:text-base">
                  Read More{" "}
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 sm:px-8 py-2 sm:py-3 font-semibold rounded-lg text-sm sm:text-base">
            <Link href="/blogs">View All Blogs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// ==================== CONTACT SECTION ====================
const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Get in Touch</h2>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Query"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 font-semibold rounded-lg w-full text-sm sm:text-base">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  <span className="text-white text-sm sm:text-base">+91 8977220902</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  <span className="text-white text-sm sm:text-base">support@onyxedutech.com</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  <span className="text-white text-sm sm:text-base">
                    Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {["FAQs", "Support", "Partnerships", "Careers"].map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="text-white/80 hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link}
                  </Link>
                ))}
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
      <div>
        <People/>
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

