"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Users,
    Target,
    BookOpen,
    Trophy,
    Clock,
    Brain,
} from "lucide-react";

const methodologyItems = [
    {
        title: "Elementary Foundation",
        level: "Grades K-5",
        description:
            "Building curiosity and independent thinking beyond basic comprehension. We focus on developing critical thinking skills that will serve as the foundation for advanced learning.",
        image: "/img/methodology-1.png",
        icon: BookOpen,
        color: "from-blue-500 to-cyan-500",
        features: [
            "Creative Problem Solving",
            "Reading Comprehension",
            "Mathematical Reasoning",
        ],
    },
    {
        title: "Middle School Mastery",
        level: "Grades 6-8",
        description:
            "Applying critical thinking through advanced literature and expanding vocabulary. Students learn to analyze complex texts and express sophisticated ideas.",
        image: "/img/methodology-2.png",
        icon: Brain,
        color: "from-purple-500 to-pink-500",
        features: [
            "Advanced Literature",
            "Vocabulary Building",
            "Analytical Writing",
        ],
    },
    {
        title: "High School Preparation",
        level: "Grades 9-10",
        description:
            "Mastering grammar and comprehension through SAT-level questions and proven strategies. Students develop the skills needed for standardized test success.",
        image: "/img/methodology-3.png",
        icon: Target,
        color: "from-green-500 to-emerald-500",
        features: ["SAT Strategies", "Grammar Mastery", "Test-Taking Skills"],
    },
    {
        title: "College Readiness",
        level: "Grades 11-12",
        description:
            "Time management and comprehensive knowledge integration. Students learn to bridge concepts across subjects while preparing for college-level academics.",
        image: "/img/methodology-4.jpg",
        icon: Trophy,
        color: "from-orange-500 to-red-500",
        features: ["Time Management", "College Prep", "Advanced Integration"],
    },
];

const stats = [
    {
        number: "90%+",
        label: "Students Qualify for Academy Programs",
        icon: Trophy,
    },
    { number: "15+", label: "Years of Teaching Experience", icon: Clock },
    { number: "8:1", label: "Student to Teacher Ratio", icon: Users },
    { number: "200+", label: "Average SAT Score Improvement", icon: Target },
];

export default function WhyChooseUsSection() {
    return (
        <section className="bg-slate-900 py-8 md:py-12 lg:py-16 relative overflow-hidden px-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,0,0.1),transparent_50%)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Why Choose Us Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="space-y-6">
                            <div>
                                <span className="inline-block bg-yellow-400 text-slate-900 hover:bg-yellow-300 mb-4 font-semibold px-3 py-1 rounded-full text-sm">
                                    Why Choose Coherence Learning
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
                                    Personalized Learning That{" "}
                                    <span className="text-yellow-400">
                                        Actually Works
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-4 text-gray-300">
                                <p className="text-lg leading-relaxed">
                                    We're not your typical tutoring center. At
                                    Coherence Learning, we believe every student
                                    learns differently, and our approach
                                    reflects that understanding.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Inspired by educators who've seen the
                                    limitations of "one-size-fits-all" teaching,
                                    we focus on small group instruction and
                                    multiple problem-solving strategies tailored
                                    to each student's unique learning style.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Our proven methodology has helped over 90%
                                    of students qualify for Loudoun County's
                                    prestigious Academy programs, with an
                                    average SAT score improvement of 200+
                                    points.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
                                >
                                    Learn More About Us
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/schedule"
                                    className="inline-flex items-center justify-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                                >
                                    Schedule Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative">
                            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/img/why-choose-us.webp"
                                    alt="Students learning at Coherence Learning"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-8 -left-8 bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-yellow-400 rounded-lg">
                                        <Trophy className="h-6 w-6 text-slate-900" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-yellow-400">
                                            90%+
                                        </div>
                                        <div className="text-sm text-gray-300">
                                            Success Rate
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Our Methodology Section */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <span className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4 font-semibold px-3 py-1 rounded-full text-sm">
                            Our Proven Approach
                        </span>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
                            Age-Appropriate Learning{" "}
                            <span className="text-yellow-400">Methodology</span>
                        </h3>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Building and maintaining a foundation of skills from
                            traditional schooling to approach critical thinking,
                            writing, and comprehension from a more advanced
                            standpoint.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {methodologyItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1 * index,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group cursor-pointer"
                            >
                                <div className="bg-slate-800 border border-slate-700 hover:border-yellow-400/50 transition-all duration-300 h-full overflow-hidden rounded-lg shadow-lg">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={
                                                item.image || "/placeholder.svg"
                                            }
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20`}
                                        ></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-block bg-white text-black border border-white/30 px-2 py-1 rounded text-xs font-medium">
                                                {item.level}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 right-4">
                                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                                                <item.icon className="h-6 w-6 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {item.description}
                                        </p>

                                        <div className="space-y-2">
                                            <div className="text-sm font-semibold text-yellow-400 mb-2">
                                                Key Focus Areas:
                                            </div>
                                            <ul className="space-y-1">
                                                {item.features.map(
                                                    (feature, featureIndex) => (
                                                        <li
                                                            key={featureIndex}
                                                            className="text-xs text-gray-400 flex items-center gap-2"
                                                        >
                                                            <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                                                            {feature}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        <Link
                                            href="/our-methodology"
                                            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 p-0 h-auto font-semibold group/btn transition-all duration-300"
                                        >
                                            Learn More
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 p-8 bg-slate-800 rounded-2xl border border-slate-700"
                >
                    <h4 className="text-2xl font-bold text-white mb-4">
                        Ready to Transform Your Learning Experience?
                    </h4>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Join hundreds of students who have achieved their
                        academic goals with our personalized approach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/sign-up"
                            className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                            Start Your Journey
                        </Link>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
