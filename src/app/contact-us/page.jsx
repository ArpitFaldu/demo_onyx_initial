"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        additionalInfo: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validateForm()) {
            console.log("Contact form submitted successfully!");
            console.log("Form Data:", formData);

            alert("Message sent successfully! We'll get back to you soon.");

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                additionalInfo: "",
            });
        }

        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section - Matching About Us Design */}
            <section className="relative pb-4 h-[400px] flex items-center justify-start overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/images/methodology-3.png")',
                        filter: "blur(2px)",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Content */}
                <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto mt-22">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                        Contact Us
                    </h1>
                    <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed max-w-4xl">
                        Ready to unlock your child's potential? Get in touch
                        with our experienced team and discover how we can help
                        your student achieve their academic goals.
                    </p>
                    <div className="flex flex-row gap-3 sm:gap-4">
                        <Button
                            asChild
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105"
                        >
                            <Link href="/sign-up">GET STARTED</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 w-auto transform transition-all duration-300 hover:scale-105"
                        >
                            <Link href="/about-us">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-4">
                <p className="text-sm text-gray-600">Home &gt; Contact Us</p>
            </div>

            {/* Contact Information Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We're here to answer your questions and help you get
                        started on your child's path to academic success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Location */}
                    <div className="text-center hover:shadow-xl rounded-lg bg-gray-200 transition-shadow duration-300">
                        <div className="p-6">
                            <div className="flex justify-center mb-4">
                                <div className="bg-blue-100 p-4 rounded-full">
                                    <MapPin className="h-8 w-8 text-blue-600" />
                                </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-800">
                                Our Location
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                21001 Sycolin Road, Unit 200,
                                <br />
                                Ashburn VA 20147
                            </p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="text-center hover:shadow-xl rounded-lg bg-gray-200 transition-shadow duration-300">
                        <div className="p-6">
                            <div className="flex justify-center mb-4">
                                <div className="bg-yellow-100 p-4 rounded-full">
                                    <Mail className="h-8 w-8 text-yellow-600" />
                                </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-800">
                                Email Us
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <a
                                    href="mailto:info@coherencelearning.us"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    info@coherencelearning.us
                                </a>
                                <br />
                                <a
                                    href="mailto:support@coherencelearning.us"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    support@coherencelearning.us
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="text-center hover:shadow-xl rounded-lg bg-gray-200 transition-shadow duration-300">
                        <div className="p-6">
                            <div className="flex justify-center mb-4">
                                <div className="bg-green-100 p-4 rounded-full">
                                    <Phone className="h-8 w-8 text-green-600" />
                                </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-800">
                                Call Us
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <a
                                    href="tel:+17037293599"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    Landline: +1 703 729 3599
                                </a>
                                <br />
                                <a
                                    href="tel:+17034018779"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    Cell: +1 703 401 8779
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form and Map Section */}
            <div className="bg-[#f1c338]  py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="relative">
                            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl">
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
                                        <Mail className="h-8 w-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-3">
                                        Send Us a Message
                                    </h2>
                                    <p className="text-gray-600">
                                        Fill out the form below and we'll get
                                        back to you within 24 hours to discuss
                                        how we can help your child succeed.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg
                                                    className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                            </div>
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name *"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={`h-14 pl-10 pr-4 rounded-xl shadow-sm transition-all duration-300 focus:shadow-lg focus:scale-105 ${
                                                    errors.name
                                                        ? "border-red-500 bg-red-50"
                                                        : "border-gray-200 focus:border-blue-500"
                                                }`}
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-2 flex items-center">
                                                    <svg
                                                        className="h-4 w-4 mr-1"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                            </div>
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email *"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`h-14 pl-10 pr-4 rounded-xl shadow-sm transition-all duration-300 focus:shadow-lg focus:scale-105 ${
                                                    errors.email
                                                        ? "border-red-500 bg-red-50"
                                                        : "border-gray-200 focus:border-blue-500"
                                                }`}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-2 flex items-center">
                                                    <svg
                                                        className="h-4 w-4 mr-1"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                            </div>
                                            <Input
                                                type="tel"
                                                name="phone"
                                                placeholder="Your Phone *"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className={`h-14 pl-10 pr-4 rounded-xl shadow-sm transition-all duration-300 focus:shadow-lg focus:scale-105 ${
                                                    errors.phone
                                                        ? "border-red-500 bg-red-50"
                                                        : "border-gray-200 focus:border-blue-500"
                                                }`}
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-2 flex items-center">
                                                    <svg
                                                        className="h-4 w-4 mr-1"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>

                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg
                                                    className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                    />
                                                </svg>
                                            </div>
                                            <Input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject *"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className={`h-14 pl-10 pr-4 rounded-xl shadow-sm transition-all duration-300 focus:shadow-lg focus:scale-105 ${
                                                    errors.subject
                                                        ? "border-red-500 bg-red-50"
                                                        : "border-gray-200 focus:border-blue-500"
                                                }`}
                                            />
                                            {errors.subject && (
                                                <p className="text-red-500 text-sm mt-2 flex items-center">
                                                    <svg
                                                        className="h-4 w-4 mr-1"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {errors.subject}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute top-4 left-0 pointer-events-none">
                                            <svg
                                                className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                />
                                            </svg>
                                        </div>
                                        <Textarea
                                            name="additionalInfo"
                                            placeholder="Tell us about your child's academic goals and how we can help..."
                                            value={formData.additionalInfo}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className="resize-none pl-10 pr-4 pt-4 rounded-xl shadow-sm transition-all duration-300 focus:shadow-lg focus:scale-105 border-gray-200 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="relative w-full h-14 bg-gradient-to-r from-[#0f3963] to-blue-700 hover:from-[#0f3963]/90 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                                        >
                                            <span className="relative z-10 flex items-center justify-center">
                                                {isSubmitting ? (
                                                    <>
                                                        <svg
                                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                            ></circle>
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            ></path>
                                                        </svg>
                                                        SENDING MESSAGE...
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg
                                                            className="mr-2 h-5 w-5 rotate-45"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                            />
                                                        </svg>
                                                        SEND MESSAGE
                                                    </>
                                                )}
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </Button>
                                    </div>
                                </form>

                                {/* Trust indicators */}
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <svg
                                                className="h-4 w-4 mr-1 text-green-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Secure & Private
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1 text-blue-500" />
                                            24hr Response
                                        </div>
                                        <div className="flex items-center">
                                            <svg
                                                className="h-4 w-4 mr-1 text-purple-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Expert Team
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map and Additional Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    Visit Our Center
                                </h2>
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg h-64 sm:h-80">
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
                                </div>
                            </div>

                            {/* Additional Information divs */}
                            <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-2xl">
                                <Clock className="h-6 w-6 text-blue-600" />
                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Office Hours
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Mon-Fri: 9:00 AM - 7:00 PM
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Sat-Sun: 10:00 AM - 4:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
