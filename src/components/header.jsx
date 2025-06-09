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

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
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
                    name: "TJ / AOS / AET Prep",
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
                    href: "/academic-tutoring",
                },
                {
                    name: "College Admissions & Advising",
                    href: "/college-advising",
                },
                {
                    name: "Summer Courses 2025",
                    href: "/summer-courses",
                },
            ],
        },
        {
            name: "ABOUT US",
            href: "/about",
            isOpen: isAboutOpen,
            setOpen: setIsAboutOpen,
            links: [
                {
                    name: "Our Methodology",
                    href: "/our-methodology",
                },
            ],
        },
        {
            name: "MORE",
            isOpen: isMoreOpen,
            setOpen: setIsMoreOpen,
            links: [
                {
                    name: "Schedule",
                    href: "/schedule",
                },
                {
                    name: "Pricing",
                    href: "/pricing",
                },
                {
                    name: "Gallery",
                    href: "/gallery",
                },
                {
                    name: "Join our Team",
                    href: "/join-our-team",
                },
                {
                    name: "Reviews",
                    href: "https://www.google.com/search?q=coherencelearning&rlz=1C1VDKB_enIN1054IN1054&oq=coherencelearning&aqs=chrome..69i57j69i60l4.5238j0j1&sourceid=chrome&ie=UTF-8#lrd=0x89b66643d2fe7561:0x20f3f4b8ef8bf186,1,,,,",
                },
                {
                    name: "Write A Review",
                    href: "https://www.google.com/search?q=coherencelearning&rlz=1C1VDKB_enIN1054IN1054&oq=coherencelearning&aqs=chrome..69i57j69i60l4.5238j0j1&sourceid=chrome&ie=UTF-8#lrd=0x89b66643d2fe7561:0x20f3f4b8ef8bf186,3,,,,",
                },
                {
                    name: "Contact Us",
                    href: "/contact-us",
                },
            ],
        },
    ];

    return (
        <header className="w-full font-inter">
            {/* Dark Blue Top Bar */}
            <div className="bg-slate-800 text-yellow-400 py-3 px-4 border-b border-slate-700">
                <div className="w-full mx-auto flex flex-col md:flex-row items-center sm:justify-between lg:justify-center text-sm min-h-8 gap-x-8 gap-y-2">
                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 md:mb-0">
                        <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300">
                            <Phone className="h-4 w-4" />
                            <span className="text-xs sm:text-sm font-medium">
                                <Link href="tel:+17034018779">
                                    Call us: +1 703 401 8779
                                </Link>
                            </span>
                        </div>
                        <div className="hidden sm:flex items-center text-slate-500">
                            <span>|</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300">
                            <Mail className="h-4 w-4" />
                            <span className="text-xs sm:text-sm font-medium">
                                <Link href="mailto:info@coherencelearning.us?Subject=Hello">
                                    Email: info@coherencelearning.us
                                </Link>
                            </span>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="https://x.com/CoherenceL"
                            className="hover:text-yellow-300 transition-all duration-300 hover:scale-110 transform p-1 rounded-full hover:bg-slate-700"
                        >
                            <Twitter className="h-4 w-4" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/CoherenceLearningAshburn/"
                            className="hover:text-yellow-300 transition-all duration-300 hover:scale-110 transform p-1 rounded-full hover:bg-slate-700"
                        >
                            <Facebook className="h-4 w-4" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/coherence.learning/"
                            className="hover:text-yellow-300 transition-all duration-300 hover:scale-110 transform p-1 rounded-full hover:bg-slate-700"
                        >
                            <Instagram className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-slate-900 shadow-lg border-b border-slate-700">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between lg:justify-center items-center h-20 lg:gap-x-24">
                        {/* Logo */}
                        <div className="flex">
                            <Link
                                href="/"
                                className="flex items-center hover:scale-105 transform transition-transform duration-300"
                            >
                                <img
                                    src="/img/logo.webp"
                                    alt="Coherence Learning Logo"
                                    className="h-12 w-auto object-contain filter brightness-0 invert"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex space-x-8">
                            <Link
                                href="/"
                                className="relative text-gray-300 hover:text-yellow-400 px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 transform group rounded-lg hover:bg-slate-800"
                            >
                                HOME
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </Link>
                            {navLinks.map((nav, index) => (
                                <div key={index} className="relative group">
                                    <button
                                        className="relative text-gray-300 hover:text-yellow-400 px-4 py-2 text-sm font-semibold tracking-wide flex items-center transition-all duration-300 hover:scale-105 transform group rounded-lg hover:bg-slate-800"
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
                                        <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                                    </button>
                                    {nav.isOpen && (
                                        <div
                                            className="flex w-max absolute top-full left-0 bg-slate-800 rounded-lg shadow-xl border border-slate-600 z-50 animate-in slide-in-from-top-2 duration-200 mt-0"
                                            onMouseEnter={() =>
                                                nav.setOpen(true)
                                            }
                                            onMouseLeave={() =>
                                                nav.setOpen(false)
                                            }
                                        >
                                            <div className="grid grid-cols-2 p-4 gap-2">
                                                {nav.links.map(
                                                    (link, index) => (
                                                        <div key={index}>
                                                            <Link
                                                                href={link.href}
                                                                className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-slate-700 rounded-md transition-all duration-200"
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
                                href="/sign-up"
                                className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 px-6 py-2 text-sm font-bold tracking-wide rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-yellow-400/25"
                            >
                                SIGN UP
                            </Link>
                        </nav>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-300 hover:text-yellow-400 p-2 hover:scale-110 transform transition-all duration-300 rounded-lg hover:bg-slate-800"
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
                        <div className="lg:hidden border-t border-slate-700 animate-in slide-in-from-top-2 duration-300">
                            <div className="px-2 pt-4 pb-6 space-y-2">
                                <Link
                                    onClick={toggleMenu}
                                    href="/"
                                    className="block px-4 py-3 text-base font-semibold text-gray-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg transition-all duration-200"
                                >
                                    Home
                                </Link>

                                {navLinks.map((nav, index) => (
                                    <div key={index} className="space-y-1">
                                        <button
                                            onClick={() =>
                                                nav.setOpen(!nav.isOpen)
                                            }
                                            className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-gray-300 hover:text-yellow-400 hover:bg-slate-800 rounded-lg transition-all duration-200"
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
                                                            className="block px-4 py-2 text-sm font-medium text-gray-400 hover:text-yellow-400 hover:bg-slate-800 rounded-md transition-all duration-200"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div className="pt-4">
                                    <Link
                                        onClick={toggleMenu}
                                        href="/sign-up"
                                        className="block w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 text-center font-bold py-3 px-6 rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
