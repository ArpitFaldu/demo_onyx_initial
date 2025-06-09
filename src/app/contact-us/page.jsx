"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
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

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            details: ["21001 Sycolin Road, Unit 200", "Ashburn, VA 20147"],
            color: "bg-yellow-400/10 text-yellow-400",
        },
        {
            icon: Mail,
            title: "Email Us",
            details: [
                "info@coherencelearning.us",
                "support@coherencelearning.us",
            ],
            color: "bg-blue-400/10 text-blue-400",
        },
        {
            icon: Phone,
            title: "Call Us",
            details: ["Landline: +1 703 729 3599", "Cell: +1 703 401 8779"],
            color: "bg-green-400/10 text-green-400",
        },
        {
            icon: Clock,
            title: "Office Hours",
            details: [
                "Mon-Fri: 9:00 AM - 8:00 PM",
                "Sat-Sun: 10:00 AM - 6:00 PM",
            ],
            color: "bg-purple-400/10 text-purple-400",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-900 font-inter">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-80 lg:h-96"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/37.webp')",
                    backgroundBlendMode: "overlay",
                }}
            >
                <div className="absolute inset-0 bg-slate-900/60"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 font-poppins">
                            Get In{" "}
                            <span className="text-yellow-400">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                            Ready to start your academic journey? We're here to
                            help you succeed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/sign-up">
                                <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                                    Sign Up Now
                                </button>
                            </Link>
                            <Link href="#contact-form">
                                <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                                    Send Message
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-16 lg:py-24 bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4 font-semibold px-3 py-1 rounded-full text-sm">
                            Contact Information
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-poppins">
                            Multiple Ways to{" "}
                            <span className="text-yellow-400">Connect</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Choose the most convenient way to reach out to our
                            team.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-slate-700 rounded-2xl p-6 border border-slate-600 hover:border-yellow-400/50 transition-all duration-300 text-center h-full">
                                    <div className="flex justify-center mb-4">
                                        <div
                                            className={`p-4 rounded-xl ${info.color} group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <info.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg text-white mb-3">
                                        {info.title}
                                    </h3>
                                    <div className="space-y-1">
                                        {info.details.map((detail, idx) => (
                                            <p
                                                key={idx}
                                                className="text-gray-300 text-sm"
                                            >
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form and Map Section */}
            <section id="contact-form" className="py-16 lg:py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
                                        Send Us a Message
                                    </h2>
                                    <p className="text-gray-300">
                                        Fill out the form below and we'll get
                                        back to you within 24 hours.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={`w-full h-12 px-4 bg-slate-700 border ${
                                                    errors.name
                                                        ? "border-red-500"
                                                        : "border-slate-600"
                                                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
                                            />
                                            {errors.name && (
                                                <p className="text-red-400 text-sm mt-1">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full h-12 px-4 bg-slate-700 border ${
                                                    errors.email
                                                        ? "border-red-500"
                                                        : "border-slate-600"
                                                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
                                            />
                                            {errors.email && (
                                                <p className="text-red-400 text-sm mt-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Your Phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className={`w-full h-12 px-4 bg-slate-700 border ${
                                                    errors.phone
                                                        ? "border-red-500"
                                                        : "border-slate-600"
                                                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
                                            />
                                            {errors.phone && (
                                                <p className="text-red-400 text-sm mt-1">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className={`w-full h-12 px-4 bg-slate-700 border ${
                                                    errors.subject
                                                        ? "border-red-500"
                                                        : "border-slate-600"
                                                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300`}
                                            />
                                            {errors.subject && (
                                                <p className="text-red-400 text-sm mt-1">
                                                    {errors.subject}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <textarea
                                            name="additionalInfo"
                                            placeholder="Tell us more about how we can help you..."
                                            value={formData.additionalInfo}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-400/50 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                                                SENDING...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4" />
                                                SEND MESSAGE
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Map Section */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 h-full">
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
                                        Find Us
                                    </h2>
                                    <p className="text-gray-300">
                                        Visit our modern learning center in the
                                        heart of Ashburn, Virginia.
                                    </p>
                                </div>

                                <div className="bg-slate-700 rounded-xl overflow-hidden h-64 lg:h-80 border border-slate-600">
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

                                <div className="mt-6 p-4 bg-slate-700 rounded-xl border border-slate-600">
                                    <div className="flex items-center gap-3 mb-2">
                                        <MapPin className="h-5 w-5 text-yellow-400" />
                                        <span className="font-semibold text-white">
                                            Directions
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        Easily accessible from Route 7 and the
                                        Dulles Toll Road. Ample parking
                                        available.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Quick Links */}
            <section className="py-16 bg-slate-800 border-t border-slate-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-poppins">
                            Have Questions?
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg">
                            Check out our frequently asked questions or schedule
                            a consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/faq"
                                className="inline-flex items-center justify-center border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                            >
                                View FAQ
                            </Link>
                            <Link
                                href="/schedule"
                                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                                Schedule Consultation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
