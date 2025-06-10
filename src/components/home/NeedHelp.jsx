"use client";

import { Box, Typography } from "@mui/material";

export default function TestimonialsSection() {
    return (
        <Box
            sx={{
                position: "relative",
                bgcolor: "#1E1E1E",
                color: "white",
                py: { xs: 6, md: 10 },
                backgroundImage: "url('/img/classroom-background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    mx: "auto",
                    px: { xs: 2 },
                }}
            >
                {/* Need Help Section */}
                <Box
                    sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="img"
                        src="/images/help-center.webp"
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
