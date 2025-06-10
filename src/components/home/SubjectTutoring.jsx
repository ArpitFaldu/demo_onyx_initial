"use client";

import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const subjects = [
    {
        title: "Algebra I & II",
        icon: "/images/icon-algebra.webp",
    },
    {
        title: "Geometry",
        icon: "/images/icon-geometry.webp",
    },
    {
        title: "Pre-Calculus/Math Analysis",
        icon: "/images/icon-pre-calculus.webp",
    },
    {
        title: "AP Calculus",
        icon: "/images/icon-calculus.webp",
    },
    {
        title: "AP Chemistry",
        icon: "/images/icon-chemistry.webp",
    },
    {
        title: "AP Physics",
        icon: "/images/icon-physics.webp",
    },
    {
        title: "AP Biology",
        icon: "/images/icon-biology.webp",
    },
    {
        title: "AP Economics",
        icon: "/images/icon-economics.webp",
    },
    {
        title: "AP World History",
        icon: "/images/icon-history.webp",
    },
    {
        title: "AP US History",
        icon: "/images/icon-us-history.webp",
    },
    {
        title: "Language Arts AP Language",
        icon: "/images/icon-arts.webp",
    },
    {
        title: "AP Government",
        icon: "/images/icon-government.webp",
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
        <Box component="section" sx={{ py: 5, px: { xs: 5, md: 10, lg: 20 } }}>
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Typography
                    variant="h4"
                    textAlign="center"
                    fontWeight={600}
                    gutterBottom
                    sx={{ mb: 4 }}
                >
                    Subject Tutoring
                </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Typography
                    variant="body1"
                    textAlign="center"
                    maxWidth="900px"
                    mx="auto"
                    color="text.secondary"
                    sx={{ mb: 6, lineHeight: 1.6 }}
                >
                    GPA is the most weighted part of college admittance. While
                    strengthening our students on the Test Prep courses, we
                    offer specific curriculum-centered classes for high school
                    and middle schools students. The classes provide
                    student-centered instruction in all the following subjects.
                </Typography>
            </motion.div>

            {/* Subjects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Grid container spacing={1} justifyContent="center">
                    {subjects.map((subject, index) => (
                        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                style={{ cursor: "pointer" }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        textAlign: "center",
                                        pt: 2,
                                        pb: 1,
                                        borderRadius: 2,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow:
                                                "0 8px 25px rgba(0,0,0,0.1)",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    {/* Icon Circle */}
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Image
                                            src={subject.icon}
                                            alt={subject.title}
                                            width={400}
                                            height={400}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Box>

                                    {/* Subject Title */}
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        color="text.primary"
                                        sx={{
                                            minHeight: "48px",
                                            display: "flex",
                                            alignItems: "center",
                                            textAlign: "center",
                                        }}
                                    >
                                        {subject.title}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Box>
    );
}
