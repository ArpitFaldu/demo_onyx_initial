import { Playfair_Display, Nunito_Sans, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll";

// Configure your chosen fonts
const headingFont = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["400", "700"],
});

const bodyFont = Lora({
    subsets: ["latin"],
    variable: "--font-global", // CSS variable name
    weight: ["400", "600"], // Include needed weights
});
export const metadata = {
    title: "Coherence Learning",
    description: "Redefining Education",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${headingFont.variable} ${bodyFont.variable}`}
        >
            <body className={`${bodyFont.className} m-0 p-0`}>
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
                <ScrollToTopButton />
            </body>
        </html>
    );
}
