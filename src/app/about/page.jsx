"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Link from "next/link";

// Testimonial data
const testimonials = [
    {
        name: "Saamyuq Kommuri",
        platform: "Google",
        rating: 5,
        text: "Personalized education that works to teach you the methods to succeed. There are flexible schedules to best accommodate your needs.",
        avatar: "/images/google.webp",
    },
    {
        name: "Srilakshmi Ikkurtthy",
        platform: "Facebook",
        rating: 5,
        text: "Aman is excellent tutor and he make sure kids understand the subject thoroughly and he is very patient with them!",
        avatar: "/images/facebook.webp",
    },
    {
        name: "Mackenzie Gleystein",
        platform: "Google",
        rating: 5,
        text: "Does a fantastic job thoroughly explaining topics and making sure the student fully comprehends the material. Terrific!",
        avatar: "/images/google.webp",
    },
    {
        name: "Zara Nasir",
        platform: "Facebook",
        rating: 5,
        text: "Makes you a better student all around, really awesome and you learn new ways to approach problems 😃",
        avatar: "/images/facebook.webp",
    },
];

export default function AboutUsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Similar to OurMethodology but for About Us */}
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
                <div className="absolute inset-0 bg-black/80" />

                {/* Content */}
                <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto mt-22">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                        About Coherence Learning
                    </h1>
                    <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed max-w-4xl">
                        Empowering students with personalized education that
                        goes beyond traditional teaching methods. We understand
                        that every student learns differently and deserves
                        individual attention.
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
                            <Link href="/contact-us">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-4">
                <p className="text-sm text-gray-600">Home &gt; About Us</p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Who We Are Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Who We Are
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We're not your typical tutoring center. At Coherence
                            Learning, we believe every student has unique
                            potential waiting to be unlocked. That's why we've
                            moved away from the "one-size-fits-all" approach
                            that leaves so many students behind.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our small class sizes and personalized teaching
                            methods ensure your child gets the individual
                            attention they deserve. We don't just teach to the
                            test – we build lasting skills that help students
                            excel in all areas of their academic journey.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Results speak for themselves:</strong> Over
                            90% of our students qualify for Loudoun County's
                            prestigious Academy of Science and Academy of
                            Engineering programs. But more importantly, they
                            gain confidence, critical thinking skills, and a
                            love for learning.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/images/about-1.webp"
                            alt="Teacher with students in classroom"
                            className="rounded-lg shadow-lg max-w-full h-auto transform transition-all duration-300 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Our Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                        <img
                            src="/images/about-2.webp"
                            alt="Team collaboration - hands together"
                            className="rounded-lg shadow-lg max-w-full h-auto transform transition-all duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our Promise to You
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>
                                Every child deserves to reach their dreams.
                            </strong>{" "}
                            Whether your student needs to improve their SAT
                            score by 100 points or 400 points, we meet them
                            exactly where they are and guide them to where they
                            want to be.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We offer flexible scheduling that works with your
                            family's busy life. From elementary through high
                            school, our experienced teachers help students
                            master concepts that might be rushed through in
                            regular classrooms.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With over 20 years of combined teaching experience,
                            our team doesn't just prepare students for tests –
                            we prepare them for life.{" "}
                            <strong>
                                Your child's success is our mission.
                            </strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Teaching Approach Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            How We Help Your Child Succeed
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our proven methodology adapts to your child's grade
                            level and learning style, ensuring they build strong
                            foundations while developing critical thinking
                            skills.
                        </p>
                    </div>

                    {/* Elementary School */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-blue-800">
                                Elementary School
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                We spark curiosity and independent thinking in
                                young minds through:
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        Exploring diverse topics to help your
                                        child form their own opinions
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        Building confidence through verbal
                                        discussions and viewpoint sharing
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        Advanced writing skills that teach clear
                                        communication and evidence-based
                                        thinking
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/images/methodology-1.png"
                                alt="Elementary school student learning"
                                className="rounded-lg shadow-lg max-w-full h-auto transform transition-all duration-300 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Middle School */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                            <img
                                src="/images/methodology-2.png"
                                alt="Middle school students in classroom"
                                className="rounded-lg shadow-lg max-w-full h-auto transform transition-all duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <h3 className="text-2xl font-bold text-blue-800">
                                Middle School
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                We develop critical thinking through advanced
                                literature and vocabulary:
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        Deep analysis of character development
                                        and author techniques
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        Vocabulary expansion through engaging
                                        visual and auditory methods
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        Mastering complex writing with proper
                                        grammar and smooth transitions
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* High School Prep */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-blue-800">
                                High School Preparation
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                We prepare students for SAT success and college
                                readiness:
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        SAT vocabulary integration into daily
                                        conversation
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        Mastery of grammar rules and reading
                                        comprehension strategies
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        Strong foundation in math, science, and
                                        problem-solving techniques
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/images/methodology-3.png"
                                alt="High school students preparing for college"
                                className="rounded-lg shadow-lg max-w-full h-auto transform transition-all duration-300 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* College Prep */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                            <img
                                src="/images/methodology-4.jpg"
                                alt="College preparation and time management"
                                className="rounded-lg shadow-lg max-w-full h-auto transform transition-all duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <h3 className="text-2xl font-bold text-blue-800">
                                College Preparation & Beyond
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                We guide students through the final steps to
                                college success:
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        Strategic course selection for GPA
                                        optimization
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        Comprehensive test preparation (SAT,
                                        ACT, AP exams)
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3 mt-1">
                                        ✓
                                    </span>
                                    <span>
                                        College application guidance and essay
                                        support
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Learn From The Best Section */}
            <div className="bg-[#f1c338] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                        Learn From The Best
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Aman A. */}
                        <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-gray-100/60">
                            <CardContent className="p-6">
                                <div className="mb-6">
                                    <img
                                        src="/images/aman.webp"
                                        alt="Aman A. - Founder/Executive Director"
                                        className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                                    />
                                </div>
                                <p className="text-sm text-blue-600 font-medium mb-2">
                                    Founder / Executive Director
                                </p>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Aman A.
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    With a passion for teaching since 2007, Aman
                                    started as a SAT Physics and Math teacher.
                                    He believes in building strong foundations
                                    that help students excel in everything they
                                    do.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Brian N. */}
                        <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-gray-100/60">
                            <CardContent className="p-6">
                                <div className="mb-6">
                                    <img
                                        src="/images/profile-placeholder.webp"
                                        alt="Brian N. - Biology Coach"
                                        className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                                    />
                                </div>
                                <p className="text-sm text-blue-600 font-medium mb-2">
                                    Biology Coach
                                </p>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Brian N.
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    An Ivy League graduate who has helped
                                    hundreds of students ace AP Biology since
                                    2005. He focuses on details that students
                                    often miss when studying independently.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Danny F. */}
                        <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-gray-100/60">
                            <CardContent className="p-6">
                                <div className="mb-6">
                                    <img
                                        src="/images/profile-placeholder.webp"
                                        alt="Danny F. - Assistant Teacher"
                                        className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                                    />
                                </div>
                                <p className="text-sm text-blue-600 font-medium mb-2">
                                    Assistant Teacher
                                </p>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Danny F.
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Our youngest team member pursuing his
                                    masters in Mechanical Engineering. Danny
                                    connects well with students and teaches
                                    advanced math and science techniques.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-[#0f3963]/95 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Don't Just Trust Us, Trust Our Students
                        </h2>
                        <p className="text-blue-200 text-lg">
                            See what our students and parents have to say about
                            their experience
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={
                                                testimonial.avatar ||
                                                "/placeholder.svg" ||
                                                "/placeholder.svg"
                                            }
                                            alt={testimonial.platform}
                                            className="w-6 h-6 mr-2"
                                        />
                                        <span className="text-sm font-medium text-gray-600">
                                            {testimonial.platform}
                                        </span>
                                    </div>

                                    <div className="flex mb-3">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                />
                                            )
                                        )}
                                    </div>

                                    <Quote className="w-6 h-6 text-blue-200 mb-2" />
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                        {testimonial.text}
                                    </p>

                                    <p className="font-semibold text-gray-800">
                                        {testimonial.name}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Review Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 transform transition-all duration-300 hover:scale-105"
                        >
                            <Link href="/reviews">View All Reviews</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 transform transition-all duration-300 hover:scale-105"
                        >
                            <Link href="/write-review">Write a Review</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
