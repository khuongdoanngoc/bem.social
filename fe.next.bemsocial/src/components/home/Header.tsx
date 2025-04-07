'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function Header() {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center"
                >
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        BemSocial
                    </div>
                </motion.div>

                <motion.nav
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:flex space-x-8"
                >
                    <a
                        href="#"
                        className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                        Home
                    </a>
                    <a
                        href="#features"
                        className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                        Features
                    </a>
                    <a
                        href="#technology"
                        className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                        Technology
                    </a>
                    <a
                        href="#services"
                        className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                        Services
                    </a>
                </motion.nav>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex space-x-4"
                >
                    <Link href="/login">
                        <Button>Log In</Button>
                    </Link>
                    <Link href="/register" className="hidden sm:block">
                        <Button>Sign Up</Button>
                    </Link>
                </motion.div>
            </div>
        </header>
    );
}
