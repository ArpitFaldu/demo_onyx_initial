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
            icon: <Calculator size={24} />,
            link: "/digital-sat",
            color: "bg-blue-600",
            hoverColor: "hover:bg-blue-700",
        },
        {
            id: "digital-act",
            title: "Digital ACT",
            description:
                "Prepare for Spring 2025's enhanced format with optional Science section and comprehensive strategies for maximum score potential.",
            icon: <BookOpen size={24} />,
            link: "/act",
            color: "bg-slate-700",
            hoverColor: "hover:bg-slate-600",
        },
        {
            id: "sat-vs-act",
            title: "SAT vs ACT Guidance",
            description:
                "Our diagnostic approach identifies your strengths to determine whether SAT's analytical focus or ACT's faster pace suits you better.",
            icon: <Users size={24} />,
            link: "/sat-vs-act",
            color: "bg-slate-700",
            hoverColor: "hover:bg-slate-600",
        },
        {
            id: "tj-aos-prep",
            title: "TJ & AOS/AET Prep",
            description:
                "Four-phase comprehensive preparation for elite academy admissions with over 50% success rate for year-long students.",
            icon: <GraduationCap size={24} />,
            link: "/tj-aos-aet-prep",
            color: "bg-yellow-500",
            hoverColor: "hover:bg-yellow-600",
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
        <section id="features" className="py-16 bg-slate-900 text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        The Coherence Learning Test Prep Advantage
                    </h2>
                    <p className="text-lg max-w-4xl mx-auto leading-relaxed text-gray-300">
                        We take the dark mystery out of standardized testing.
                        Our small class sizes, exceptional instructors, and
                        flexible learning approaches ensure that each student
                        receives the individual attention and personalized
                        teaching methods that are essential for mastery.
                    </p>
                </div>

                {/* Programs Grid - Professional Design */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {programs.map((program) => (
                        <motion.div
                            key={program.id}
                            className="flex flex-col h-full bg-slate-800 rounded-lg border border-slate-700 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-slate-600"
                            variants={itemVariants}
                        >
                            <div className="p-6 flex-grow">
                                <div className="flex items-start mb-5">
                                    <div
                                        className={`flex-shrink-0 p-3 rounded-lg mr-4 ${program.color} text-white shadow-md`}
                                    >
                                        {program.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        {program.title}
                                    </h3>
                                </div>

                                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                                    {program.description}
                                </p>
                            </div>

                            <div className="px-6 pb-6 mt-auto">
                                <Link
                                    href={program.link}
                                    className={`inline-flex items-center justify-center w-full px-6 py-3 ${program.color} ${program.hoverColor} text-white text-sm font-medium rounded-md transition-colors duration-200`}
                                >
                                    LEARN MORE
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Stats Section - More Professional */}
                <motion.div
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="p-6 rounded-lg bg-slate-800 border border-slate-700 text-center">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">
                            90%+
                        </div>
                        <div className="text-white font-semibold mb-1">
                            Success Rate
                        </div>
                        <div className="text-sm text-gray-300">
                            Year-long students admitted to elite academies
                        </div>
                    </div>
                    <div className="p-6 rounded-lg bg-slate-800 border border-slate-700 text-center">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">
                            1:6
                        </div>
                        <div className="text-white font-semibold mb-1">
                            Class Size Ratio
                        </div>
                        <div className="text-sm text-gray-300">
                            Maximum students per class for personalized
                            attention
                        </div>
                    </div>
                    <div className="p-6 rounded-lg bg-slate-800 border border-slate-700 text-center">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">
                            15+
                        </div>
                        <div className="text-white font-semibold mb-1">
                            Years Experience
                        </div>
                        <div className="text-sm text-gray-300">
                            Proven track record in test preparation excellence
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
