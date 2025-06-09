"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const subjects = [
    {
        title: "Algebra I & II",
        icon: "/img/icon-algebra.webp",
    },
    {
        title: "Geometry",
        icon: "/img/icon-geometry.webp",
    },
    {
        title: "Pre-Calculus/Math Analysis",
        icon: "/img/icon-pre-calculus.webp",
    },
    {
        title: "AP Calculus",
        icon: "/img/icon-calculus.webp",
    },
    {
        title: "AP Chemistry",
        icon: "/img/icon-chemistry.webp",
    },
    {
        title: "AP Physics",
        icon: "/img/icon-physics.webp",
    },
    {
        title: "AP Biology",
        icon: "/img/icon-biology.webp",
    },
    {
        title: "AP Economics",
        icon: "/img/icon-economics.webp",
    },
    {
        title: "AP World History",
        icon: "/img/icon-history.webp",
    },
    {
        title: "AP US History",
        icon: "/img/icon-us-history.webp",
    },
    {
        title: "Language Arts AP Language",
        icon: "/img/icon-arts.webp",
    },
    {
        title: "AP Government",
        icon: "/img/icon-government.webp",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
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

export default function SubjectTutoring() {
    return (
        <section className="py-20 px-5 md:px-10 lg:px-20 bg-slate-800 text-white">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl text-center font-semibold mb-16">
                    Subject Tutoring
                </h2>
            </motion.div>

            {/* Description */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p className="text-base text-center max-w-4xl mx-auto text-gray-400 mb-24 leading-relaxed">
                    GPA is the most weighted part of college admittance. While
                    strengthening our students on the Test Prep courses, we
                    offer specific curriculum-centered classes for high school
                    and middle schools students. The classes provide
                    student-centered instruction in all the following subjects.
                </p>
            </motion.div>

            {/* Subjects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 justify-center">
                    {subjects.map((subject, index) => (
                        <div key={index} className="col-span-1">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="flex flex-col items-center text-center pt-8 pb-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5">
                                    {/* Icon Circle */}
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <Image
                                            src={
                                                subject.icon ||
                                                "/placeholder.svg"
                                            }
                                            alt={subject.title}
                                            width={400}
                                            height={400}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>

                                    {/* Subject Title */}
                                    <h3 className="text-lg font-semibold text-white min-h-12 flex items-center text-center">
                                        {subject.title}
                                    </h3>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
