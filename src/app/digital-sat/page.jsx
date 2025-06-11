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
} from "lucide-react";
import Link from "next/link";

export default function DigitalSATPage() {
    const [activeTab, setActiveTab] = useState("overview");

    // Animation counter for statistics
    const [pointGains, setPointGains] = useState(0);
    const [successRate, setSuccessRate] = useState(0);

    useEffect(() => {
        const timer1 = setInterval(() => {
            setPointGains((prev) => (prev < 250 ? prev + 5 : 250));
        }, 20);

        const timer2 = setInterval(() => {
            setSuccessRate((prev) => (prev < 90 ? prev + 2 : 90));
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
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 animate-in slide-in-from-top-8 duration-300 ">
                        Digital SAT Preparation
                    </h1>
                    <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed max-w-4xl animate-in slide-in-from-top-8 duration-300 ">
                        Master the new Digital SAT with our adaptive learning
                        approach. We'll help you navigate the changes and
                        achieve your target score with confidence.
                    </p>
                    <div className="flex flex-row gap-3 sm:gap-4 animate-in slide-in-from-bottom-8 duration-300 ">
                        <Button
                            asChild
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <Link href="/sign-up">GET STARTED</Link>
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
                <p className="text-sm text-gray-600 animate-in fade-in duration-300 ">
                    Home &gt; Test Prep &gt; Digital SAT
                </p>
            </div>

            {/* Our Approach Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12 animate-in slide-in-from-bottom-4 duration-300 ">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Our Digital SAT Approach
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        The SAT has evolved, and so have we. Our proven
                        methodology adapts to the new digital format while
                        maintaining our track record of exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* 250+ Point Gains */}
                    <div className="bg-gray-100 rounded-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-left-8 duration-300 shadow-2xl">
                        <div className="p-6">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                                <TrendingUp className="h-8 w-8 text-yellow-600" />
                            </div>
                            <div className="text-3xl font-bold text-gray-800 mb-2 animate-pulse">
                                {pointGains}+
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Point Gains
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Average score improvement our students achieve
                                through our comprehensive Digital SAT prep
                                program.
                            </p>
                        </div>
                    </div>

                    {/* Adaptive Learning */}
                    <div className="bg-gray-100 rounded-lg text-center hover:shadow-2xl transition-all  transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-bottom-8 duration-300  shadow-2xl">
                        <div className="p-6">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                                <Zap className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Adaptive Practice
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Experience the real Digital SAT format with our
                                adaptive practice tests that mirror the actual
                                exam structure.
                            </p>
                        </div>
                    </div>

                    {/* Success Rate */}
                    <div className="bg-gray-100 rounded-lg text-center hover:shadow-2xl transition-all  transform hover:-translate-y-3 hover:scale-105 animate-in slide-in-from-right-8 duration-300  shadow-2xl">
                        <div className="p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                                <Award className="h-8 w-8 text-green-600" />
                            </div>
                            <div className="text-3xl font-bold text-gray-800 mb-2 animate-pulse">
                                {successRate}%
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Success Rate
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Of our students reach their target scores and
                                qualify for their dream colleges and programs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Digital SAT Overview Section - Full Yellow Background */}
            <div className="bg-[#f1c338] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-in slide-in-from-top-8 duration-300 ">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Digital SAT: Everything You Need to Know
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                            The Digital SAT is the newest version of the SAT
                            being rolled out by the College Board. It is an
                            adaptive version of the SAT that will be
                            administered online. Changes are being made to the
                            English and math sections, but the digital version
                            will be comparable to the current SAT version.
                        </p>
                    </div>

                    {/* When Will It Affect Me Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center animate-in slide-in-from-left-8 duration-300 ">
                            When Will It Affect Me?
                        </h3>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white/90 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-left-8 duration-300 ">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <Calendar className="h-6 w-6 text-yellow-600 mr-3 animate-bounce" />
                                        <h4 className="text-xl font-semibold text-gray-800">
                                            Spring 2024 Implementation
                                        </h4>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        As of <strong>spring 2024</strong>, the{" "}
                                        <strong>Digital SAT</strong> has
                                        replaced the traditional paper-based
                                        SAT. The last paper SAT was administered
                                        in <strong>December 2023</strong>,
                                        making the{" "}
                                        <strong>
                                            Spring 2024 test dates the first
                                            group required to take the Digital
                                            SAT.
                                        </strong>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/90 rounded-lg shadow-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-right-8 duration-300 ">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <Users className="h-6 w-6 text-blue-600 mr-3 animate-bounce" />
                                        <h4 className="text-xl font-semibold text-gray-800">
                                            Who This Affects
                                        </h4>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start animate-in fade-in duration-300 ">
                                            <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                <strong>
                                                    High school juniors in 2023
                                                </strong>{" "}
                                                taking the SAT during 2024—only
                                                the Digital SAT is available.
                                            </span>
                                        </div>
                                        <div className="flex items-start animate-in fade-in duration-300 ">
                                            <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                <strong>
                                                    Freshmen and sophomores in
                                                    2023
                                                </strong>
                                                —they will only take the Digital
                                                SAT throughout their high school
                                                years.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Structure Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center animate-in slide-in-from-right-8 duration-300 ">
                            How Is It Structured?
                        </h3>

                        <div className="mb-8 bg-white/90 rounded-lg shadow-2xl hover:shadow-2xl transition-all  animate-in zoom-in-95 duration-300 ">
                            <div className="p-6">
                                <p className="text-gray-700 mb-6 text-lg text-center">
                                    The Digital SAT is <strong>adaptive</strong>{" "}
                                    and consists of two sections:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="text-center p-4 bg-green-50 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2 animate-pulse" />
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Reading and Writing
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Combined section testing
                                            comprehension and language skills
                                        </p>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-2 animate-pulse" />
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Mathematics
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Comprehensive math section with
                                            calculator allowed throughout
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yellow-100 p-4 rounded-lg shadow-inner">
                                    <p className="text-gray-700 text-center">
                                        Each section has{" "}
                                        <strong>two modules</strong>. The
                                        difficulty of the second module is
                                        determined by the student's performance
                                        in the first module. Students are
                                        allowed to use the{" "}
                                        <strong>adaptive nature</strong>
                                        structure to get an accurate measure of
                                        a student's aptitude.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scoring Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center animate-in slide-in-from-bottom-8 duration-300 ">
                            Scoring Based On Adaptation
                        </h3>

                        <div className="bg-white/90 rounded-lg shadow-2xl hover:shadow-2xl transition-all  animate-in zoom-in-95 duration-300 ">
                            <div className="p-6">
                                <p className="text-gray-700 mb-6 text-lg text-center">
                                    The adaptive nature of the Digital SAT means
                                    your score range depends on which modules
                                    you access:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="text-center p-6 bg-orange-50 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                                        <div className="text-3xl font-bold text-orange-600 mb-2 animate-pulse">
                                            800-1200
                                        </div>
                                        <h4 className="font-semibold text-gray-800 mb-3">
                                            Standard Path
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            If a student does{" "}
                                            <strong>not</strong> reach the
                                            harder version of the second module,
                                            their score will be within{" "}
                                            <strong>
                                                800-1200 out of 1600.
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="text-center p-6 bg-green-50 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                                        <div className="text-3xl font-bold text-green-600 mb-2 animate-pulse">
                                            1200-1600
                                        </div>
                                        <h4 className="font-semibold text-gray-800 mb-3">
                                            Advanced Path
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            If a student <strong>does</strong>{" "}
                                            reach the harder version, their
                                            score range will be{" "}
                                            <strong>
                                                1200-1600 out of 1600
                                            </strong>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Changes Section - Full Blue Background */}
            <div className="bg-[#0f3963]/95 py-16">
                <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center animate-in slide-in-from-top-8 duration-300 ">
                        How Has the SAT Changed?
                    </h2>

                    {/* Test Duration */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center animate-in slide-in-from-left-8 duration-300 ">
                            Test Duration And Format Adjustments
                        </h3>

                        <div className="mb-8 bg-white/90 rounded-lg shadow-2xl hover:shadow-2xl transition-all animate-in zoom-in-95 duration-300 ">
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div className="transform transition-all duration-300 hover:scale-110">
                                        <div className="text-2xl font-bold text-yellow-600 mb-2 animate-bounce">
                                            134 minutes
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            Total Test Time
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            (2 hours and 14 minutes)
                                        </p>
                                    </div>
                                    <div className="transform transition-all duration-300 hover:scale-110">
                                        <div className="text-2xl font-bold text-blue-600 mb-2 animate-bounce">
                                            64 minutes
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            English Section
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            (Reading/Writing)
                                        </p>
                                    </div>
                                    <div className="transform transition-all duration-300 hover:scale-110">
                                        <div className="text-2xl font-bold text-green-600 mb-2 animate-bounce">
                                            70 minutes
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            Math Section
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            (Mathematics)
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-blue-50 rounded-lg shadow-inner">
                                    <p className="text-gray-700 text-center">
                                        The total test time has been{" "}
                                        <strong>significantly reduced</strong>{" "}
                                        compared to the previous paper version,
                                        making the test more efficient while
                                        maintaining accuracy through adaptive
                                        testing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* English Changes */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center animate-in slide-in-from-right-8 duration-300 ">
                            Changes In The English (Reading & Writing) Section
                        </h3>

                        <div className="hover:shadow-2xl transition-all bg-white/90 rounded-lg shadow-2xl animate-in slide-in-from-left-8 duration-300 ">
                            <div className="p-6">
                                <div className="flex items-center mb-6">
                                    <BookOpen className="h-8 w-8 text-blue-600 mr-4 animate-pulse" />
                                    <h4 className="text-xl font-semibold text-gray-800">
                                        Key Improvements for Better Focus
                                    </h4>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start animate-in fade-in   transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-blue-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Shorter passages
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Instead of long, overwhelming
                                                texts, students now work with
                                                more manageable passage lengths
                                                that allow for better
                                                comprehension and time
                                                management.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start animate-in fade-in  transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-blue-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Greater emphasis on vocabulary
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Vocabulary questions are more
                                                prominent and focus on words in
                                                context, testing practical
                                                understanding rather than
                                                memorization.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start animate-in fade-in   transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-blue-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Focus on short paragraphs,
                                                poems, and lists
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Students will be tested on their
                                                ability to connect with{" "}
                                                <strong>
                                                    short paragraph, poem, or
                                                    list
                                                </strong>
                                                rather than long passages,
                                                making the test more accessible
                                                and less intimidating.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Math Changes */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center animate-in slide-in-from-bottom-8 duration-300 ">
                            Changes In The Math Section
                        </h3>

                        <div className="hover:shadow-2xl transition-all bg-white/90 rounded-lg shadow-2xl animate-in slide-in-from-right-8 duration-300 ">
                            <div className="p-6">
                                <div className="flex items-center mb-6">
                                    <Calculator className="h-8 w-8 text-green-600 mr-4 animate-pulse" />
                                    <h4 className="text-xl font-semibold text-gray-800">
                                        Streamlined and More Accessible
                                    </h4>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start animate-in fade-in  transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Fewer topics tested
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                The math section now focuses on
                                                core mathematical concepts,
                                                eliminating some of the more
                                                obscure topics that rarely
                                                appear in real-world
                                                applications.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start animate-in fade-in  transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                No imaginary and complex numbers
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Complex mathematical concepts
                                                that were often stumbling blocks
                                                for students have been removed,
                                                allowing focus on fundamental
                                                skills.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start animate-in fade-in   transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Simplified word problems
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Word problems have been
                                                simplified for clarity, reducing
                                                confusion and allowing students
                                                to focus on mathematical
                                                reasoning rather than
                                                deciphering complex language.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start animate-in fade-in   transform transition-all duration-300 hover:translate-x-2">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-800 mb-1">
                                                Calculator allowed throughout
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Calculator use is now allowed
                                                throughout the entire math
                                                section (integrated into the
                                                testing platform), eliminating
                                                the stress of mental
                                                calculations and allowing focus
                                                on problem-solving strategies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
