"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    TrendingUp,
    BookOpen,
    Calculator,
    Users,
    CheckCircle,
    Calendar,
    Award,
    Zap,
    Clock,
    Target,
} from "lucide-react";
import Link from "next/link";
import { ComingSoonFeature } from "@/components/ui/coming-soon-feature";

export default function DigitalACTPage() {
    const [activeTab, setActiveTab] = useState("overview");

    // Animation counter for statistics
    const [testTime, setTestTime] = useState(0);
    const [fewerQuestions, setFewerQuestions] = useState(0);

    useEffect(() => {
        const timer1 = setInterval(() => {
            setTestTime((prev) => (prev < 125 ? prev + 2 : 125));
        }, 20);

        const timer2 = setInterval(() => {
            setFewerQuestions((prev) => (prev < 44 ? prev + 1 : 44));
        }, 30);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
        };
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section - Matching About Us Design */}
            <section className="relative pb-4 h-[400px] flex items-center justify-start overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-in zoom-in-105 duration-300"
                    style={{
                        backgroundImage: 'url("/images/methodology-3.png")',
                        filter: "blur(2px)",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 animate-in fade-in duration-300" />

                {/* Content */}
                <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto mt-22">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 animate-in slide-in-from-top-8 duration-300">
                        Digital ACT Preparation
                    </h1>
                    <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed max-w-4xl animate-in slide-in-from-top-8 duration-300">
                        Get ready for the future of ACT testing. Starting Spring
                        2025, the ACT goes digital with a shorter, more flexible
                        format designed for the modern student.
                    </p>
                    <div className="flex flex-row gap-3 sm:gap-4 animate-in slide-in-from-bottom-8 duration-300">
                        <Button
                            asChild
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <Link href="/sign-up">
                                <ComingSoonFeature>
                                    GET STARTED
                                </ComingSoonFeature>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <Link href="/contact-us">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-4">
                <p className="text-sm text-gray-600 animate-in fade-in duration-300">
                    Home &gt; Test Prep &gt; Digital ACT
                </p>
            </div>

            {/* Our Approach Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12 animate-in slide-in-from-bottom-4 duration-300">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Why Choose Digital ACT Prep?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        The ACT is evolving for the digital age. Our
                        comprehensive preparation program ensures you're ready
                        for the new format and equipped to achieve your best
                        score.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Shorter Test Time */}
                    <div className="bg-gray-100 rounded-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-left-8 duration-300 shadow-2xl">
                        <div className="p-6">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                                <Clock className="h-8 w-8 text-blue-600" />
                            </div>
                            <div className="text-3xl font-bold text-gray-800 mb-2 animate-pulse">
                                {testTime} min
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Shorter Test
                            </h3>
                            <p className="text-gray-600 text-sm">
                                The Digital ACT is significantly shorter - just
                                2 hours and 5 minutes compared to the
                                traditional 2 hours and 55 minutes.
                            </p>
                        </div>
                    </div>

                    {/* Flexible Format */}
                    <div className="bg-gray-100 rounded-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-bottom-8 duration-300 shadow-2xl">
                        <div className="p-6">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                                <Target className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Optional Science
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Science section becomes optional, allowing you
                                to focus on your strengths and tailor the test
                                to your college goals.
                            </p>
                        </div>
                    </div>

                    {/* Fewer Questions */}
                    <div className="bg-gray-100 rounded-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-right-8 duration-300 shadow-2xl">
                        <div className="p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                                <TrendingUp className="h-8 w-8 text-green-600" />
                            </div>
                            <div className="text-3xl font-bold text-gray-800 mb-2 animate-pulse">
                                {fewerQuestions}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Fewer Questions
                            </h3>
                            <p className="text-gray-600 text-sm">
                                44 fewer questions overall, giving you more time
                                per question and reducing test fatigue.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Digital ACT Overview Section - Full Yellow Background */}
            <div className="bg-[#f1c338] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-in slide-in-from-top-8 duration-300">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Digital ACT: Everything You Need to Know
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                            The ACT is evolving to better serve students in the
                            digital age. Beginning in Spring 2025, students will
                            have the option to take the ACT in either digital or
                            traditional paper format, with enhanced features and
                            improved accessibility.
                        </p>
                    </div>

                    {/* Timeline Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center animate-in slide-in-from-left-8 duration-300">
                            Digital ACT Rollout Timeline
                        </h3>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/90 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-left-8 duration-300">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <Calendar className="h-6 w-6 text-blue-600 mr-3 animate-bounce" />
                                        <h4 className="text-xl font-semibold text-gray-800">
                                            Spring 2025
                                        </h4>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        <strong>April 5, 2025:</strong> Digital
                                        ACT launches online at select locations.
                                        Paper options remain available.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/90 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-bottom-8 duration-300">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <Calendar className="h-6 w-6 text-yellow-600 mr-3 animate-bounce" />
                                        <h4 className="text-xl font-semibold text-gray-800">
                                            Fall 2025
                                        </h4>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        <strong>September 13, 2025:</strong>{" "}
                                        Enhanced format applies to both digital
                                        and paper versions. Last traditional
                                        paper test: July 12, 2025.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/90 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-right-8 duration-300">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <Calendar className="h-6 w-6 text-green-600 mr-3 animate-bounce" />
                                        <h4 className="text-xl font-semibold text-gray-800">
                                            Spring 2026
                                        </h4>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        <strong>School-Day Testing:</strong>{" "}
                                        Updates take effect for school-day
                                        testing programs nationwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Test Structure Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center animate-in slide-in-from-right-8 duration-300">
                            New Test Structure & Timing
                        </h3>

                        <div className="mb-8 bg-white/90 rounded-lg shadow-2xl hover:shadow-2xl transition-all animate-in zoom-in-95 duration-300">
                            <div className="p-6">
                                <p className="text-gray-700 mb-6 text-lg text-center">
                                    The Digital ACT features{" "}
                                    <strong>revised section timings</strong> and{" "}
                                    <strong>optional components</strong>:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                    <div className="text-center p-4 bg-blue-50 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2 animate-pulse" />
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            English
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            35 minutes
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            50 questions
                                        </p>
                                    </div>
                                    <div className="text-center p-4 bg-green-50 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <Calculator className="h-8 w-8 text-green-600 mx-auto mb-2 animate-pulse" />
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Math
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            50 minutes
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            45 questions
                                        </p>
                                    </div>
                                    <div className="text-center p-4 bg-purple-50 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2 animate-pulse" />
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Reading
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            40 minutes
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            36 questions
                                        </p>
                                    </div>
                                    <div className="text-center p-4 bg-orange-50 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2 animate-pulse" />
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Science
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            40 minutes
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            40 questions
                                        </p>
                                        <p className="text-xs text-orange-600 font-medium">
                                            Optional
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yellow-100 p-4 rounded-lg shadow-inner">
                                    <p className="text-gray-700 text-center">
                                        <strong>Total Core Test Time:</strong> 2
                                        hours and 5 minutes (excluding breaks).
                                        <strong> Writing section</strong>{" "}
                                        remains optional at 40 minutes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scoring Changes */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center animate-in slide-in-from-bottom-8 duration-300">
                            New Scoring System
                        </h3>

                        <div className="bg-white/90 rounded-lg shadow-2xl hover:shadow-2xl transition-all animate-in zoom-in-95 duration-300">
                            <div className="p-6">
                                <p className="text-gray-700 mb-6 text-lg text-center">
                                    Starting with the Digital ACT, the composite
                                    score calculation changes:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="text-center p-6 bg-blue-50 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                                        <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">
                                            1-36
                                        </div>
                                        <h4 className="font-semibold text-gray-800 mb-3">
                                            Composite Score
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Based on{" "}
                                            <strong>
                                                English, Math, and Reading
                                            </strong>{" "}
                                            sections only. Science scores
                                            reported separately if taken.
                                        </p>
                                    </div>
                                    <div className="text-center p-6 bg-green-50 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                                        <div className="text-3xl font-bold text-green-600 mb-2 animate-pulse">
                                            Optional
                                        </div>
                                        <h4 className="font-semibold text-gray-800 mb-3">
                                            Science Score
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Science section becomes{" "}
                                            <strong>optional</strong> and is
                                            reported as a separate score when
                                            taken.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section - Full Blue Background */}
            <div className="bg-[#0f3963]/95 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center animate-in slide-in-from-top-8 duration-300">
                        Benefits of the Digital ACT
                    </h2>

                    {/* Enhanced Accessibility */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center animate-in slide-in-from-left-8 duration-300">
                            Enhanced Accessibility & User Experience
                        </h3>

                        <div className="hover:shadow-2xl transition-all bg-white/90 rounded-lg shadow-2xl animate-in slide-in-from-left-8 duration-300">
                            <div className="p-6">
                                <div className="flex items-center mb-6">
                                    <Users className="h-8 w-8 text-blue-600 mr-4 animate-pulse" />
                                    <h4 className="text-xl font-semibold text-gray-800">
                                        More Accessible for All Students
                                    </h4>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start animate-in fade-in transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-blue-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Screen readers and
                                                text-to-speech
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Built-in accessibility features
                                                help students with visual
                                                impairments or reading
                                                difficulties access content more
                                                easily.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start animate-in fade-in transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-blue-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Answer masking and highlighting
                                                tools
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Digital tools like highlighters
                                                and answer eliminators help
                                                students organize their thinking
                                                and focus on key information.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start animate-in fade-in transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-blue-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Built-in calculator for Math
                                                section
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Integrated calculator
                                                functionality eliminates the
                                                need to bring your own device
                                                and ensures consistent access to
                                                mathematical tools.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Flexibility Benefits */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center animate-in slide-in-from-right-8 duration-300">
                            Increased Flexibility & Personalization
                        </h3>

                        <div className="hover:shadow-2xl transition-all bg-white/90 rounded-lg shadow-2xl animate-in slide-in-from-right-8 duration-300">
                            <div className="p-6">
                                <div className="flex items-center mb-6">
                                    <Target className="h-8 w-8 text-green-600 mr-4 animate-pulse" />
                                    <h4 className="text-xl font-semibold text-gray-800">
                                        Tailored to Your Goals
                                    </h4>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start animate-in fade-in transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Choose your format preference
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Select between digital and paper
                                                formats based on your comfort
                                                level and test-taking style
                                                preferences.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start animate-in fade-in transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Optional Science section
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Focus on your strengths by
                                                choosing whether to include the
                                                Science section based on your
                                                college requirements and career
                                                goals.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start animate-in fade-in transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                More time per question
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                With fewer questions and
                                                optimized timing, you'll have
                                                more time to think through each
                                                problem and showcase your best
                                                work.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preparation Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-in slide-in-from-top-8 duration-300">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Get Ready with Coherence Learning
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our expert-led ACT prep courses provide tailored
                            strategies, digital practice tests, and personalized
                            guidance to help you master the new format and
                            achieve top scores.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-left-8 duration-300 shadow-2xl">
                            <div className="p-6">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                                    <Target className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Diagnostic Testing
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Test both digital and paper formats to find
                                    your optimal approach. Determine whether to
                                    include the Science section based on your
                                    goals.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-bottom-8 duration-300 shadow-2xl">
                            <div className="p-6">
                                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                                    <BookOpen className="h-8 w-8 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Tailored Preparation
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Master the new timing and digital tools with
                                    personalized strategies designed for your
                                    learning style and target score.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-right-8 duration-300 shadow-2xl">
                            <div className="p-6">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                                    <Award className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Updated Materials
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Practice with materials reflecting all 2025
                                    changes, available early to give you a
                                    competitive advantage.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Start Your Digital ACT Prep Today!
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            The Digital ACT isn't just a test—it's your chance
                            to shine with less pressure and more control. Let
                            Coherence Learning craft your path to success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <Link href="/sign-up">
                                    <ComingSoonFeature>
                                        Schedule Free Consultation
                                    </ComingSoonFeature>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <Link href="/contact-us">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
