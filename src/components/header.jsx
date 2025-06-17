"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    Mail,
    Twitter,
    Facebook,
    Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTestPrepOpen, setIsTestPrepOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        {
            name: "TEST PREP",
            href: "/test-prep",
            isOpen: isTestPrepOpen,
            setOpen: setIsTestPrepOpen,
            links: [
                {
                    name: "Digital SAT",
                    href: "/digital-sat",
                },
                {
                    name: "ACT",
                    href: "/act",
                },
                {
                    name: "SAT vs ACT",
                    href: "/sat-vs-act",
                },
                {
                    name: "TJ/AOS/AET Prep",
                    href: "/tj-aos-aet-prep",
                },
            ],
        },
        {
            name: "PROGRAMS",
            isOpen: isProgramsOpen,
            setOpen: setIsProgramsOpen,
            links: [
                {
                    name: "SAT ACT Year Long",
                    href: "/test-prep-sat-act",
                },
                {
                    name: "Digital SAT Crash Course",
                    href: "/digital-sat-crash-course",
                },
                {
                    name: "Academic Tutoring",
                    href: "/academic-college-tutoring",
                },
                // {
                //     name: "College Admissions & Advising",
                //     href: "/college-advising",
                // },
                {
                    name: "Summer Courses 2025",
                    href: "/summer-courses",
                },
            ],
        },
    ];

    return (
        <header className="w-full absolute top-0 left-0 z-50">
            {/* Blue Top Bar - Hidden on mobile for cleaner look */}
            <div className="bg-slate-800/20 backdrop-blur-sm text-white py-2 px-4 hidden md:block">
                <div className="w-full mx-auto flex flex-col md:flex-row items-center sm:justify-between lg:justify-center text-sm min-h-8 gap-x-8 gap-y-2">
                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 md:mb-0">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span className="text-xs sm:text-sm">
                                <Link href="tel:+17034018779">
                                    Call us: +1 703 401 8779
                                </Link>
                            </span>
                        </div>
                        <div className="hidden sm:flex items-center">
                            <span>|</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span className="text-xs sm:text-sm">
                                <Link href="mailto:info@coherencelearning.us?Subject=Hello">
                                    Email: info@coherencelearning.us
                                </Link>
                            </span>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-3">
                        <Link
                            href="https://x.com/CoherenceL"
                            className="hover:text-[#6a9bd1] transition-colors duration-300 hover:scale-110 transform"
                        >
                            <Twitter className="h-4 w-4" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/CoherenceLearningAshburn/"
                            className="hover:text-[#6a9bd1] transition-colors duration-300 hover:scale-110 transform"
                        >
                            <Facebook className="h-4 w-4" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/coherence.learning/"
                            className="hover:text-[#6a9bd1] transition-colors duration-300 hover:scale-110 transform"
                        >
                            <Instagram className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Transparent */}
            <div className="bg-transparent backdrop-blur-sm">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between lg:justify-center items-center h-20 lg:gap-x-24">
                        {/* Logo */}
                        <div className="flex">
                            <Link
                                href="/"
                                className="flex items-center hover:scale-105 transform transition-transform duration-300"
                            >
                                <img
                                    src="/logo2.webp"
                                    alt="Coherence Learning Logo"
                                    className="h-10 w-auto object-contain filter brightness-0 invert"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex space-x-8 items-center">
                            <Link
                                href="/"
                                className="relative text-white hover:text-[#6a9bd1] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 transform group"
                            >
                                HOME
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0f3963] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            {navLinks.map((nav, index) => (
                                <div key={index} className="relative group">
                                    <button
                                        className="relative text-white hover:text-[#6a9bd1] px-3 py-2 text-sm font-medium flex items-center transition-all duration-300 hover:scale-110 transform group"
                                        onMouseEnter={() => nav.setOpen(true)}
                                        onMouseLeave={() => nav.setOpen(false)}
                                    >
                                        {nav.href ? (
                                            <>
                                                <Link href={nav.href ?? ""}>
                                                    {nav.name}
                                                </Link>
                                            </>
                                        ) : (
                                            <>{nav.name}</>
                                        )}
                                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0f3963] transition-all duration-300 group-hover:w-full"></span>
                                    </button>
                                    {nav.isOpen && (
                                        <div
                                            className="flex w-max absolute top-full left-0 bg-white/95 backdrop-blur-sm rounded-md shadow-lg border border-gray-200 z-50 animate-in slide-in-from-top-2 duration-200"
                                            onMouseEnter={() =>
                                                nav.setOpen(true)
                                            }
                                            onMouseLeave={() =>
                                                nav.setOpen(false)
                                            }
                                        >
                                            <div className="grid grid-cols-2 p-4">
                                                {nav.links.map(
                                                    (link, index) => (
                                                        <div key={index}>
                                                            <Link
                                                                href={link.href}
                                                                className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0f3963] hover:bg-gray-50 rounded transition-all duration-200"
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <Link
                                href="/about"
                                className="relative text-white hover:text-[#6a9bd1] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 transform group"
                            >
                                ABOUT US
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0f3963] transition-all duration-300 group-hover:w-full"></span>
                            </Link>

                            <Link
                                href="/contact-us"
                                className="relative text-white hover:text-[#6a9bd1] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 transform group"
                            >
                                CONTACT US
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0f3963] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link
                                href="/more"
                                className="relative text-white hover:text-[#6a9bd1] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 transform group"
                            >
                                MORE
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0f3963] transition-all duration-300 group-hover:w-full"></span>
                            </Link>

                            {/* <Link
                                href="/sign-up"
                                className="relative text-white hover:text-[#6a9bd1] px-3 py-2 text-sm font-medium flex items-center transition-all duration-300 hover:scale-110 transform group"
                            >
                                SIGN UP
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0f3963] transition-all duration-300 group-hover:w-full"></span>
                            </Link> */}

                            {/* Get Started Button */}
                            {/* <Button
                                asChild
                                className="bg-[#0f3963] hover:bg-[#1a4b7c] text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 transform shadow-lg"
                            >
                                <Link href="/sign-up">Get Started</Link>
                            </Button> */}
                        </nav>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-white hover:text-[#6a9bd1] p-2 hover:scale-110 transform transition-all duration-300"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="lg:hidden border-t border-white/20 animate-in slide-in-from-top-2 duration-300 bg-black/80 backdrop-blur-sm rounded-b-lg">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link
                                    onClick={toggleMenu}
                                    href="/"
                                    className="block px-3 py-2 text-base font-medium text-white hover:text-[#6a9bd1] hover:bg-white/10 rounded-md transition-all duration-200"
                                >
                                    Home
                                </Link>

                                {navLinks.map((nav, index) => (
                                    <div key={index} className="space-y-1">
                                        <button
                                            onClick={() =>
                                                nav.setOpen(!nav.isOpen)
                                            }
                                            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-[#6a9bd1] hover:bg-white/10 rounded-md transition-all duration-200"
                                        >
                                            {nav.name}
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform duration-200 ${
                                                    nav.isOpen
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                        {nav.isOpen && (
                                            <div className="pl-4 space-y-1">
                                                {nav.links.map(
                                                    (link, index) => (
                                                        <Link
                                                            key={index}
                                                            onClick={toggleMenu}
                                                            href={link.href}
                                                            className="block px-3 py-2 text-sm text-gray-300 hover:text-[#6a9bd1] hover:bg-white/10 rounded-md transition-all duration-200"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div className="pt-2">
                                    <Button
                                        asChild
                                        onClick={toggleMenu}
                                        className="w-full bg-[#0f3963] hover:bg-[#1a4b7c] text-white hover:scale-105 transform transition-all duration-300"
                                    >
                                        <Link href="/sign-up">Get Started</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
