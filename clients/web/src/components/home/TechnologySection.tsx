'use client';

import { motion } from 'framer-motion';

export default function TechnologySection() {
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <section id="technology" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Our Technology Stack
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Built with modern technologies to provide a scalable and robust platform.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <motion.div
                        variants={itemVariant}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            Next.js React
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Frontend</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariant}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            NestJS
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Microservices</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariant}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            PostgreSQL
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Database with Prisma
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariant}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            Tyk/Nginx
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">API Gateway</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariant}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            Redis
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Pub/Sub</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariant}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            TypeScript
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Type Safety</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariant}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            JWT
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Authentication</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariant}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            Tailwind CSS
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Styling</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
