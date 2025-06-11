"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ComingSoonFeature } from "@/components/ui/coming-soon-feature";

const features = [
    {
        icon: (
            <div className="relative">
                <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2c0-1.33 2.67-2 4-2s4 .67 4 2v2zm3-8h-2V9h2v3zm0-4h-2V6h2v2z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-700">∑</span>
                </div>
            </div>
        ),
        title: "We have Digital SAT Expertise",
        description:
            "Our comprehensive Digital SAT program focuses on the new adaptive format, integrated calculator use, and shortened test duration. We provide targeted strategies, practice tests, and personalized guidance to help students master the digital interface and achieve top scores on this modernized assessment.",
        link: "/digital-sat",
    },
    {
        icon: (
            <div className="relative">
                <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-800">A</span>
                </div>
            </div>
        ),
        title: "We have ACT Preparation Excellence",
        description:
            "Our expert-led ACT courses prepare students for both traditional and digital formats. With the upcoming changes in 2025, including optional Science sections and enhanced digital features, we ensure students are ready for any version of the test with proven strategies and comprehensive practice materials.",
        link: "/act",
    },
    {
        icon: (
            <div className="relative">
                <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11.9l-2-2.91A2.99 2.99 0 0 0 7.54 8H5.46c-.8 0-1.49.59-1.42 1.37L6.5 16H9v6h2v-6h2v6h2z" />
                </svg>
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">vs</span>
                </div>
            </div>
        ),
        title: "We have Personalized Test Selection",
        description:
            "Unsure whether to take the SAT or ACT? Our diagnostic approach analyzes each student's strengths, learning style, and college goals to determine the optimal test choice. We provide detailed comparisons and practice opportunities to ensure students select the test where they'll perform best.",
        link: "/sat-vs-act",
    },
    {
        icon: (
            <div className="relative">
                <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">TJ</span>
                </div>
            </div>
        ),
        title: "We have Specialized School Prep",
        description:
            "Our proven 4-phase preparation program for Thomas Jefferson High School and Academies of Loudoun entrance exams has achieved over 50% success rates. We build critical thinking, problem-solving, and analytical skills essential for these competitive admissions processes.",
        link: "/tj-aos-aet-prep",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.6,
        },
    },
};

const iconVariants = {
    hover: {
        scale: 1.1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
        },
    },
};

const buttonVariants = {
    hover: {
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(15, 57, 99, 0.3)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
        },
    },
    tap: {
        scale: 0.98,
    },
};

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="py-16 md:py-24 bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        The Coherence Learning Test Prep Advantage
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
                            We take the guesswork out of test preparation. Our
                            data-driven approach and small class sizes guarantee
                            that each student receives the individual attention,
                            personalized teaching approach, and flexible
                            learning pace that are essential for mastery.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="text-center group"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <motion.div
                                    className="relative w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                                    {feature.icon}
                                </motion.div>
                            </div>

                            {/* Title */}
                            <motion.h3
                                className="text-lg font-bold text-[#0f3963] mb-6 group-hover:text-[#1a4b7c] transition-colors duration-300"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                {feature.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-gray-700 mb-8 leading-relaxed text-sm px-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                {feature.description}
                            </motion.p>

                            {/* Learn More Button */}
                            <motion.div variants={buttonVariants}>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-2 border-[#0f3963] text-[#0f3963] hover:bg-[#0f3963] hover:text-white px-8 py-2 font-semibold transition-all duration-300 rounded-md group-hover:border-[#1a4b7c]"
                                >
                                    <Link href={feature.link}>LEARN MORE</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.p
                        className="text-gray-600 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        Ready to unlock your potential? Join thousands of
                        students who have achieved their goals with Coherence
                        Learning.
                    </motion.p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                    >
                        <Button
                            asChild
                            className="bg-gradient-to-r from-[#0f3963] to-[#1a4b7c] hover:from-[#1a4b7c] hover:to-[#0f3963] text-white p-8 text-lg font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <Link href="/sign-up">
                                <ComingSoonFeature>
                                    Get Started Today
                                </ComingSoonFeature>
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
