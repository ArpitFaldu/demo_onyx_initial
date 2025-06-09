"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, CheckCircle, BookOpen } from "lucide-react";

export default function ACTPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    const staggerContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const listItem = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white font-inter">
            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,204,0,0.1),transparent_50%)]"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4 font-semibold px-3 py-1 rounded-full text-sm">
                            Coming Spring 2025
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins">
                            The Digital{" "}
                            <span className="text-yellow-400">ACT</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Everything you need to know about the modernized ACT
                            for the digital age
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    >
                        {[
                            {
                                icon: Calendar,
                                title: "Spring 2025",
                                text: "Digital testing option launches",
                            },
                            {
                                icon: Clock,
                                title: "2h 5m",
                                text: "Shortened test duration",
                            },
                            {
                                icon: CheckCircle,
                                title: "Optional",
                                text: "Science section now optional",
                            },
                            {
                                icon: BookOpen,
                                title: "Flexible",
                                text: "Digital or paper format",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-yellow-400/10 rounded-lg">
                                        <item.icon className="h-6 w-6 text-yellow-400" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-center mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-center text-sm">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Key Changes Section */}
            <section className="py-16 bg-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-6 font-poppins">
                            Key Changes in the{" "}
                            <span className="text-yellow-400">Digital ACT</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-700 p-6 rounded-lg border border-slate-600"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-yellow-400">
                                        Section Timings
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>English:</strong> 35
                                                minutes | 50 questions
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>Math:</strong> 50
                                                minutes | 45 questions
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>Reading:</strong> 40
                                                minutes | 36 questions
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>Science:</strong> 40
                                                minutes | 40 questions
                                                (Optional)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>Writing:</strong> 40
                                                minutes | 1 essay (Optional)
                                            </span>
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-700 p-6 rounded-lg border border-slate-600"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-yellow-400">
                                        Benefits
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>
                                                    Enhanced Accessibility:
                                                </strong>{" "}
                                                Screen readers, text-to-speech,
                                                answer masking
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>
                                                    Better Experience:
                                                </strong>{" "}
                                                Built-in calculator and
                                                user-friendly tools
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>
                                                    More Flexibility:
                                                </strong>{" "}
                                                Choose format that suits your
                                                test-taking style
                                            </span>
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>

                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-700 p-6 rounded-lg border border-slate-600"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-yellow-400">
                                        Rollout Timeline
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full">
                                                <Calendar className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <div>
                                                <p className="font-bold">
                                                    April 5, 2025
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    Digital testing option
                                                    launches
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full">
                                                <Calendar className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <div>
                                                <p className="font-bold">
                                                    July 12, 2025
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    Last paper test (current
                                                    format)
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full">
                                                <Calendar className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <div>
                                                <p className="font-bold">
                                                    September 13, 2025
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    All tests adopt enhanced
                                                    format
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full">
                                                <Calendar className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <div>
                                                <p className="font-bold">
                                                    Spring 2026
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    School-day testing updates
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-700 p-6 rounded-lg border border-slate-600"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-yellow-400">
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>
                                                    Optional Science:
                                                </strong>{" "}
                                                Students can choose whether to
                                                include this section
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>Format Choice:</strong>{" "}
                                                Digital or paper options
                                                available through Fall 2025
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span>
                                                <strong>Scoring:</strong>{" "}
                                                Composite score (1-36) based on
                                                English, Math, and Reading
                                            </span>
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Preparation Section */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-6 font-poppins">
                            Preparing for the{" "}
                            <span className="text-yellow-400">Digital ACT</span>
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-slate-800 p-8 rounded-xl border border-slate-700"
                            >
                                <h3 className="text-2xl font-bold mb-4">
                                    Why It Matters for College
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    The Digital ACT maintains its importance in
                                    college admissions. Strong scores can
                                    highlight your academic readiness and unlock
                                    financial aid opportunities, even as
                                    test-optional policies grow.
                                </p>
                                <p className="text-gray-300">
                                    With fewer questions and more time per
                                    answer (48 seconds in English vs. 36
                                    before), the new format reduces stress and
                                    helps you showcase your best abilities.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-slate-800 p-8 rounded-xl border border-slate-700"
                            >
                                <h3 className="text-2xl font-bold mb-4">
                                    How to Prepare
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                            <CheckCircle className="h-5 w-5 text-yellow-400" />
                                        </div>
                                        <div>
                                            <p className="font-bold">
                                                Practice Digital Format
                                            </p>
                                            <p className="text-gray-400">
                                                Get comfortable with online
                                                tools and test simulations
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                            <CheckCircle className="h-5 w-5 text-yellow-400" />
                                        </div>
                                        <div>
                                            <p className="font-bold">
                                                Stay Updated
                                            </p>
                                            <p className="text-gray-400">
                                                Follow ACT's official updates
                                                for the most current information
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                            <CheckCircle className="h-5 w-5 text-yellow-400" />
                                        </div>
                                        <div>
                                            <p className="font-bold">
                                                Take Diagnostics
                                            </p>
                                            <p className="text-gray-400">
                                                Test both formats to find your
                                                best fit—with or without Science
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
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
                            Get Ahead with{" "}
                            <span className="text-yellow-400">
                                Coherence Learning
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Our expert-led ACT prep courses provide tailored
                            strategies, digital practice tests, and personalized
                            guidance to help you master the new format and
                            achieve top scores.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/sign-up"
                                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                                Start Your Digital ACT Prep Today
                            </Link>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
