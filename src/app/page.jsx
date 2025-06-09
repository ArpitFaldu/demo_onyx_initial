import ImageCarousel from "@/components/home/ImageCarousel";
import ProgramsShowcase from "@/components/home/ProgramsShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SubjectTutoring from "@/components/home/SubjectTutoring";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <ImageCarousel />
            </section>
            <ProgramsShowcase />
            <WhyChooseUs />
            <SubjectTutoring />
            <TestimonialsSection />
        </div>
    );
}
