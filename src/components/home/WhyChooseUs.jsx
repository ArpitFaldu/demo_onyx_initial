"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Target, BookOpen, Award } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.8,
        },
    },
};

const imageVariants = {
    hidden: {
        opacity: 0,
        x: -50,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 1,
        },
    },
};

const iconVariants = {
    hover: {
        scale: 1.1,
        rotate: 5,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
        },
    },
};

export default function AboutSection() {
    return (
        <section className="overflow-hidden">
            <div className="bg-gradient-to-br from-[#0f3963] via-[#1a4b7c] to-[#0f3963] py-12">
                <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-20"
                    >
                        {/* Why Choose Us Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Image Side */}
                            <motion.div
                                variants={imageVariants}
                                className="order-2 lg:order-1"
                            >
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#6a9bd1]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                    <div className="relative">
                                        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-tr-[60px] sm:rounded-tr-[80px] lg:rounded-tr-[100px] overflow-hidden shadow-2xl">
                                            <Image
                                                src="/images/why-choose-us.webp"
                                                alt="Why Choose Coherence Learning"
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f3963]/20 to-transparent"></div>
                                        </div>
                                        {/* Floating Elements */}
                                        <motion.div
                                            className="absolute -top-6 -right-6 w-16 h-16 bg-[#6a9bd1] rounded-full flex items-center justify-center shadow-lg"
                                            animate={{
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <Award className="w-8 h-8 text-white" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                variants={itemVariants}
                                className="order-1 lg:order-2 space-y-6"
                            >
                                <div className="space-y-4">
                                    <motion.div
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#6a9bd1]/80 rounded-full text-black text-sm font-medium"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                    >
                                        <Users className="w-4 h-4" />
                                        Personalized Learning
                                    </motion.div>
                                    <motion.h2
                                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.3,
                                            duration: 0.8,
                                        }}
                                    >
                                        Why Choose{" "}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a9bd1] to-[#8ab5e1]">
                                            Coherence Learning
                                        </span>
                                    </motion.h2>
                                </div>

                                <motion.div
                                    className="space-y-4 text-gray-200"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    <p className="text-lg leading-relaxed">
                                        Coherence Learning prides itself on
                                        being a different kind of help for
                                        students. Inspired by teachers who have
                                        seen the 'one size fits all' model of
                                        teaching, we work to understand the
                                        needs of each of our students, offering
                                        only small class instruction and
                                        multiple strategies for solving
                                        problems.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        Our small-group sessions ensure students
                                        receive the attention they deserve. We
                                        keep class sizes low so instructors can
                                        tailor their teaching to each student's
                                        learning pace and style.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                >
                                    <Button
                                        asChild
                                        className="bg-transparent border-2 border-[#6a9bd1] text-white hover:bg-[#6a9bd1] hover:text-[#0f3963] px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
                                    >
                                        <Link
                                            href="/about"
                                            className="flex items-center gap-2"
                                        >
                                            Read More
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Divider */}
                        <motion.div
                            className="flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#6a9bd1] to-transparent rounded-full"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
