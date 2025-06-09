"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Rating,
    Avatar,
} from "@mui/material";
import { Facebook, ChromeIcon as Google } from "lucide-react";

// Testimonial data
const testimonials = [
    {
        name: "Saamyuq Kommuri",
        platform: "google",
        date: "few weeks ago",
        rating: 5,
        text: "Personalized education that works to teach you the methods to succeed. There are flexible schedules to best accommodate your needs.",
    },
    {
        name: "Srilakshmi Ikkurtthy",
        platform: "facebook",
        date: "few weeks ago",
        rating: 5,
        text: "Aman is excellent tutor and he make sure kids understand the subject thoroughly and he is very patient with them !",
    },
    {
        name: "Mackenzie Gleystein",
        platform: "google",
        date: "few weeks ago",
        rating: 5,
        text: "Does a fantastic job thoroughly explaining topics and making sure the student fully comprehends the material. Terrific!",
    },
    {
        name: "Zara Nasir",
        platform: "facebook",
        date: "few weeks ago",
        rating: 5,
        text: "Makes you a better student all around, really awesome and you learn new ways to approach problems 😃",
    },
];

// Animation variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function TestimonialsSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                bgcolor: "#1E1E1E",
                color: "white",
                py: { xs: 6, md: 10 },
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/classroom-background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Semi-transparent overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    zIndex: 1,
                }}
            />

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    mx: "auto",
                    px: { xs: 2, sm: 4 },
                }}
            >
                {/* Section Title */}
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ mb: 6 }}
                >
                    What People Are Saying
                </Typography>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        {testimonials.map((testimonial, index) => (
                            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
                                <motion.div variants={itemVariants}>
                                    <Card
                                        sx={{
                                            height: "250px",
                                            display: "flex",
                                            flexDirection: "column",
                                            bgcolor: "white",
                                            color: "black",
                                            borderRadius: 1,
                                            boxShadow: 3,
                                        }}
                                    >
                                        <CardContent
                                            sx={{
                                                flexGrow: 1,
                                                p: 3,
                                            }}
                                        >
                                            {/* Platform Icon and Name */}
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    mb: 1,
                                                }}
                                            >
                                                <Avatar
                                                    sx={{
                                                        bgcolor: "transparent",
                                                        width: 24,
                                                        height: 24,
                                                        mr: 1,
                                                    }}
                                                >
                                                    <img
                                                        src={`/img/${testimonial.platform}.webp`}
                                                        alt={
                                                            testimonial.platform
                                                        }
                                                    />
                                                </Avatar>
                                                <Typography
                                                    variant="subtitle2"
                                                    fontWeight="medium"
                                                >
                                                    {testimonial.name}
                                                </Typography>
                                            </Box>

                                            {/* Date */}
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                sx={{ mb: 1, display: "block" }}
                                            >
                                                {testimonial.date}
                                            </Typography>

                                            {/* Rating */}
                                            <Rating
                                                value={testimonial.rating}
                                                readOnly
                                                size="small"
                                                sx={{
                                                    mb: 1.5,
                                                    color: "#FFB400",
                                                }}
                                            />

                                            {/* Testimonial Text */}
                                            <Typography
                                                variant="body2"
                                                sx={{ lineHeight: 1.6 }}
                                            >
                                                {testimonial.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>

                {/* Google Maps */}
                <Box
                    sx={{
                        mt: 8,
                        height: { xs: "300px", md: "400px" },
                        width: "100%",
                        borderRadius: 1,
                        overflow: "hidden",
                    }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7586.303624777368!2d-77.52811498977701!3d39.04166012428673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b66643d2fe7561%3A0x20f3f4b8ef8bf186!2sCoherence%20Learning!5e0!3m2!1sen!2sin!4v1748493722814!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Coherence Learning Location"
                    />
                </Box>

                {/* Need Help Section */}
                <Box
                    sx={{
                        mt: 8,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="img"
                        src="/img/help-center.webp"
                        alt="Help Icon"
                        sx={{
                            width: 60,
                            height: 60,
                            mb: 2,
                        }}
                    />

                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Need Help?
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Contact our team with any further questions. We will be
                        happy to answer all.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                        }}
                    >
                        <Typography
                            variant="body1"
                            fontWeight="medium"
                            component="a"
                            href="callto:7037295599"
                            sx={{
                                color: "white",
                                textDecoration: "underline",
                            }}
                        >
                            703-729-5599
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        >
                            |
                        </Typography>
                        <Typography
                            variant="body1"
                            component="a"
                            href="mailto:support@coherencelearning.us"
                            sx={{
                                color: "white",
                                textDecoration: "underline",
                            }}
                        >
                            Support@Coherencelearning.Us
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
