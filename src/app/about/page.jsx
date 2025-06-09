"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Target, Award, Clock } from "lucide-react";

export default function AboutUsPage() {
    const teamMembers = [
        {
            name: "Aman A.",
            role: "Founder / Executive Director",
            image: "/img/aman.webp",
            description:
                "SAT expert since 2007 with extensive experience in test prep and mentoring students to achieve their dream schools. Focuses on building strong subject foundations.",
        },
        {
            name: "Brian N.",
            role: "Biology Coach",
            image: "/img/profile-placeholder.webp",
            description:
                "Ivy League graduate specializing in AP Biology since 2005. Expert in detailed exam strategies and helping students master complex concepts.",
        },
        {
            name: "Danny F.",
            role: "Assistant Teacher",
            image: "/img/profile-placeholder.webp",
            description:
                "Mechanical Engineering graduate who connects well with students. Specializes in advanced math, science, and time management techniques.",
        },
    ];

    const stats = [
        { icon: Award, number: "90%+", label: "Academy Qualification Rate" },
        { icon: Clock, number: "20+", label: "Years Teaching Experience" },
        { icon: Users, number: "100s", label: "Students Helped" },
        { icon: Target, number: "100%", label: "Personalized Approach" },
    ];

    return (
        <div className="min-h-screen bg-slate-900 font-inter">
            {/* Breadcrumb */}
            <div className="bg-slate-800 border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-sm text-gray-400">
                        <Link
                            href="/"
                            className="hover:text-yellow-400 transition-colors"
                        >
                            Home
                        </Link>
                        <span className="mx-2">›</span>
                        <span className="text-yellow-400">About Us</span>
                    </p>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-poppins">
                            About{" "}
                            <span className="text-yellow-400">
                                Coherence Learning
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Personalized education that breaks the "one size
                            fits all" model, helping students reach their full
                            potential.
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                        {/* Left Content */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="space-y-4 text-gray-300">
                                <p className="text-lg leading-relaxed">
                                    We specialize in small class instruction
                                    with multiple problem-solving strategies
                                    tailored to each student's unique learning
                                    style.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Our expertise spans PSAT/SAT preparation, AP
                                    class support, essay guidance, and college
                                    readiness—with over 90% of students
                                    qualifying for Loudoun County's prestigious
                                    Academy programs.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    From elementary to high school, we offer
                                    flexible courses that help students focus,
                                    collaborate, and master concepts often
                                    overlooked during regular school hours.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link
                                    href="/programs"
                                    className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    View Our Programs
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/img/about-1.webp"
                                    alt="Teacher with students in classroom"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-yellow-400/50 transition-all duration-300 group">
                                    <div className="flex justify-center mb-4">
                                        <div className="p-3 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors duration-300">
                                            <stat.icon className="h-6 w-6 text-yellow-400" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-300 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Our Goal Section */}
            <section className="py-16 bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Image */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/img/about-2.webp"
                                    alt="Team collaboration - hands together"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                            </div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <span className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4 font-semibold px-3 py-1 rounded-full text-sm">
                                    Our Mission
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-poppins">
                                    Unlocking Every Student's{" "}
                                    <span className="text-yellow-400">
                                        Potential
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-4 text-gray-300">
                                <p className="text-lg leading-relaxed">
                                    Every child deserves the opportunity to
                                    excel. Whether a student needs 100 points or
                                    300+ points to reach their target, we bridge
                                    any gap to give them the success they've
                                    earned through hard work.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Our goal is simple: ensure no academy or
                                    university door remains closed to our
                                    students. We provide the tools, strategies,
                                    and support needed to turn academic dreams
                                    into reality.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="/our-methodology"
                                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold group transition-all duration-300"
                                >
                                    Learn About Our Methodology
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 lg:py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4 font-semibold px-3 py-1 rounded-full text-sm">
                            Our Expert Team
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-poppins">
                            Learn From{" "}
                            <span className="text-yellow-400">The Best</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Meet our experienced educators who are passionate
                            about helping students achieve their academic goals.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-yellow-400/50 transition-all duration-300 text-center h-full">
                                    <div className="mb-6">
                                        <div className="relative w-32 h-32 mx-auto mb-4">
                                            <Image
                                                src={
                                                    member.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={`${member.name} - ${member.role}`}
                                                fill
                                                className="rounded-full object-cover shadow-lg"
                                                sizes="128px"
                                            />
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        <p className="text-sm text-yellow-400 font-semibold mb-2">
                                            {member.role}
                                        </p>
                                        <h3 className="text-xl font-bold text-white mb-4 font-poppins">
                                            {member.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
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
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-poppins">
                            Ready to Start Your Journey?
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg">
                            Join hundreds of students who have achieved their
                            academic goals with our personalized approach.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/sign-up"
                                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                                Get Started Today
                            </Link>
                            <Link
                                href="/schedule"
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
