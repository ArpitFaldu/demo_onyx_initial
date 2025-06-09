"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SATvsACTPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white font-inter">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 relative overflow-hidden">
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
                            Choose Your Path
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins">
                            SAT <span className="text-yellow-400">vs</span> ACT
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Understanding the key differences to make the right
                            choice for your college admissions journey
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-12 bg-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-slate-700 p-1 rounded-xl border border-slate-600">
                                <Image
                                    src="/img/sat-act-1.png"
                                    alt="Map showing SAT vs ACT popularity by state"
                                    width={500}
                                    height={400}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-2 text-center">
                                Based on 2023 data: Blue = SAT, Red = ACT
                                Preference
                            </p>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold mb-4 font-poppins">
                                Understanding the SAT & ACT in 2025
                            </h2>
                            <p className="text-gray-300 mb-6">
                                As both tests transition to digital formats,
                                your choice between SAT and ACT can
                                significantly impact your college application
                                strategy. While both are widely accepted, they
                                differ in format, content, and difficulty.
                            </p>

                            <div className="bg-slate-700 p-6 rounded-lg border border-slate-600">
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">
                                    Similarities
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400 mt-1">
                                            •
                                        </span>
                                        <span className="text-gray-300">
                                            <strong>Digital Formats:</strong>{" "}
                                            Both available digitally by Spring
                                            2025
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400 mt-1">
                                            •
                                        </span>
                                        <span className="text-gray-300">
                                            <strong>College Acceptance:</strong>{" "}
                                            Equally recognized by U.S. colleges
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400 mt-1">
                                            •
                                        </span>
                                        <span className="text-gray-300">
                                            <strong>Content Focus:</strong> Both
                                            test reading, grammar, and math
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-400 mt-1">
                                            •
                                        </span>
                                        <span className="text-gray-300">
                                            <strong>
                                                No Guessing Penalty:
                                            </strong>{" "}
                                            Answer all questions on both tests
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-6 font-poppins text-center">
                            Side-by-Side{" "}
                            <span className="text-yellow-400">Comparison</span>
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse rounded-lg overflow-hidden">
                                <thead>
                                    <tr className="bg-slate-700">
                                        <th className="border border-slate-600 px-4 py-3 text-left text-yellow-400">
                                            Feature
                                        </th>
                                        <th className="border border-slate-600 px-4 py-3 text-left text-yellow-400">
                                            Digital SAT
                                        </th>
                                        <th className="border border-slate-600 px-4 py-3 text-left text-yellow-400">
                                            Digital ACT
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-slate-800">
                                        <td className="border border-slate-600 px-4 py-3 font-bold">
                                            Sections
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            Reading & Writing, Math
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            English, Math, Reading, Optional
                                            Science
                                        </td>
                                    </tr>
                                    <tr className="bg-slate-700">
                                        <td className="border border-slate-600 px-4 py-3 font-bold">
                                            Test Length
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            ~2 hours 14 minutes
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            ~2 hours 5 minutes (core sections)
                                        </td>
                                    </tr>
                                    <tr className="bg-slate-800">
                                        <td className="border border-slate-600 px-4 py-3 font-bold">
                                            Science Section
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            Integrated into Reading/Math
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            Separate Science section (now
                                            optional)
                                        </td>
                                    </tr>
                                    <tr className="bg-slate-700">
                                        <td className="border border-slate-600 px-4 py-3 font-bold">
                                            Math Calculator
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            Built-in Desmos calculator
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            Built-in calculator for Math section
                                        </td>
                                    </tr>
                                    <tr className="bg-slate-800">
                                        <td className="border border-slate-600 px-4 py-3 font-bold">
                                            Scoring
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            400-1600
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            1-36 (composite score)
                                        </td>
                                    </tr>
                                    <tr className="bg-slate-700">
                                        <td className="border border-slate-600 px-4 py-3 font-bold">
                                            Timing Per Question
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            More time per question
                                        </td>
                                        <td className="border border-slate-600 px-4 py-3">
                                            Faster-paced
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Who Should Take Which Test */}
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
                            Which Test is{" "}
                            <span className="text-yellow-400">
                                Right for You?
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* SAT Section */}
                        <motion.div
                            {...fadeIn}
                            className="bg-slate-700 p-8 rounded-xl border border-slate-600 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 -rotate-45 translate-x-16 -translate-y-16"></div>
                                <div className="absolute top-3 right-3 text-xs font-bold text-slate-900 rotate-45">
                                    SAT
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-yellow-400/10 rounded-lg">
                                    <Image
                                        src="/img/sat-act-2.png"
                                        alt="SAT test booklet"
                                        width={60}
                                        height={60}
                                        className="rounded"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold">
                                    Choose the SAT if you:
                                </h3>
                            </div>

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Prefer{" "}
                                        <strong>more time per question</strong>{" "}
                                        to analyze and think critically
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Are <strong>strong in algebra</strong>{" "}
                                        and problem-solving
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Do not want to worry about a{" "}
                                        <strong>Science</strong> section
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-yellow-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Are applying to{" "}
                                        <strong>Ivy League</strong> or East/West
                                        Coast schools
                                    </p>
                                </li>
                            </ul>
                        </motion.div>

                        {/* ACT Section */}
                        <motion.div
                            {...fadeIn}
                            className="bg-slate-700 p-8 rounded-xl border border-slate-600 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 -rotate-45 translate-x-16 -translate-y-16"></div>
                                <div className="absolute top-3 right-3 text-xs font-bold text-white rotate-45">
                                    ACT
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-400/10 rounded-lg">
                                    <Image
                                        src="/img/sat-act-3.png"
                                        alt="ACT logo and computer"
                                        width={60}
                                        height={60}
                                        className="rounded"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold">
                                    Choose the ACT if you:
                                </h3>
                            </div>

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-blue-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-blue-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Can{" "}
                                        <strong>
                                            work quickly under time pressure
                                        </strong>{" "}
                                        and answer more questions rapidly
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-blue-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-blue-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Prefer straightforward questions over
                                        complex reasoning-based ones
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-blue-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-blue-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Have strong{" "}
                                        <strong>
                                            data analysis and scientific
                                            reasoning skills
                                        </strong>
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-8 h-8 flex items-center justify-center bg-blue-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-4 w-4 text-blue-400" />
                                    </div>
                                    <p className="text-gray-300">
                                        Are considering{" "}
                                        <strong>
                                            Midwestern or Southern universities
                                        </strong>
                                    </p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Tests Matter */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 p-8 rounded-xl border border-slate-700"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                                Why These Tests Matter
                            </h3>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-5 w-5 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Stand Out</p>
                                        <p className="text-gray-300">
                                            High scores impress colleges and
                                            boost merit aid chances
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-5 w-5 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold">
                                            Prove Readiness
                                        </p>
                                        <p className="text-gray-300">
                                            Highlight your critical thinking and
                                            problem-solving skills
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="min-w-10 h-10 flex items-center justify-center bg-yellow-400/10 rounded-full mt-1">
                                        <CheckCircle className="h-5 w-5 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Your Edge</p>
                                        <p className="text-gray-300">
                                            Even in test-optional environments,
                                            strong scores can differentiate your
                                            application
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
                            className="bg-slate-800 p-8 rounded-xl border border-slate-700"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                                The Digital Transition
                            </h3>

                            <p className="text-gray-300 mb-6">
                                Both tests are evolving to meet modern
                                educational needs. The SAT is now fully digital,
                                while the ACT will offer digital options
                                starting Spring 2025.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                                    <p className="font-bold mb-1">
                                        Digital SAT (Already Available)
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        Fully online, adaptive format with more
                                        time per question (1 min 11 sec) and
                                        integrated calculator
                                    </p>
                                </div>

                                <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                                    <p className="font-bold mb-1">
                                        Digital ACT (Coming 2025)
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        Paper or digital options with faster
                                        pace (42 sec/question in English) and
                                        optional Science section
                                    </p>
                                </div>
                            </div>
                        </motion.div>
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
                            Not Sure Which Test to{" "}
                            <span className="text-yellow-400">Take?</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Our diagnostic approach pinpoints your strengths. We
                            craft custom plans for both tests to help you decide
                            which format suits you best.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/sign-up"
                                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                                Take a Practice Test
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
        </div>
    );
}
