"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Calendar,
    Clock,
    CheckCircle,
    Calculator,
    BookOpen,
} from "lucide-react";

export default function DigitalSATPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white font-inter">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] flex items-center justify-start overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/1.jpg")',
                        filter: "brightness(0.4) blur(2px)",
                    }}
                />

                {/* Animated Gradient Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/50"
                />

                {/* Content */}
                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4 font-semibold px-3 py-1 rounded-full text-sm">
                            Now Available
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins">
                            Digital <span className="text-yellow-400">SAT</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mb-8">
                            Building critical thinking, writing, and
                            comprehension skills for the next generation of
                            standardized testing
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Link
                                    href="/sign-up"
                                    className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    Sign Up
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Info Section */}
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
                            Digital SAT:{" "}
                            <span className="text-yellow-400">
                                Everything You Need to Know
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            The College Board's adaptive online SAT is now the
                            standard for college admissions testing
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                icon: Calendar,
                                title: "Spring 2024",
                                text: "Digital SAT fully replaced paper tests",
                            },
                            {
                                icon: Clock,
                                title: "134 Minutes",
                                text: "Total test duration (2h 14m)",
                            },
                            {
                                icon: CheckCircle,
                                title: "Adaptive",
                                text: "Test adjusts to your performance",
                            },
                            {
                                icon: Calculator,
                                title: "Calculator",
                                text: "Allowed for all math questions",
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
                                className="bg-slate-700 rounded-xl p-6 border border-slate-600 hover:border-yellow-400/50 transition-all duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-yellow-400/10 rounded-lg">
                                        <item.icon className="h-6 w-6 text-yellow-400" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-center mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-center text-sm">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline & Structure Section */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* When Will It Affect Me */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 p-8 rounded-xl border border-slate-700"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                                When Will It Affect Me?
                            </h3>

                            <div className="space-y-6">
                                <p className="text-gray-300">
                                    As of <strong>spring 2024</strong>, the{" "}
                                    <strong>Digital SAT</strong> has replaced
                                    the traditional paper-based SAT. The last
                                    paper SAT was administered in{" "}
                                    <strong>December 2023</strong>.
                                </p>

                                <div className="space-y-4">
                                    <p className="text-gray-300 font-semibold">
                                        This change affects:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                                <CheckCircle className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <p className="text-gray-300">
                                                <strong>
                                                    High school juniors in 2023
                                                </strong>{" "}
                                                taking the SAT during 2024—only
                                                the Digital SAT is available
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                                <CheckCircle className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <p className="text-gray-300">
                                                <strong>
                                                    Freshmen and sophomores in
                                                    2023
                                                </strong>
                                                —they will only take the Digital
                                                SAT throughout high school
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* How Is It Structured */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 p-8 rounded-xl border border-slate-700"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                                How Is It Structured?
                            </h3>

                            <div className="space-y-6">
                                <p className="text-gray-300">
                                    The Digital SAT is <strong>adaptive</strong>{" "}
                                    and consists of two main sections:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-slate-700 p-5 rounded-lg border border-slate-600">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-yellow-400/10 rounded-lg">
                                                <BookOpen className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <h4 className="text-lg font-bold">
                                                Reading & Writing
                                            </h4>
                                        </div>
                                        <p className="text-gray-300 text-sm">
                                            64 minutes total
                                        </p>
                                        <p className="text-gray-300 text-sm">
                                            Shorter passages with greater
                                            emphasis on vocabulary
                                        </p>
                                    </div>

                                    <div className="bg-slate-700 p-5 rounded-lg border border-slate-600">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-yellow-400/10 rounded-lg">
                                                <Calculator className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <h4 className="text-lg font-bold">
                                                Mathematics
                                            </h4>
                                        </div>
                                        <p className="text-gray-300 text-sm">
                                            70 minutes total
                                        </p>
                                        <p className="text-gray-300 text-sm">
                                            Calculator allowed throughout, fewer
                                            topics tested
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yellow-400/10 p-5 rounded-lg border border-yellow-400/20">
                                    <h4 className="text-lg font-bold mb-2">
                                        Scoring Based on Adaptation
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span className="text-gray-300">
                                                If you don't reach the harder
                                                second module:{" "}
                                                <strong>800-1200 range</strong>
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">
                                                •
                                            </span>
                                            <span className="text-gray-300">
                                                If you do reach the harder
                                                second module:{" "}
                                                <strong>1200-1600 range</strong>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Changes Section */}
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
                            How Has the SAT{" "}
                            <span className="text-yellow-400">Changed?</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* English Section Changes */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-slate-700 p-6 rounded-lg border border-slate-600"
                        >
                            <h3 className="text-xl font-bold mb-4 text-yellow-400">
                                Changes in Reading & Writing
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Shorter passages focused on single
                                        topics
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Greater emphasis on vocabulary in
                                        context
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Tests connection with short paragraphs,
                                        poems, or lists rather than long
                                        passages
                                    </p>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Math Section Changes */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-slate-700 p-6 rounded-lg border border-slate-600"
                        >
                            <h3 className="text-xl font-bold mb-4 text-yellow-400">
                                Changes in Mathematics
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Fewer topics tested with focus on
                                        algebra and problem-solving
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        No imaginary or complex numbers
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Simplified word problems for clarity
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Calculator allowed throughout the entire
                                        math section
                                    </p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-900 border-t border-slate-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-poppins">
                            Ready to{" "}
                            <span className="text-yellow-400">Excel</span> on
                            the Digital SAT?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Our expert-led prep courses provide tailored
                            strategies, digital practice tests, and personalized
                            guidance to help you master the new format and
                            achieve top scores.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/sign-up"
                                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                                Start Your Digital SAT Prep
                            </Link>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                            >
                                Schedule a Consultation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Why These Tests Matter Section - Moved to the bottom for better flow */}
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
                            Why These Tests{" "}
                            <span className="text-yellow-400">Matter</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Standardized tests like the SAT and ACT are crucial
                            for college admissions and scholarship
                            opportunities.
                        </p>
                        <p className="text-gray-300">
                            Our proven methodology has helped over 90% of
                            students qualify for prestigious Academy programs,
                            with an average SAT score improvement of 200+
                            points.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
