"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@mui/material";
import Link from "next/link";

const features = [
    {
        title: "SAT/ACT/PSAT",
        desc: "The Standard test for College admittance, the higher the score the more options",
        image: "/images/sat.jpg",
        href: "/test-prep-sat-act",
    },
    {
        title: "Academic Tutoring",
        desc: "For AP classes, weekly assignments, and everything in between, we have a variety of tutors to help out any night",
        image: "/images/tutoring.jpg",
        href: "/academic-tutoring",
    },
    {
        title: "TJ & ACL Prep",
        desc: "Fostering creativity and a desire to learn is important to keeping children focused as they reach for harder skills",
        image: "/images/prep.jpg",
        href: "/tj-aos-aet-prep",
    },
    {
        title: "Summer Courses",
        desc: "Driven students need to put their best foot forward; we cover every portion of the Northern Virginia magnet",
        image: "/images/summer.jpg",
        href: "/summer-courses",
    },
    {
        title: "General Counselling",
        desc: "Whether it's academic stress, time management, or motivation, our counselors help students stay balanced and focused.",
        image: "/images/counselling.jpg",
        href: "/stem",
    },
    {
        title: "College Advising",
        desc: "From building the perfect college list to crafting standout essays, we guide students through every step of the admissions process.",
        image: "/images/advising.jpg",
        href: "college-advising",
    },
];

// Framer animation variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function FeatureSection() {
    return (
        <section id="features" className="py-16 px-4 bg-white">
            <motion.div
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center items-stretch"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {features.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="flex flex-col items-center"
                        variants={cardVariants}
                    >
                        <div className="w-52 h-52 relative mb-4">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={400}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                                className="rounded-full"
                            />
                        </div>
                        <h3 className="text-lg font-semibold underline h-8">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2 mb-4 px-2 h-20">
                            {item.desc}
                        </p>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            <Link
                                href={item.href}
                                className="flex flex-col-2 items-center"
                            >
                                Learn More <ChevronRight size={40} />
                            </Link>
                        </Button>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
