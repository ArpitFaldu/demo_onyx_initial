"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComingSoonFeature } from "@/components/ui/coming-soon-feature";
import {
    ChevronLeft,
    ChevronRight,
    Plus,
    Clock,
    Users,
    BookOpen,
    Calculator,
    Award,
    CheckCircle,
    Star,
    Calendar,
    GraduationCap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MorePage() {
    // Gallery carousel state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Schedule accordion state
    const [expandedPanels, setExpandedPanels] = useState({
        elementary: true,
        "middle-high": false,
        "test-prep": false,
        advanced: false,
    });

    // Gallery images
    const galleryImages = [
        {
            src: "/15.png",
        },
        {
            src: "/16.png",
        },
        {
            src: "/17.png",
        },
        {
            src: "/18.png",
        },
        {
            src: "/19.png",
        },
        {
            src: "/20.png",
        },
        {
            src: "/21.png",
        },
        {
            src: "/22.png",
        },
        {
            src: "/23.png",
        },
        {
            src: "/24.png",
        },
        {
            src: "/25.png",
        },
        {
            src: "/26.png",
        },
        {
            src: "/27.png",
        },
        {
            src: "/28.png",
        },
        {
            src: "/29.png",
        },
        {
            src: "/30.png",
        },
        {
            src: "/31.png",
        },
        {
            src: "/32.png",
        },
        {
            src: "/33.png",
        },
        {
            src: "/34.png",
        },
        {
            src: "/35.png",
        },
        {
            src: "/36.png",
        },
    ];

    // Auto-play carousel
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentImageIndex(
                    (prev) => (prev + 1) % galleryImages.length
                );
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, galleryImages.length]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
        setIsAutoPlaying(false);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
        );
        setIsAutoPlaying(false);
    };

    const togglePanel = (panelId) => {
        setExpandedPanels((prev) => ({
            ...prev,
            [panelId]: !prev[panelId],
        }));
    };

    // Schedule data organized by categories
    const scheduleData = {
        elementary: {
            title: "Elementary & Foundation",
            subjects: [
                {
                    name: "Math 4/5",
                    times: [
                        "TUESDAY - 5 PM to 7 PM",
                        "THURSDAY - 4 PM to 6 PM",
                    ],
                },
                {
                    name: "Math 6-7",
                    times: [
                        "WEDNESDAY - 5 PM to 7 PM",
                        "THURSDAY - 5 PM to 7 PM",
                        "SATURDAY - 11 AM to 1 PM",
                    ],
                },
                {
                    name: "English Enrichment",
                    times: [
                        "MONDAY - 5 PM to 7 PM & 7 PM to 9 PM",
                        "TUESDAY - 5 PM to 7 PM & 7 PM to 9 PM",
                        "SATURDAY - 11 AM to 1 PM",
                    ],
                },
            ],
        },
        "middle-high": {
            title: "Middle & High School",
            subjects: [
                {
                    name: "Algebra 1",
                    times: [
                        "TUESDAY - 5 PM to 7 PM",
                        "WEDNESDAY - 5 PM to 7 PM",
                        "SATURDAY - 1 PM to 3 PM",
                    ],
                },
                {
                    name: "Geometry",
                    times: [
                        "MONDAY - 5 PM to 7 PM",
                        "SATURDAY - 11 AM to 1 PM",
                        "SUNDAY - 1 PM to 3 PM",
                    ],
                },
                {
                    name: "Algebra 2",
                    times: [
                        "TUESDAY - 7 PM to 9 PM",
                        "THURSDAY - 7 PM to 9 PM",
                        "SATURDAY - 1 PM to 3 PM",
                    ],
                },
                {
                    name: "Pre Calc/Math Analysis",
                    times: [
                        "MONDAY - 7 PM to 9 PM",
                        "TUESDAY - 7 PM to 9 PM",
                        "THURSDAY - 7 PM to 9 PM",
                    ],
                },
            ],
        },
        "test-prep": {
            title: "Test Preparation",
            subjects: [
                {
                    name: "SAT/ACT",
                    times: [
                        "MONDAY - 7 PM to 9 PM",
                        "WEDNESDAY - 5 PM to 7 PM",
                        "SATURDAY - 9 AM to 11 AM & 2 PM to 4 PM",
                    ],
                },
                {
                    name: "TJ/AOS/AET Prep",
                    times: ["TUESDAY - 5 PM to 7 PM", "SUNDAY - 11 AM to 1 PM"],
                },
            ],
        },
        advanced: {
            title: "Advanced & AP Courses",
            subjects: [
                {
                    name: "AP Calc AB/BC",
                    times: [
                        "WEDNESDAY - 7 PM to 9 PM",
                        "SATURDAY - 1 PM to 3 PM",
                    ],
                },
                {
                    name: "Chemistry/AP Chemistry",
                    times: [
                        "MONDAY - 7 PM to 9 PM",
                        "THURSDAY - 7 PM to 9 PM",
                        "SATURDAY - 11 AM to 1 PM",
                    ],
                },
                {
                    name: "Biology/AP Biology",
                    times: [
                        "TUESDAY - 8 PM to 10 PM",
                        "WEDNESDAY - 8 PM to 10 PM",
                        "SATURDAY - 11 AM to 1 PM",
                    ],
                },
                {
                    name: "Physics/AP Physics",
                    times: [
                        "TUESDAY - 7 PM to 9 PM",
                        "THURSDAY - 7 PM to 9 PM",
                        "SATURDAY - 11 AM to 1 PM",
                    ],
                },
            ],
        },
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pb-4 h-[400px] flex items-center justify-start overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-in zoom-in-105 duration-300"
                    style={{
                        backgroundImage: 'url("/22.png")',
                    }}
                />
                <div className="absolute inset-0 bg-black/70 animate-in fade-in duration-300" />
                <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto mt-22">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 animate-in slide-in-from-top-8 duration-300">
                        Explore Our Learning Environment
                    </h1>
                    <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed max-w-4xl animate-in slide-in-from-top-8 duration-300">
                        Discover our comprehensive programs, flexible schedules,
                        and competitive pricing designed to help every student
                        achieve academic excellence.
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-4">
                <p className="text-sm text-gray-600 animate-in fade-in duration-300">
                    Home &gt; More Information
                </p>
            </div>

            {/* Gallery Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12 animate-in slide-in-from-bottom-4 duration-300">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Our Learning Environment
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Step into our vibrant learning spaces where academic
                        excellence meets innovation. Our classrooms foster
                        collaboration, critical thinking, and personal growth,
                        creating an atmosphere where every student can thrive
                        and reach their full potential.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Image Carousel */}
                    <div className="relative rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                        <div className="relative h-[500px]">
                            <Image
                                src={
                                    galleryImages[currentImageIndex].src ||
                                    "/placeholder.svg"
                                }
                                alt="Gallery Image"
                                fill
                                className="object-cover transition-all duration-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronLeft className="h-6 w-6 text-white" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronRight className="h-6 w-6 text-white" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 right-6 flex space-x-2">
                            {galleryImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentImageIndex(index);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentImageIndex
                                            ? "bg-white"
                                            : "bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-1 gap-8 mb-12">
                        <div className="bg-[#f1c338] rounded-lg p-8 text-center flex flex-col justify-center hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-left-8 duration-300 shadow-lg">
                            <div className="text-4xl font-bold text-gray-800 mb-2 animate-pulse">
                                500+
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Students Served
                            </h3>
                            <p className="text-gray-700">
                                Empowering students across all academic levels
                            </p>
                        </div>
                        <div className="bg-[#0f3963] rounded-lg p-8 text-center flex flex-col justify-center hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-right-8 duration-300 shadow-lg">
                            <div className="text-4xl font-bold text-white mb-2 animate-pulse">
                                80%
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Success Rate
                            </h3>
                            <p className="text-gray-200">
                                Students achieving their academic goals
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-in slide-in-from-top-8 duration-300">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Class Schedules
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Flexible scheduling options designed to fit your
                            busy lifestyle. Multiple time slots available for
                            each subject.
                        </p>
                    </div>

                    {/* Summer Schedule Notice */}
                    <div className="mb-8 text-center animate-in slide-in-from-bottom-4 duration-300">
                        <div className="bg-[#f1c338] w-full  rounded-lg p-6 inline-block shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Summer Schedule Available
                            </h3>
                            <Button
                                asChild
                                className="bg-[#0f3963] hover:bg-[#0f3963]/90 text-white px-6 py-2 transform transition-all duration-300 hover:scale-105"
                            >
                                <Link href="/summer-courses">
                                    <ComingSoonFeature>
                                        View Summer Courses
                                    </ComingSoonFeature>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Schedule Categories */}
                    <div className="grid grid-cols-1 gap-8">
                        {Object.entries(scheduleData).map(
                            ([key, category], index) => {
                                const isExpanded = expandedPanels[key];
                                return (
                                    <div
                                        key={key}
                                        className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all  hover:shadow-xl animate-in slide-in-from-left-8 duration-300`}
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                        }}
                                    >
                                        <button
                                            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                                            onClick={() => togglePanel(key)}
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="bg-[#f1c338] p-3 rounded-full">
                                                    {key === "elementary" && (
                                                        <BookOpen className="h-6 w-6 text-gray-800" />
                                                    )}
                                                    {key === "middle-high" && (
                                                        <Calculator className="h-6 w-6 text-gray-800" />
                                                    )}
                                                    {key === "test-prep" && (
                                                        <Award className="h-6 w-6 text-gray-800" />
                                                    )}
                                                    {key === "advanced" && (
                                                        <GraduationCap className="h-6 w-6 text-gray-800" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-800">
                                                        {category.title}
                                                    </h3>
                                                    <p className="text-gray-600">
                                                        {
                                                            category.subjects
                                                                .length
                                                        }{" "}
                                                        subjects available
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="text-gray-500 transform transition-transform duration-200"
                                                style={{
                                                    transform: isExpanded
                                                        ? "rotate(180deg)"
                                                        : "rotate(0deg)",
                                                }}
                                            >
                                                <Plus size={24} />
                                            </div>
                                        </button>

                                        {isExpanded && (
                                            <div className="border-t border-gray-200 animate-in slide-in-from-top-4 duration-300">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                                                    {category.subjects.map(
                                                        (subject, subIndex) => (
                                                            <div
                                                                key={subIndex}
                                                                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 animate-in fade-in "
                                                                style={{
                                                                    animationDelay: `${
                                                                        subIndex *
                                                                        50
                                                                    }ms`,
                                                                }}
                                                            >
                                                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                                                    <Clock className="h-4 w-4 mr-2 text-[#0f3963]" />
                                                                    {
                                                                        subject.name
                                                                    }
                                                                </h4>
                                                                <div className="space-y-1">
                                                                    {subject.times.map(
                                                                        (
                                                                            time,
                                                                            timeIndex
                                                                        ) => (
                                                                            <p
                                                                                key={
                                                                                    timeIndex
                                                                                }
                                                                                className="text-sm text-gray-600 ml-6"
                                                                            >
                                                                                {
                                                                                    time
                                                                                }
                                                                            </p>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                        )}
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-600 animate-in fade-in duration-300">
                        <p className="italic">
                            * Schedule subject to change. Multiple teachers
                            available for different time slots. Contact our
                            office for additional scheduling options.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-in slide-in-from-top-8 duration-300">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Flexible Pricing Options
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choose from our comprehensive pricing plans designed
                            to meet your educational needs and budget.
                        </p>
                    </div>

                    {/* Pricing Notes */}
                    <div className="mb-12 bg-[#0f3963] rounded-lg p-6 text-white animate-in slide-in-from-bottom-4 duration-300">
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <p>
                                    <Users className="h-5 w-5 mt-0.5 text-[#f1c338] inline-flex mr-2" />
                                    <strong>Class Sizes:</strong> 12-15 students
                                    for Test Prep, 3-5 students for Academic &
                                    Subject Tutoring
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <p>
                                    <Calendar className="h-5 w-5 mt-0.5 text-[#f1c338] inline-flex mr-2" />
                                    <strong>Minimum Commitment:</strong> 6 Hours
                                    Per Month with month-to-month advanced
                                    payments
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <p>
                                    <CheckCircle className="h-5 w-5 mt-0.5 text-[#f1c338] inline-flex mr-2" />
                                    <strong>Pro-rated pricing</strong> available
                                    for mid-month starts
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Elementary School Classes */}
                        <Card className="border-2 border-gray-200 hover:border-teal-500 hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-left-8 duration-300 group">
        <CardHeader className="text-center pb-4 bg-gradient-to-br from-teal-50 to-teal-25 group-hover:from-teal-100 group-hover:to-teal-50 transition-all duration-300">
          <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">Elementary School Classes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center p-6">
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-teal-50 transition-colors duration-300">
              <div className="text-2xl font-bold text-teal-600 mb-1">$275</div>
              <div className="text-sm text-gray-600">per month</div>
              <div className="text-sm text-gray-700 mt-2">1 class per week (4 classes/6hrs Per Month)</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-teal-50 transition-colors duration-300">
              <div className="text-2xl font-bold text-teal-600 mb-1">$550</div>
              <div className="text-sm text-gray-600">per month</div>
              <div className="text-sm text-gray-700 mt-2">2 classes per week (8 classes/12hrs Per Month)</div>
            </div>
            <div className="bg-teal-100 rounded-lg p-4 border-2 border-teal-500 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Star className="h-5 w-5 text-teal-500 fill-current" />
              </div>
              <div className="text-2xl font-bold text-teal-600 mb-1">$850</div>
              <div className="text-sm text-gray-600">per month</div>
              <div className="text-sm text-gray-700 mt-2 font-semibold">
                3 classes per week (12 classes/Unlimited hours per month)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Year-Long Test Prep */}
      <Card className="border-2 border-gray-200 hover:border-indigo-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-right-8 group">
        <CardHeader className="text-center pb-4 bg-gradient-to-br from-indigo-50 to-indigo-25 group-hover:from-indigo-100 group-hover:to-indigo-50 transition-all duration-300">
          <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Award className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">
            Year-Long Test Prep
            <br />
            <span className="text-lg">SAT and TJ/ACL (AOS/AET)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center p-6">
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-indigo-50 transition-colors duration-300">
              <div className="text-2xl font-bold text-indigo-600 mb-1">$275</div>
              <div className="text-sm text-gray-600">per month [School Year]</div>
              <div className="text-sm text-gray-700 mt-2">1 class per week (4 classes/8hrs PM)</div>
            </div>
            <div className="bg-indigo-100 rounded-lg p-4 border-2 border-indigo-600 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Star className="h-5 w-5 text-indigo-600 fill-current" />
              </div>
              <div className="text-2xl font-bold text-indigo-600 mb-1">$550</div>
              <div className="text-sm text-gray-600">per month [Summer]</div>
              <div className="text-sm text-gray-700 mt-2 font-semibold">2 classes per week (8 classes/16hrs PM)</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Academic & Subject Tutoring */}
      <Card className="border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-left-8 duration-300 group">
        <CardHeader className="text-center pb-4 bg-gradient-to-br from-emerald-50 to-emerald-25 group-hover:from-emerald-100 group-hover:to-emerald-50 transition-all duration-300">
          <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">
            Academic & Subject Tutoring
            <br />
            <span className="text-lg">High/Middle Schoolers</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center p-6">
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-emerald-50 transition-colors duration-300">
              <div className="text-2xl font-bold text-emerald-600 mb-1">$275</div>
              <div className="text-sm text-gray-600">per month</div>
              <div className="text-sm text-gray-700 mt-2">1 class/week (4 [90 min] classes/6hrs/month)</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-emerald-50 transition-colors duration-300">
              <div className="text-2xl font-bold text-emerald-600 mb-1">$550</div>
              <div className="text-sm text-gray-600">per month</div>
              <div className="text-sm text-gray-700 mt-2">2 classes/week (8 [90 min] classes/12hrs/month)</div>
            </div>
            <div className="bg-emerald-100 rounded-lg p-4 border-2 border-emerald-500 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Star className="h-5 w-5 text-emerald-500 fill-current" />
              </div>
              <div className="text-2xl font-bold text-emerald-600 mb-1">$875</div>
              <div className="text-sm text-gray-600">per month</div>
              <div className="text-sm text-gray-700 mt-2 font-semibold">3 classes/week (Unlimited hrs/month)</div>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="text-lg font-semibold text-gray-800">General Rate: $45/hour</div>
          </div>
        </CardContent>
      </Card>

      {/* SAT Prep Course */}
      <Card className="border-2 border-gray-200 hover:border-violet-600 hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-right-8 duration-300 group">
        <CardHeader className="text-center pb-4 bg-gradient-to-br from-violet-50 to-violet-25 group-hover:from-violet-100 group-hover:to-violet-50 transition-all duration-300">
          <div className="bg-violet-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">SAT Prep Course</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center p-6">
          <div className="space-y-4">
            <div className="bg-violet-100 rounded-lg p-4 border-2 border-violet-600 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Star className="h-5 w-5 text-violet-600 fill-current" />
              </div>
              <div className="text-2xl font-bold text-violet-600 mb-1">$4,199</div>
              <div className="text-sm text-gray-600">4 months—Summer [June to September]</div>
              <div className="text-sm text-gray-700 mt-2 font-semibold">Unlimited hours per month</div>
            </div>
            <div className="bg-violet-100 rounded-lg p-4 border-2 border-violet-600 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Star className="h-5 w-5 text-violet-600 fill-current" />
              </div>
              <div className="text-2xl font-bold text-violet-600 mb-1">$4,499</div>
              <div className="text-sm text-gray-600">6 months—Fall [September to February]</div>
              <div className="text-sm text-gray-700 mt-2 font-semibold">Unlimited hours per month</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-violet-50 transition-colors duration-300">
              <div className="text-2xl font-bold text-violet-600 mb-1">$3,499</div>
              <div className="text-sm text-gray-600">6 months—Fall [September to February]</div>
              <div className="text-sm text-gray-700 mt-2">Limited: 2 (2-hour) classes/week</div>
            </div>
          </div>
        </CardContent>
      </Card>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-12 text-center animate-in slide-in-from-bottom-8 duration-300">
                        <div className="bg-gradient-to-r from-[#f1c338] to-[#0f3963] rounded-lg p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">
                                Need a Custom Plan?
                            </h3>
                            <p className="text-lg mb-6">
                                Contact our office for one-on-one tutoring
                                options and personalized scheduling.
                            </p>
                            <Button
                                asChild
                                className="bg-white text-[#0f3963] hover:bg-gray-100 px-8 py-3 font-semibold transform transition-all duration-300 hover:scale-105"
                            >
                                <Link href="/contact-us">Contact Us Today</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
