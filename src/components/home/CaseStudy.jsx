"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb } from "lucide-react";

export default function CaseStudiesSection() {
    return (
        <section className="bg-[#f1c338] py-16 md:py-24">
            <div className="max-w-9xl mx-auto px-4 ">
                {/* Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f3963] mb-4">
                        Where will your passion take you?
                    </h2>
                    <div className="relative">
                        <p className="text-xl md:text-2xl text-[#0f3963] font-medium">
                            Discover the case studies
                        </p>
                        <div className="absolute bottom-0 left-0 w-48 h-0.5 bg-[#0f3963]"></div>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-3 lg:gap-6">
                    {/* Left Side - Image */}
                    <motion.div
                        className="order-2 lg:order-1 col-span-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl ">
                            <Image
                                src="/images/cornell.png"
                                alt="Cornell University Campus"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side - Case Study Card */}
                    <motion.div
                        className="order-1 lg:order-2 flex col-span-3 items-stretch"
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="bg-white rounded-lg p-8 md:p-10 shadow-xl w-full">
                            {/* Lightbulb Icons */}
                            <div className="flex gap-2 mb-8">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.6 + i * 0.1,
                                            duration: 0.3,
                                        }}
                                    >
                                        <Lightbulb className="w-6 h-6 text-[#f1c338] fill-current" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Case Study Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0f3963] mb-4">
                                    Lila
                                </h3>
                                <p className="text-lg md:text-xl text-[#0f3963] mb-6 font-medium">
                                    12th Grade Package | Cornell
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                                    Lila came to us for help with college
                                    applications, beginning in the summer before
                                    12th grade. She was a public school student
                                    with excellent grades and good academic
                                    rigor.
                                </p>
                                <Link
                                    href="/case-studies/lila"
                                    className="text-[#0f3963] font-semibold text-lg hover:text-[#1a4b7c] transition-colors duration-300 border-b-2 border-[#0f3963] hover:border-[#1a4b7c]"
                                >
                                    More details
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
