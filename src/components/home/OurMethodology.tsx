"use client";

import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Link,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const methodologyItems = [
    {
        title: "Elementary School",
        description:
            "Development of inquisitive and independent thought beyond lower level Bloom’s Taxonomy thinking.",
        image: "/images/methodology-1.png",
    },
    {
        title: "Middle School",
        description:
            "Application of critical thinking skills through advanced literature and vocabulary.",
        image: "/images/methodology-2.png",
    },
    {
        title: "Early High School",
        description:
            "Mastery of grammar and comprehension skills through the introduction of SAT level questions and strategies.",
        image: "/images/methodology-3.png",
    },
    {
        title: "High School & College Prep",
        description:
            "Time Management is the key here. Bridging the comprehensive knowledge gained from a variety of advanced subjects.",
        image: "/images/methodology-4.jpg",
    },
];

export default function OurMethodology() {
    return (
        <Box sx={{ py: 10 }}>
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
                    color="white"
                >
                    Our Methodology
                </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Typography
                    variant="body1"
                    textAlign="center"
                    maxWidth="800px"
                    mx="auto"
                    color="white"
                    mb={6}
                >
                    Building and maintaining a foundation of skills from
                    traditional schooling to approach critical thinking,
                    writing, and comprehension from a more advanced standpoint.
                </Typography>
            </motion.div>

            {/* Cards */}
            <Grid
                container
                spacing={4}
                justifyContent="center"
                size={{ sm: 1 }}
            >
                {methodologyItems.map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            whileHover={{ opacity: 0.9, y: -5 }}
                            style={{ cursor: "pointer" }}
                        >
                            <Card
                                elevation={3}
                                sx={{
                                    height: "100%",
                                    borderRadius: 3,
                                    transition: "0.3s ease-in-out",
                                }}
                            >
                                <CardMedia
                                    sx={{ height: 160 }}
                                    title={item.title}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={300}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderTopLeftRadius: "12px",
                                            borderTopRightRadius: "12px",
                                        }}
                                    />
                                </CardMedia>
                                <CardContent>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        gutterBottom
                                        sx={{ textDecoration: "underline" }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        minHeight={85}
                                        mb={1}
                                    >
                                        {item.description}
                                    </Typography>
                                    <Link
                                        href="/our-methodology"
                                        underline="none"
                                        sx={{
                                            fontWeight: 600,
                                            color: "#1E64C8",
                                            fontSize: 14,
                                        }}
                                    >
                                        Continue →
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
