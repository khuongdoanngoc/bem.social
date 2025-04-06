"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";

interface HeroSectionProps {
    scrollToFeatures: () => void;
}

export default function HeroSection({ scrollToFeatures }: HeroSectionProps) {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="pt-28 pb-16 px-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Connect & Share on <span className="text-yellow-300">BemSocial</span>
                    </motion.h1>
                    <motion.p 
                        className="text-xl mb-8 text-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        A modern social platform built on microservices architecture, 
                        designed to provide a scalable, robust, and engaging experience.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <Link href="/register">
                            <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
                                Get Started
                            </Button>
                        </Link>
                        <button 
                            onClick={scrollToFeatures}
                            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors w-full sm:w-auto"
                        >
                            Learn More
                        </button>
                    </motion.div>
                </div>
                <motion.div 
                    className="md:w-1/2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="bg-white rounded-lg shadow-2xl p-2 transform rotate-3">
                        <div className="bg-gray-200 rounded h-64 flex items-center justify-center">
                            <p className="text-gray-500 text-lg">Social Platform UI Preview</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
} 