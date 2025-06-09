"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Users, BookOpen } from "lucide-react";

export default function TestPrepPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white font-inter">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-start overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/6.jpg")',
                        filter: "brightness(0.4)",
                    }}
                />

                {/* Animated Gradient Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-slate-900/img/tj-20 to-transparent"
                />

                {/* Content */}
                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4 font-semibold px-3 py-1 rounded-full text-sm">
                            Elite Academy Preparation
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins">
                            TJ & Academy{" "}
                            <span className="text-yellow-400">Prep</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Comprehensive preparation for 8th graders aspiring
                            for Academy of Science, Academy of Engineering &
                            Technology, and TJHSST admission
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Start Your Journey
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Success Stats */}
            <section className="py-16 bg-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-6 font-poppins">
                            Proven{" "}
                            <span className="text-yellow-400">Results</span>
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
                                className="bg-slate-700 rounded-xl p-6 border border-slate-600 text-center hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-yellow-400/10 rounded-lg">
                                        <stat.icon className="h-8 w-8 text-yellow-400" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-yellow-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-lg font-semibold mb-2">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-gray-300">
                                    {stat.desc}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* AOS/AET Prep */}
                        <motion.div
                            {...fadeIn}
                            className="bg-blue-500/10 p-8 rounded-xl border border-blue-500/20"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg">
                                    <Image
                                        src="/img/tj-1.jpg"
                                        alt="Students in classroom"
                                        width={60}
                                        height={60}
                                        className="rounded"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold">
                                    Academy Programs (AOS/AET) Prep
                                </h3>
                            </div>

                            <p className="text-gray-300 mb-6">
                                Our AOS/AET Prep Program begins in 7th grade to
                                prepare students for entrance exams in
                                October/November of 8th grade. We focus on
                                enhancing problem-solving skills and
                                reading/writing abilities that are critical for
                                success in these competitive programs.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1" />
                                    <p className="text-gray-300">
                                        Starts in 7th grade for comprehensive
                                        preparation
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1" />
                                    <p className="text-gray-300">
                                        Focuses on foundational problem-solving
                                        skills
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1" />
                                    <p className="text-gray-300">
                                        Prepares for Academy of Science and
                                        Academy of Engineering & Technology
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* TJHSST Prep */}
                        <motion.div
                            {...fadeIn}
                            className="bg-yellow-400/10 p-8 rounded-xl border border-yellow-400/20"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-yellow-400/20 rounded-lg">
                                    <Image
                                        src="/img/tj-2.jpg"
                                        alt="Students working on computers"
                                        width={60}
                                        height={60}
                                        className="rounded"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold">
                                    Thomas Jefferson High School (TJHSST) Prep
                                </h3>
                            </div>

                            <p className="text-gray-300 mb-6">
                                Our TJ Prep Program includes all AOS/AET
                                preparation plus an exclusive Phase 4 focusing
                                on TJ-specific components like the Student
                                Information Sheet (SIS) and Problem-Solving
                                Essay.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-yellow-400 mt-1" />
                                    <p className="text-gray-300">
                                        Includes all 3 phases of AOS/AET prep
                                        plus Phase 4
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-yellow-400 mt-1" />
                                    <p className="text-gray-300">
                                        TJ-specific SIS and Problem-Solving
                                        Essay preparation
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-yellow-400 mt-1" />
                                    <p className="text-gray-300">
                                        Assessment in February of 8th grade
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Phases of Preparation */}
            <section className="py-16 bg-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-6 font-poppins">
                            Four Phases of{" "}
                            <span className="text-yellow-400">Preparation</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our comprehensive program spans from September of
                            7th grade to admission, with structured phases
                            building essential skills
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Phase 1 */}
                        <motion.div
                            {...fadeIn}
                            className="bg-slate-700 p-6 rounded-xl border border-slate-600"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-yellow-400">
                                    Foundational Skills
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">
                                September - February
                            </p>
                            <p className="text-gray-300 mb-4">
                                Building strong foundations in algebra and
                                English with comprehensive instruction in
                                grammar, writing styles, and problem-solving
                                techniques.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        Advanced algebra concepts and functions
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        Grammar rules and writing styles
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        Reading comprehension strategies
                                    </span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Phase 2 */}
                        <motion.div
                            {...fadeIn}
                            className="bg-slate-700 p-6 rounded-xl border border-slate-600"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-yellow-400">
                                    Advanced Problem Solving
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">
                                March - August
                            </p>
                            <p className="text-gray-300 mb-4">
                                Focus on advanced skills, arithmetic,
                                out-of-the-box thinking, and STEM-focused
                                preparation with introduction to TJ-specific
                                components.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        Critical thinking and logical reasoning
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        STEM thinking skills development
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        Introduction to SIS and Problem-Solving
                                        Essays
                                    </span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Phase 3 */}
                        <motion.div
                            {...fadeIn}
                            className="bg-slate-700 p-6 rounded-xl border border-slate-600"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-yellow-400">
                                    Mock Testing & Reviews
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">
                                September - November
                            </p>
                            <p className="text-gray-300 mb-4">
                                Rigorous mock testing and targeted revisions to
                                prepare for real test environments with focus on
                                AOS/AET exams.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        6-8 mock tests replicating exam format
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        Time management and test-taking
                                        strategies
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        Detailed feedback and weakness analysis
                                    </span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Phase 4 */}
                        <motion.div
                            {...fadeIn}
                            className="bg-slate-700 p-6 rounded-xl border border-slate-600 relative"
                        >
                            <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-bl-lg">
                                TJ ONLY
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                                    4
                                </div>
                                <h3 className="text-xl font-bold text-yellow-400">
                                    TJ-Specific Preparation
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">
                                November - January
                            </p>
                            <p className="text-gray-300 mb-4">
                                Exclusive to TJ aspirants, focusing on unique
                                components of TJHSST admissions process.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        Intensive SIS short-answer practice
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        Problem-Solving Essay training
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-400 mt-1">
                                        •
                                    </span>
                                    <span className="text-gray-300">
                                        Holistic evaluation criteria alignment
                                    </span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Program */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-6 font-poppins">
                            Why Choose{" "}
                            <span className="text-yellow-400">
                                Our Program?
                            </span>
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
                                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <h4 className="text-lg font-bold mb-3 text-yellow-400">
                                    {item.title}
                                </h4>
                                <p className="text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-800 border-t border-slate-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-poppins">
                            Ready to Begin Your{" "}
                            <span className="text-yellow-400">
                                Preparation?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join our comprehensive prep program and give
                            yourself the best chance of success in gaining
                            admission to these prestigious programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/sign-up"
                                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                                Enroll Now
                            </Link>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                            >
                                Schedule Consultation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
