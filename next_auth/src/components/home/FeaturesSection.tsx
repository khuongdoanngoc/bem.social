"use client";

import { motion } from "framer-motion";
import { RefObject } from "react";

interface FeaturesSectionProps {
    featuresRef: RefObject<HTMLDivElement | null>;
}

export default function FeaturesSection({ featuresRef }: FeaturesSectionProps) {
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <section 
            id="features" 
            ref={featuresRef}
            className="py-20 px-4 bg-white dark:bg-gray-800"
        >
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Key Features</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        BemSocial offers a rich set of features powered by our cutting-edge microservices architecture.
                    </p>
                </motion.div>
                
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <motion.div variants={itemVariant} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
                        <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">🔔</div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Real-time Notifications</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Stay updated with real-time notifications about interactions with your content.
                        </p>
                    </motion.div>
                    
                    <motion.div variants={itemVariant} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
                        <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">📝</div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Rich Content Posts</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Create engaging posts with rich media, formatting, and interactive elements.
                        </p>
                    </motion.div>
                    
                    <motion.div variants={itemVariant} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
                        <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">🔒</div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Secure Authentication</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Advanced authentication system with secure JWT implementation.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}