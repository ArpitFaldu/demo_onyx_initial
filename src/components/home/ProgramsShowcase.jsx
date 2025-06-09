"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator, BookOpen, Users, GraduationCap } from "lucide-react";

export default function TestPrepAdvantage() {
    const programs = [
        {
            id: "digital-sat",
            title: "Digital SAT",
            description:
                "Master the new adaptive format with integrated tools, more time per question, and focused strategies for the 2024 exam changes.",
            icon: <Calculator size={28} />,
            link: "/digital-sat",
            gradient: "from-blue-500 to-blue-600",
            shadowColor: "shadow-blue-500/25",
            glowColor: "group-hover:shadow-blue-500/40",
        },
        {
            id: "digital-act",
            title: "Digital ACT",
            description:
                "Prepare for Spring 2025's enhanced format with optional Science section and comprehensive strategies for maximum score potential.",
            icon: <BookOpen size={28} />,
            link: "/act",
            gradient: "from-green-500 to-green-600",
            shadowColor: "shadow-green-500/25",
            glowColor: "group-hover:shadow-green-500/40",
        },
        {
            id: "sat-vs-act",
            title: "SAT vs ACT Guidance",
            description:
                "Our diagnostic approach identifies your strengths to determine whether SAT's analytical focus or ACT's faster pace suits you better.",
            icon: <Users size={28} />,
            link: "/sat-vs-act",
            gradient: "from-purple-500 to-purple-600",
            shadowColor: "shadow-purple-500/25",
            glowColor: "group-hover:shadow-purple-500/40",
        },
        {
            id: "tj-aos-prep",
            title: "TJ & AOS/AET Prep",
            description:
                "Four-phase comprehensive preparation for elite academy admissions with over 50% success rate for year-long students.",
            icon: <GraduationCap size={28} />,
            link: "/tj-aos-aet-prep",
            gradient: "from-orange-500 to-orange-600",
            shadowColor: "shadow-orange-500/25",
            glowColor: "group-hover:shadow-orange-500/40",
        },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        The Coherence Learning Test Prep Advantage
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We take the dark mystery out of standardized testing.
                        Our small class sizes, exceptional instructors, and
                        flexible learning approaches ensure that each student
                        receives the individual attention and personalized
                        teaching methods that are essential for mastery.
                    </p>
                </div>

                {/* Programs Grid - Enhanced Design */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {programs.map((program) => (
                        <motion.div
                            key={program.id}
                            className="group flex flex-col md:flex-row md:items-start gap-6 p-6 rounded-xl hover:bg-gray-50/50 transition-all duration-300"
                            variants={itemVariants}
                        >
                            {/* Enhanced Icon Container */}
                            <div className="flex-shrink-0 self-center md:self-start">
                                <div className="relative">
                                    {/* Outer glow ring */}
                                    <div
                                        className={`absolute inset-0 w-24 h-24 bg-gradient-to-r ${program.gradient} rounded-2xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300`}
                                    ></div>

                                    {/* Main icon container */}
                                    <div
                                        className={`relative w-20 h-20 bg-gradient-to-r ${program.gradient} rounded-2xl flex items-center justify-center shadow-lg ${program.shadowColor} ${program.glowColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                                    >
                                        {/* Inner highlight */}
                                        <div className="absolute inset-1 bg-white/20 rounded-xl"></div>

                                        {/* Icon */}
                                        <div className="relative text-white drop-shadow-sm">
                                            {program.icon}
                                        </div>

                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Floating particles effect */}
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
                                    <div
                                        className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/80 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"
                                        style={{ animationDelay: "0.2s" }}
                                    ></div>
                                </div>
                            </div>

                            <div className="flex-grow">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center md:text-left group-hover:text-gray-900 transition-colors duration-200">
                                    {program.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center md:text-left">
                                    {program.description}
                                </p>

                                {/* Learn More Button */}
                                <div className="text-center md:text-left">
                                    <Link
                                        href={program.link}
                                        className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${program.gradient} text-white text-sm font-medium rounded-lg hover:shadow-lg ${program.glowColor} transition-all duration-200 transform hover:scale-105`}
                                    >
                                        LEARN MORE
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Stats Section */}
                <motion.div
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-lg transition-all duration-300">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                            50%+
                        </div>
                        <div className="text-gray-700 font-semibold mb-1">
                            Success Rate
                        </div>
                        <div className="text-sm text-gray-600">
                            Year-long students admitted to elite academies
                        </div>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 hover:shadow-lg transition-all duration-300">
                        <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2">
                            1:6
                        </div>
                        <div className="text-gray-700 font-semibold mb-1">
                            Class Size Ratio
                        </div>
                        <div className="text-sm text-gray-600">
                            Maximum students per class for personalized
                            attention
                        </div>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-lg transition-all duration-300">
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
                            15+
                        </div>
                        <div className="text-gray-700 font-semibold mb-1">
                            Years Experience
                        </div>
                        <div className="text-sm text-gray-600">
                            Proven track record in test preparation excellence
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
