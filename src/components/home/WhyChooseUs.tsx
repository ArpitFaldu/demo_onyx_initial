"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import OurMethodology from "./OurMethodology";

export default function WhyChooseUs() {
    return (
        <section className="bg-[#1E64C8] py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    {/* Left Side - Image */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-tr-[50px] sm:rounded-tr-[75px] lg:rounded-tr-[100px] overflow-hidden">
                                <Image
                                    src="/images/why-choose-us.webp"
                                    alt="Why Choose Us"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Text */}
                    <div className="order-1 lg:order-2 px-4 lg:px-8">
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
                                Why Choose Us
                            </h2>
                            <p className="text-white text-sm sm:text-base lg:text-lg mb-4 leading-relaxed">
                                Coherence Learning prides itself on being a
                                different kind of help for students.
                            </p>
                            <p className="text-white text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed">
                                Inspired by teachers who have seen the 'one size
                                fits all' model of teaching, we work to
                                understand the needs of each of our students,
                                offering only small class instruction and
                                multiple strategies for solving problems.
                            </p>
                            <p className="text-white text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed">
                                Our small-group sessions ensure students receive
                                the attention they deserve. We keep class sizes
                                low so instructors can tailor their teaching to
                                each student's learning pace and style.
                            </p>
                            <Button
                                variant="ghost"
                                className="text-white hover:text-white hover:bg-white/10 font-semibold text-base p-0 h-auto"
                            >
                                <Link href="/about">Read More</Link>
                                <span className="ml-2 text-lg">→</span>
                            </Button>
                        </motion.div>
                    </div>
                </div>
                <div className="px-5 md:px-10 lg:px-20">
                    <OurMethodology />
                </div>
            </div>
        </section>
    );
}
