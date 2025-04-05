"use client";

import { useRef } from "react";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TechnologySection from "@/components/home/TechnologySection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

export default function Home() {
    const featuresRef = useRef<HTMLDivElement>(null);
    
    const scrollToFeatures = () => {
        featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
            <Header />
            <HeroSection scrollToFeatures={scrollToFeatures} />
            <FeaturesSection featuresRef={featuresRef} />
            <TechnologySection />
            <ServicesSection />
            <CTASection />
            <Footer />
        </div>
    );
}
