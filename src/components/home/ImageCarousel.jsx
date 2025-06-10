"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
    {
        welcomeText: "Welcome to Coherence Learning",
        src: "/images/coherence-learning-best-tutoring4.jpg",
        title: "Test Prep and Academic",
        subtitle: "Help Centre",
        buttons: (
            <div className="w-fit flex flex-col sm:flex-row items-center gap-4">
                <Button
                    asChild
                    className="bg-[#0f3963] hover:bg-[#1a4b7c] text-white p-8 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 transform shadow-lg"
                >
                    <Link href="/sign-up" className="flex items-center gap-2">
                        GET STARTED <ChevronRight size={24} />
                    </Link>
                </Button>
                <Button
                    asChild
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 p-8 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 transform shadow-lg"
                >
                    <Link
                        href="/contact-us"
                        className="flex items-center gap-2"
                    >
                        Contact Us <ChevronRight size={24} />
                    </Link>
                </Button>
            </div>
        ),
        animations: {
            welcomeText: { direction: "top", delay: 0.1 },
            title: { direction: "left", delay: 0.2 },
            subtitle: { direction: "right", delay: 0.4 },
            buttons: { direction: "bottom", delay: 0.6 },
        },
        scrollIndicator: true,
    },
    {
        welcomeText: "Experience Excellence",
        src: "/images/coherence-learning-best-tutoring2.jpg",
        title: "In-Person Interactive",
        subtitle: "Learning Experience",
        animations: {
            welcomeText: { direction: "top", delay: 0.1 },
            title: { direction: "top", delay: 0.2 },
            subtitle: { direction: "fade", delay: 0.4 },
            buttons: { direction: "scale", delay: 0.6 },
        },
    },
    {
        welcomeText: "Personalized Approach",
        src: "/images/coherence-learning-best-tutoring3.jpg",
        title: "Small Group Classes",
        subtitle: "Maximum Impact",
        animations: {
            welcomeText: { direction: "top", delay: 0.1 },
            title: { direction: "right", delay: 0.2 },
            subtitle: { direction: "left", delay: 0.4 },
            buttons: { direction: "top", delay: 0.6 },
        },
    },
    {
        welcomeText: "Learn From Anywhere",
        src: "/images/coherence-learning-best-tutoring.jpg",
        title: "Flexible Online",
        subtitle: "Learning Solutions",
        animations: {
            welcomeText: { direction: "top", delay: 0.1 },
            title: { direction: "scale", delay: 0.2 },
            subtitle: { direction: "bottom", delay: 0.4 },
            buttons: { direction: "fade", delay: 0.6 },
        },
    },
];

const getAnimationVariants = (direction) => {
    const baseTransition = {
        type: "spring",
        stiffness: 100,
        damping: 20,
    };

    switch (direction) {
        case "left":
            return {
                initial: { opacity: 0, x: -100 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -100 },
                transition: baseTransition,
            };
        case "right":
            return {
                initial: { opacity: 0, x: 100 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: 100 },
                transition: baseTransition,
            };
        case "top":
            return {
                initial: { opacity: 0, y: -100 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -100 },
                transition: baseTransition,
            };
        case "bottom":
            return {
                initial: { opacity: 0, y: 100 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 100 },
                transition: baseTransition,
            };
        case "scale":
            return {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
                transition: baseTransition,
            };
        case "fade":
        default:
            return {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.6 },
            };
    }
};

// Scroll Indicator Component
const ScrollIndicator = ({ targetId }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleScrollClick = () => {
        setIsAnimating(true);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        // Reset animation after scroll
        setTimeout(() => setIsAnimating(false), 1000);
    };

    return (
        <motion.button
            onClick={handleScrollClick}
            className="group relative flex items-center justify-center w-6 h-12 md:w-8 md:h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to next section"
        >
            {/* Capsule background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/20" />

            {/* Scrolling ball */}
            <motion.div
                className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-lg"
                animate={{
                    y: isAnimating ? [0, 8, -8, 0] : [0, 6, -6, 0],
                }}
                transition={{
                    duration: isAnimating ? 0.8 : 2,
                    repeat: isAnimating ? 1 : Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
    );
};

export default function ImageCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 8000);

        return () => clearInterval(timer);
    }, [activeIndex]);

    const handleSlideChange = (index) => {
        if (index !== activeIndex) {
            setIsChanging(true);
            setActiveIndex(index);
            // Reset changing state after animation completes
            setTimeout(() => setIsChanging(false), 1500);
        }
    };

    return (
        <div
            className="relative w-full h-screen min-h-screen"
            style={{ height: "100vh", minHeight: "100vh" }}
        >
            <Carousel
                showThumbs={false}
                infiniteLoop
                showStatus={false}
                showIndicators={true}
                showArrows={true}
                selectedItem={activeIndex}
                onChange={handleSlideChange}
                transitionTime={1500}
                swipeable
                emulateTouch
                autoPlay={false}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative h-screen min-h-screen w-full"
                    >
                        <Image
                            src={slide.src || "/placeholder.svg"}
                            alt={slide.title}
                            fill
                            style={{ objectFit: "cover" }}
                            className="brightness-50"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pt-32 md:pt-40">
                            <AnimatePresence mode="wait">
                                {index === activeIndex && !isChanging && (
                                    <>
                                        {slide.welcomeText ? (
                                            <motion.p
                                                key={`welcome-${index}`}
                                                className="text-lg md:text-xl font-medium mb-8 tracking-wide uppercase text-amber-100"
                                                {...getAnimationVariants(
                                                    slide.animations.welcomeText
                                                        .direction
                                                )}
                                                transition={{
                                                    ...getAnimationVariants(
                                                        slide.animations
                                                            .welcomeText
                                                            .direction
                                                    ).transition,
                                                    delay:
                                                        slide.animations
                                                            .welcomeText
                                                            .delay || 0,
                                                }}
                                            >
                                                {slide.welcomeText}
                                            </motion.p>
                                        ) : (
                                            ""
                                        )}
                                        <motion.h2
                                            key={`title-${index}`}
                                            className="text-4xl md:text-6xl lg:text-7xl font-bold m-4 leading-tight"
                                            {...getAnimationVariants(
                                                slide.animations.title.direction
                                            )}
                                            transition={{
                                                ...getAnimationVariants(
                                                    slide.animations.title
                                                        .direction
                                                ).transition,
                                                delay:
                                                    slide.animations.title
                                                        .delay || 0,
                                            }}
                                        >
                                            {slide.title}
                                        </motion.h2>

                                        <motion.h2
                                            key={`subtitle-${index}`}
                                            className="mt-1 text-4xl md:text-6xl lg:text-7xl font-bold m-4 leading-tight text-yellow-400"
                                            {...getAnimationVariants(
                                                slide.animations.subtitle
                                                    .direction
                                            )}
                                            transition={{
                                                ...getAnimationVariants(
                                                    slide.animations.subtitle
                                                        .direction
                                                ).transition,
                                                delay:
                                                    slide.animations.subtitle
                                                        .delay || 0,
                                            }}
                                        >
                                            {slide.subtitle}
                                        </motion.h2>

                                        <motion.div
                                            key={`buttons-${index}`}
                                            className="mt-8"
                                            {...getAnimationVariants(
                                                slide.animations.buttons
                                                    .direction
                                            )}
                                            transition={{
                                                ...getAnimationVariants(
                                                    slide.animations.buttons
                                                        .direction
                                                ).transition,
                                                delay:
                                                    slide.animations.buttons
                                                        .delay || 0,
                                            }}
                                        >
                                            {slide.buttons || (
                                                <Button
                                                    asChild
                                                    className="bg-[#0f3963] hover:bg-[#1a4b7c] text-white p-8 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 transform shadow-lg"
                                                >
                                                    <Link
                                                        href="/sign-up"
                                                        className="flex items-center gap-2"
                                                    >
                                                        GET STARTED{" "}
                                                        <ChevronRight
                                                            size={24}
                                                        />
                                                    </Link>
                                                </Button>
                                            )}
                                        </motion.div>
                                        <motion.div
                                            key={`scroll-indicator-${index}`}
                                            className="mt-12 flex justify-center"
                                            {...getAnimationVariants("bottom")}
                                            transition={{
                                                ...getAnimationVariants(
                                                    "bottom"
                                                ).transition,
                                                delay: 0.8,
                                            }}
                                        >
                                            <ScrollIndicator targetId="features" />
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
