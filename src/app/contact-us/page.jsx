"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock, Users, Award } from "lucide-react";
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
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
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
                        </CardContent>
                    </Card>

                    {/* Email */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
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
                        </CardContent>
                    </Card>

                    {/* Phone */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
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
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Contact Form and Map Section */}
            <div className="bg-[#f1c338]  py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Send Us a Message
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to
                                you within 24 hours to discuss how we can help
                                your child succeed.
                            </p>

                            <Card>
                                <CardContent className="p-6">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name *"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className={`h-12 ${
                                                        errors.name
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                                {errors.name && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your Email *"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={`h-12 ${
                                                        errors.email
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                                {errors.email && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <Input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Your Phone *"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className={`h-12 ${
                                                        errors.phone
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                                {errors.phone && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {errors.phone}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <Input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject *"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    className={`h-12 ${
                                                        errors.subject
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                                {errors.subject && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {errors.subject}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <Textarea
                                                name="additionalInfo"
                                                placeholder="Tell us about your child's academic goals and how we can help..."
                                                value={formData.additionalInfo}
                                                onChange={handleInputChange}
                                                rows={6}
                                                className="resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-[#0f3963] hover:bg-[#0f3963]/95 text-white font-semibold px-8 py-3 w-full transform transition-all duration-300 hover:scale-105"
                                        >
                                            {isSubmitting
                                                ? "SENDING MESSAGE..."
                                                : "SEND MESSAGE"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
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

                            {/* Additional Information Cards */}
                            <div className="space-y-4">
                                <Card className="bg-gray-50">
                                    <CardContent className="p-4">
                                        <div className="flex items-center space-x-3">
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
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
