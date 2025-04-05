"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
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
        <section id="services" className="py-20 px-4 bg-white dark:bg-gray-800">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Microservices Architecture</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Our platform is built on a robust microservices architecture for scalability and resilience.
                    </p>
                </motion.div>
                
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <motion.div variants={itemVariant} className="bg-indigo-50 dark:bg-indigo-900/30 p-8 rounded-lg shadow-md border-l-4 border-indigo-500">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">User Service</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Handles authentication, authorization, user profiles, and account management with secure JWT implementation.
                        </p>
                    </motion.div>
                    
                    <motion.div variants={itemVariant} className="bg-purple-50 dark:bg-purple-900/30 p-8 rounded-lg shadow-md border-l-4 border-purple-500">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Post Service</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Manages creation, retrieval, and interaction with posts, including media handling and feed generation.
                        </p>
                    </motion.div>
                    
                    <motion.div variants={itemVariant} className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-lg shadow-md border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Comment Service</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Handles comment creation, threading, and moderation across all content types.
                        </p>
                    </motion.div>
                    
                    <motion.div variants={itemVariant} className="bg-pink-50 dark:bg-pink-900/30 p-8 rounded-lg shadow-md border-l-4 border-pink-500">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Notification Service</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Delivers real-time notifications through various channels using Redis Pub/Sub for event distribution.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 