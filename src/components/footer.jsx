import Link from "next/link";
import {
    Twitter,
    Facebook,
    Instagram,
    Linkedin,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0f3963] text-gray-300 font-inter">
            {/* Top Section */}
            <div className="max-w-full mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
                {/* Logo + About */}
                <div className="mb-6">
                    <div className="flex items-start gap-2 mb-6">
                        <Link href="/" passHref>
                            <img
                                src="logo2.webp"
                                alt="Coherence Learning"
                                className="w-[250px] h-auto cursor-pointer -mt-5 -ml-2 filter brightness-0 invert hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed max-w-sm font-medium">
                        We specialize in PSAT preparation and SAT score
                        improvement, with over 90% of our students qualifying
                        for enrollment in the Academy of Science and Academy of
                        Engineering and Technology that Loudoun County offers.
                    </p>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-bold mb-6 text-[#6a9bd1] font-poppins tracking-wide">
                        SOCIALS
                        <span className="block w-12 h-0.5 bg-[#6a9bd1] mt-2 rounded-full"></span>
                    </h3>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="https://www.facebook.com/CoherenceLearningAshburn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#6a9bd1] flex items-center gap-3 transition-all duration-300 hover:translate-x-1 group"
                            >
                                <div className="p-2 rounded-lg bg-[#1a4b7c] group-hover:bg-[#6a9bd1] group-hover:text-[#0f3963] transition-all duration-300">
                                    <Facebook size={16} />
                                </div>
                                <span className="font-medium">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/CoherenceL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#6a9bd1] flex items-center gap-3 transition-all duration-300 hover:translate-x-1 group"
                            >
                                <div className="p-2 rounded-lg bg-[#1a4b7c] group-hover:bg-[#6a9bd1] group-hover:text-[#0f3963] transition-all duration-300">
                                    <Twitter size={16} />
                                </div>
                                <span className="font-medium">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/coherence.learning/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#6a9bd1] flex items-center gap-3 transition-all duration-300 hover:translate-x-1 group"
                            >
                                <div className="p-2 rounded-lg bg-[#1a4b7c] group-hover:bg-[#6a9bd1] group-hover:text-[#0f3963] transition-all duration-300">
                                    <Instagram size={16} />
                                </div>
                                <span className="font-medium">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/coherencelearningservices.llc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#6a9bd1] flex items-center gap-3 transition-all duration-300 hover:translate-x-1 group"
                            >
                                <div className="p-2 rounded-lg bg-[#1a4b7c] group-hover:bg-[#6a9bd1] group-hover:text-[#0f3963] transition-all duration-300">
                                    <Linkedin size={16} />
                                </div>
                                <span className="font-medium">LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-6 font-poppins text-[#6a9bd1] tracking-wide">
                        QUICK LINKS
                        <span className="block w-12 h-0.5 bg-[#6a9bd1] mt-2 rounded-full"></span>
                    </h3>
                    <ul className="space-y-3 text-sm">
                        {[
                            ["Home", "/"],
                            ["About Us", "/about"],
                            ["Join our Team", "/join-our-team"],
                            [
                                "Reviews",
                                "https://www.google.com/search?q=coherencelearning&rlz=1C1VDKB_enIN1054IN1054&oq=coherencelearning&aqs=chrome..69i57j69i60l4.5238j0j1&sourceid=chrome&ie=UTF-8#lrd=0x89b66643d2fe7561:0x20f3f4b8ef8bf186,1,,,,",
                            ],
                            [
                                "Write A Review",
                                "https://www.google.com/search?q=coherencelearning&rlz=1C1VDKB_enIN1054IN1054&oq=coherencelearning&aqs=chrome..69i57j69i60l4.5238j0j1&sourceid=chrome&ie=UTF-8#lrd=0x89b66643d2fe7561:0x20f3f4b8ef8bf186,3,,,,",
                            ],
                            ["Contact Us", "/contact-us"],
                        ].map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item[1]}
                                    className="hover:text-[#6a9bd1] transition-all duration-300 hover:translate-x-1 flex items-center gap-2 font-medium group"
                                >
                                    <span className="text-[#6a9bd1] group-hover:text-[#6a9bd1] transition-colors duration-300">
                                        ▸
                                    </span>
                                    {item[0]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-bold mb-6 text-[#6a9bd1] font-poppins tracking-wide">
                        CONTACT INFO
                        <span className="block w-12 h-0.5 bg-[#6a9bd1] mt-2 rounded-full"></span>
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3 hover:text-[#6a9bd1] transition-colors duration-300">
                            <div className="p-2 rounded-lg bg-[#1a4b7c]">
                                <Phone size={14} />
                            </div>
                            <span className="font-medium">+1 703 729 3599</span>
                        </li>
                        <li className="flex items-center gap-3 hover:text-[#6a9bd1] transition-colors duration-300">
                            <div className="p-2 rounded-lg bg-[#1a4b7c]">
                                <Phone size={14} />
                            </div>
                            <span className="font-medium">+1 703 401 8779</span>
                        </li>
                        <li className="flex items-center gap-3 hover:text-[#6a9bd1] transition-colors duration-300">
                            <div className="p-2 rounded-lg bg-[#1a4b7c]">
                                <Mail size={14} />
                            </div>
                            <span className="font-medium">
                                info@coherencelearning.us
                            </span>
                        </li>
                        <li className="flex items-start gap-3 hover:text-[#6a9bd1] transition-colors duration-300">
                            <div className="p-2 rounded-lg bg-[#1a4b7c] mt-0.5">
                                <MapPin size={14} />
                            </div>
                            <span className="font-medium leading-relaxed">
                                21001 Sycolin Road. Unit 200.
                                <br />
                                Ashburn, VA 20147
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#1a4b7c] border-t border-[#0f3963]/30 py-6 px-6 text-sm text-gray-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-medium">
                        © 2025 Coherence Learning. All rights reserved. |
                        Designed by{" "}
                        <span className="text-[#6a9bd1] hover:text-[#8ab5e1] transition-colors duration-300">
                            <a
                                href="https://www.holbox.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Holbox
                            </a>
                        </span>
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href="#"
                            className="hover:text-[#6a9bd1] transition-colors duration-300 font-medium"
                        >
                            Terms & Conditions
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#6a9bd1] transition-colors duration-300 font-medium"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#6a9bd1] transition-colors duration-300 font-medium"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
