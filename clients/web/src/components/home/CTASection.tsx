'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function CTASection() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
        >
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join BemSocial?</h2>
                <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                    Sign up today and experience the next generation of social networking.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href="/register">
                        <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg">
                            Create Your Account
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}
